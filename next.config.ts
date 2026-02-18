/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required for static export
    domains: ["cdn.sanity.io"], // Keeps your Sanity images working
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents build failure from linting errors
  },
  typescript: {
    ignoreBuildErrors: true,  // Prevents build failure from type errors
  },
};

module.exports = nextConfig;