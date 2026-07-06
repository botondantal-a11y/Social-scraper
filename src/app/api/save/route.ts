import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getEmbedding } from '@/lib/embeddings';
import { getSessionUser } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const user = await getSessionUser();
    if (!user) return NextResponse.json({ error: "Bejelentkezés szükséges a mentéshez." }, { status: 401 });

    const data = await req.json();
    const { title, url, platform, fullText, summary, comments, commentSummary, reactions, imageUrl, discoveryKeyword, publishedAt } = data;
    const visibility = data.visibility === 'shared' ? 'shared' : 'private';

    if (!url || !fullText) {
      return NextResponse.json({ error: "Hiányzó adatok a mentéshez." }, { status: 400 });
    }

    // Embedding generálása (a cím és az összefoglaló alapján)
    let embeddingString = null;
    try {
      const embeddingText = `${title}\n\n${summary || ""}`;
      const embeddingArray = await getEmbedding(embeddingText);
      embeddingString = JSON.stringify(embeddingArray);
    } catch (e) {
      console.warn("Failed to generate embedding during save:", e);
    }

    // Először megkeressük, létezik-e már a cikk (URL alapján, a saját mentéseink között)
    const existingArticle = await prisma.article.findFirst({
      where: { url: String(url), ownerId: user.id }
    });

    let savedArticle;

    if (existingArticle) {
      // Ha létezik, csak frissítjük az adatait
      savedArticle = await prisma.article.update({
        where: { id: existingArticle.id },
        data: {
          title: String(title || "Névtelen cikk"),
          fullText: String(fullText),
          summary: String(summary || "Nincs összefoglaló"),
          commentSummary: commentSummary ? String(commentSummary) : null,
          reactions: reactions ? typeof reactions === 'object' ? JSON.stringify(reactions) : String(reactions) : null,
          imageUrl: imageUrl ? String(imageUrl) : null,
          discoveryKeyword: discoveryKeyword ? String(discoveryKeyword) : undefined,
          publishedAt: publishedAt ? new Date(publishedAt) : undefined,
          embedding: embeddingString,
          visibility
        }
      });
    } else {
      // Ha új, létrehozzuk kommentekkel együtt
      savedArticle = await prisma.article.create({
        data: {
          title: String(title || "Névtelen cikk"),
          url: String(url),
          platform: String(platform || "general"),
          fullText: String(fullText),
          summary: String(summary || "Nincs összefoglaló"),
          commentSummary: commentSummary ? String(commentSummary) : null,
          reactions: reactions ? typeof reactions === 'object' ? JSON.stringify(reactions) : String(reactions) : null,
          imageUrl: imageUrl ? String(imageUrl) : null,
          discoveryKeyword: discoveryKeyword ? String(discoveryKeyword) : null,
          publishedAt: publishedAt ? new Date(publishedAt) : null,
          embedding: embeddingString,
          owner: { connect: { id: user.id } },
          visibility,
          sharedAt: visibility === 'shared' ? new Date() : null,
          comments: {
            create: comments && Array.isArray(comments) ? comments.map((c: any) => ({
              author: String(c?.author || "Ismeretlen"),
              text: String(c?.text || "")
            })) : []
          }
        }
      });
    }

    return NextResponse.json({ success: true, articleId: savedArticle.id });
  } catch (error: any) {
    console.error("Save error:", error);
    return NextResponse.json({ error: "Hiba történt a mentés során: " + (error.message || "Ismeretlen hiba") }, { status: 500 });
  }
}
