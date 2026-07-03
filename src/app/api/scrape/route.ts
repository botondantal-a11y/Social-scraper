import { NextResponse } from 'next/server';
import { chromium } from 'playwright';
import * as cheerio from 'cheerio';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import fs from 'fs/promises';
import { PrismaClient } from '@/generated/client';

const prisma = new PrismaClient();
const AUTH_DIR = path.join(process.cwd(), '.auth');

// Helper to determine platform
function detectPlatform(url: string) {
  if (url.includes('reddit.com')) return 'reddit';
  if (url.includes('facebook.com') || url.includes('fb.watch')) return 'facebook';
  if (url.includes('instagram.com')) return 'instagram';
  
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace('www.', '');
    
    // Specifikus kezelés híroldalakhoz (pl. news.telex.hu -> TELEX)
    const parts = domain.split('.');
    if (parts.length >= 2) {
      // Az utolsó előtti részt vesszük (pl. telex.hu -> telex, news.telex.hu -> telex)
      return parts[parts.length - 2].toUpperCase();
    }
    
    return domain.toUpperCase();
  } catch (e) {
    return 'WEB';
  }
}

export async function POST(req: Request) {
  try {
    let { url } = await req.json();
    if (!url) throw new Error("URL megadása kötelező.");

    let platform = detectPlatform(url);
    let extractedText = "";
    let comments: { author: string; text: string }[] = [];
    let title = "";
    let reactions = "";
    let imageUrl = "";

    // 1. Scraping Logic based on platform
    if (platform === 'reddit') {
      // For Reddit, we can append .json to the URL
      const jsonUrl = url.split('?')[0].replace(/\/$/, '') + '.json';
      const response = await fetch(jsonUrl, { headers: { 'User-Agent': 'OmniScraper/1.0' } });
      const data = await response.json();
      
      const postData = data[0].data.children[0].data;
      title = postData.title;
      extractedText = postData.selftext;
      
      // Extract Reddit preview image or thumbnail
      if (postData.preview && postData.preview.images && postData.preview.images[0]) {
        imageUrl = postData.preview.images[0].source.url.replace(/&amp;/g, '&');
      } else if (postData.thumbnail && postData.thumbnail.startsWith('http')) {
        imageUrl = postData.thumbnail;
      }
      
      if (postData.ups !== undefined) {
        reactions = `Upvotes: ${postData.ups}`;
      }

      // Extract top comments
      if (data[1] && data[1].data && data[1].data.children) {
        comments = data[1].data.children
          .filter((c: any) => c.kind === 't1' && c.data.body)
          .map((c: any) => ({
            author: c.data.author,
            text: c.data.body
          }));
      }

    } else if (platform === 'facebook' || platform === 'instagram') {
      // Use Playwright with authenticated state
      const statePath = path.join(AUTH_DIR, `${platform}_state.json`);
      let hasState = false;
      try {
        await fs.access(statePath);
        hasState = true;
      } catch {
        throw new Error(`Kérlek jelentkezz be a ${platform} fiókodba a Beállítások menüben!`);
      }

      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        viewport: { width: 1280, height: 800 },
        storageState: statePath,
        locale: 'hu-HU'
      });
      const page = await context.newPage();
      
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      
      // 1. Wait for core content to appear
      await new Promise(r => setTimeout(r, 5000));

      // Check if we hit a login wall or content unavailable
      const pageContent = await page.content();
      if (pageContent.includes('Ez a tartalom jelenleg nem érhető el') || pageContent.includes('be kell jelentkezned')) {
         // Próbáljuk meg frissíteni egyszer, hátha csak átmeneti hiba
         await page.reload({ waitUntil: 'domcontentloaded' });
         await new Promise(r => setTimeout(r, 5000));
      }

      // 1. Try to switch to "All comments" (Minden megjegyzés) to see everything
      try {
        const commentFilters = await page.locator('[aria-haspopup="listbox"], [role="button"]:has-text("Legrelevánsabb"), [role="button"]:has-text("Legújabb")').all();
        for (const filter of commentFilters) {
          if (await filter.isVisible()) {
            await filter.click();
            await page.waitForTimeout(1000);
            const allCommentsOption = page.locator('[role="menuitem"]:has-text("Összes megjegyzés"), [role="menuitem"]:has-text("Minden megjegyzés"), [role="listbox"] [role="option"]:has-text("Összes megjegyzés")');
            if (await allCommentsOption.isVisible()) {
              await allCommentsOption.click();
              await page.waitForTimeout(3000);
            }
            break;
          }
        }
      } catch (e) {}

      // 2. Hybrid Collector: Smart grouping and deduplication
      const commentMap = new Map<string, { author: string; text: string }>();
      let idleSteps = 0;
      
      try {
        for (let i = 0; i < 400; i++) { // Növelve 400 lépésre a felhasználó kérésére
          const previousCount = commentMap.size;

          // 1. Grab everything that looks like a comment in the current viewport
          const currentComments = await page.evaluate(() => {
            const results: { author: string; text: string }[] = [];
            const textNodes = Array.from(document.querySelectorAll('div[dir="auto"], span[dir="auto"]'));
            
            textNodes.forEach(node => {
              const text = (node as HTMLElement).innerText.trim();
              if (text.length < 3 || text.includes('Tetszik') || text.includes('Válasz')) return;
              
              let ancestor: HTMLElement | null = node.parentElement;
              let foundAuthor = "Ismeretlen";
              
              for (let j = 0; j < 6; j++) {
                if (!ancestor) break;
                const nameNode = ancestor.querySelector('h3, h4, strong, a[role="link"], span[style*="font-weight: 600"]');
                if (nameNode) {
                  const candidate = (nameNode as HTMLElement).innerText.split('\n')[0].trim();
                  if (candidate && candidate.length > 2 && candidate.length < 50) {
                    foundAuthor = candidate;
                    break;
                  }
                }
                ancestor = ancestor.parentElement;
              }

              if (foundAuthor !== "Ismeretlen" && text.length > 5 && foundAuthor !== text) {
                results.push({ author: foundAuthor, text });
              }
            });
            return results;
          });

          // Deduplicate and store
          currentComments.forEach(c => {
            const signature = `${c.author}:${c.text.substring(0, 80)}`.toLowerCase();
            if (!commentMap.has(signature)) {
              commentMap.set(signature, c);
            }
          });

          // Idle check: if we haven't found any new comments in 30 steps, we are likely at the very end or stuck
          if (commentMap.size === previousCount) {
            idleSteps++;
          } else {
            idleSteps = 0;
          }

          if (idleSteps > 30 && i > 50) break;

          // 2. Expand & Scroll
          const expanded = await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('[role="button"], span'));
            const showMore = btns.find(el => {
              const t = el.textContent || "";
              return t.includes('További megjegyzések') || t.includes('válasz megtekintése') || t.includes('válasz megjelenítése') || t.includes('további válasz');
            });
            if (showMore) { (showMore as HTMLElement).click(); return true; }
            return false;
          });

          if (expanded) {
            await new Promise(r => setTimeout(r, 2200));
          } else {
            await page.evaluate(() => window.scrollBy(0, 1500));
            await new Promise(r => setTimeout(r, 1200));
          }
          
          if (!expanded && await page.evaluate(() => (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500)) {
             // Csak akkor állunk meg, ha már tényleg nincs több tartalom és nincs több gomb
             if (idleSteps > 5) break; 
          }
        }
      } catch (e) {}

      comments = Array.from(commentMap.values());
      
      // Full text for AI
      extractedText = await page.evaluate(() => {
        const article = document.querySelector('[role="article"]');
        return article ? (article as HTMLElement).innerText : document.body.innerText;
      });
      title = await page.title();
      
      imageUrl = await page.evaluate(() => {
        const getArea = (img: HTMLImageElement) => (img.naturalWidth || img.width || 0) * (img.naturalHeight || img.height || 0);
        
        const og = document.querySelector('meta[property="og:image"]');
        if (og && (og as any).content && (og as any).content.startsWith('http')) return (og as any).content;
        
        const imgs = Array.from(document.querySelectorAll('img'));
        const candidates = imgs.map(img => {
          let src = img.src;
          if (img.srcset) {
            const parts = img.srcset.split(',').map(p => p.trim().split(' ')[0]);
            if (parts.length > 0) src = parts[parts.length - 1];
          }
          return { src, area: getArea(img) };
        });

        const sorted = candidates
          .filter(c => c.src && c.area > 10000)
          .sort((a, b) => b.area - a.area);
          
        if (sorted.length > 0) return sorted[0].src;
        return "";
      });

      await browser.close();
      
    } else {
      // General News/Web scraping using Playwright to bypass basic Cloudflare checks
      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        viewport: { width: 1920, height: 1080 }
      });

      // Dinamikus süti beállítás védett oldalakhoz (pl. jogtar.hu)
      try {
        const targetUrlObj = new URL(url);
        const hostname = targetUrlObj.hostname.replace(/^www\./, '');
        // Generált környezeti változó kulcs (pl. jogtar.hu -> SCRAPE_COOKIE_JOGTAR_HU)
        const envKey = `SCRAPE_COOKIE_${hostname.replace(/\./g, '_').toUpperCase()}`;
        const cookieString = process.env[envKey];
        
        if (cookieString) {
          console.log(`[Scraper] Munkamenet sütik beállítása a következő domainhez: ${hostname}`);
          await context.setExtraHTTPHeaders({
            'Cookie': cookieString
          });
        }
      } catch (e) {
        console.error("Hiba a dinamikus sütik beállításakor:", e);
      }
      
      const page = await context.newPage();
      
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Speciális kezelés Google News átirányításhoz
      if (page.url().includes('google.com/rss/articles') || page.url().includes('news.google.com')) {
        // 1. Süti banner kezelése
        try {
          const googleConsentBtn = page.locator('button:has-text("Accept all"), button:has-text("Az összes elfogadása"), button:has-text("I agree"), button:has-text("Elfogadom")');
          if (await googleConsentBtn.isVisible({ timeout: 3000 })) {
            await googleConsentBtn.click();
          }
        } catch (e) {}

        // 2. Kényszerített várakozás az átirányításra (URL változás figyelése)
        try {
          await page.waitForFunction(() => !window.location.hostname.includes('google.com'), { timeout: 15000 });
          await page.waitForLoadState('networkidle', { timeout: 10000 });
        } catch (e) {
          console.log("Google redirect timeout or direct navigation failed.");
        }
      } else {
        // Ha nem Google, egy rövid várakozás a Cloudflare stb. miatt
        const pageTitle = await page.title();
        if (pageTitle.toLowerCase().includes('just a moment') || pageTitle.toLowerCase().includes('cloudflare')) {
          await page.waitForTimeout(6000);
        }
      }
      
      // 1. Handle Cookie Banners
      try {
        await page.evaluate(() => {
          const texts = ["ELFOGADOM", "Elfogadom", "Accept", "OK", "Egyetértek"];
          const buttons = Array.from(document.querySelectorAll('button, span, div[role="button"]'));
          for (const btn of buttons) {
            if (texts.some(t => btn.textContent?.includes(t))) {
              (btn as HTMLElement).click();
              break;
            }
          }
        });
        await page.waitForTimeout(1000);
      } catch (e) {}

      // 2. Tisztítás: távolítsuk el a script és style elemeket a kinyerés előtt
      extractedText = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script, style, noscript, iframe');
        scripts.forEach(s => s.remove());
        
        const article = document.querySelector('article, main, [role="main"], .article-content, #content');
        return article ? (article as HTMLElement).innerText : document.body.innerText;
      });
      
      title = await page.title();
      if (title.includes('Google News')) {
         const metaTitle = await page.locator('meta[property="og:title"]').getAttribute('content').catch(() => null);
         if (metaTitle) title = metaTitle;
      }

      // 2. Extract best image URL
      imageUrl = await page.evaluate(() => {
        const getArea = (img: HTMLImageElement) => (img.naturalWidth || img.width || 0) * (img.naturalHeight || img.height || 0);
        
        const og = document.querySelector('meta[property="og:image"]');
        if (og && (og as any).content) return (og as any).content;
        
        const imgs = Array.from(document.querySelectorAll('img'));
        const candidates = imgs.map(img => {
          let src = img.src;
          if (img.srcset) {
            const parts = img.srcset.split(',').map(p => p.trim().split(' ')[0]);
            if (parts.length > 0) src = parts[parts.length - 1];
          }
          return { src, area: getArea(img) };
        });

        const sorted = candidates
          .filter(c => c.src && c.area > 20000)
          .sort((a, b) => b.area - a.area);
          
        if (sorted.length > 0) return sorted[0].src;
        return "";
      });

      // 3. Fallback: If no direct URL found, take a real screenshot
      if (!imageUrl) {
        try {
          const selectors = ['.hero-image', '.article-image', 'picture', 'header img', 'article img', 'main img'];
          let bestElement = null;
          for (const sel of selectors) {
            const el = await page.$(sel);
            if (el && await el.isVisible()) {
              const box = await el.boundingBox();
              if (box && box.width > 200 && box.height > 100) {
                bestElement = el;
                break;
              }
            }
          }
          if (bestElement) {
            await bestElement.scrollIntoViewIfNeeded();
            await page.waitForTimeout(500);
            const screenshot = await bestElement.screenshot({ type: 'jpeg', quality: 90 });
            imageUrl = `data:image/jpeg;base64,${screenshot.toString('base64')}`;
          }
        } catch (e) {
          console.error("Screenshot capture failed", e);
        }
      }

      const finalUrl = page.url();
      url = finalUrl;
      platform = detectPlatform(finalUrl);
      
      const html = await page.content();
      await browser.close();
      
      const doc = new JSDOM(html);
      const reader = new Readability(doc.window.document);
      const article = reader.parse();
      
      if (article) {
        title = article.title || "Ismeretlen cím";
        extractedText = article.textContent || "";
      } else {
        // Fallback to basic cheerio extraction
        const $ = cheerio.load(html);
        title = $('title').text();
        extractedText = $('body').text().replace(/\s+/g, ' ').trim();
      }
    }

    if (!extractedText || extractedText.trim().length < 50) {
      throw new Error("Nem sikerült elegendő szöveget kinyerni az oldalról.");
    }

    // 2. AI Summarization Logic
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("A GEMINI_API_KEY hiányzik a szerver beállításaiból (.env.local).");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite",
      generationConfig: { responseMimeType: "application/json" }
    });

    const prompt = `
    Te egy profi adatelemző vagy. A feladatod, hogy az alábbi weboldalról lekapart tartalomból kinyerd az információkat.
    
    Kérlek, egy szigorúan érvényes JSON formátumban válaszolj:
    {
      "summary": "A bejegyzés lényegének összefoglalója pontokban.",
      "cleanedText": "A fő bejegyzés megtisztított szövege (kommentek NÉLKÜL).",
      "commentSentiment": "A kommentelők hangulatának és véleményének összefoglalása (néhány mondatban).",
      "reactionsSummary": "Lájkok, megosztások száma (pl. '6,3 E kedvelés, 407 hozzászólás').",
      "publishedAt": "A cikk/bejegyzés eredeti megjelenési dátuma ISO 8601 formátumban (pl. '2026-05-15T10:30:00Z'). Ha nem található, adj vissza null-t."
    }
    
    Nyers tartalom (bejegyzés + kommentek):
    ${extractedText.substring(0, 50000)}
    `;

    let aiResult;
    let jsonResponseText = "";
    
    // Újrapróbálkozási logika a 429 (Rate Limit) hibák elkerülésére
    for (let i = 0; i < 3; i++) {
      try {
        aiResult = await model.generateContent(prompt);
        jsonResponseText = aiResult.response.text();
        break;
      } catch (err: any) {
        if (err.message && err.message.includes('429')) {
          if (i === 2) {
            throw new Error("A Google Gemini AI ingyenes limitje (15 kérés/perc) kimerült. Kérlek, várj 1 percet, és próbáld újra!");
          }
          console.log(`Gemini Rate Limit elérve. Várakozás 17 másodpercet... (Próbálkozás: ${i + 1}/3)`);
          await new Promise(resolve => setTimeout(resolve, 17000));
        } else {
          throw err;
        }
      }
    }
    let parsedData: any = {};
    
    try {
      parsedData = JSON.parse(jsonResponseText);
    } catch (e) {
      console.error("Failed to parse JSON from AI", jsonResponseText);
      throw new Error("Az AI válasza nem értelmezhető formátumú.");
    }

    return NextResponse.json({
      title: title || "Ismeretlen cím",
      summary: parsedData.summary || "Nem sikerült összefoglalót generálni.",
      fullText: extractedText,
      cleanedText: parsedData.cleanedText || null,
      imageUrl: imageUrl || null,
      originalUrl: url,
      platform: platform,
      commentSentiment: parsedData.commentSentiment || null,
      reactions: platform === 'reddit' ? reactions : (parsedData.reactionsSummary || null),
      comments: comments.length > 0 ? comments : (parsedData.comments || []),
      publishedAt: parsedData.publishedAt || null
    });

  } catch (error: any) {
    console.error('Scraping Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
