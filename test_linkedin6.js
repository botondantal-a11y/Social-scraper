const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const url = 'https://www.linkedin.com/in/satyanadella/';
  const statePath = path.join(process.cwd(), 'scratch', 'linkedin_state.json');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ storageState: fs.existsSync(statePath) ? statePath : undefined });
  const page = await context.newPage();
  
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const info = await page.evaluate(() => {
    return {
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className,
      navJoin: !!document.querySelector('.nav__button-tertiary'),
      joinForm: !!document.querySelector('#contextual-sign-in'),
      loginButtons: Array.from(document.querySelectorAll('a, button')).filter(el => el.innerText.toLowerCase().includes('sign in') || el.innerText.toLowerCase().includes('jelentkezz be') || el.innerText.toLowerCase().includes('bejelentkezés')).length
    };
  });

  console.log(info);
  await browser.close();
})();
