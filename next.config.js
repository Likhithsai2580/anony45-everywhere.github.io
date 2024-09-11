/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this line:
  trailingSlash: true,
};

module.exports = nextConfig;
