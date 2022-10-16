/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'imgur.com',
      "i.imgur.com"
  ]
  },
  swcMinify: true,
}

module.exports = nextConfig
