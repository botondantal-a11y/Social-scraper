const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/williamhgates/';
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: fs.existsSync(statePath) ? statePath : undefined });
  const page = await context.newPage();
  
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  
  // scroll
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
  await page.waitForTimeout(2000);

  const profileData = await page.evaluate(() => {
    const getText = (selector, parent = document) => {
      const el = parent.querySelector(selector);
      return el ? el.innerText.trim() : null;
    };
    const getTexts = (selector, parent = document) => {
      return Array.from(parent.querySelectorAll(selector)).map(el => el.innerText.trim());
    };
    const getSectionByTitle = (titleMatches) => {
      const h2s = Array.from(document.querySelectorAll('section h2, section div.pvs-header__title'));
      for (const h2 of h2s) {
        if (titleMatches.some(m => h2.innerText.toLowerCase().includes(m))) {
          return h2.closest('section');
        }
      }
      return null;
    };

    const name = getText('h1.text-heading-xlarge') || getText('h1') || document.title.split(' | ')[0] || 'Ismeretlen Név';
    const headline = getText('div.text-body-medium.break-words');
    const location = getText('span.text-body-small.inline.t-black--light.break-words');
    const pic = document.querySelector('img.pv-top-card-profile-picture__image') || document.querySelector('img.profile-photo-edit__preview');
    
    const aboutSection = getSectionByTitle(['about', 'névjegy']);
    let aboutText = null;
    if (aboutSection) {
       const spans = aboutSection.querySelectorAll('span[aria-hidden="true"]');
       aboutText = spans.length > 0 ? Array.from(spans).map(el => el.innerText).join('\n').trim() : getText('.display-flex', aboutSection);
    }

    const expSection = getSectionByTitle(['experience', 'tapasztalat']);
    let expItems = [];
    if (expSection) {
      expSection.querySelectorAll('ul.pvs-list > li.artdeco-list__item').forEach(item => {
         expItems.push(getText('.display-flex.align-items-center span[aria-hidden="true"]', item) || 'ITEM');
      });
    }

    return { name, headline, location, pic: pic ? pic.src : null, about: aboutText, hasExp: expItems.length > 0, expItems };
  });

  console.log('Result:', profileData);
  await browser.close();
})();
