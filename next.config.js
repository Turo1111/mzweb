/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/api': {page: '/api'}
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  
}

module.exports = nextConfig
