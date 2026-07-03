import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const keywords = await prisma.networkKeyword.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(keywords);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a kulcsszavak lekérdezésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { keyword, type } = body;
    
    if (!keyword) {
      return NextResponse.json({ error: 'Hiányzó kulcsszó!' }, { status: 400 });
    }

    const newKeyword = await prisma.networkKeyword.create({
      data: { keyword, type: type || 'PROFILE' }
    });

    return NextResponse.json({ message: 'Kulcsszó elmentve!', data: newKeyword });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a mentéskor' }, { status: 500 });
  }
}
