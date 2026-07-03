import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, Schema, SchemaType } from "@google/generative-ai";
const pdfParse = require("pdf-parse/lib/pdf-parse.js");
const google = require('googlethis');
import { PrismaClient } from "../../../../generated/client";

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

import { getSessionUser } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    const sessionUser = await getSessionUser();
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Read the file into a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse PDF text
    const pdfData = await pdfParse(buffer);
    const textContent = pdfData.text;

    // Use Gemini to extract trend
    const responseSchema: Schema = {
      type: SchemaType.OBJECT,
      properties: {
        title: { type: SchemaType.STRING, description: "A trend rövid neve" },
        category: { type: SchemaType.STRING, description: "A trend kategóriája" },
        horizon: { type: SchemaType.STRING, description: "Melyik évre/időszakra vonatkozik (pl. 2025-2030)" },
        description: { type: SchemaType.STRING, description: "Részletes leírás" },
        signalType: { type: SchemaType.STRING, description: "A trend típusa (pl. STRENGTHENING, WEAKENING)" },
        background: { type: SchemaType.STRING, description: "A 'Background' szekció szövege, ha van" },
        impactDetail: { type: SchemaType.STRING, description: "Az 'Impacts' szekció szövege, ha van" },
        imagePrompt: { type: SchemaType.STRING, description: "Egy rövid, 3-4 szavas angol nyelvű kifejezés Google Képkereséshez, ami a legjobban illusztrálja ezt a trendet. Csak angolul!" }
      },
      required: ["title", "category", "horizon", "description", "signalType", "imagePrompt"]
    };

    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite",
      generationConfig: {
        temperature: 0,
        responseMimeType: "application/json",
        responseSchema
      }
    });

    const prompt = `Elemezd ki ezt a PESTEL / Trend riport szöveget: "${textContent.substring(0, 30000)}".
Kérlek, vond ki belőle az alábbi adatokat JSON formátumban:
- "title": A trend címe. KIZÁRÓLAG magyarul!
- "category": A trend PESTEL kategóriája (Political, Economic, Social, Technological, Environmental, Legal). Ha nem egyértelmű, próbáld besorolni, vagy használd az eredetit.
- "horizon": Az időtáv (pl. "2025", "2030", vagy akár egy sáv "2025-2030"). Pontosan úgy add vissza, ahogy a dokumentumban szerepel!
- "description": A trend rövid összefoglalása / background. KIZÁRÓLAG magyarul!
- "signalType": Milyen típusú jelzés? (pl. Erősödő, Gyengülő, Wild card, stb.) KIZÁRÓLAG magyarul!
- "background": Részletesebb háttérinformáció. KIZÁRÓLAG magyarul!
- "impactDetail": A trend várható hatásai. KIZÁRÓLAG magyarul!
- "imagePrompt": A trend vizuális megjelenítésére szolgáló angol nyelvű kifejezés Google Képkereséshez (pl. "futuristic autonomous cars cyber city"). Max 3-5 szó, tisztán angolul.

Nagyon fontos: 
1. Minden szöveges mezőt KIZÁRÓLAG MAGYARUL adj vissza, kivéve az imagePrompt-ot, ami ANGOL kell legyen!
2. NE KÖLTS HOZZÁ adatot, ha valami nincs a szövegben, hagyd null értéken. Csak azt a trendet dolgozd fel, amiről a szöveg szól!

Csak és kizárólag érvényes JSON-t adj vissza markdown vagy egyéb szöveg nélkül!`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Tegyük fel, hogy egyetlen trend van a PDF-ben
    const jsonStr = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
    const trend = JSON.parse(jsonStr);

    let imageUrl = null;
    if (trend.imagePrompt) {
      try {
        const images = await google.image(trend.imagePrompt, { safe: false });
        if (images && images.length > 0) {
          imageUrl = images[0].url;
        }
      } catch (err) {
        console.error("Google image search failed:", err);
      }
    }

    // Adatbázisba mentés
    const savedDocument = await prisma.trendDocument.create({
      data: {
        filename: file.name,
        ownerId: sessionUser?.id ?? null,
        trends: {
          create: [{
            ...(sessionUser ? { owner: { connect: { id: sessionUser.id } } } : {}),
            visibility: "private",
            title: trend.title || "Ismeretlen Trend",
            category: trend.category || "Egyéb",
            horizon: trend.horizon ? String(trend.horizon) : "Ismeretlen",
            description: trend.description || "Nincs leírás",
            signalType: trend.signalType,
            background: trend.background || null,
            impactDetail: trend.impactDetail || null,
            fullText: textContent.substring(0, 30000),
            imageUrl: imageUrl,
            isOnRadar: false
          }]
        }
      },
      include: {
        trends: true
      }
    });

    return NextResponse.json({ success: true, document: savedDocument });
  } catch (error: any) {
    console.error("PDF upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to process PDF" }, { status: 500 });
  }
}
