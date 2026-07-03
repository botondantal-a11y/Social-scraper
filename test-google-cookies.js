const cheerio = require('cheerio');
const query = 'Szerencsejáték Zrt. after:2026-04-01 before:2026-05-20';
const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws&hl=hu&gl=HU`;

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'hu-HU,hu;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': 'SOCS=CAISHAgBEhJnd3NfMjAyMzA4MTAtMF9SQzIaAmVuIAEaBgiA_LyaBg;'
  }
}).then(res => res.text()).then(html => {
  const $ = cheerio.load(html);
  const links = [];
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('http') && !href.includes('google.com') && !href.includes('google.hu')) {
      links.push(href);
    }
  });
  console.log('Found external links:', links.length);
  if (links.length > 0) {
    console.log('Sample:', links.slice(0, 3));
  }
}).catch(console.error);
