import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser, visibleToUser } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const scope = searchParams.get('scope');

    const videos = await prisma.savedYoutubeVideo.findMany({
      where: visibleToUser(user?.id ?? null, scope),
      include: { owner: { select: { name: true, image: true } } },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(videos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a videók lekérdezésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: 'Bejelentkezés szükséges a mentéshez.' }, { status: 401 });

    const body = await req.json();
    const { videoId, url, title, imageUrl, transcript, originalTranscript, summary } = body;
    const visibility = body.visibility === 'shared' ? 'shared' : 'private';
    if (!videoId || !url || !transcript || !summary) {
      return NextResponse.json({ error: 'Hiányzó adatok' }, { status: 400 });
    }

    const existing = await prisma.savedYoutubeVideo.findFirst({
      where: { videoId, ownerId: user.id }
    });

    const savedVideo = existing
      ? await prisma.savedYoutubeVideo.update({
          where: { id: existing.id },
          data: { title: title || videoId, imageUrl, transcript, originalTranscript, summary, url, visibility, sharedAt: visibility === 'shared' ? new Date() : null }
        })
      : await prisma.savedYoutubeVideo.create({
          data: { videoId, url, title: title || videoId, imageUrl, transcript, originalTranscript, summary, ownerId: user.id, visibility, sharedAt: visibility === 'shared' ? new Date() : null }
        });

    return NextResponse.json(savedVideo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a mentés során' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID kötelező' }, { status: 400 });

    const video = await prisma.savedYoutubeVideo.findUnique({ where: { id } });
    if (!video) return NextResponse.json({ error: 'A videó nem található' }, { status: 404 });
    if (video.ownerId && video.ownerId !== user?.id) {
      return NextResponse.json({ error: 'Csak a saját mentéseidet törölheted.' }, { status: 403 });
    }

    await prisma.savedYoutubeVideo.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a törlés során' }, { status: 500 });
  }
}

// Láthatóság váltása: privát <-> közös
export async function PATCH(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const { id, visibility } = await req.json();
    if (!id || !['private', 'shared'].includes(visibility)) {
      return NextResponse.json({ error: 'Hiányzó azonosító vagy érvénytelen láthatóság.' }, { status: 400 });
    }

    const video = await prisma.savedYoutubeVideo.findUnique({ where: { id } });
    if (!video) return NextResponse.json({ error: 'A videó nem található' }, { status: 404 });
    if (video.ownerId !== user.id) {
      return NextResponse.json({ error: 'Csak a saját mentéseid láthatóságát módosíthatod.' }, { status: 403 });
    }

    const updated = await prisma.savedYoutubeVideo.update({
      where: { id },
      data: { visibility, sharedAt: visibility === 'shared' ? new Date() : null }
    });
    return NextResponse.json({ success: true, video: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a láthatóság módosítása során' }, { status: 500 });
  }
}
