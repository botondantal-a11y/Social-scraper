import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const targets = await prisma.targetMonitor.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(targets);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a lekérdezéskor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { url, name, selector, urlFilter, minDate, maxDate } = await req.json();
    if (!url || !name) return NextResponse.json({ error: 'URL és név kötelező' }, { status: 400 });

    const newTarget = await prisma.targetMonitor.create({
      data: { 
        url, 
        name, 
        selector,
        urlFilter,
        minDate: minDate ? new Date(minDate) : null,
        maxDate: maxDate ? new Date(maxDate) : null
      }
    });
    return NextResponse.json(newTarget);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a mentés során' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, url, name, selector, urlFilter, minDate, maxDate } = await req.json();
    if (!id || !url || !name) return NextResponse.json({ error: 'ID, URL és név kötelező' }, { status: 400 });

    const updatedTarget = await prisma.targetMonitor.update({
      where: { id },
      data: { 
        url, 
        name, 
        selector,
        urlFilter,
        minDate: minDate ? new Date(minDate) : null,
        maxDate: maxDate ? new Date(maxDate) : null
      }
    });
    return NextResponse.json(updatedTarget);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a módosítás során' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID kötelező' }, { status: 400 });

    await prisma.targetMonitor.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a törlés során' }, { status: 500 });
  }
}
