import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';
import axios from 'axios';
import * as cheerio from 'cheerio';
import https from 'https';

const prisma = new PrismaClient();

// Axios instance to ignore SSL issues and set a common User-Agent
const fetcher = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
  },
  timeout: 10000
});

export async function POST(req: Request) {
  try {
    const { targetId } = await req.json();
    
    let targets = [];
    if (targetId) {
      const target = await prisma.targetMonitor.findUnique({ where: { id: targetId } });
      if (target) targets.push(target);
    } else {
      targets = await prisma.targetMonitor.findMany({ where: { isActive: true } });
    }

    if (targets.length === 0) {
      return NextResponse.json({ error: 'Nincs találat a megadott célpont(ok)ra.' }, { status: 404 });
    }

    let allNewLinks = [];
    let totalFound = 0;

    for (const target of targets) {
      try {
        console.log(`[Crawler] Scaning: ${target.name} (${target.url}) with selector: ${target.selector || 'a'}`);
        const response = await fetcher.get(target.url);
        const html = response.data;
        const $ = cheerio.load(html);
        
        const selector = target.selector || 'a';
        const elements = $(selector);
        
        const extractedUrls = new Set<string>();
        
        elements.each((_, el) => {
          let href = $(el).attr('href');
          if (!href) return;
          
          // Make absolute URL
          try {
            const urlObj = new URL(href, target.url);
            // Csak HTTP/HTTPS linkek kellenek
            if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
              const fullUrl = urlObj.toString().split('#')[0]; // Remove hash
              
              // 1. URL szűrés
              if (target.urlFilter && !fullUrl.includes(target.urlFilter)) {
                return; // Kihagyjuk, ha nem egyezik a szűrővel
              }

              // 2. Dátum szűrés a DOM környezetből
              if (target.minDate || target.maxDate) {
                // Megnézzük a link környezetét (pl. szülő elem szövegét)
                const contextText = $(el).parent().parent().text() || $(el).parent().text() || $(el).text();
                // Keresünk dátum formátumokat (pl. May 20, 2026 vagy 2026-05-20)
                const dateRegex = /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2}, \d{4}|\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/ig;
                const match = contextText.match(dateRegex);
                
                if (match && match.length > 0) {
                  const parsedDate = new Date(match[0]);
                  if (!isNaN(parsedDate.getTime())) {
                    if (target.minDate && parsedDate < new Date(target.minDate)) {
                      return;
                    }
                    if (target.maxDate) {
                      const maxDateEnd = new Date(target.maxDate);
                      maxDateEnd.setHours(23, 59, 59, 999);
                      if (parsedDate > maxDateEnd) {
                        return;
                      }
                    }
                  }
                }
              }

              extractedUrls.add(fullUrl);
            }
          } catch (e) {
            // Invalid URL, ignore
          }
        });
        
        totalFound += extractedUrls.size;
        console.log(`[Crawler] Found ${extractedUrls.size} links for ${target.name}`);

        // Check which ones are new
        for (const link of extractedUrls) {
          // Check if already in DiscoveredLink
          const existingDLink = await prisma.discoveredLink.findUnique({ where: { url: link } });
          // Check if already in Article
          const existingArticle = await prisma.article.findFirst({ where: { url: link } });
          
          if (!existingDLink && !existingArticle) {
            // New link!
            const newLink = await prisma.discoveredLink.create({
              data: {
                url: link,
                title: link, // We don't always have a good title from just the link
                source: "Célzott Figyelő",
                dorkKeyword: target.name,
                dorkLabel: "TARGETED_MONITOR"
              }
            });
            allNewLinks.push(newLink);
          }
        }
        
        // Update lastChecked
        await prisma.targetMonitor.update({
          where: { id: target.id },
          data: { lastChecked: new Date() }
        });

      } catch (err: any) {
        console.error(`[Crawler] Hiba a(z) ${target.name} letöltésekor:`, err.message);
      }
    }

    return NextResponse.json({ 
      message: 'Scrape befejezve', 
      totalFound,
      newLinksCount: allNewLinks.length,
      newLinks: allNewLinks
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba a crawling során' }, { status: 500 });
  }
}
