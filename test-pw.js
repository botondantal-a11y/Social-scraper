const { chromium } = require('playwright');

async function scrapeGoogleNews() {
  const query = 'Szerencsejáték Zrt. after:2026-04-01 before:2026-05-20';
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws&hl=hu&gl=HU`;

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    // Accept cookies if present
    const acceptButton = await page.$('button:has-text("Elfogadom")');
    if (acceptButton) await acceptButton.click();
    
    // Wait for links
    await page.waitForTimeout(2000);
    
    const links = await page.evaluate(() => {
      const results = [];
      const nodes = document.querySelectorAll('a');
      for (const node of nodes) {
        if (node.href && node.href.startsWith('http') && !node.href.includes('google.')) {
          results.push(node.href);
        }
      }
      return results;
    });
    
    console.log(`Found ${links.length} external links via Playwright.`);
    if (links.length > 0) {
      console.log('Sample:', links.slice(0, 3));
    }
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
}

scrapeGoogleNews();
