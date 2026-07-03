const query = 'Szerencsejáték Zrt.';
const url = `https://www.bing.com/news/search?q=${encodeURIComponent(query)}&format=rss`;

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}).then(res => res.text()).then(xml => {
  const items = xml.split('<item>');
  console.log('Bing News RSS items:', items.length - 1);
}).catch(console.error);
