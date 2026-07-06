import { ApifyClient } from 'apify-client';

// LinkedIn profil actor (env-ben felülírható). Cookie nélküli, URL/username alapú.
const DEFAULT_LINKEDIN_ACTOR =
  process.env.APIFY_ACTOR_LINKEDIN_PROFILE || 'apimaestro/linkedin-profile-detail';

export type LinkedInProfile = {
  name: string;
  headline: string;
  about: string;
  profileImageUrl: string;
  experience: any[];
  education: any[];
  location?: string;
  raw?: any;
};

function usernameFromUrl(url: string): string {
  const m = url.match(/linkedin\.com\/in\/([^/?#]+)/i);
  return m ? decodeURIComponent(m[1]) : '';
}

function str(...vals: any[]): string {
  for (const v of vals) {
    if (typeof v === 'string' && v.trim()) return v;
  }
  return '';
}

function normalizeProfile(item: Record<string, any>): LinkedInProfile {
  const name = str(
    item.fullName,
    item.name,
    item.basic_info?.fullname,
    [item.firstName, item.lastName].filter(Boolean).join(' '),
    [item.basic_info?.first_name, item.basic_info?.last_name].filter(Boolean).join(' ')
  );

  const headline = str(item.headline, item.occupation, item.subTitle, item.basic_info?.headline, item.title);
  const about = str(item.about, item.summary, item.bio, item.basic_info?.about);
  const profileImageUrl = str(
    item.profilePic,
    item.profilePicture,
    item.profilePicHighQuality,
    item.photoUrl,
    item.avatar,
    item.basic_info?.profile_picture_url,
    item.profileImageUrl
  );
  const location = str(item.location, item.addressWithCountry, item.basic_info?.location?.full);

  const experience =
    item.experience || item.experiences || item.positions || item.position || [];
  const education = item.education || item.educations || item.schools || [];

  return {
    name,
    headline,
    about,
    profileImageUrl,
    location,
    experience: Array.isArray(experience) ? experience : [],
    education: Array.isArray(education) ? education : [],
    raw: item,
  };
}

/**
 * LinkedIn profil lekérése Apify-on keresztül (a régi Python-szkript helyett).
 */
export async function fetchLinkedInProfile(url: string, token: string): Promise<LinkedInProfile> {
  const client = new ApifyClient({ token });
  const actorId = DEFAULT_LINKEDIN_ACTOR;
  const username = usernameFromUrl(url);

  // Több actor input-formátumát egyszerre lefedjük.
  const input: Record<string, unknown> = {
    username,
    usernames: username ? [username] : [],
    profileUrls: [url],
    urls: [url],
    startUrls: [{ url }],
    profileScraperMode: 'Profile details no email ($4 per 1k)',
  };

  const run = await client.actor(actorId).call(input, { timeout: 300, memory: 512 });
  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  if (!items || items.length === 0) {
    throw new Error('Az Apify nem adott vissza profil-adatot ehhez az URL-hez.');
  }

  return normalizeProfile(items[0] as Record<string, any>);
}
