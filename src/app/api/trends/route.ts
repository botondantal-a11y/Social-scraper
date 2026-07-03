import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser, visibleToUser } from "@/lib/session";

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const scope = searchParams.get('scope');

    const trends = await prisma.trend.findMany({
      where: visibleToUser(user?.id ?? null, scope),
      include: {
        document: true,
        owner: { select: { name: true, image: true } }
      }
    });
    return NextResponse.json({ trends });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE() {
    try {
        const user = await getSessionUser();
        if (!user) return NextResponse.json({ error: "Bejelentkezés szükséges." }, { status: 401 });

        // Csak a saját (és a gazdátlan, régi) trendeket töröljük
        await prisma.trend.deleteMany({ where: { OR: [{ ownerId: user.id }, { ownerId: null }] } });
        await prisma.trendDocument.deleteMany({ where: { OR: [{ ownerId: user.id }, { ownerId: null }], trends: { none: {} } } });
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
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

    const trend = await prisma.trend.findUnique({ where: { id } });
    if (!trend) return NextResponse.json({ error: "A trend nem található." }, { status: 404 });
    if (trend.ownerId !== user.id) {
      return NextResponse.json({ error: "Csak a saját trendjeid láthatóságát módosíthatod." }, { status: 403 });
    }

    const updated = await prisma.trend.update({ where: { id }, data: { visibility } });
    return NextResponse.json({ success: true, trend: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
