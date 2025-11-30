/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pierre-merlet.com'],
  },
  i18n: {
    locales: ['en', 'fr', 'it'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
