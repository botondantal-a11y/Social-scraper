import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '../../../generated/client';

const prisma = new PrismaClient();

export async function startBackgroundScraping(jobId: string, url: string) {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2 
    });
    const page = await context.newPage();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY hiányzik.");
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
    Te egy profi adatelemző vagy. Elemezd a mellékelt képernyőfotót (infografikát, prezentációs diát).
    Kérlek, nyerd ki a képen látható összes releváns numerikus adatot és strukturáld JSON formátumba!
    Minden egyes értékhez keress egy mutatót (metric), egy kategóriát/entitást, és MÁSODLAGOS KONTEXTUSKÉNT rendeld hozzá azt is, hogy MELYIK ORSZÁGRA vagy régióra vonatkozik az adat, illetve hogy MELYIK ÉVRE vonatkozik! Ha nincs egyértelmű ország, használd a "Global" vagy "Unknown" kifejezéseket. Ha nincs év, írj be "Nincs adat"-ot.
    Ha a képen nincsenek adatok, csak egy címlap, akkor egy üres dataset tömböt adj vissza.
    
    Kötelező JSON struktúra:
    {
      "title": "A diagram címe",
      "dataset": [
        {
          "year": "A vizsgált év (pl. 2024), vagy 'Nincs adat'",
          "countryOrRegion": "Ország vagy terület (pl. Hungary, Global, Europe)",
          "category": "Kategória neve",
          "metric": "Mutató neve és mértékegysége",
          "value": 123.45
        }
      ]
    }
    Fontos szabályok: A "metric" (mutató) neve legyen nagyon kifejező és beszédes, hogy önmagában (a kategória nélkül) is érthető legyen, miről szól! Ne használj olyan általános kifejezéseket, hogy "Érték (Millió)" vagy "Arány (%)"! Helyette írd azt, hogy "Éves árbevétel (Millió USD)", "Regisztrált felhasználók (Millió)" vagy "Okostelefon penetráció (%)". A "value" mező viszont MINDIG egy nyers, tiszta szám legyen (pl. 80.5 vagy 8.28).
    `;

    // Try to guess the maximum pages. We will just loop until we hit a limit or the page stops changing.
    // Adobe Indesign URLs typically use #page=1
    const baseUrl = url.split('#')[0];
    let emptyPagesInARow = 0;
    let duplicatePagesInARow = 0;
    let lastExtractedDataString = "";
    
    // Create an overall dataset for this job
    const job = await prisma.scrapeJob.findUnique({ where: { id: jobId } });
    const dataset = await prisma.statisticDataset.create({
      data: {
        title: `Elemzés alatt: ${baseUrl.substring(0, 50)}...`,
        sourceUrl: baseUrl,
        data: "[]",
        ownerId: job?.ownerId ?? null,
        visibility: "private"
      }
    });

    await prisma.scrapeJob.update({
      where: { id: jobId },
      data: { datasetId: dataset.id }
    });

    let allExtractedData: any[] = [];

    // Navigate to the base URL once
    await page.goto(baseUrl, { waitUntil: 'load', timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(5000);

    // Safety limit: max 650 pages
    for (let pageNum = 1; pageNum <= 650; pageNum++) {
      // Check if job was stopped by user
      const currentJobState = await prisma.scrapeJob.findUnique({ where: { id: jobId }, select: { status: true } });
      if (currentJobState?.status === 'stopped') {
        console.log(`[Job ${jobId}] Stopped by user.`);
        break;
      }

      console.log(`[Job ${jobId}] Processing page ${pageNum}...`);
      
      const screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 90 });
      
      const imagePart = {
        inlineData: { data: screenshotBuffer.toString("base64"), mimeType: "image/jpeg" },
      };

      try {
        const aiResult = await model.generateContent([prompt, imagePart]);
        const parsed = JSON.parse(aiResult.response.text());
        
        if (parsed.dataset && parsed.dataset.length > 0) {
          emptyPagesInARow = 0;
          
          const currentDataString = JSON.stringify(parsed.dataset);
          if (currentDataString === lastExtractedDataString) {
            duplicatePagesInARow++;
          } else {
            duplicatePagesInARow = 0;
            lastExtractedDataString = currentDataString;
            
            // Attach slide title to each data point for context
            const dataWithContext = parsed.dataset.map((d: any) => ({
              ...d,
              year: d.year || 'Nincs adat',
              countryOrRegion: d.countryOrRegion || 'Global',
              slideTitle: parsed.title || 'Ismeretlen Dia'
            }));
            
            allExtractedData = [...allExtractedData, ...dataWithContext];
            
            // Update the dataset continuously
            await prisma.statisticDataset.update({
              where: { id: dataset.id },
              data: { data: JSON.stringify(allExtractedData) }
            });
          }
        } else {
          emptyPagesInARow++;
          duplicatePagesInARow = 0;
        }
      } catch (e) {
        console.error(`Error on page ${pageNum}:`, e);
        emptyPagesInARow++;
      }

      await prisma.scrapeJob.update({
        where: { id: jobId },
        data: { processedPages: pageNum }
      });

      // Stop if we hit 10 empty pages in a row (likely end of presentation)
      if (emptyPagesInARow >= 10 && pageNum > 15) {
        console.log(`[Job ${jobId}] Reached end of presentation (10 empty pages). Stopping.`);
        break;
      }
      
      // Stop if we are stuck on the same page (extracted the exact same data 4 times)
      if (duplicatePagesInARow >= 4) {
        console.log(`[Job ${jobId}] Reached end of presentation (stuck on same data). Stopping.`);
        break;
      }

      // API Rate Limit Protection: Wait 4.5 seconds before next page
      await new Promise(resolve => setTimeout(resolve, 4500));

      // Go to next page using ArrowRight (Standard for InDesign/Prezi)
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(2000); // Wait for page transition
    }

    // Finished successfully
    await prisma.statisticDataset.update({
      where: { id: dataset.id },
      data: { title: `Kinyert adatok (Sikeres) - ${allExtractedData.length} adatpont` }
    });

    await prisma.scrapeJob.update({
      where: { id: jobId },
      data: { status: "completed" }
    });

  } catch (err: any) {
    console.error(`[Job ${jobId}] Critical Error:`, err);
    await prisma.scrapeJob.update({
      where: { id: jobId },
      data: { status: "error", errorMessage: err.message }
    }).catch(() => {});
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}
