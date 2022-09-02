/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  withTM: require('next-transpile-modules')(['three'])
}

module.exports = nextConfig
