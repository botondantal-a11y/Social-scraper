const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('scratch/linkedin_debug.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const getSectionByTitle = (titleMatches) => {
  const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title'));
  for (const h2 of h2s) {
    if (titleMatches.some(m => h2.textContent.toLowerCase().includes(m))) {
      return h2.closest('section');
    }
  }
  return null;
};

const expSection = getSectionByTitle(['experience', 'tapasztalat']);
if (expSection) {
  // Try to find all items separated by HR or componentkey
  const items = expSection.querySelectorAll('[componentkey*="entity-collection-item"]');
  console.log('Found componentkey items:', items.length);
  
  if (items.length > 0) {
     items.forEach((item, i) => {
        // Just extract all visible text elements
        const texts = Array.from(item.querySelectorAll('p, span[aria-hidden="true"], h3, h4'))
                           .map(el => el.textContent.trim())
                           .filter(t => t.length > 0);
        console.log(`Item ${i}:`, [...new Set(texts)]);
     });
  } else {
    // Fallback: get all p tags in section
    const texts = Array.from(expSection.querySelectorAll('p')).map(p => p.textContent.trim());
    console.log('All P tags:', texts);
  }
}
