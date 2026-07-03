const google = require('googlethis');

async function test() {
  try {
    const images = await google.image('future of artificial intelligence', { safe: false });
    console.log(images.slice(0, 2));
  } catch (e) {
    console.error(e);
  }
}

test();
