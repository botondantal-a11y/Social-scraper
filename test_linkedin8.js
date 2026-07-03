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
  console.log('Experience HTML:', expSection.innerHTML);
}
