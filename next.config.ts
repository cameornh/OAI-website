import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 1. THIS IS THE FIX: Tell Next.js to process Plasmic's code specifically
  transpilePackages: ["@plasmicapp/loader-nextjs", "@plasmicapp/react"],

  output: isProd ? "export" : undefined, 
  basePath: isProd ? "/OAI-website" : "",
  assetPrefix: isProd ? "/OAI-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;