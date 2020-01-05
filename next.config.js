const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const withPlugins = require('next-compose-plugins')

const nextConfig = {}

module.exports = withPlugins([
  [withCSS],
  [withOffline]
], nextConfig)
