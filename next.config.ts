// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',  // <=== Add this line
//   images: {
//     unoptimized: true, // <=== Highly recommended for GitHub Pages
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This creates the /out folder GitHub is looking for
  images: {
    unoptimized: true,   // GitHub Pages doesn't support Next's default image optimization
  },
};

module.exports = nextConfig;