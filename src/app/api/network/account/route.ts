import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const accounts = await prisma.linkedInAccount.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(accounts);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Hiba a fiókok lekérésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { cookieString } = await req.json();
    
    // Csak egy aktív fiókot tartunk meg, a többit inaktiváljuk
    await prisma.linkedInAccount.updateMany({
      where: { isActive: true },
      data: { isActive: false }
    });
    
    const account = await prisma.linkedInAccount.create({
      data: {
        cookieString,
        isActive: true
      }
    });
    
    return NextResponse.json(account);
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Hiba a mentéskor' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.linkedInAccount.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: 'Hiba a törléskor' }, { status: 500 });
  }
}
