import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Felfedezett linkek lekérése, ahol a dorkLabel NETWORK
    const links = await prisma.discoveredLink.findMany({
      where: { dorkLabel: 'NETWORK' },
      orderBy: { createdAt: 'desc' },
      take: 50 // Utolsó 50 megjelenítése
    });
    
    return NextResponse.json(links);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a lekérdezéskor' }, { status: 500 });
  }
}
