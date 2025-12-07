/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pierre-merlet.com',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [100, 75],
  },
}

module.exports = nextConfig