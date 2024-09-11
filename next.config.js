/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'anony45-everywhere.github.io',
  basePath: 'anony45-everywhere.github.io',
  trailingSlash: true,
};

module.exports = nextConfig;