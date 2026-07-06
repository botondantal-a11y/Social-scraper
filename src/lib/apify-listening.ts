import { ApifyClient } from 'apify-client';

export type NormalizedComment = {
  author: string;
  authorUrl: string;
  text: string;
  date: string;
  likes: number | string;
  replies: number | string;
  url: string;
};

export type ListeningPlatform =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'google_maps'
  | 'linkedin'
  | 'reddit';

type PlatformConfig = {
  label: string;
  // Alapértelmezett Apify actor (a UI-ban felülírható, ha elavul)
  defaultActor: string;
  buildInput: (urls: string[], limit: number) => Record<string, unknown>;
};

// A pontos actor-ID-ket az Apify Store-ból ellenőriztük; a UI-ban felülírhatók.
export const PLATFORMS: Record<ListeningPlatform, PlatformConfig> = {
  facebook: {
    label: 'Facebook',
    defaultActor: 'apify/facebook-comments-scraper',
    buildInput: (urls, limit) => ({
      startUrls: urls.map((url) => ({ url })),
      resultsLimit: limit,
      includeNestedComments: false,
    }),
  },
  instagram: {
    label: 'Instagram',
    defaultActor: 'apify/instagram-comment-scraper',
    buildInput: (urls, limit) => ({
      directUrls: urls,
      resultsLimit: limit,
    }),
  },
  tiktok: {
    label: 'TikTok',
    defaultActor: 'clockworks/tiktok-comments-scraper',
    buildInput: (urls, limit) => ({
      postURLs: urls,
      maxComments: limit,
      commentsPerPost: limit,
    }),
  },
  youtube: {
    label: 'YouTube',
    defaultActor: 'streamers/youtube-comments-scraper',
    buildInput: (urls, limit) => ({
      startUrls: urls.map((url) => ({ url })),
      maxComments: limit,
    }),
  },
  google_maps: {
    label: 'Google Maps',
    defaultActor: 'compass/google-maps-reviews-scraper',
    buildInput: (urls, limit) => ({
      startUrls: urls.map((url) => ({ url })),
      maxReviews: limit,
    }),
  },
  linkedin: {
    label: 'LinkedIn',
    defaultActor: 'apimaestro/linkedin-post-comments-replies-engagements-scraper-no-cookies',
    buildInput: (urls, limit) => ({
      // A legtöbb LinkedIn komment-actor a poszt URL-t 'postUrls' vagy 'urls' néven kéri – mindkettőt megadjuk.
      postUrls: urls,
      urls,
      startUrls: urls.map((url) => ({ url })),
      maxItems: limit,
    }),
  },
  reddit: {
    label: 'Reddit',
    defaultActor: 'trudax/reddit-scraper-lite',
    buildInput: (urls, limit) => ({
      startUrls: urls.map((url) => ({ url })),
      skipComments: false,
      skipUserPosts: false,
      skipCommunity: true,
      includeMediaLinks: true,
      maxComments: limit,
      maxItems: limit,
      maxPostCount: limit,
      proxy: { useApifyProxy: true },
    }),
  },
};

function firstString(...vals: unknown[]): string {
  for (const v of vals) {
    if (typeof v === 'string' && v.trim()) return v;
    if (typeof v === 'number') return String(v);
  }
  return '';
}

function firstNumber(...vals: unknown[]): number | string {
  for (const v of vals) {
    if (typeof v === 'number') return v;
    if (typeof v === 'string' && v.trim() && !isNaN(Number(v))) return Number(v);
  }
  return '';
}

// Sokféle actor kimeneti mezőnevét egységes formára hozza.
export function normalizeComment(item: Record<string, any>): NormalizedComment {
  const author = firstString(
    item.author,
    item.authorName,
    item.ownerUsername,
    item.username,
    item.userName,
    item.name,
    item.user?.name,
    item.user?.username,
    item.profileName,
    item.commenterName,
    item.reviewerName,
    item.authorTitle
  );

  const authorUrl = firstString(
    item.authorUrl,
    item.profileUrl,
    item.ownerProfilePicUrl && item.ownerId ? `https://instagram.com/${item.ownerUsername}` : '',
    item.user?.profileUrl,
    item.commentUrl,
    item.reviewerUrl,
    item.authorProfileUrl
  );

  const text = firstString(
    item.text,
    item.message,
    item.comment,
    item.commentText,
    item.content,
    item.reviewText,
    item.review,
    item.body
  );

  const date = firstString(
    item.date,
    item.timestamp,
    item.publishedAt,
    item.createdAt,
    item.created,
    item.createTime,
    item.time,
    item.commentDate,
    item.publishedTimeText,
    item.reviewDate,
    item.postedAt
  );

  const likes = firstNumber(
    item.likes,
    item.likesCount,
    item.likeCount,
    item.likesNumber,
    item.reactionsCount,
    item.diggCount,
    item.voteCount,
    item.upVotes,
    item.upvotes,
    item.score,
    item.numberOfupVotes
  );

  const replies = firstNumber(
    item.replies,
    item.repliesCount,
    item.replyCount,
    item.commentsCount,
    item.replyCommentCount,
    item.numberOfComments,
    item.numberofComments,
    item.numberOfreplies
  );

  const url = firstString(
    item.commentUrl,
    item.url,
    item.postUrl,
    item.inputUrl,
    item.videoUrl,
    item.link
  );

  return { author, authorUrl, text, date, likes, replies, url };
}

export type ListeningResult = {
  comments: NormalizedComment[];
  rawCount: number;
  actorUsed: string;
  runId: string;
};

/**
 * Lefuttatja a megfelelő Apify actort a megadott URL-ekre, és normalizált kommenteket ad vissza.
 */
export async function runListening(opts: {
  platform: ListeningPlatform;
  urls: string[];
  limit: number;
  token: string;
  actorOverride?: string;
}): Promise<ListeningResult> {
  const { platform, urls, limit, token, actorOverride } = opts;
  const config = PLATFORMS[platform];
  if (!config) throw new Error(`Nem támogatott platform: ${platform}`);

  const actorId = (actorOverride && actorOverride.trim()) || config.defaultActor;
  const client = new ApifyClient({ token });
  const input = config.buildInput(urls, limit);

  const run = await client.actor(actorId).call(input, {
    // Ne fusson a végtelenségig – felhő-környezetben limitáljuk
    timeout: 600, // 10 perc
    memory: 1024,
  });

  const { items } = await client.dataset(run.defaultDatasetId).listItems();
  const comments = (items as Record<string, any>[]).map(normalizeComment).filter((c) => c.text || c.author);

  return {
    comments,
    rawCount: items.length,
    actorUsed: actorId,
    runId: run.id,
  };
}
