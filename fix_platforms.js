const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixPlatforms() {
  const articles = await prisma.article.findMany({
    where: {
      platform: { in: ['NEWS', 'GOOGLE'] }
    }
  });

  console.log(`Found ${articles.length} articles with 'NEWS' platform.`);

  for (const article of articles) {
    try {
      const urlObj = new URL(article.url);
      const domain = urlObj.hostname.replace('www.', '');
      const parts = domain.split('.');
      let newPlatform = 'WEB';
      
      if (parts.length >= 2) {
        newPlatform = parts[parts.length - 2].toUpperCase();
      } else {
        newPlatform = domain.toUpperCase();
      }

      if (newPlatform !== 'NEWS') {
        await prisma.article.update({
          where: { id: article.id },
          data: { platform: newPlatform }
        });
        console.log(`Updated: ${article.url} -> ${newPlatform}`);
      }
    } catch (e) {
      console.error(`Failed to update ${article.url}:`, e.message);
    }
  }

  await prisma.$disconnect();
}

fixPlatforms();
