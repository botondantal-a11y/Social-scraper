import asyncio
import json
import sys
from playwright.async_api import async_playwright
from linkedin_scraper import PersonScraper

async def main(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(storage_state='../linkedin_state.json')
        page = await context.new_page()
        
        scraper = PersonScraper(page)
        person = await scraper.scrape(url)
        
        data = {
            "name": person.name,
            "about": person.about,
            "experiences": [str(e) for e in person.experiences] if hasattr(person, 'experiences') else [],
            "educations": [str(e) for e in person.educations] if hasattr(person, 'educations') else [],
            "company": getattr(person, 'company', None),
            "job_title": getattr(person, 'job_title', None)
        }
        print(json.dumps(data, indent=2))
        
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main(sys.argv[1]))
