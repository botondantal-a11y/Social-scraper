import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';
import { fetchLinkedInProfile } from '@/lib/apify-linkedin';

export const maxDuration = 300;

export async function POST(req: NextRequest) {
  try {
    let { url } = await req.json();

    if (!url || !url.includes('linkedin.com/in/')) {
      return NextResponse.json({ success: false, error: 'Kérlek egy érvényes LinkedIn profil URL-t adj meg (linkedin.com/in/...).' }, { status: 400 });
    }

    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }

    // A felhasználó saját Apify kulcsa
    const sessionUser = await getSessionUser();
    if (!sessionUser) return NextResponse.json({ success: false, error: 'Bejelentkezés szükséges.' }, { status: 401 });

    const dbUser = await prisma.user.findUnique({
      where: { id: sessionUser.id },
      select: { apifyToken: true }
    });

    if (!dbUser?.apifyToken) {
      return NextResponse.json(
        { success: false, error: 'Nincs Apify API kulcsod. A Beállításokban add meg a sajátodat a LinkedIn lekéréshez.' },
        { status: 400 }
      );
    }

    // Profil lekérése Apify-jal (a régi Python-szkript helyett)
    let profileData: any;
    try {
      profileData = await fetchLinkedInProfile(url, dbUser.apifyToken);
    } catch (apErr: any) {
      console.error('Apify LinkedIn hiba:', apErr);
      const msg = apErr?.message || '';
      let friendly = 'Nem sikerült a LinkedIn profil letöltése Apify-jal.';
      if (/token|unauthorized|401/i.test(msg)) friendly = 'Érvénytelen Apify API kulcs. Ellenőrizd a Beállításokban.';
      else if (/not found|404/i.test(msg)) friendly = 'A megadott Apify LinkedIn actor nem található. Állítsd be az APIFY_ACTOR_LINKEDIN_PROFILE változót.';
      else if (/insufficient|payment|credit|402/i.test(msg)) friendly = 'Nincs elég Apify kredit a fiókodon.';
      return NextResponse.json({ success: false, error: friendly }, { status: 500 });
    }

    profileData.url = url;
    profileData.scrapedAt = new Date().toISOString();

    // AI Összefoglaló generálása
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });
        const prompt = `
Kérlek írj egy pontosan 3 mondatos, lényegretörő magyar nyelvű összefoglalót az alábbi LinkedIn profilról.
Térj ki arra, hogy mivel foglalkozott korábban és mivel foglalkozik most, milyen főbb tapasztalatai vannak, és hogy ki is ő szakmailag.

Profil adatok:
Név: ${profileData.name}
Címsor: ${profileData.headline}
Rólam: ${profileData.about}
Tapasztalatok: ${JSON.stringify(profileData.experience)}
Tanulmányok: ${JSON.stringify(profileData.education)}
        `;
        const aiResult = await model.generateContent(prompt);
        profileData.aiSummary = aiResult.response.text().trim();
      } else {
        profileData.aiSummary = 'Nincs beállítva API kulcs az AI összefoglalóhoz.';
      }
    } catch (err) {
      console.error('AI summary generation failed', err);
      profileData.aiSummary = 'Nem sikerült az AI összefoglalót generálni.';
    }

    // Profil mentése JSON-ba (best-effort; felhőben nem tartós, ezért nem kritikus)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      const dbPath = path.join(dataDir, 'profiles.json');
      let db: any[] = [];
      if (fs.existsSync(dbPath)) {
        db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      }
      const existingIndex = db.findIndex((p: any) => p.url === profileData.url || p.name === profileData.name);
      if (existingIndex >= 0) db[existingIndex] = profileData;
      else db.push(profileData);
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    } catch (fsErr) {
      console.warn('Profil JSON mentése sikertelen (felhőben ez normális):', fsErr);
    }

    return NextResponse.json({ success: true, data: profileData });

  } catch (error: any) {
    console.error('Scraping error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Ismeretlen hiba történt a scraping során.' }, { status: 500 });
  }
}
