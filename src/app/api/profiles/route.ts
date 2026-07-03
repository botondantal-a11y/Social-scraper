import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), 'data', 'profiles.json');
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: true, data: [] });
    }

    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error fetching profiles:', error);
    return NextResponse.json({ success: false, error: 'Hiba a profilok betöltésekor.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { url, name } = await request.json();
    const dbPath = path.join(process.cwd(), 'data', 'profiles.json');
    
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: false, error: 'Adatbázis nem található.' }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const newData = data.filter((p: any) => {
      if (url) return p.url !== url;
      if (name) return p.name !== name;
      return true;
    });

    fs.writeFileSync(dbPath, JSON.stringify(newData, null, 2));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting profile:', error);
    return NextResponse.json({ success: false, error: 'Hiba a profil törlésekor.' }, { status: 500 });
  }
}
