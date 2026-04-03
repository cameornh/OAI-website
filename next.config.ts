import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const repoName = "/OAI-website"; 

const nextConfig: NextConfig = BuilderDevTools()({
  /* Tell Next.js we are serving from a subfolder */
  basePath: repoName,
  
  /* Essential for GitHub Pages */
  output: "export",
  images: {
    unoptimized: true,
  },
});

export default nextConfig;