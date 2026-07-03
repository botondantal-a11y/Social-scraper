const query = 'Szerencsejáték Zrt.';
const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws`;

fetch(searchUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}).then(res => res.text()).then(html => {
  const links = Array.from(html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>/g)).map(m => m[1]);
  console.log('Total hrefs:', links.length);
  const external = links.filter(l => l.startsWith('http') && !l.includes('google.'));
  console.log('External directly:', external.length);
  const redirect = links.filter(l => l.startsWith('/url?q='));
  console.log('Redirect links:', redirect.length);
  if (redirect.length > 0) {
    console.log('Sample redirect:', redirect[0]);
  }
}).catch(console.error);
