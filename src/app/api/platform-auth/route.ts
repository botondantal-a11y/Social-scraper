import { NextResponse } from 'next/server';
import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const AUTH_DIR = path.join(process.cwd(), '.auth');

export async function POST(req: Request) {
  try {
    const { platform } = await req.json();
    
    // Create auth directory if it doesn't exist
    try {
      await fs.access(AUTH_DIR);
    } catch {
      await fs.mkdir(AUTH_DIR, { recursive: true });
    }

    const statePath = path.join(AUTH_DIR, `${platform}_state.json`);
    
    // URL to navigate to
    let loginUrl = '';
    if (platform === 'facebook') loginUrl = 'https://www.facebook.com/';
    else if (platform === 'instagram') loginUrl = 'https://www.instagram.com/accounts/login/';
    else return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });

    // Launch visible browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(loginUrl);

    // Folyamatosan ellenőrizzük a sütiket, hogy megtörtént-e a bejelentkezés
    let loggedIn = false;
    for (let i = 0; i < 300; i++) { // Max 5 perc várakozás
      try {
        if (page.isClosed()) break;
        
        const cookies = await context.cookies();
        if (platform === 'facebook' && cookies.some(c => c.name === 'c_user')) {
          loggedIn = true;
          break;
        } else if (platform === 'instagram' && cookies.some(c => c.name === 'sessionid')) {
          loggedIn = true;
          break;
        }
        await new Promise(r => setTimeout(r, 1000));
      } catch (e) {
        break; // Böngésző bezárva
      }
    }

    if (loggedIn) {
      // Várunk egy kicsit, hogy minden süti és localstorage beálljon
      await new Promise(r => setTimeout(r, 3000));
      await context.storageState({ path: statePath });
      await browser.close().catch(() => null);
      return NextResponse.json({ success: true });
    } else {
      await browser.close().catch(() => null);
      return NextResponse.json({ error: 'Bejelentkezés megszakítva vagy időtúllépés.' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Playwright Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const platform = searchParams.get('platform');
  
  if (!platform) return NextResponse.json({ error: 'Missing platform' }, { status: 400 });
  
  const statePath = path.join(AUTH_DIR, `${platform}_state.json`);
  
  try {
    await fs.access(statePath);
    return NextResponse.json({ authenticated: true });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
