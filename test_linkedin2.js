const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/williamhgates/';
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    storageState: fs.existsSync(statePath) ? statePath : undefined
  });
  const page = await context.newPage();
  
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log('--- BODY TEXT ---');
  console.log(text.substring(0, 500));
  console.log('-----------------');

  // get h1, h2, h3
  const headers = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h1, h2, h3, h4, h5')).map(h => `${h.tagName}: ${h.innerText}`);
  });
  console.log('Headers:', headers);

  await browser.close();
})();
