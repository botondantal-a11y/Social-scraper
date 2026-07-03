const query = 'Szerencsejáték Zrt. after:2026-04-01 before:2026-05-20';
const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws`;

fetch(searchUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}).then(res => res.text()).then(html => {
  // Simple check for CAPTCHA or results
  if (html.includes('detected unusual traffic')) {
    console.log('CAPTCHA BLOCKED');
  } else {
    console.log('HTML size:', html.length);
    // Find links: Google news results usually have <a href="https://..."
    const links = Array.from(html.matchAll(/<a href="(https:\/\/[^"]+)"/g)).map(m => m[1]);
    console.log('Found generic links:', links.length);
    const resultLinks = links.filter(l => !l.includes('google.com') && !l.includes('google.hu'));
    console.log('Found external links:', resultLinks.length);
    if (resultLinks.length > 0) {
      console.log('Sample:', resultLinks.slice(0, 3));
    }
  }
}).catch(console.error);
