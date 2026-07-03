const cheerio = require('cheerio');
const query = 'Szerencsejáték Zrt. after:2026-04-01 before:2026-05-20';
const url = `https://news.google.com/search?q=${encodeURIComponent(query)}&hl=hu&gl=HU&ceid=HU:hu`;

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}).then(res => res.text()).then(html => {
  const $ = cheerio.load(html);
  const links = [];
  $('a[href^="./articles/"]').each((i, el) => {
    links.push($(el).attr('href'));
  });
  console.log('Found articles with ^./articles/:', links.length);
  
  if (links.length === 0) {
    const allLinks = [];
    $('a').each((i, el) => allLinks.push($(el).attr('href')));
    console.log('Sample links:', allLinks.filter(l => l && l.includes('article')).slice(0, 10));
  }
}).catch(console.error);
