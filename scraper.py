import asyncio
import json
import sys
import os
import time
from linkedin_scraper import BrowserManager, PersonScraper
from linkedin_scraper.core.exceptions import ScrapingError, AuthenticationError

async def main(url):
    state_file = '../linkedin_state.json'
    
    # We use headless=False because the user wants a browser popup
    async with BrowserManager(headless=False) as browser:
        # Load session if it exists and is valid json
        if os.path.exists(state_file):
            try:
                with open(state_file, 'r') as f:
                    content = f.read().strip()
                    if content and content != '{}':
                        await browser.load_session(state_file)
            except Exception as e:
                print(f"Error reading state: {e}", file=sys.stderr)

        page = browser.page

        # Navigate DIRECTLY to the requested URL instead of the homepage
        await page.goto(url, wait_until="domcontentloaded")
        await asyncio.sleep(2) # Wait for potential redirects (e.g. to authwall if not logged in)
        
        is_logged_in = False
        curr_url = page.url
        auth_blockers = ['/login', '/authwall', '/checkpoint', '/challenge', '/uas/login']
        
        if any(b in curr_url for b in auth_blockers):
            is_logged_in = False
        else:
            try:
                is_logged_in = await page.evaluate('''() => {
                    return !!document.querySelector('.global-nav') || 
                           !!document.querySelector('#global-nav') || 
                           !!document.querySelector('nav a[href*="/feed"]') ||
                           !!document.querySelector('input[placeholder*="Search"]');
                }''')
            except:
                pass

        if not is_logged_in:
            print("Login required! Please log in within the opened browser...", file=sys.stderr)
            waited = 0
            while not is_logged_in and waited < 300:
                await asyncio.sleep(3)
                waited += 3
                curr_url = page.url
                if not any(b in curr_url for b in auth_blockers):
                    try:
                        is_logged_in = await page.evaluate('''() => {
                            return !!document.querySelector('.global-nav') || 
                                   !!document.querySelector('#global-nav') || 
                                   !!document.querySelector('nav a[href*="/feed"]');
                        }''')
                    except:
                        pass
                    
            if not is_logged_in:
                print(json.dumps({"success": False, "error": "Login timeout or authwall reached."}))
                sys.exit(0)
                
            # Save session after login
            await browser.save_session(state_file)

        page = browser.page
        scraper = PersonScraper(page)
        
        try:
            person = await scraper.scrape(url)
            
            # Save state again just in case cookies were refreshed
            await browser.save_session(state_file)

            # Map the Person object to our frontend format
            # Our frontend expects:
            # {
            #   "name": string, "headline": string, "location": string, "about": string,
            #   "experience": [ {title, company, date, description} ],
            #   "education": [ {school, degree, date, description} ],
            #   ...
            # }
            
            experience_list = []
            if hasattr(person, 'experiences') and person.experiences:
                for exp in person.experiences:
                    experience_list.append({
                        "title": getattr(exp, 'title', ''),
                        "company": getattr(exp, 'company', ''),
                        "date": f"{getattr(exp, 'start_date', '')} - {getattr(exp, 'end_date', 'Jelenleg')}",
                        "description": getattr(exp, 'description', '')
                    })
                    
            education_list = []
            if hasattr(person, 'educations') and person.educations:
                for edu in person.educations:
                    education_list.append({
                        "school": getattr(edu, 'institution_name', ''),
                        "degree": getattr(edu, 'degree', ''),
                        "date": f"{getattr(edu, 'start_date', '')} - {getattr(edu, 'end_date', '')}",
                        "description": getattr(edu, 'description', '')
                    })

            data = {
                "success": True,
                "data": {
                    "name": person.name,
                    "headline": getattr(person, 'headline', getattr(person, 'about', '')), # Fallback if headline is missing
                    "location": getattr(person, 'location', ''),
                    "about": getattr(person, 'about', ''),
                    "experience": experience_list,
                    "education": education_list,
                    "skills": [s.name for s in getattr(person, 'skills', [])] if hasattr(person, 'skills') else [],
                    "projects": [p.title for p in getattr(person, 'projects', [])] if hasattr(person, 'projects') else [],
                    "languages": [l.name for l in getattr(person, 'languages', [])] if hasattr(person, 'languages') else [],
                    "interests": [i.title for i in getattr(person, 'interests', [])] if hasattr(person, 'interests') else [],
                }
            }
            
            with open("debug.json", "w", encoding="utf-8") as f:
                json.dump(data, f)
            print(json.dumps(data))
            
        except Exception as e:
            # Print to stdout as JSON, exit 0 so Node.js can parse it!
            error_json = json.dumps({"success": False, "error": str(e), "url": page.url})
            print(error_json)
            with open("crash_log.txt", "w", encoding="utf-8") as f:
                f.write(error_json)
            sys.exit(0)

if __name__ == '__main__':
    url = sys.argv[1]
    asyncio.run(main(url))
