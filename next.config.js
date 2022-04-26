/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    infuraKey: process.env.INFURAKEY,
  }
}
module.exports = nextConfig
