import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/client';
import { GoogleGenerativeAI } from '@google/generative-ai';
const googleTTS = require('google-tts-api');

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Nincsenek kiválasztva hírek.' }, { status: 400 });
    }

    // 1. Cikkek és videók begyűjtése
    const articles = await prisma.article.findMany({
      where: { id: { in: ids } }
    });

    const videos = await prisma.savedYoutubeVideo.findMany({
      where: { id: { in: ids } }
    });

    const items = [...articles, ...videos];

    if (items.length === 0) {
      return NextResponse.json({ error: 'A megadott azonosítókkal nem található tartalom.' }, { status: 404 });
    }

    // Szöveges tartalom előkészítése az AI számára
    let combinedContext = items.map(item => {
      let content = `Cím: ${item.title}\n`;
      if ('summary' in item && item.summary) {
        content += `Összefoglaló/Tartalom:\n${item.summary}\n`;
      } else if ('content' in item && item.content) {
        content += `Tartalom:\n${item.content}\n`;
      }
      return content;
    }).join('\n---\n\n');

    // Korlátozzuk a kontextus méretét, hogy a modell gyorsan válaszoljon
    if (combinedContext.length > 20000) {
      combinedContext = combinedContext.substring(0, 20000) + '... (csonkítva)';
    }

    // 2. Podcast Script generálása (Gemini)
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

    const prompt = `
Te egy profi, energikus rádiós műsorvezető vagy, aki egy "Üzleti Reggeli Show" keretében elemzi a legfrissebb híreket a hallgatóknak.
A célod egy hosszú, részletes, 5-10 perces hanganyag írása az alábbi híranyagokból. Nagyon mélyen menj bele a részletekbe, elemezd a cikkek tartalmát, és adj hozzá háttérinformációkat!
Szabályok:
- Csak Te beszélsz, egyedül, monológszerűen. Ne írj bele két szereplőt.
- A stílus legyen minimálisan humoros, de alapvetően informatív és szakmai ("Jó reggelt kívánok mindenkinek!", "Vágjunk is bele!").
- Legyen tele konkrétumokkal, tényekkel, számokkal és egyértelműen a nyers hírekből táplálkozzon. Ne találj ki dolgokat, csak azt elemezd, amit a cikkek tartalmaznak!
- A szöveget konkrét kimondásra szánjuk! NE használj speciális formázásokat, markdown-t, emoji-kat vagy stage instruction-öket.
- Szigorúan csak azt írd le, amit a hangszálakkal ki lehet mondani! Szövegként írd ki a számokat (pl. "ötszázmillió"), ha lehet.
- KIZÁRÓLAG TÖKÉLETES MAGYAR NYELVEN írj! Ne használj angol kifejezéseket, ha van rá magyar szó.
- Legyen folyékony és jól olvasható.

Itt vannak a hírek:
${combinedContext}
`;

    const result = await model.generateContent(prompt);
    let podcastScript = result.response.text();
    
    // Biztosítjuk, hogy ne maradjanak benne Markdown karakterek (**, *, #, stb.)
    podcastScript = podcastScript.replace(/[\*#_\[\]\(\)]/g, '');

    // 3. Hanggenerálás OpenAI TTS API-val
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Nincs beállítva az OpenAI API kulcs.' }, { status: 500 });
    }

    // Az OpenAI TTS API maximum 4096 karaktert fogad el egy kérésben.
    // Mivel 5-10 perces szöveget kértünk, a szöveg jóval hosszabb lehet, ezért darabolni kell.
    const chunks = [];
    let currentChunk = '';
    // Mondatokra bontjuk, hogy ne vágjunk el szavakat
    const sentences = podcastScript.split(/(?<=[.?!])\s+/);
    
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > 4000) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence + ' ';
      } else {
        currentChunk += sentence + ' ';
      }
    }
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    const audioBuffers = [];
    
    // Szépen sorban legeneráljuk az audio darabokat
    for (const chunk of chunks) {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: chunk,
          voice: 'onyx'
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI TTS API hiba:', errorText);
        return NextResponse.json({ error: 'Hiba az OpenAI hanggenerálás során.' }, { status: 500 });
      }

      const arrayBuffer = await response.arrayBuffer();
      audioBuffers.push(Buffer.from(arrayBuffer));
    }

    // A kapott MP3 bináris darabokat összefűzzük egyetlen nagy fájllá
    const combinedBase64 = Buffer.concat(audioBuffers).toString('base64');

    return NextResponse.json({ 
      success: true, 
      script: podcastScript,
      audioBase64: `data:audio/mp3;base64,${combinedBase64}` 
    });

  } catch (error) {
    console.error('Podcast API Error:', error);
    return NextResponse.json({ error: 'Hiba történt a podcast generálása során.' }, { status: 500 });
  }
}
