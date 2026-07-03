import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const dorks = await prisma.discoveryDork.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(dorks);
  } catch (error: any) {
    console.error('Get Dorks Error:', error);
    return NextResponse.json({ error: 'Hiba a parancsok lekérésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { label, query, keyword, startDate, endDate, maxResults, language } = await req.json();

    const dork = await prisma.discoveryDork.create({
      data: {
        label,
        query,
        keyword: keyword || null,
        startDate: startDate || null,
        endDate: endDate || null,
        maxResults: maxResults || 30,
        language: language || 'HU',
        isActive: true
      }
    });

    return NextResponse.json(dork);
  } catch (error: any) {
    console.error('Create Dork Error:', error);
    return NextResponse.json({ error: error.message || 'Hiba a mentéskor' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, label, query, keyword, startDate, endDate, maxResults, language } = await req.json();

    const dork = await prisma.discoveryDork.update({
      where: { id },
      data: {
        label,
        query,
        keyword: keyword || null,
        startDate: startDate || null,
        endDate: endDate || null,
        maxResults: maxResults || 30,
        language: language || 'HU'
      }
    });

    return NextResponse.json({ ...dork, success: true });
  } catch (error: any) {
    console.error('Update Dork Error:', error);
    return NextResponse.json({ error: 'Hiba a módosításkor' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.discoveryDork.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Delete Dork Error:', error);
    return NextResponse.json({ error: 'Hiba a törléskor' }, { status: 500 });
  }
}
