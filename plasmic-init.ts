import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PLASMIC_PROJECT_ID",  // Found in Plasmic Project Settings
      token: "YOUR_PLASMIC_API_TOKEN", // Found in Plasmic Project Settings
    },
  ],
  // Set preview to true to see unpublished changes while developing
  preview: true,
});