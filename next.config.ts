import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Use "export" only on GitHub
  output: isProd ? "export" : undefined, 
  basePath: isProd ? "/OAI-website" : "",
  assetPrefix: isProd ? "/OAI-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;