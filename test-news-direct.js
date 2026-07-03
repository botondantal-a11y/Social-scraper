const query = 'Szerencsejáték Zrt. after:2026-04-01 before:2026-05-20';
const url = `https://news.google.com/search?q=${encodeURIComponent(query)}&hl=hu&gl=HU&ceid=HU:hu`;

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}).then(res => res.text()).then(html => {
  console.log('HTML size:', html.length);
  const links = Array.from(html.matchAll(/<a[^>]+href="\.\/articles\/([^"]+)"/g)).map(m => m[1]);
  console.log('Found articles:', links.length);
}).catch(console.error);
