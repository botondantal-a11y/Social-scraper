import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/client';
import { GoogleGenerativeAI } from '@google/generative-ai';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { datasetId, datasetIds } = await req.json();
    const idsToFetch = datasetIds || (datasetId ? [datasetId] : []);
    
    if (idsToFetch.length === 0) {
      return NextResponse.json({ error: "Missing datasetId(s)" }, { status: 400 });
    }

    const datasets = await prisma.statisticDataset.findMany({
      where: { id: { in: idsToFetch } }
    });

    if (datasets.length === 0) {
      return NextResponse.json({ error: "Dataset(s) not found" }, { status: 404 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY hiányzik.");
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

    // Combine data for all datasets
    const combinedData = datasets.map(d => `Forrás: ${d.title}\nAdat: ${d.data}`).join("\n\n");

    const prompt = `
Te egy profi Business Intelligence (BI) elemző vagy. Kaptál egy vagy több nyers, JSON formátumú statisztikai adatkészletet, amelyet prezentációkból nyertünk ki.
Kérlek, írj egy átfogó, profi vezetői összefoglalót (Executive Summary) a trendekről, a kiugró adatokról és a legfontosabb megállapításokról!
Ha több adatkészletet is kaptál, hasonlítsd össze őket és szintetizáld az eredményeket!

Használj Markdown formázást! (Címsorok, vastagítás, listák, stb.)
Fogalmazz érthetően, lényegretörően, de mégis szakmaian.

Az adatok:
${combinedData}
    `;

    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    // Only save to DB if it's a single dataset
    if (datasets.length === 1) {
      await prisma.statisticDataset.update({
        where: { id: datasets[0].id },
        data: { summary }
      });
    }

    return NextResponse.json({ success: true, summary });

  } catch (error: any) {
    console.error('Error generating AI analysis:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
