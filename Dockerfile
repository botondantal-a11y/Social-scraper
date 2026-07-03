FROM node:20-bookworm

WORKDIR /app

# Csomagkezelő fájlok másolása
COPY package.json package-lock.json* ./

# Csomagok telepítése
RUN npm install --no-audit --no-fund

# Playwright (Chrome) és a linuxos függőségeinek telepítése
RUN npx playwright install --with-deps chromium

# Teljes projekt másolása
COPY . .

# Prisma kliens generálása (a COPY után, hogy a repóban lévő régi generált kliens ne írja felül)
RUN npx prisma generate

# Next.js projekt felépítése (dummy DATABASE_URL, mert buildkor nincs DB kapcsolat)
ARG DATABASE_URL="postgresql://build:build@localhost:5432/build"
RUN npm run build

# Render.com által használt port
EXPOSE 3000

# Indítás: séma szinkronizálása az adatbázissal, majd a szerver indítása
CMD ["sh", "-c", "npx prisma db push --skip-generate && npm start"]
