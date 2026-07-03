const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/williamhgates/';
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  const browser = await chromium.launch({ headless: false }); // Run headed so I simulate the user
  const context = await browser.newContext({ storageState: fs.existsSync(statePath) ? statePath : undefined });
  const page = await context.newPage();
  
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  
  // Wait 10 seconds for manual login or loading
  await page.waitForTimeout(10000);
  
  // Scroll down to load lazy elements
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight - window.innerHeight) {
          clearInterval(timer); resolve();
        }
      }, 300);
    });
  });
  
  await page.waitForTimeout(3000);

  // Save full HTML and screenshot
  const html = await page.content();
  fs.writeFileSync(path.join(process.cwd(), 'scratch', 'linkedin_debug.html'), html);
  
  await page.screenshot({ path: path.join(process.cwd(), 'scratch', 'linkedin_debug.png'), fullPage: true });

  console.log('Saved linkedin_debug.html and linkedin_debug.png');
  await browser.close();
})();
