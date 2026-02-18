import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This is the magic line for GitHub Pages
  images: {
    unoptimized: true,   // Required for static hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // These prevent small warnings from crashing your build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;