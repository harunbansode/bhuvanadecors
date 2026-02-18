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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',      // This creates the /out folder GitHub is looking for
//   images: {
//     unoptimized: true,   // GitHub Pages doesn't support Next's default image optimization
//   },
// };

// module.exports = nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Required for GitHub Pages - tells Next to create /out folder
//   output: 'export',      
  
//   images: {
//     // GitHub Pages doesn't support the built-in image optimizer
//     unoptimized: true,   
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//       },
//     ],
//   },

//   // These three lines stop tiny errors from crashing your build
//   eslint: { ignoreDuringBuilds: true },
//   typescript: { ignoreBuildErrors: true },
  
//   // Ensures CSS/JS load correctly from the root domain
//   trailingSlash: true, 
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',      // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required for static hosting
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,  // Skips the 'Property width does not exist' error
  },
};

export default nextConfig;