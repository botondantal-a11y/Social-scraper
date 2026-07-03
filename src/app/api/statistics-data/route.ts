import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser, visibleToUser } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const scope = searchParams.get('scope');

    const datasets = await prisma.statisticDataset.findMany({
      where: visibleToUser(user?.id ?? null, scope),
      include: { owner: { select: { name: true, image: true } } },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(datasets);
  } catch (error: any) {
    console.error('Error fetching datasets:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const user = await getSessionUser();
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: "ID megadása kötelező." }, { status: 400 });
    }

    const dataset = await prisma.statisticDataset.findUnique({ where: { id } });
    if (!dataset) return NextResponse.json({ error: "Az adathalmaz nem található." }, { status: 404 });
    if (dataset.ownerId && dataset.ownerId !== user?.id) {
      return NextResponse.json({ error: "Csak a saját adathalmazaidat törölheted." }, { status: 403 });
    }

    await prisma.statisticDataset.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting dataset:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const user = await getSessionUser();
    const { id, title, visibility } = await req.json();

    if (!id || (!title && !visibility)) {
      return NextResponse.json({ error: "ID és új név vagy láthatóság megadása kötelező." }, { status: 400 });
    }

    const dataset = await prisma.statisticDataset.findUnique({ where: { id } });
    if (!dataset) return NextResponse.json({ error: "Az adathalmaz nem található." }, { status: 404 });

    // Láthatóság módosítása csak a tulajdonosnak
    if (visibility) {
      if (!['private', 'shared'].includes(visibility)) {
        return NextResponse.json({ error: "Érvénytelen láthatóság." }, { status: 400 });
      }
      if (dataset.ownerId !== user?.id) {
        return NextResponse.json({ error: "Csak a saját adathalmazaid láthatóságát módosíthatod." }, { status: 403 });
      }
    }

    const updatedDataset = await prisma.statisticDataset.update({
      where: { id },
      data: {
        ...(title ? { title } : {}),
        ...(visibility ? { visibility } : {})
      }
    });

    return NextResponse.json({ success: true, dataset: updatedDataset });
  } catch (error: any) {
    console.error('Error updating dataset:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
