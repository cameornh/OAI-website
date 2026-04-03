import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  output: "export",
  images: {
    unoptimized: true,
  },
});

export default nextConfig;