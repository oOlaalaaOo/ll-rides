const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    'DEV_API_URL',
    'PROD_API_URL'
  ],
  server: []
})

const nextConfig = {}

module.exports = withConfig(
  withPlugins([
    [withCSS],
    [withOffline]
  ], nextConfig)
)
