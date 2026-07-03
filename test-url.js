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
  
  const url = 'https://www.linkedin.com/in/istv%C3%A1n-g%C3%A1bor-tak%C3%A1cs-768b73/details/interests/';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  
  const allCompanies = await page.evaluate(async () => {
     const names = [];
     
     const extractItems = () => {
        const items = document.querySelectorAll('.artdeco-modal li, .scaffold-layout__main li, main li, .artdeco-modal div.pvs-entity, li.pvs-list__paged-list-item, div.pvs-entity, div.entity-result__item');
        Array.from(items).forEach(item => {
           const titleEl = item.querySelector('.entity-result__title-text, a span[dir="ltr"], a .t-bold span[aria-hidden="true"], a .t-bold, a span[aria-hidden="true"]');
           let name = "";
           if (titleEl) {
              name = titleEl.innerText.trim();
           } else {
              const a = item.querySelector('a');
              if (a) {
                 name = a.innerText.split('\\n')[0].trim();
              } else {
                 name = item.innerText.split('\\n')[0].trim();
              }
           }
           if (name.includes(', ')) {
              name = name.split(', ')[0].trim();
           }
           
           let followers = "";
           const captionEls = item.querySelectorAll('.entity-result__primary-subtitle, .t-14.t-normal.t-black--light, .pvs-entity__caption');
           for (const cap of Array.from(captionEls)) {
              const capText = cap.innerText.trim();
              if (capText.includes('follower') || capText.includes('követő') || capText.includes('member') || capText.includes('tag')) {
                 followers = capText;
                 break;
              }
           }
           if (!followers) {
              const rawLines = item.innerText.split('\\n');
              const followerLine = rawLines.find(line => line.includes('follower') || line.includes('követő') || line.includes('member') || line.includes('tag'));
              if (followerLine) followers = followerLine.trim();
           }

           let finalName = name;
           if (followers) {
              finalName = `${name} (${followers})`;
           }
           
           const textContent = (item.textContent || '').toLowerCase();
           const isEntity = textContent.includes('follower') || textContent.includes('követő') || textContent.includes('follow') || textContent.includes('követés') || item.querySelector('a[href*="/company/"]') || item.querySelector('a[href*="/school/"]') || item.querySelector('a[href*="/groups/"]');
           
           if (isEntity && name && name.length > 1 && name.length < 60 && !name.includes('Following') && !name.includes('Követed') && !name.includes('Message') && !name.includes('View') && !name.includes('Érdeklődési körök') && !name.includes('Interests')) {
              if (!names.includes(finalName)) {
                 names.push(finalName);
              }
           }
        });
     };

     const tabs = Array.from(document.querySelectorAll('button[role="tab"], a[role="tab"], .artdeco-pill, button.artdeco-pill'));
     console.log('Tabs found:', tabs.length);
     
     if (tabs.length > 0) {
        for (const tab of tabs) {
           tab.click();
           await new Promise(resolve => setTimeout(resolve, 2000));
           extractItems();
        }
     } else {
        extractItems();
     }
     
     return names;
  });
  
  console.log('Extracted:', allCompanies);
  await browser.close();
})();
