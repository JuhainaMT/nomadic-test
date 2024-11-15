/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "nomadictribe-v2-production.s3.eu-west-1.amazonaws.com",
      "nomadictribe-v2-production.s3.amazonaws.com",
      "i.pinimg.com",
    ],
  },
  trailingSlash: false,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
