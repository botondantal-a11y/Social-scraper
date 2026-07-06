import { ApifyClient } from 'apify-client';

export type TranscriptSegment = { text: string };

// A YouTube-leirat Apify actor (a UI/env-ben felülírható, ha elavul).
const DEFAULT_TRANSCRIPT_ACTOR =
  process.env.APIFY_ACTOR_YT_TRANSCRIPT || 'pintostudio/youtube-transcript-scraper';

/**
 * YouTube-felirat lekérése Apify-on keresztül (felhő-IP blokk megkerülésére).
 * Sokféle actor kimeneti formátumát próbálja értelmezni.
 */
export async function fetchTranscriptViaApify(
  videoUrl: string,
  token: string
): Promise<TranscriptSegment[]> {
  const client = new ApifyClient({ token });
  const actorId = DEFAULT_TRANSCRIPT_ACTOR;

  // A leggyakoribb input-mezőket egyszerre adjuk meg, hogy több actorral is működjön.
  const input: Record<string, unknown> = {
    videoUrl,
    videoUrls: [videoUrl],
    startUrls: [{ url: videoUrl }],
    urls: [videoUrl],
  };

  const run = await client.actor(actorId).call(input, { timeout: 300, memory: 512 });
  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  return parseTranscriptItems(items as Record<string, any>[]);
}

function parseTranscriptItems(items: Record<string, any>[]): TranscriptSegment[] {
  const segments: TranscriptSegment[] = [];

  for (const item of items) {
    // Eset 1: az item maga egy szegmens {text: "..."}
    if (typeof item.text === 'string' && item.text.trim() && !Array.isArray(item.transcript)) {
      segments.push({ text: item.text });
      continue;
    }

    // Eset 2: az item tartalmaz egy transcript tömböt
    const arr =
      item.transcript ||
      item.captions ||
      item.subtitles ||
      item.data ||
      item.segments;

    if (Array.isArray(arr)) {
      for (const seg of arr) {
        if (typeof seg === 'string' && seg.trim()) {
          segments.push({ text: seg });
        } else if (seg && typeof seg === 'object') {
          const t = seg.text || seg.caption || seg.line || seg.content;
          if (typeof t === 'string' && t.trim()) segments.push({ text: t });
        }
      }
      continue;
    }

    // Eset 3: egyetlen nagy szövegmező
    const whole = item.transcriptText || item.fullText || item.captionsText;
    if (typeof whole === 'string' && whole.trim()) {
      segments.push({ text: whole });
    }
  }

  return segments;
}
