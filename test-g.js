const google = require('googlethis');
google.search('Telex', { page: 0, safe: false, parse_ads: false }).then(res => console.log('Telex results:', res.results.length)).catch(console.error);
