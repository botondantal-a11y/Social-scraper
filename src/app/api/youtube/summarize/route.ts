import { NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@/generated/client';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const prisma = new PrismaClient();

export const maxDuration = 300; // 5 perc timeout Vercel-en

function chunkText(text: string, maxTokens: number = 2500): string[] {
  const words = text.split(/\s+/);
  const chunks: string[] = [];
  let currentChunk: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (currentLength + word.length > maxTokens * 4) {
      chunks.push(currentChunk.join(' '));
      currentChunk = [word];
      currentLength = word.length;
    } else {
      currentChunk.push(word);
      currentLength += word.length + 1;
    }
  }
  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(' '));
  }
  return chunks;
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: 'URL kötelező' }, { status: 400 });

    // Extract video ID from URL
    const videoIdMatch = url.match(/(?:v=|youtu\.be\/|youtube\.com\/embed\/)([^&]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) {
      return NextResponse.json({ error: 'Érvénytelen YouTube URL' }, { status: 400 });
    }

    // Fetch video metadata via OEmbed API
    let videoTitle = 'Ismeretlen videó cím';
    let imageUrl = '';
    try {
      const oembedRes = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
      if (oembedRes.ok) {
        const oembedData = await oembedRes.json();
        videoTitle = oembedData.title || videoTitle;
        imageUrl = oembedData.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      } else {
        imageUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    } catch (e) {
      imageUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }

    // Fetch transcript
    let transcriptData;
    try {
      transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
    } catch (e) {
      console.error('Transcript error:', e);
      return NextResponse.json({ error: 'Nem található felirat (transcript) ehhez a videóhoz, vagy a videó privát/törölt.' }, { status: 404 });
    }

    const transcriptText = transcriptData.map(t => t.text).join(' ');

    if (!transcriptText || transcriptText.trim().length === 0) {
      return NextResponse.json({ error: 'A videóhoz tartozó felirat üres.' }, { status: 404 });
    }

    // Initialize Gemini
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-3.1-flash-lite'
    });

    // 1. Szöveg darabolása (Chunking) kb 2500 tokenes darabokra
    const chunks = chunkText(transcriptText, 2500);
    const translatedChunks: string[] = [];

    // 2. Darabok fordítása (szekvenciálisan, hogy ne ütközzünk rate limitbe)
    for (let i = 0; i < chunks.length; i++) {
      try {
        const translatePrompt = `Kérlek, fordítsd le az alábbi angol videó-felirat részletet pontosan és olvashatóan magyarra. Ne fűzz hozzá semmilyen megjegyzést, bevezetőt vagy lezárást, KIZÁRÓLAG a lefordított szöveget add vissza:\n\n${chunks[i]}`;
        const res = await model.generateContent(translatePrompt);
        translatedChunks.push(res.response.text().trim());
      } catch (e) {
        console.error(`Hiba a ${i}. rész fordításánál:`, e);
        translatedChunks.push("\n\n[Hiba történt ennek a résznek a fordításakor]\n\n");
      }
    }

    const fullTranslatedTranscript = translatedChunks.join(' ');

    // 3. Összefoglaló generálása a lefordított szövegből
    let summary = '';
    try {
      const summaryPrompt = `Kérlek olvasd el az alábbi magyarra fordított videó-leiratot, és készíts egy nagyon részletes, jól strukturált, magyar nyelvű összefoglalót a videó fő témáiról, tanulságairól, adatairól és minden fontos részletéről. Használj gazdag Markdown formázást (fejlécek, listák, kiemelések). Ne írj felvezető szöveget, egyből az összefoglalóval kezdd.\n\nVideó szövege:\n${fullTranslatedTranscript}`;
      const summaryRes = await model.generateContent(summaryPrompt);
      summary = summaryRes.response.text().trim();
    } catch (e) {
      console.error('Hiba az összefoglaló generálásakor:', e);
      summary = "Hiba történt az összefoglaló generálása során, de a teljes fordítás lentebb elérhető.";
    }

    return NextResponse.json({
      videoId,
      url,
      title: videoTitle,
      imageUrl: imageUrl,
      transcript: fullTranslatedTranscript,
      originalTranscript: transcriptText,
      summary: summary
    });

  } catch (error) {
    console.error('Youtube summarizer error:', error);
    return NextResponse.json({ error: 'Belső szerverhiba történt a videó feldolgozása közben.' }, { status: 500 });
  }
}
