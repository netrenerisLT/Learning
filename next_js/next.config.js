// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.pngfind.com", "lh3.googleusercontent.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
