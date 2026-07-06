import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser, visibleToUser } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const scope = searchParams.get('scope'); // "mine" | "shared" | null

    if (id) {
      const article = await prisma.article.findUnique({
        where: { id },
        include: { comments: true, owner: { select: { name: true, image: true } } }
      });
      if (!article) return NextResponse.json({ error: "Cikk nem található." }, { status: 404 });
      if (article.visibility !== 'shared' && article.ownerId && article.ownerId !== user?.id) {
        return NextResponse.json({ error: "Nincs jogosultságod ehhez a cikkhez." }, { status: 403 });
      }
      return NextResponse.json(article);
    }

    const articles = await prisma.article.findMany({
      where: visibleToUser(user?.id ?? null, scope),
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        url: true,
        platform: true,
        createdAt: true,
        publishedAt: true,
        reactions: true,
        summary: true,
        imageUrl: true,
        fullText: true,
        category: true,
        discoveryKeyword: true,
        ownerId: true,
        visibility: true,
        sharedAt: true,
        owner: { select: { name: true, image: true } },
        _count: { select: { comments: true } }
      }
    });

    return NextResponse.json(articles);
  } catch (error: any) {
    console.error("Fetch articles error:", error);
    return NextResponse.json({ error: "Hiba történt az adatok lekérésekor." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: "Hiányzó azonosító." }, { status: 400 });
    }

    const article = await prisma.article.findUnique({ where: { id } });
    if (!article) return NextResponse.json({ error: "Cikk nem található." }, { status: 404 });
    if (article.ownerId && article.ownerId !== user?.id) {
      return NextResponse.json({ error: "Csak a saját mentéseidet törölheted." }, { status: 403 });
    }

    await prisma.article.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Delete article error:", error);
    return NextResponse.json({ error: "Hiba történt a törlés során." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, category } = await req.json();
    if (!id || !category) {
      return NextResponse.json({ error: "Hiányzó azonosító vagy kategória." }, { status: 400 });
    }

    const updated = await prisma.article.update({
      where: { id },
      data: { category }
    });

    return NextResponse.json({ success: true, article: updated });
  } catch (error: any) {
    console.error("Update article category error:", error);
    return NextResponse.json({ error: "Hiba történt a kategória módosítása során." }, { status: 500 });
  }
}

// Láthatóság váltása: privát <-> közös
export async function PATCH(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: "Bejelentkezés szükséges." }, { status: 401 });

    const { id, visibility } = await req.json();
    if (!id || !['private', 'shared'].includes(visibility)) {
      return NextResponse.json({ error: "Hiányzó azonosító vagy érvénytelen láthatóság." }, { status: 400 });
    }

    const article = await prisma.article.findUnique({ where: { id } });
    if (!article) return NextResponse.json({ error: "Cikk nem található." }, { status: 404 });
    if (article.ownerId !== user.id) {
      return NextResponse.json({ error: "Csak a saját mentéseid láthatóságát módosíthatod." }, { status: 403 });
    }

    const updated = await prisma.article.update({
      where: { id },
      data: { visibility, sharedAt: visibility === 'shared' ? new Date() : null }
    });
    return NextResponse.json({ success: true, article: updated });
  } catch (error: any) {
    console.error("Update article visibility error:", error);
    return NextResponse.json({ error: "Hiba történt a láthatóság módosítása során." }, { status: 500 });
  }
}
