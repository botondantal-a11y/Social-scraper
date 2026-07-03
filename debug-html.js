const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
    storageState: fs.existsSync(statePath) ? statePath : undefined,
    locale: 'hu-HU'
  });
  const page = await context.newPage();
  
  const url = 'https://www.linkedin.com/in/istván-gábor-takács-768b73';
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  await page.evaluate(() => {
     const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title'));
     for (const h2 of h2s) {
       if (h2.innerText.toLowerCase().includes('interests') || h2.innerText.toLowerCase().includes('érdeklődési')) {
         const btn = h2.closest('section').querySelector('a[href*="/details/interests/"], .pvs-list__footer-wrapper a');
         if (btn) btn.click();
         break;
       }
     }
  });
  
  await page.waitForTimeout(5000);
  
  const html = await page.content();
  fs.writeFileSync('scratch/step2.html', html);
  await browser.close();
})();
