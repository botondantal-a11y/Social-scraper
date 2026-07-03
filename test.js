const cheerio = require('cheerio');
fetch('https://igamingbusiness.com/articles/').then(r => r.text()).then(html => {
  const $ = cheerio.load(html);
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    if (href) {
      console.log('Link:', href, 'Class:', $(el).attr('class') || '', 'Parent Class:', $(el).parent().attr('class') || '');
    }
  });
}).catch(console.error);
