const google = require('googlethis');

async function search() {
  const query = 'Szerencsejáték Zrt.';
  const options = {
    page: 0,
    safe: false,
    parse_ads: false,
    additional_params: {
      tbm: 'nws',
      hl: 'hu',
      gl: 'hu',
      // tbs: 'cdr:1,cd_min:04/01/2026,cd_max:05/20/2026' // Date range format
    }
  };

  try {
    const results = await google.search(query, options);
    console.log(`Found ${results.results.length} organic results.`);
    console.log(`Found ${results.news?.length || 0} news widget results.`);
  } catch (err) {
    console.error(err);
  }
}
search();
