require('dotenv').config()
const isProd = process.env.NODE_ENV

module.exports = {
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/laptops': { page: '/laptops' },
      '/phones': { page: '/phones' },
    }
  },
  env: {
    MY_STEP: process.env.MY_STEP
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_SECRET: process.env.MY_SECRET,// Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_ENDPOINT: '/myapi/version'
  },
  basePath: '/PhoneStoreNextjs',
  assetPrefix: isProd ? '' : '/PhoneStoreNextjs',
}