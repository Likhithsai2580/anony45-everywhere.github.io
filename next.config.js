/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this line:
  trailingSlash: true,
  basePath: '/anony45-everywhere.github.io',
};

module.exports = nextConfig;
