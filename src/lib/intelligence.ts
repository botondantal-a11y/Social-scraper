import { GoogleGenerativeAI } from "@google/generative-ai";
import { prisma } from "./prisma";

export async function generateStrategicReport(ids?: string[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY hiányzik.");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-3.1-flash-lite",
    generationConfig: { responseMimeType: "application/json" }
  });

  // 1. Cikkek lekérése (opcionális szűréssel)
  const articles = await prisma.article.findMany({
    where: ids ? { id: { in: ids } } : {},
    orderBy: { createdAt: 'desc' }
  });

  if (articles.length === 0) {
    return {
      summary: "Még nincsenek mentett cikkek az elemzéshez.",
      categories: [],
      updatedAt: new Date().toISOString()
    };
  }

  // 2. Adatok előkészítése az AI számára
  // Elküldjük a címeket, URL-eket, platformokat és az összefoglalók elejét az AI-nak
  const articleContext = articles.map(a => ({
    id: a.id,
    title: a.title,
    url: a.url,
    platform: a.platform,
    summary: a.summary?.substring(0, 500) || "Nincs összefoglaló."
  }));

  const prompt = `
    Te egy vezető stratégiai elemző vagy. A feladatod, hogy az alábbi hírekből és bejegyzésekből készíts egy átfogó "Intelligencia Jelentést".
    
    A jelentésnek tartalmaznia kell:
    1. Egy globális összefoglalót (Executive Summary) a legfontosabb trendekről.
    2. Kategóriák szerinti bontást (pl. Versenytársak, Szabályozás, Piaci Trendek, Technológia, stb.).
    3. Minden kategóriához írj egy "Stratégiai Megállapítást" (Synthesis), ami összefoglalja az oda tartozó hírek lényegét.
    4. Minden kategóriához sorolj fel "Kiemelt Pontokat" (Key Findings).
    5. Javaslatokat a következő lépésekre.

    KÖTELEZŐ HIVATKOZÁSI SZABÁLY:
    Bárhol, ahol konkrét hírre vagy információra hivatkozol (az executiveSummary-ben, a synthesis-ben vagy a findings pontjaiban), KÖTELEZŐ elhelyezned a hozzá tartozó eredeti cikk URL-jét standard markdown link formájában: [Megfelelő Kulcsszó vagy Cikk Címe](URL). Például: "...az új kutatások alapján a Szerencsejáték Zrt. [új digitális felületet tesztel](https://...)...."
    Mindig használj értelmes leíró szöveget a linkeknél, ne csak azt írd ki, hogy "link" vagy "forrás".

    A válaszod egy szigorúan érvényes JSON legyen az alábbi formátumban:
    {
      "executiveSummary": "A teljes portfólió globális összefoglalója a legfontosabb megállapításokkal és linkekkel...",
      "categories": [
        {
          "name": "Kategória Neve",
          "synthesis": "A kategóriába tartozó hírek összefüggő szintézise a forrás cikkek linkjeivel...",
          "findings": [
            "Megállapítás 1 [kapcsolódó cikk](https://...)",
            "Megállapítás 2 [kapcsolódó cikk](https://...)"
          ],
          "relevance": "Miért fontos ez a cégnek?",
          "relatedArticles": ["id1", "id2"]
        }
      ],
      "recommendations": ["Javaslat 1", "Javaslat 2"]
    }

    Elemzendő adatok:
    ${JSON.stringify(articleContext)}
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const parsed = JSON.parse(responseText);

    // Map each relatedArticle ID to its actual article info (title, url, platform)
    if (parsed.categories && Array.isArray(parsed.categories)) {
      parsed.categories = parsed.categories.map((cat: any) => {
        const related = (cat.relatedArticles || [])
          .map((id: string) => {
            const art = articles.find(a => a.id === id);
            return art ? { id: art.id, title: art.title, url: art.url, platform: art.platform } : null;
          })
          .filter(Boolean);
        return {
          ...cat,
          relatedArticles: related
        };
      });
    }

    return {
      ...parsed,
      updatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error("Intelligence Report Generation Error:", error);
    throw new Error("Nem sikerült generálni a stratégiai jelentést.");
  }
}
