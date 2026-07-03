import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const links = await prisma.discoveredLink.findMany({
      where: { dorkLabel: 'TARGETED_MONITOR' },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
    
    return NextResponse.json(links);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a lekérdezéskor' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { ids, deleteAll } = await req.json();
    
    if (deleteAll) {
      await prisma.discoveredLink.deleteMany({
        where: { dorkLabel: 'TARGETED_MONITOR' }
      });
      return NextResponse.json({ success: true, message: 'Minden link törölve' });
    }
    
    if (ids && Array.isArray(ids) && ids.length > 0) {
      await prisma.discoveredLink.deleteMany({
        where: { id: { in: ids } }
      });
      return NextResponse.json({ success: true, message: `${ids.length} link törölve` });
    }
    
    return NextResponse.json({ error: 'Nincsenek megadva azonosítók' }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a törlés során' }, { status: 500 });
  }
}
