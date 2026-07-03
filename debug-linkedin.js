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
  
  // Use www instead of hu for consistent behavior
  const url = 'https://www.linkedin.com/in/istván-gábor-takács-768b73';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  await page.screenshot({ path: 'scratch/step1-loaded.png' });
  console.log('Took step1 screenshot');
  
  const intSectionFound = await page.evaluate(() => {
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
  
  console.log('Clicked interests:', intSectionFound);
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'scratch/step2-clicked.png' });
  
  if (!intSectionFound) {
      const encodedUrl = encodeURI('https://www.linkedin.com/in/istván-gábor-takács-768b73/details/interests/');
      console.log('Navigating to:', encodedUrl);
      await page.goto(encodedUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(5000);
      await page.screenshot({ path: 'scratch/step3-navigated.png' });
  }

  // Click Companies tab
  const tabClicked = await page.evaluate(async () => {
    const buttons = Array.from(document.querySelectorAll('button[role="tab"], a[role="tab"], .artdeco-pill, button.artdeco-pill'));
    const companyTab = buttons.find(b => {
       const text = (b.textContent || '').toLowerCase();
       return text.includes('companies') || text.includes('cégek');
    });
    if (companyTab) {
      companyTab.click();
      return true;
    }
    return false;
  });
  console.log('Clicked Companies tab:', tabClicked);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'scratch/step4-companies-tab.png' });
  
  // Extract companies
  const allCompanies = await page.evaluate(() => {
     const items = document.querySelectorAll('li.pvs-list__paged-list-item, div.pvs-entity, div.entity-result__item, ul.pvs-list > li');
     const names = [];
     Array.from(items).forEach(item => {
        const titleEl = item.querySelector('.entity-result__title-text, span[dir="ltr"], .t-bold span[aria-hidden="true"], .t-bold, span[aria-hidden="true"]');
        let name = "";
        if (titleEl) {
           name = titleEl.innerText.trim();
        } else {
           name = item.innerText.split('\\n')[0].trim();
        }
        if (name && name.length > 1 && !name.includes('Following') && !name.includes('Követed') && !name.includes('Message') && !name.includes('View') && !name.includes('Érdeklődési körök') && !name.includes('Interests')) {
           names.push(name);
        }
     });
     return names;
  });
  console.log('Extracted companies:', allCompanies);
  
  await browser.close();
})();
