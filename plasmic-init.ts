import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import "server-only"; // This ensures this file never accidentally leaks to the browser

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID!,
      token: process.env.PLASMIC_PROJECT_API_TOKEN!,
    },
  ],
  // For static export, we don't need a live preview instance here
  preview: false, 
});