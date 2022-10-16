/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'imgur.com',
      "i.imgur.com",
      "webwriterspotlight.com"
  ]
  },
  swcMinify: true,
}

module.exports = nextConfig
