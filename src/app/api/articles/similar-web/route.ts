import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get('id');

    if (!articleId) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    // 1. Lekérjük a mentett cikket a bázisból
    const article = await prisma.article.findUnique({
      where: { id: articleId }
    });

    if (!article) {
      return NextResponse.json({ error: "Cikk nem található." }, { status: 404 });
    }

    // 2. Megkérjük a Geminit, hogy generáljon egy hatékony keresési kifejezést
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey!);
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

    const prompt = `
      Az alábbi hírcikk alapján generálj egy rövid, hatékony keresési kifejezést (max 5-6 szó), 
      amivel a Google News-on hasonló vagy kapcsolódó, frissebb híreket találhatok.
      
      CÍM: ${article.title}
      ÖSSZEFOGLALÓ: ${article.summary?.substring(0, 300)}
      
      Csak a keresési kifejezést add vissza, semmi mást.
    `;

    const result = await model.generateContent(prompt);
    const searchQuery = result.response.text().trim().replace(/"/g, '');

    // 3. Keresés futtatása a Google News RSS-en keresztül (mint a DiscoveryLab-ben)
    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(searchQuery)}&hl=hu&gl=HU&ceid=HU:hu`;
    const response = await fetch(rssUrl);
    const xml = await response.text();

    const items = xml.split('<item>');
    items.shift();

    const webResults = items.slice(0, 10).map((item, index) => {
      const title = item.match(/<title>(.*?)<\/title>/)?.[1] || "Nincs cím";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      
      // Tisztítsuk meg a címet a forrástól (pl. "Cím - Telex" -> "Cím")
      const titleParts = title.split(' - ');
      const cleanTitle = titleParts[0].trim();
      const source = titleParts.length > 1 ? titleParts[titleParts.length - 1].trim() : "Ismeretlen";

      return {
        id: `web-${Date.now()}-${index}`,
        title: cleanTitle,
        url: link,
        source: source,
        publishedAt: pubDate,
        status: 'pending'
      };
    });

    return NextResponse.json({ 
      searchQuery,
      results: webResults 
    });

  } catch (error: any) {
    console.error('Similar Web Search Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
