import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID!,
      token: process.env.PLASMIC_PROJECT_API_TOKEN!,
    },
  ],
  // Use preview mode only in development
  preview: process.env.NODE_ENV !== "production",
});