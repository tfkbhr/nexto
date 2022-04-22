/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    siteName: process.env.SITE_NAME,
    siteUrl: process.env.SITE_URL,
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
