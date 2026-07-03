import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getSessionUser, visibleToUser } from '@/lib/session';

export const maxDuration = 300; // 5 perc timeout

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const user = await getSessionUser();
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Hibás kérés' }, { status: 400 });
    }

    // 1. Kontextus gyűjtése (utolsó 50 látható cikk és 50 videó összefoglaló)
    const recentArticles = await prisma.article.findMany({
      where: visibleToUser(user?.id ?? null, null),
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: { title: true, summary: true, url: true, platform: true }
    });

    const recentVideos = await prisma.savedYoutubeVideo.findMany({
      where: visibleToUser(user?.id ?? null, null),
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: { title: true, summary: true, url: true }
    });

    // 2. Tudásbázis szöveges formátumra alakítása
    let contextText = 'Íme a platformon található legutóbbi cikkek és videók adatai (TUDÁSBÁZIS):\n\n';
    
    if (recentArticles.length > 0) {
      contextText += '--- CIKKEK ---\n';
      recentArticles.forEach(a => {
        contextText += `Cím: ${a.title}\nPlatform: ${a.platform}\nForrás URL: ${a.url}\nÖsszefoglaló: ${a.summary}\n\n`;
      });
    }

    if (recentVideos.length > 0) {
      contextText += '--- YOUTUBE VIDEÓK ---\n';
      recentVideos.forEach(v => {
        contextText += `Videó címe: ${v.title}\nForrás URL: ${v.url}\nÖsszefoglaló: ${v.summary}\n\n`;
      });
    }

    if (recentArticles.length === 0 && recentVideos.length === 0) {
      contextText += 'A tudásbázis jelenleg üres.';
    }

    // 3. Prompt összeállítása
    const systemPrompt = `Te egy profi Market Intelligence elemző és asszisztens vagy.
A feladatod, hogy a megadott TUDÁSBÁZIS alapján pontos, tényszerű és hasznos válaszokat adj a felhasználó kérdéseire.
Ha a felhasználó kérdésére a válasz megtalálható a TUDÁSBÁZISBAN, akkor feltétlenül hivatkozz a megfelelő cikkre vagy videóra (említsd meg a címét, vagy add meg az URL-jét).
Ha a kérdésre nincs információ a TUDÁSBÁZISBAN, akkor használd a saját általános tudásodat, de egyértelműen jelezd, hogy erre vonatkozó adat nincs a lementett cikkek között.

${contextText}`;

    const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' });

    // Format messages for Gemini Chat
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: systemPrompt }]
        },
        {
          role: 'model',
          parts: [{ text: 'Értettem. Készen állok a válaszadásra a tudásbázis alapján.' }]
        },
        ...messages.slice(0, -1).map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ]
    });

    const userMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Hiba történt az AI válaszának generálásakor.' }, { status: 500 });
  }
}
