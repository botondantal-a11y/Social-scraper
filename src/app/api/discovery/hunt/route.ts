import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { dorks } = await req.json();
    
    if (!dorks || dorks.length === 0) {
      return NextResponse.json({ error: "Nincsenek aktív keresési parancsok." }, { status: 400 });
    }

    const allDiscoveredLinks: any[] = [];

    for (const dork of dorks) {
      // Csak akkor ugrunk át, ha explicit ki van kapcsolva
      if (dork.isActive === false) continue;

      try {
        // Google News RSS feed használata - sokkal stabilabb és nem blokkolják
        const cleanQuery = dork.query.replace(/'/g, '');
        let rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(cleanQuery)}`;
        
        // Ha magyar nyelvre van állítva a dork, rátesszük a szűkítést
        if (!dork.language || dork.language === 'HU') {
          rssUrl += '&hl=hu&gl=HU&ceid=HU:hu';
        }
        
        const response = await fetch(rssUrl);
        const xml = await response.text();

        // Egyszerű XML parsing a linkekhez és címekhez
        const items = xml.split('<item>');
        items.shift(); // Eltávolítjuk a fejlécet

        const limit = dork.maxResults || 30;
        const links = await Promise.all(items.slice(0, limit).map(async (item, index) => {
          const title = item.match(/<title>(.*?)<\/title>/)?.[1] || "Nincs cím";
          const googleLink = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
          const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
          
          let finalUrl = googleLink;
          let sourceLabel = dork.label;
          
          try {
            const res = await fetch(googleLink, { 
              method: 'GET', 
              redirect: 'follow',
              headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } 
            });
            finalUrl = res.url;
            
            // Kinyerjük a domain nevet a forrásnak
            const urlObj = new URL(finalUrl);
            const domainParts = urlObj.hostname.replace('www.', '').split('.');
            if (domainParts.length >= 2) {
              sourceLabel = domainParts[domainParts.length - 2].toUpperCase();
            } else {
              sourceLabel = domainParts[0].toUpperCase();
            }

            // Fallback: Ha még mindig GOOGLE, próbáljuk kinyerni a cím végéről (pl. "Cím - Telex")
            if (sourceLabel === 'GOOGLE' && title.includes(' - ')) {
              const titleParts = title.split(' - ');
              sourceLabel = titleParts[titleParts.length - 1].trim().toUpperCase();
            }
          } catch (e) {
            // Fallback dork labelre vagy címből kinyerésre
            if (title.includes(' - ')) {
              const titleParts = title.split(' - ');
              sourceLabel = titleParts[titleParts.length - 1].trim().toUpperCase();
            }
          }

          return {
            id: `found-${Date.now()}-${index}-${Math.random()}`,
            title: title.split(' - ')[0].trim(), // Tisztítsuk meg a címet a forrástól
            url: finalUrl,
            source: sourceLabel,
            publishedAt: pubDate,
            dorkLabel: dork.label,
            dorkKeyword: dork.keyword,
            status: 'pending'
          };
        }));

        allDiscoveredLinks.push(...links.filter(l => l.url !== ""));
      } catch (e) {
        console.error(`Error hunting RSS for dork ${dork.label}:`, e);
      }
    }

    // Duplikációk szűrése URL alapján
    const uniqueLinks = Array.from(new Map(allDiscoveredLinks.map(item => [item.url, item])).values());

    return NextResponse.json({ links: uniqueLinks });

  } catch (error: any) {
    console.error('Discovery Hunt Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
