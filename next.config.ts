import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

// Check if we are on GitHub Actions or running 'npm run build'
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = BuilderDevTools()({
  /* 
     ONLY use "export" when building for GitHub. 
     This allows 'npm run dev' to be flexible and stop crashing.
  */
  output: isProd ? "export" : undefined, 

  /* Only use the subfolder prefix on GitHub */
  basePath: isProd ? "/OAI-website" : "",
  assetPrefix: isProd ? "/OAI-website" : "",

  images: {
    unoptimized: true,
  },
});

export default nextConfig;