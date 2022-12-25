/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // productionBrowserSourceMaps: true,
  experimental: {
    // Create a standalone folder which copies only the necessary files for production
    outputStandalone: true,
  },
};

module.exports = nextConfig;
