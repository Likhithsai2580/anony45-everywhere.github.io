/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/anony45-everywhere.github.io/',
    basePath: '/anony45-everywhere.github.io',
    trailingSlash: true,
  };
  
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      // Add other routes here
    }
  },
}