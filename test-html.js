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
  
  const url = 'https://hu.linkedin.com/in/istv%C3%A1n-g%C3%A1bor-tak%C3%A1cs-768b73';
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  // Click interests button
  await page.evaluate(() => {
     const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title'));
     for (const h2 of h2s) {
       if (h2.innerText.toLowerCase().includes('interests') || h2.innerText.toLowerCase().includes('érdeklődési')) {
         const intSection = h2.closest('section');
         const btn = intSection.querySelector('a[href*="/details/interests/"]');
         if (btn) btn.click();
         break;
       }
     }
  });
  
  await page.waitForTimeout(5000);
  
  // Dump HTML to a text file
  const html = await page.content();
  fs.writeFileSync('scratch/interests-html.txt', html);
  console.log('HTML saved to scratch/interests-html.txt');

  await browser.close();
})();
