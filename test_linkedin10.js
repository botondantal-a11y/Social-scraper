const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('scratch/linkedin_debug.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const getSectionByTitle = (titleMatches) => {
  const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title, h2'));
  for (const h2 of h2s) {
    if (titleMatches.some(m => h2.textContent.toLowerCase().includes(m))) {
      return h2.closest('section') || h2.parentElement.parentElement.parentElement;
    }
  }
  return null;
};

['education', 'projects', 'recommendations', 'skills'].forEach(sec => {
  const s = getSectionByTitle([sec]);
  if (s) {
    console.log(`\n--- ${sec.toUpperCase()} ---`);
    const items = s.querySelectorAll('[componentkey*="entity-collection-item"], ul > li');
    items.forEach((item, i) => {
       const texts = Array.from(item.querySelectorAll('p, span[aria-hidden="true"]'))
                       .map(el => el.textContent.trim())
                       .filter(t => t.length > 0);
       const unique = [...new Set(texts)];
       if (unique.length > 0) console.log(`Item ${i}:`, unique);
    });
  }
});
