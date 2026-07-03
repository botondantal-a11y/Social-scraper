import { NextResponse } from 'next/server';
import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '../../../generated/client';
import { getSessionUser } from '@/lib/session';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  let browser;
  try {
    const sessionUser = await getSessionUser();
    const { url } = await req.json();
    if (!url) throw new Error("URL megadása kötelező.");

    // 1. Capture Screenshot with Playwright
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2 // High-res screenshot for better text recognition
    });
    const page = await context.newPage();

    console.log(`[Statistics] Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    
    // Wait for dynamic presentation elements to render
    await page.waitForTimeout(8000);

    // Save screenshot to public scratch dir so frontend can display it
    const scratchDir = path.join(process.cwd(), 'public', 'scratch');
    await fs.mkdir(scratchDir, { recursive: true });
    
    const screenshotFilename = `stat_${Date.now()}.jpg`;
    const screenshotPath = path.join(scratchDir, screenshotFilename);
    const publicUrl = `/scratch/${screenshotFilename}`;

    console.log(`[Statistics] Taking screenshot...`);
    const screenshotBuffer = await page.screenshot({ 
      path: screenshotPath, 
      type: 'jpeg', 
      quality: 90,
      fullPage: false // Presentations are usually viewport-sized
    });

    await browser.close();

    // 2. Analyze with Gemini Vision
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("A GEMINI_API_KEY hiányzik a szerver beállításaiból.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
    Te egy profi adatelemző vagy. Elemezd a mellékelt képernyőfotót (infografikát, prezentációs diát), ami egy statisztikai jelentésből származik.
    Kérlek, nyerd ki a képen látható összes releváns numerikus adatot és strukturáld egy JSON formátumba!

    Kötelező JSON struktúra:
    {
      "title": "A diagram vagy táblázat címe (ha van, pl. ESSENTIAL DIGITAL HEADLINES)",
      "dataset": [
        {
          "category": "Kategória vagy entitás neve (pl. TOTAL POPULATION, UNIQUE MOBILE PHONE SUBSCRIBERS)",
          "metric": "Mutató neve és mértékegysége (pl. Érték (Milliárd), Penetráció (%), vs. POPULATION (%))",
          "value": 123.45 // Csak nyers szám (float vagy int), ne írj mértékegységet ide!
        }
      ]
    }
    
    Fontos szabályok:
    1. Ha százalékos érték van (pl. 80.5%), a "value" legyen 80.5, a "metric" pedig jelezze a százalékot (pl. "Arány (%)").
    2. Ha szöveges mértékegység van a szám mellett (pl. 8.28 BILLION), a "value" legyen 8.28, a "metric" pedig tartalmazza a nagyságrendet (pl. "Érték (Milliárd)").
    3. Minden egyes adatpontot külön objektumként ments el a "dataset" tömbbe!
    `;

    console.log(`[Statistics] Sending to Gemini...`);
    
    const imagePart = {
      inlineData: {
        data: screenshotBuffer.toString("base64"),
        mimeType: "image/jpeg"
      },
    };

    const aiResult = await model.generateContent([prompt, imagePart]);
    const jsonText = aiResult.response.text();
    let parsedData;
    
    try {
      parsedData = JSON.parse(jsonText);
    } catch (e) {
      throw new Error("Az AI nem megfelelő JSON formátumot adott vissza.");
    }
    
    // Save to Database
    const savedDataset = await prisma.statisticDataset.create({
      data: {
        title: parsedData.title || "Ismeretlen Adatkészlet",
        sourceUrl: url,
        data: JSON.stringify(parsedData.dataset || []),
        ownerId: sessionUser?.id ?? null,
        visibility: "private"
      }
    });

    return NextResponse.json({
      success: true,
      dataset: savedDataset,
      screenshotUrl: publicUrl
    });

  } catch (error: any) {
    console.error('Statistics Scraping Error:', error);
    if (browser) await browser.close().catch(() => {});
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
