import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser, visibleToUser } from '@/lib/session';

// Lista (metaadatok) VAGY egy konkrét mentés (teljes results-szal) id alapján
export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const scope = searchParams.get('scope'); // "mine" | "shared" | null

    if (id) {
      const item = await prisma.listeningQuery.findUnique({
        where: { id },
        include: { owner: { select: { name: true, image: true } } }
      });
      if (!item) return NextResponse.json({ error: 'Mentés nem található.' }, { status: 404 });
      if (item.visibility !== 'shared' && item.ownerId && item.ownerId !== user?.id) {
        return NextResponse.json({ error: 'Nincs jogosultságod ehhez a mentéshez.' }, { status: 403 });
      }
      return NextResponse.json({
        ...item,
        urls: safeParse(item.urls, []),
        results: safeParse(item.results, []),
      });
    }

    // Lista – a nagy results mezőt nem küldjük vissza, csak a metaadatokat
    const items = await prisma.listeningQuery.findMany({
      where: visibleToUser(user?.id ?? null, scope),
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        platform: true,
        limit: true,
        commentCount: true,
        ownerId: true,
        visibility: true,
        sharedAt: true,
        createdAt: true,
        owner: { select: { name: true, image: true } },
      }
    });

    return NextResponse.json(items);
  } catch (error: any) {
    console.error('Saved listening GET error:', error);
    return NextResponse.json({ error: 'Hiba a mentések lekérésekor.' }, { status: 500 });
  }
}

// Új mentés
export async function POST(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const body = await req.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const platform = typeof body.platform === 'string' ? body.platform : '';
    const urls = Array.isArray(body.urls) ? body.urls : [];
    const results = Array.isArray(body.results) ? body.results : [];
    const limit = parseInt(body.limit, 10) || 50;
    const actorId = typeof body.actorId === 'string' && body.actorId ? body.actorId : null;
    const visibility = body.visibility === 'shared' ? 'shared' : 'private';

    if (!name) return NextResponse.json({ error: 'Adj nevet a mentésnek.' }, { status: 400 });
    if (!platform) return NextResponse.json({ error: 'Hiányzó platform.' }, { status: 400 });

    const saved = await prisma.listeningQuery.create({
      data: {
        name,
        platform,
        urls: JSON.stringify(urls),
        results: JSON.stringify(results),
        limit,
        actorId,
        commentCount: results.length,
        ownerId: user.id,
        visibility,
        sharedAt: visibility === 'shared' ? new Date() : null,
      }
    });

    return NextResponse.json({ success: true, id: saved.id });
  } catch (error: any) {
    console.error('Saved listening POST error:', error);
    return NextResponse.json({ error: 'Hiba a mentés során.' }, { status: 500 });
  }
}

// Láthatóság váltása (privát <-> közös)
export async function PATCH(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const { id, visibility } = await req.json();
    if (!id || !['private', 'shared'].includes(visibility)) {
      return NextResponse.json({ error: 'Hiányzó azonosító vagy érvénytelen láthatóság.' }, { status: 400 });
    }

    const item = await prisma.listeningQuery.findUnique({ where: { id } });
    if (!item) return NextResponse.json({ error: 'Mentés nem található.' }, { status: 404 });
    if (item.ownerId !== user.id) {
      return NextResponse.json({ error: 'Csak a saját mentéseid láthatóságát módosíthatod.' }, { status: 403 });
    }

    await prisma.listeningQuery.update({
      where: { id },
      data: { visibility, sharedAt: visibility === 'shared' ? new Date() : null }
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Saved listening PATCH error:', error);
    return NextResponse.json({ error: 'Hiba a módosítás során.' }, { status: 500 });
  }
}

// Törlés
export async function DELETE(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Hiányzó azonosító.' }, { status: 400 });

    const item = await prisma.listeningQuery.findUnique({ where: { id } });
    if (!item) return NextResponse.json({ error: 'Mentés nem található.' }, { status: 404 });
    if (item.ownerId && item.ownerId !== user?.id) {
      return NextResponse.json({ error: 'Csak a saját mentéseidet törölheted.' }, { status: 403 });
    }

    await prisma.listeningQuery.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Saved listening DELETE error:', error);
    return NextResponse.json({ error: 'Hiba a törlés során.' }, { status: 500 });
  }
}

function safeParse(str: string, fallback: any) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}
