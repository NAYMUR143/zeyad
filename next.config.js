/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "f.shgcdn.com"],
  },
  distDir: "build",
};

module.exports = nextConfig;
