import { ApifyClient } from 'apify-client';

export async function runApifyScraper(url: string, platform: string, apiKey: string) {
  const client = new ApifyClient({ token: apiKey });
  let actorId = '';
  let input = {};

  if (platform === 'facebook') {
    actorId = 'apify/facebook-posts-scraper';
    input = { startUrls: [{ url }], resultsLimit: 1 };
  } else if (platform === 'instagram') {
    actorId = 'apify/instagram-scraper';
    input = { directUrls: [url], resultsType: 'details', resultsLimit: 1 };
  } else if (platform === 'tiktok') {
    actorId = 'clockwork/tiktok-scraper'; // Common tiktok scraper
    input = { postURLs: [url], resultsPerPage: 1 };
  } else if (platform === 'linkedin') {
    actorId = 'apify/linkedin-post-scraper'; // Assumed
    input = { urls: [url] };
  } else if (platform === 'x' || platform === 'twitter') {
    actorId = 'apify/twitter-scraper'; // free twitter scraper
    input = { startUrls: [{ url }], tweetsDesired: 1 };
  } else if (platform === 'google_maps') {
    actorId = 'compass/google-maps-reviews-scraper';
    input = { startUrls: [{ url }], maxReviews: 20 };
  } else {
    throw new Error(`Nem támogatott platform az Apify-hoz: ${platform}`);
  }

  console.log(`[Apify] Indítás: ${actorId} - URL: ${url}`);
  
  // Futtatás szinkron módon (megvárja a végét)
  const run = await client.actor(actorId).call(input);
  
  console.log(`[Apify] Futás befejeződött. Dataset ID: ${run.defaultDatasetId}`);
  
  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  
  return parseApifyResults(items, platform);
}

function parseApifyResults(items: any[], platform: string) {
  if (!items || items.length === 0) {
    throw new Error('Az Apify nem talált adatot ezen az URL-en.');
  }

  const data = items[0];
  let extractedText = "";
  let title = "";
  let imageUrl = "";
  let comments: { author: string; text: string }[] = [];
  let reactions = "";

  if (platform === 'facebook') {
    extractedText = data.text || "";
    title = data.user?.name || "Facebook Poszt";
    imageUrl = data.attachments?.[0]?.url || data.attachments?.[0]?.thumbnail_url || "";
    if (data.comments && Array.isArray(data.comments)) {
      comments = data.comments.map((c: any) => ({
        author: c.author?.name || 'Ismeretlen',
        text: c.message || ''
      }));
    }
  } else if (platform === 'instagram') {
    extractedText = data.caption || "";
    title = data.ownerFullName || data.ownerUsername || "Instagram Poszt";
    imageUrl = data.displayUrl || "";
    if (data.latestComments && Array.isArray(data.latestComments)) {
      comments = data.latestComments.map((c: any) => ({
        author: c.ownerUsername || 'Ismeretlen',
        text: c.text || ''
      }));
    }
  } else if (platform === 'tiktok') {
    extractedText = data.desc || data.text || "";
    title = data.authorMeta?.name || "TikTok Videó";
    imageUrl = data.videoMeta?.coverUrl || "";
  } else if (platform === 'x' || platform === 'twitter') {
    extractedText = data.full_text || data.text || "";
    title = data.user?.name || "X Poszt";
    imageUrl = data.media?.[0]?.media_url_https || "";
  } else if (platform === 'google_maps') {
    title = data.title || "Google Maps Hely";
    extractedText = `Értékelés: ${data.totalScore} csillag (${data.reviewsCount} vélemény)\n${data.categoryName || ''}`;
    imageUrl = data.imageUrl || "";
    if (data.reviews && Array.isArray(data.reviews)) {
      comments = data.reviews.map((c: any) => ({
        author: c.name || 'Ismeretlen',
        text: c.text || ''
      }));
    } else {
      // Ha maga az adat a review array (pl. compass/google-maps-reviews-scraper)
      comments = items.map(c => ({
        author: c.name || 'Ismeretlen',
        text: c.text || ''
      }));
    }
  } else if (platform === 'linkedin') {
    extractedText = data.text || "";
    title = data.author?.name || "LinkedIn Poszt";
    imageUrl = data.imageUrls?.[0] || "";
  }

  return { title, extractedText, imageUrl, comments, reactions };
}
