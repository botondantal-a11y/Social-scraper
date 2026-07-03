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
  console.log('Found Experience Section');
  const uls = expSection.querySelectorAll('ul');
  console.log('Number of ULs:', uls.length);
  if (uls.length > 0) {
    console.log('First UL classes:', uls[0].className);
    const lis = uls[0].querySelectorAll(':scope > li');
    console.log('Number of top-level LIs:', lis.length);
    if (lis.length > 0) {
      console.log('First LI classes:', lis[0].className);
      console.log('First LI text preview:', lis[0].textContent.substring(0, 100).replace(/\s+/g, ' '));
    }
  }
} else {
  console.log('Experience Section NOT FOUND');
}
