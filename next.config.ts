import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* GitHub Pages requires a static export */
  output: "export",
  
  /* GitHub Pages doesn't support Next.js's built-in image optimization server */
  images: {
    unoptimized: true,
  },
});

export default nextConfig;