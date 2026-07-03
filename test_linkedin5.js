const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/satyanadella/';
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: fs.existsSync(statePath) ? statePath : undefined });
  const page = await context.newPage();
  
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const h2Info = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h2, div.pvs-header__title')).map(h2 => {
      let current = h2.parentElement;
      let path = [];
      while (current && current.tagName !== 'BODY' && path.length < 5) {
        path.push(current.tagName);
        current = current.parentElement;
      }
      return {
        text: h2.innerText,
        path: path.join(' -> '),
        hasSectionParent: !!h2.closest('section')
      };
    });
  });

  console.log(h2Info);
  await browser.close();
})();
