require('dotenv').config()

module.exports = {
    pageExtensions : ['page.js','page.jsx','page.ts','page.tsx'],
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
        }
      },
    env:{
        MY_STEP : process.env.MY_STEP
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        MY_SECRET: process.env.MY_SECRET,// Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        API_ENDPOINT : '/myapi/version'
      },
}