# OmniScrape Web – Telepítési útmutató

Ez a mappa az eredeti social-scraper többfelhasználós, webre telepíthető változata: Google bejelentkezés, saját profil (privát mentések) és közösbe megosztás került bele. Minden eredeti funkció (scraping, AI összefoglalók, LinkedIn, YouTube, trendek, statisztikák) megmaradt.

Az ingyenes stack: **Render.com (free web service, Docker)** + **Neon Postgres (free tier)** + **Google OAuth (ingyenes)**.

---

## 1. Neon Postgres adatbázis (5 perc)

1. Regisztrálj: https://neon.tech (Google-fiókkal is lehet)
2. Hozz létre egy új projektet (region: EU/Frankfurt ajánlott)
3. A projekt Dashboardján másold ki a **Connection string**-et (Pooled connection ajánlott), kb. így néz ki:
   `postgresql://user:jelszo@ep-xxxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`
4. Ez lesz a `DATABASE_URL` értéke.

## 2. Google OAuth client (10 perc)

1. Menj a https://console.cloud.google.com oldalra, hozz létre egy projektet (pl. "OmniScrape")
2. **APIs & Services → OAuth consent screen**: válaszd az *External* típust, add meg az app nevét és az e-mail címed. A Test users-hez add hozzá a saját (és a többi felhasználó) Gmail-címét, vagy publikáld az appot.
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID**
   - Application type: *Web application*
   - Authorized JavaScript origins:
     - `http://localhost:3000`
     - `https://<app-neve>.onrender.com` (a Render-en kapott URL)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://<app-neve>.onrender.com/api/auth/callback/google`
4. A kapott **Client ID** → `AUTH_GOOGLE_ID`, **Client secret** → `AUTH_GOOGLE_SECRET`.

## 3. Render.com deploy (ingyenes)

1. Töltsd fel ezt a mappát egy GitHub repóba
2. https://render.com → New → **Web Service** → válaszd ki a repót
3. Runtime: **Docker** (automatikusan felismeri a Dockerfile-t), Plan: **Free**
4. Environment Variables (Settings → Environment):

   | Kulcs | Érték |
   |---|---|
   | `DATABASE_URL` | Neon connection string |
   | `AUTH_SECRET` | `openssl rand -base64 32` kimenete (vagy bármilyen hosszú véletlen szöveg) |
   | `AUTH_GOOGLE_ID` | Google Client ID |
   | `AUTH_GOOGLE_SECRET` | Google Client secret |
   | `AUTH_TRUST_HOST` | `true` |
   | `GEMINI_API_KEY` | Gemini kulcs (AI funkciókhoz) |
   | `ELEVENLABS_API_KEY` | (opcionális, podcast) |
   | `OPENAI_API_KEY` | (opcionális) |

5. Deploy. Az első indításkor a `prisma db push` automatikusan létrehozza a táblákat a Neon adatbázisban.
6. A kapott URL-t (`https://<app-neve>.onrender.com`) írd vissza a Google OAuth beállításokba (2. lépés), ha még nem tetted.

**Free tier tudnivalók:**
- 15 perc inaktivitás után a szolgáltatás elalszik, az első kérés utána ~50 mp-ig tart (ez normális).
- 512 MB RAM: a Playwright-os scraping működik, de egyszerre csak egy nehéz scraping feladatot futtass.
- A fájlrendszer nem tartós: a Facebook/Instagram böngészős bejelentkezés (`.auth` mappa) újraindításkor elveszhet — a LinkedIn cookie-alapú megoldást (Beállítások) érdemes használni, az adatbázisban tárolódik.

## 4. Helyi futtatás

```bash
npm install
cp .env.example .env.local   # töltsd ki az értékeket
npx prisma db push           # táblák létrehozása a Neonban
npm run dev
```

Megjegyzés: a helyi futtatás is a Neon adatbázist használja, így otthonról és a webről ugyanazt látod.

## 5. Hogyan működik a többfelhasználós rész?

- Minden oldal Google bejelentkezéshez kötött (`/login`).
- **Mentés**: cikkek, YouTube-videók, trendek és statisztikai adatkészletek a te profilodhoz mentődnek, alapból **privátként**.
- **Megosztás**: minden mentett elemen van egy gomb (Közösbe / Privát, ill. lakat/emberek ikon), amivel a közösbe töltheted, vagy visszavonhatod.
- **Szűrés**: a Tudásbázis és a Mentett videók oldalon váltás: *Minden / Saját profilom / Közös*.
- A régi (bejelentkezés előtti) adatok gazdátlanok és közösként látszanak.
- Törölni és láthatóságot módosítani csak a saját mentéseiden tudsz.
- A közös beállítások (kulcsszavak, monitorok, LinkedIn fiókok, dorkok) mindenki számára közösek maradtak.
