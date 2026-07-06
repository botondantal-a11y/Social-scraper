import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';
import { runListening, PLATFORMS, ListeningPlatform } from '@/lib/apify-listening';

export const maxDuration = 300;

export async function POST(req: Request) {
  try {
    const sessionUser = await getSessionUser();
    if (!sessionUser) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const body = await req.json();
    const platform = body.platform as ListeningPlatform;
    const rawUrls: string[] = Array.isArray(body.urls) ? body.urls : [];
    const limit = Math.min(Math.max(parseInt(body.limit, 10) || 50, 1), 1000);
    const actorOverride = typeof body.actorId === 'string' ? body.actorId : undefined;

    if (!platform || !PLATFORMS[platform]) {
      return NextResponse.json({ error: 'Érvénytelen platform.' }, { status: 400 });
    }

    const urls = rawUrls
      .map((u) => (typeof u === 'string' ? u.trim() : ''))
      .filter((u) => u.startsWith('http'));

    if (urls.length === 0) {
      return NextResponse.json({ error: 'Adj meg legalább egy érvényes URL-t (http/https).' }, { status: 400 });
    }

    // A felhasználó saját Apify kulcsa
    const user = await prisma.user.findUnique({
      where: { id: sessionUser.id },
      select: { apifyToken: true }
    });

    if (!user?.apifyToken) {
      return NextResponse.json(
        { error: 'Nincs Apify API kulcsod. A Beállításokban add meg a saját kulcsod a funkció használatához.' },
        { status: 400 }
      );
    }

    const result = await runListening({
      platform,
      urls,
      limit,
      token: user.apifyToken,
      actorOverride,
    });

    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    console.error('Listening error:', error);
    const msg = error?.message || 'Ismeretlen hiba történt a lekérés során.';
    // Apify tipikus hibák barátságosabb üzenettel
    let friendly = msg;
    if (/token|unauthorized|401/i.test(msg)) friendly = 'Érvénytelen Apify API kulcs. Ellenőrizd a Beállításokban.';
    else if (/not found|404/i.test(msg)) friendly = 'A megadott Apify actor nem található. Ellenőrizd az actor azonosítót.';
    else if (/insufficient|payment|credit|402/i.test(msg)) friendly = 'Nincs elég Apify kredit a fiókodon ehhez a futáshoz.';
    return NextResponse.json({ error: friendly }, { status: 500 });
  }
}
