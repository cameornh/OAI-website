import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Force Next.js to handle Plasmic's specific module structure
  transpilePackages: ["@plasmicapp/loader-nextjs", "@plasmicapp/react"],

  output: isProd ? "export" : undefined,
  basePath: isProd ? "/OAI-website" : "",
  assetPrefix: isProd ? "/OAI-website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;