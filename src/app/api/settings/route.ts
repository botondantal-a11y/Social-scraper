import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const settings = await prisma.systemSetting.findMany();
    // Return key-value pairs
    const config = settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json(config);
  } catch (error) {
    console.error('Settings GET Error:', error);
    return NextResponse.json({ error: 'Hiba a beállítások betöltésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json({ error: 'Hiányzó adatok' }, { status: 400 });
    }

    const updatedSetting = await prisma.systemSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });

    return NextResponse.json({ success: true, setting: updatedSetting });
  } catch (error) {
    console.error('Settings POST Error:', error);
    return NextResponse.json({ error: 'Hiba a beállítások mentésekor' }, { status: 500 });
  }
}
