import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Cloudflare Pages
  output: 'standalone',
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    // For Cloudflare, you may want to use a custom loader
    // loader: 'custom',
    // loaderFile: './lib/image-loader.ts',
  },
  
  // Enable experimental features if needed
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
