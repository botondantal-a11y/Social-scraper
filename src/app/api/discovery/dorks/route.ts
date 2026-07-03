import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const dorks = await prisma.$queryRawUnsafe('SELECT * FROM DiscoveryDork ORDER BY createdAt DESC');
    return NextResponse.json(dorks);
  } catch (error: any) {
    console.error('SQL Get Dorks Error:', error);
    return NextResponse.json({ error: 'Hiba a parancsok lekérésekor' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { label, query, keyword, startDate, endDate, maxResults, language } = await req.json();
    const id = Math.random().toString(36).substring(7);
    const now = new Date().toISOString();
    
    await prisma.$executeRawUnsafe(
      'INSERT INTO DiscoveryDork (id, label, query, keyword, startDate, endDate, maxResults, language, isActive, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      id, label, query, keyword || null, startDate || null, endDate || null, maxResults || 30, language || 'HU', 1, now
    );
    
    return NextResponse.json({ id, label, query, keyword, startDate, endDate, maxResults: maxResults || 30, language: language || 'HU', isActive: true });
  } catch (error: any) {
    console.error('SQL Create Dork Error:', error);
    return NextResponse.json({ error: error.message || 'Hiba a mentéskor' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, label, query, keyword, startDate, endDate, maxResults, language } = await req.json();
    
    await prisma.$executeRawUnsafe(
      'UPDATE DiscoveryDork SET label = ?, query = ?, keyword = ?, startDate = ?, endDate = ?, maxResults = ?, language = ? WHERE id = ?',
      label, query, keyword || null, startDate || null, endDate || null, maxResults || 30, language || 'HU', id
    );
    
    return NextResponse.json({ id, label, query, keyword, startDate, endDate, maxResults: maxResults || 30, language: language || 'HU', success: true });
  } catch (error: any) {
    console.error('SQL Update Dork Error:', error);
    return NextResponse.json({ error: 'Hiba a módosításkor' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.$executeRawUnsafe('DELETE FROM DiscoveryDork WHERE id = ?', id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('SQL Delete Dork Error:', error);
    return NextResponse.json({ error: 'Hiba a törléskor' }, { status: 500 });
  }
}
