const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: 'linkedin_state.json' });
  const page = await context.newPage();
  
  await page.goto('https://www.linkedin.com/in/nikita-pawar-ba673a230/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  const html = await page.evaluate(() => document.documentElement.outerHTML);
  fs.writeFileSync('dump.html', html);
  
  console.log('Saved to dump.html');
  await browser.close();
})();
