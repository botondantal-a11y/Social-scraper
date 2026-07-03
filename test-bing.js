const cheerio = require('cheerio');
const query = 'Szerencsejáték Zrt.';
const url = `https://www.bing.com/news/search?q=${encodeURIComponent(query)}`;

fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'hu-HU,hu;q=0.9'
  }
}).then(res => res.text()).then(html => {
  const $ = cheerio.load(html);
  const links = [];
  $('a.title').each((i, el) => {
    links.push({
      title: $(el).text(),
      url: $(el).attr('href')
    });
  });
  console.log('Bing News Links:', links.length);
  if (links.length > 0) {
    console.log(links.slice(0, 3));
  }
}).catch(console.error);
