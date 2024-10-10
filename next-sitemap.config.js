/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nlawcompany.com',
    generateRobotsTxt: true, // (опционально) создайте robots.txt
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/', // Разрешаем доступ ко всему сайту для всех поисковых систем
          },
          {
            userAgent: 'AhrefsBot',
            disallow: '/', // Полный запрет для AhrefsBot
          },
          {
            userAgent: 'MJ12bot',
            disallow: '/', // Полный запрет для MJ12bot
          },
        ],
      },
  }