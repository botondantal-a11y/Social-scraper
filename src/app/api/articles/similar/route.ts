import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cosineSimilarity } from '@/lib/embeddings';
import { getSessionUser, visibleToUser } from '@/lib/session';

export async function GET(req: Request) {
  try {
    const user = await getSessionUser();
    const { searchParams } = new URL(req.url);
    const articleId = searchParams.get('id');

    if (!articleId) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    // 1. Lekérjük az alany cikket
    const targetArticle = await prisma.article.findUnique({
      where: { id: articleId }
    });

    if (!targetArticle || !targetArticle.embedding) {
      return NextResponse.json({ error: "Cikk nem található vagy nincs vektorizálva." }, { status: 404 });
    }

    const targetVector = JSON.parse(targetArticle.embedding);

    // 2. Lekérjük az összes többi cikket (amiknek van embeddingje)
    const allArticles = await prisma.article.findMany({
      where: {
        AND: [
          { id: { not: articleId } },
          { NOT: { embedding: null } },
          visibleToUser(user?.id ?? null, null)
        ]
      }
    });

    // 3. Kiszámoljuk a hasonlóságokat
    const similarArticles = allArticles
      .map(article => {
        const vector = JSON.parse(article.embedding!);
        const score = cosineSimilarity(targetVector, vector);
        return { 
          id: article.id, 
          title: article.title, 
          url: article.url,
          summary: article.summary,
          platform: article.platform,
          imageUrl: article.imageUrl,
          createdAt: article.createdAt,
          score 
        };
      })
      .filter(item => item.score > 0.6) // Csak a tényleg hasonlóakat (0.6 feletti küszöb)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Csak a top 5

    return NextResponse.json(similarArticles);

  } catch (error: any) {
    console.error('Similar Articles API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
