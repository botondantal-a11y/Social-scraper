import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';

// Visszaadja, hogy a felhasználónak van-e mentett Apify kulcsa (a kulcsot magát nem, csak maszkolva)
export async function GET() {
  try {
    const sessionUser = await getSessionUser();
    if (!sessionUser) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { id: sessionUser.id },
      select: { apifyToken: true }
    });

    const token = user?.apifyToken || '';
    const masked = token ? `${token.slice(0, 8)}…${token.slice(-4)}` : '';
    return NextResponse.json({ hasKey: !!token, masked });
  } catch (error: any) {
    console.error('Apify key GET error:', error);
    return NextResponse.json({ error: 'Hiba a kulcs lekérésekor' }, { status: 500 });
  }
}

// Menti / törli a felhasználó saját Apify kulcsát
export async function POST(req: Request) {
  try {
    const sessionUser = await getSessionUser();
    if (!sessionUser) return NextResponse.json({ error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const { apifyToken } = await req.json();
    const value = typeof apifyToken === 'string' ? apifyToken.trim() : '';

    await prisma.user.update({
      where: { id: sessionUser.id },
      data: { apifyToken: value || null }
    });

    return NextResponse.json({ success: true, hasKey: !!value });
  } catch (error: any) {
    console.error('Apify key POST error:', error);
    return NextResponse.json({ error: 'Hiba a kulcs mentésekor' }, { status: 500 });
  }
}
