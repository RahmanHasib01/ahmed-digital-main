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
};

module.exports = nextConfig;


