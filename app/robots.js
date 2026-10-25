export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://moneyflow.app/sitemap.xml',
    host: 'https://moneyflow.app',
  };
}
