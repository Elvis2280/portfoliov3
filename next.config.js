/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://ik.imagekit.io/elvisdev'],
  },
}

module.exports = nextConfig
