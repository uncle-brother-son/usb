import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as static site for Cloudflare Pages
  output: 'export',
  
  // Image optimization configuration for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
