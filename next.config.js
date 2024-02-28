
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     domains: ['hotoffers.casino'],
//   },
//   swcMinify: true,
// }

// module.exports = nextConfig;


const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['hotoffers.casino'],
  },
  reactStrictMode: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = require("@ducanh2912/next-pwa").default({
      dest: "public",
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};