const google = require('googlethis');

async function search() {
  const query = 'Szerencsejáték Zrt.';
  const options = {
    page: 0,
    safe: false,
    parse_ads: false,
    additional_params: {
      hl: 'hu',
      gl: 'hu'
    }
  };

  try {
    const results = await google.search(query, options);
    console.log(`Found ${results.results.length} organic results.`);
    if (results.results.length > 0) {
      console.log('Sample:', results.results.slice(0, 3).map(n => ({ title: n.title, url: n.url })));
    }
  } catch (err) {
    console.error(err);
  }
}
search();
