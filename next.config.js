require('dotenv').config()
const isProd = process.env.NODE_ENV

module.exports = {
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {}
  },
  env: {
    MY_STEP: process.env.MY_STEP,
    MY_API_URL: process.env.MY_API_URL
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    MY_SECRET: process.env.MY_SECRET,// Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_ENDPOINT: '/myapi/version'
  },
  basePath: process.env.NEXT_PUBLIC_VERCEL_URL,
  assetPrefix: process.env.NEXT_PUBLIC_VERCEL_URL
}