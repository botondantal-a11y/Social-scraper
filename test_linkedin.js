const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/williamhgates/'; // Example profile
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  
  const context = await browser.newContext({
    storageState: fs.existsSync(statePath) ? statePath : undefined
  });

  const page = await context.newPage();
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  
  await page.waitForTimeout(3000);
  
  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const title = await page.title();
  console.log('Page Title:', title);

  const h1Text = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? h1.innerText : null;
  });
  console.log('H1 Text:', h1Text);

  // Take screenshot for debugging
  await page.screenshot({ path: path.join(process.cwd(), 'scratch', 'debug_screenshot.png') });
  console.log('Screenshot saved to scratch/debug_screenshot.png');

  await browser.close();
})();
