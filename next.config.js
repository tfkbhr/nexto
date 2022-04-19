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
}

module.exports = withPWA(nextConfig)
