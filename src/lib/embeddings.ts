import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getEmbedding(text: string): Promise<number[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY hiányzik.");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-2" });

  // Tisztítsuk meg a szöveget (ne legyen túl hosszú, az embedding modelleknek is van limitje)
  const cleanText = text.replace(/\s+/g, ' ').substring(0, 8000);

  try {
    const result = await model.embedContent(cleanText);
    const embedding = result.embedding;
    
    // Az új modelleknél ellenőrizzük a pontos helyet
    const values = embedding?.values || (Array.isArray(embedding) ? embedding : null);
    
    if (!values) {
      console.error("Embedding API válasz szerkezete:", JSON.stringify(embedding));
      throw new Error("Az AI válasza nem tartalmaz vektor adatokat.");
    }
    
    return values;
  } catch (error: any) {
    console.error("Embedding generation error:", error);
    throw new Error(`AI hiba: ${error.message || "Ismeretlen SDK hiba"}`);
  }
}

export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let mA = 0;
  let mB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    mA += vecA[i] * vecA[i];
    mB += vecB[i] * vecB[i];
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  return dotProduct / (mA * mB);
}
