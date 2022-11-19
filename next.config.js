/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_API: process.env.BASE_API,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
