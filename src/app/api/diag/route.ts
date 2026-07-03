import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      select: { id: true, title: true }
    });

    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const articleData = articles.slice(0, 50).map(a => `ID: ${a.id} | CÍM: ${a.title}`).join('\n');

    const prompt = `
      Csoportosítsd ezeket 3-5 kategóriába:
      ${articleData}
      
      Válasz csak JSON: {"categories": [{"id": "id", "label": "label"}], "assignments": {}}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return NextResponse.json({ 
      raw: response.text(),
      status: "success"
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: "error" });
  }
}
