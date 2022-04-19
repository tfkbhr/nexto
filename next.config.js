/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.API_URL,
    siteName: process.env.SITE_NAME,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  webpackDevMiddleware(config) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = withPWA(nextConfig)
