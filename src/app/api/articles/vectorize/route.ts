import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getEmbedding } from '@/lib/embeddings';

export async function POST() {
  console.log("Vectorize API: Indítás...");
  try {
    // Kényszerített teljes frissítés az új modell miatt
    const articles = await prisma.article.findMany();

    console.log(`Vectorize API: Teljes adatbázis frissítése... ${articles.length} cikk.`);

    if (articles.length === 0) {
      return NextResponse.json({ 
        message: "Minden cikk naprakész.", 
        successCount: 0, 
        failCount: 0 
      });
    }

    let successCount = 0;
    let failCount = 0;

    let lastError = "";
    for (const article of articles) {
      try {
        console.log(`Vectorize API: Feldolgozás: ${article.title.substring(0, 30)}...`);
        const embeddingText = `${article.title}\n\n${article.summary || ""}`;
        const embeddingArray = await getEmbedding(embeddingText);
        
        await prisma.article.update({
          where: { id: article.id },
          data: { embedding: JSON.stringify(embeddingArray) }
        });
        
        successCount++;
        if (successCount % 5 === 0) {
           await new Promise(r => setTimeout(r, 1000));
        }
      } catch (e: any) {
        lastError = e.message;
        console.error(`Vectorize API: Hiba a(z) ${article.id} cikknél:`, lastError);
        failCount++;
      }
    }

    console.log(`Vectorize API: Kész. Sikeres: ${successCount}, Hiba: ${failCount}`);

    return NextResponse.json({ 
      message: successCount === 0 ? `Hiba: ${lastError}` : "Vektorizálás befejezve.", 
      successCount, 
      failCount,
      totalRemaining: articles.length - successCount 
    });

  } catch (error: any) {
    console.error('Vectorize API Kritikus Hiba:', error);
    return NextResponse.json({ 
      error: error.message,
      successCount: 0,
      failCount: 0
    }, { status: 500 });
  }
}
