// /** @type {import('next').NextConfig} */
// module.exports = {
//   // Static HTML export
//   output: 'export',

//   // Since it's root hosting
//   assetPrefix: '/',

//   // Makes all paths end with /
//   trailingSlash: true,

//   // Makes fonts & images work in static export
//   images: {
//     unoptimized: true,
//   },

//   // Optional: remove console logs in production build
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://res.cloudinary.com https://cdn.jsdelivr.net https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; img-src 'self' data: https://res.cloudinary.com https://ahmeddigital.com https://api.dicebear.com https://cdn.plyr.io; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://res.cloudinary.com https://www.googletagmanager.com https://*.google-analytics.com https://cdn.plyr.io; media-src 'self' https://res.cloudinary.com; frame-src 'self' https://cal.com https://www.youtube.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


