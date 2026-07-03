import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { exec } from 'child_process';
import util from 'util';
import crypto from 'crypto';

const execPromise = util.promisify(exec);

export async function POST(req: NextRequest) {
  try {
    let { url } = await req.json();

    if (!url || !url.includes('linkedin.com/in/')) {
      return NextResponse.json({ success: false, error: 'Kérlek egy érvényes LinkedIn profil URL-t adj meg.' }, { status: 400 });
    }

    if (!url.startsWith('http')) {
      url = 'https://' + url;
    }

    const scratchDir = path.join(process.cwd(), 'scratch');
    const scriptPath = path.join(process.cwd(), 'scraper.py');
    
    if (!fs.existsSync(scratchDir)) {
      fs.mkdirSync(scratchDir, { recursive: true });
    }

    console.log(`Starting Python scraper for URL: ${url}`);
    
    // Futtatjuk a Python scriptet
    try {
      const { stdout, stderr } = await execPromise(`python scraper.py "${url}"`, { 
        maxBuffer: 1024 * 1024 * 10, // 10MB
        timeout: 360000 // 6 perc timeout
      });

      if (stderr) {
        console.warn('Python Stderr:', stderr);
      }

      // Megpróbáljuk értelmezni a visszakapott JSON-t
      const lastLine = stdout.trim().split('\n').pop() || '{}';
      const result = JSON.parse(lastLine);

      if (!result.success) {
        return NextResponse.json({ success: false, error: result.error || 'Hiba a letöltés során.' }, { status: 500 });
      }

      let profileData = result.data;

      // Mentjük a képeket és generáljuk az AI összefoglalót (Ugyanúgy, mint eddig)
      const safeName = profileData.name ? profileData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'ismeretlen';
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const profilesDir = path.join(uploadDir, 'profilok');
      const cegekDir = path.join(uploadDir, 'cegek');
      
      if (!fs.existsSync(profilesDir)) fs.mkdirSync(profilesDir, { recursive: true });
      if (!fs.existsSync(cegekDir)) fs.mkdirSync(cegekDir, { recursive: true });

      // Céges és iskolai logók letöltése (A Python most nem szed logókat, így ez üres maradhat, de ha később beletesszük, akkor jó lesz)
      const downloadLogo = async (url: string, prefix: string) => {
        if (!url) return null;
        if (url.startsWith('data:')) return url;
        try {
          const response = await fetch(url);
          const buffer = Buffer.from(await response.arrayBuffer());
          const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 10);
          const fileName = `${prefix}_${hash}.jpg`;
          fs.writeFileSync(path.join(cegekDir, fileName), buffer);
          return `/uploads/cegek/${fileName}`;
        } catch (err) {
          return url;
        }
      };

      if (profileData.experience) {
        for (let exp of profileData.experience) {
          if (exp.logoUrl) {
            exp.logoUrl = await downloadLogo(exp.logoUrl, 'company');
          }
        }
      }
      
      if (profileData.education) {
        for (let edu of profileData.education) {
          if (edu.logoUrl) {
            edu.logoUrl = await downloadLogo(edu.logoUrl, 'school');
          }
        }
      }

      profileData.url = url;
      profileData.scrapedAt = new Date().toISOString();

      // AI Összefoglaló generálása
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
          console.log("Generating AI summary for the profile...");
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });
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
          console.log("AI summary generated successfully.");
        } else {
          profileData.aiSummary = "Nincs beállítva API kulcs az AI összefoglalóhoz.";
        }
      } catch (err) {
        console.error("AI summary generation failed", err);
        profileData.aiSummary = "Nem sikerült az AI összefoglalót generálni.";
      }

      // Profil mentése az adatbázisba (JSON)
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      
      const dbPath = path.join(dataDir, 'profiles.json');
      let db = [];
      if (fs.existsSync(dbPath)) {
        db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
      }
      
      const existingIndex = db.findIndex((p: any) => p.url === profileData.url || p.name === profileData.name);
      if (existingIndex >= 0) {
        db[existingIndex] = profileData;
      } else {
        db.push(profileData);
      }
      
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

      console.log('Scraping and saving successful!');

      return NextResponse.json({ success: true, data: profileData });

    } catch (execError: any) {
      console.error('Python execution error:', execError);
      return NextResponse.json({ success: false, error: 'Hiba a Python letöltő szkript futtatása közben.' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Scraping error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Ismeretlen hiba történt a scraping során.' }, { status: 500 });
  }
}
