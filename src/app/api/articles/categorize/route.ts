import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST() {
  try {
    const articles = await prisma.article.findMany({
      select: { id: true, title: true }
    });

    if (articles.length === 0) {
      return NextResponse.json({ categories: [], assignments: {} });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Using local smart rule assignments.");
      return NextResponse.json({
        categories: [
          { id: "szrt", label: "Szerencsejáték Zrt." },
          { id: "tippmixpro", label: "TippmixPro" },
          { id: "vegashu", label: "Vegas.hu (Versenytárs)" },
          { id: "sorsjegy", label: "Kaparós Sorsjegy" },
          { id: "lotto", label: "Lottó & Számsorsjáték" },
          { id: "sportfogadas", label: "Sportfogadás" },
          { id: "tech", label: "Technológia & Innováció" },
          { id: "szabalyozas", label: "Szabályozás & Jog" },
          { id: "felelos_jatek", label: "Felelős Játékszervezés" },
          { id: "igaming", label: "Nemzetközi iGaming" },
          { id: "biztonsag", label: "Kiberbiztonság & Csalás" },
          { id: "egyeb", label: "Általános" }
        ],
        assignments: {}
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const articleData = articles.slice(0, 100).map(a => `ID: ${a.id} | CÍM: ${a.title}`).join('\n');

    const prompt = `
      FELADAT: Elemezd az alábbi híreket és csoportosítsd őket a legpontosabb kategóriába az alábbi szempontok szerint.
      
      KATEGÓRIA RENDSZER (Használd pontosan ezeket az azonosítókat az assignments-ben):
      - szrt: Szerencsejáték Zrt. (Cégcsoport saját hírei, PR, közlemények)
      - tippmixpro: TippmixPro (A Szerencsejáték Zrt. saját online sportfogadási platformja és a Tippmix termékcsalád)
      - vegashu: Vegas.hu (A legfőbb hazai online kaszinó versenytárs hírei)
      - sorsjegy: Kaparós Sorsjegy (Kaparós sorsjegyek, termékbevezetések, értékesítés)
      - lotto: Lottó & Számsorsjáték (Ötöslottó, Hatoslottó, Eurojackpot, számsorsjátékok)
      - sportfogadas: Sportfogadás (Általános sportfogadási piac, nemzetközi versenytársak pl. Bet365, Unibet)
      - tech: Technológia & Innováció (AI, platformfejlesztés, digitális átállás)
      - szabalyozas: Szabályozás & Jog (Szerencsejáték Felügyelet, törvények, engedélyek, bírságok)
      - felelos_jatek: Felelős Játékszervezés (Játékosvédelem, függőség-megelőzés)
      - igaming: Nemzetközi iGaming (Külföldi piacok, online kaszinó, póker trendek)
      - biztonsag: Kiberbiztonság & Csalás (Adathalászat, csalások, hackertámadások elleni védelem)
      - egyeb: Általános hírek
      
      SZABÁLYOK A BESOROLÁSHOZ (Prioritási sorrend):
      1. Ha a hír a Vegas.hu-ról vagy az LVC Diamond-ról szól, a kategória MINDIG "vegashu".
      2. Ha a hír a Tippmix-ről vagy a TippmixPro-ról szól, a kategória MINDIG "tippmixpro".
      3. Ha a hír kaparós sorsjegyekről szól, a kategória MINDIG "sorsjegy".
      4. Ha a hír lottóról, Eurojackpotról vagy számsorsjátékokról szól, a kategória MINDIG "lotto".
      5. Ha a hír játékosvédelemről, játékfüggőségről vagy felelős játékról szól, a kategória MINDIG "felelos_jatek".
      6. Ha a hír csalásról, hackerekről, kiberbiztonságról szól, a kategória MINDIG "biztonsag".
      7. Ha a hír szabályozásról, törvényekről, bírságokról vagy az SZTFH-ról szól, a kategória MINDIG "szabalyozas".
      8. Ha a hír általános Szerencsejáték Zrt. cégcsoportos PR, közlemény vagy gazdasági eredmény, és nem sorolható a fenti specifikus termékekhez, a kategória "szrt".
      9. Ha a hír más sportfogadási oldalról szól, a kategória "sportfogadas".
      10. Ha a hír más nemzetközi online kaszinóról vagy iGaming trendről szól, a kategória "igaming".
      
      HÍREK:
      ${articleData}
      
      VÁLASZ: Csak egyetlen JSON objektumot adj vissza ebben a formátumban:
      {
        "categories": [
          {"id": "szrt", "label": "Szerencsejáték Zrt."},
          {"id": "tippmixpro", "label": "TippmixPro"},
          {"id": "vegashu", "label": "Vegas.hu (Versenytárs)"},
          {"id": "sorsjegy", "label": "Kaparós Sorsjegy"},
          {"id": "lotto", "label": "Lottó & Számsorsjáték"},
          {"id": "sportfogadas", "label": "Sportfogadás"},
          {"id": "tech", "label": "Technológia & Innováció"},
          {"id": "szabalyozas", "label": "Szabályozás & Jog"},
          {"id": "felelos_jatek", "label": "Felelős Játékszervezés"},
          {"id": "igaming", "label": "Nemzetközi iGaming"},
          {"id": "biztonsag", "label": "Kiberbiztonság & Csalás"},
          {"id": "egyeb", "label": "Általános"}
        ],
        "assignments": {"article_id": "szrt"}
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Robusztusabb JSON kinyerés (markdown blokkok kezelése)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }

    try {
      const data = JSON.parse(text);
      console.log(`Early Warning: ${data.categories?.length} kategória generálva.`);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("JSON Parse Error. Raw text:", text);
      // Fallback kategóriák, ha az AI elrontja a formátumot
      return NextResponse.json({
        categories: [
          { id: "szrt", label: "Szerencsejáték Zrt." },
          { id: "tippmixpro", label: "TippmixPro" },
          { id: "vegashu", label: "Vegas.hu (Versenytárs)" },
          { id: "sorsjegy", label: "Kaparós Sorsjegy" },
          { id: "lotto", label: "Lottó & Számsorsjáték" },
          { id: "sportfogadas", label: "Sportfogadás" },
          { id: "tech", label: "Technológia & Innováció" },
          { id: "szabalyozas", label: "Szabályozás & Jog" },
          { id: "felelos_jatek", label: "Felelős Játékszervezés" },
          { id: "igaming", label: "Nemzetközi iGaming" },
          { id: "biztonsag", label: "Kiberbiztonság & Csalás" },
          { id: "egyeb", label: "Általános" }
        ],
        assignments: {}
      });
    }
  } catch (error: any) {
    console.error('Categorization Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
