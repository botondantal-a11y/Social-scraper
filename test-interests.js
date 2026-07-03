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
  console.log('Navigating to:', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  // Scroll down
  await page.evaluate(() => window.scrollBy(0, 3000));
  await page.waitForTimeout(3000);
  await page.evaluate(() => window.scrollBy(0, 3000));
  await page.waitForTimeout(3000);

  // Try to find the button
  const clicked = await page.evaluate(() => {
     const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title'));
     let intSection = null;
     for (const h2 of h2s) {
       const text = h2.innerText.toLowerCase();
       if (text.includes('interests') || text.includes('érdeklődési')) {
         intSection = h2.closest('section');
         break;
       }
     }
     
     if (intSection) {
        const showAllBtn = intSection.querySelector('a[href*="/details/interests/"], .pvs-list__footer-wrapper a');
        if (showAllBtn) {
           showAllBtn.click();
           return true;
        }
     }
     return false;
  });
  
  console.log('Clicked interests button:', clicked);
  
  if (!clicked) {
     const baseUrl = url.split('?')[0].replace(/\/$/, '');
     console.log('Navigating to details page manually:', baseUrl + '/details/interests/');
     await page.goto(`${baseUrl}/details/interests/`, { waitUntil: 'domcontentloaded' });
  }

  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'scratch/interests-page.png' });
  console.log('Screenshot saved to scratch/interests-page.png');
  
  // See what companies are extracted
  const allCompanies = await page.evaluate(() => {
     const items = document.querySelectorAll('li.pvs-list__paged-list-item, div.pvs-entity, div.entity-result__item, ul.pvs-list > li');
     const names = [];
     Array.from(items).forEach(item => {
        const titleEl = item.querySelector('.entity-result__title-text, span[dir="ltr"], .t-bold span[aria-hidden="true"], .t-bold, span[aria-hidden="true"]');
        let name = titleEl ? titleEl.innerText.trim() : item.innerText.split('\\n')[0].trim();
        if (name && name.length > 1 && !name.includes('Following')) {
           names.push(name);
        }
     });
     return names;
  });
  
  console.log('Extracted companies:', allCompanies);

  await browser.close();
})();
