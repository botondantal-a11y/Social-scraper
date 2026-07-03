import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';
const google = require('googlethis');

const prisma = new PrismaClient();

export async function POST() {
  try {
    const keywords = await prisma.networkKeyword.findMany({ where: { isActive: true } });
    if (keywords.length === 0) return NextResponse.json({ error: 'Nincsenek aktív kulcsszavak!' }, { status: 400 });

    const allLinks = await startGoogleThisJob(keywords);

    return NextResponse.json({ 
      message: 'Sikeres adatkinyerés!',
      links: allLinks 
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Hiba az indításkor' }, { status: 500 });
  }
}

async function startGoogleThisJob(keywords: any[]) {
  const allDiscoveredLinks: any[] = [];
  try {
    console.log('[LinkedIn GoogleThis] Indulás (Link kinyerés)...');

    const options = {
      page: 0, 
      safe: false,
      parse_ads: false,
      additional_params: { hl: 'hu' }
    };

    for (const kw of keywords) {
      console.log(`\n[LinkedIn GoogleThis] Keresés: ${kw.keyword} (${kw.type})`);
      
      const query = kw.type === 'PROFILE' 
        ? `${kw.keyword} site:linkedin.com/in` 
        : `${kw.keyword} site:linkedin.com/posts`;
      
      try {
        const response = await google.search(query, options);
        
        if (!response.results || response.results.length === 0) {
          console.log('[LinkedIn GoogleThis] Nincs találat.');
          continue;
        }

        for (const res of response.results) {
          if (!res.url.includes('linkedin.com')) continue;
          
          const cleanUrl = res.url.split('?')[0];
          const title = res.title || "Nincs cím";
          
          let sourceLabel = kw.type === 'PROFILE' ? 'LINKEDIN SZEMÉLY' : 'LINKEDIN POSZT';

          // Próbáljuk elmenteni az adatbázisba DiscoveredLink-ként (hogy meglegyen)
          let existingLink = await prisma.discoveredLink.findUnique({ where: { url: cleanUrl } });
          
          if (!existingLink) {
            existingLink = await prisma.discoveredLink.create({
              data: {
                url: cleanUrl,
                title: title,
                source: sourceLabel,
                dorkKeyword: kw.keyword,
                dorkLabel: 'NETWORK'
              }
            });
          }
          
          allDiscoveredLinks.push({
            id: existingLink.id,
            title: title,
            url: cleanUrl,
            source: sourceLabel,
            dorkKeyword: kw.keyword,
            publishedAt: new Date().toISOString()
          });
        }
      } catch (searchError: any) {
        console.error(`[LinkedIn GoogleThis] Hiba a(z) ${kw.keyword} keresésnél:`, searchError);
      }
      
      // Kis várakozás a Google hívások között
      await new Promise(r => setTimeout(r, 1000));
    }

    console.log('[LinkedIn GoogleThis] Befejezte a munkát.');
    return allDiscoveredLinks;
  } catch (error) {
    console.error('[LinkedIn GoogleThis] Kritikus Hiba:', error);
    return [];
  }
}
