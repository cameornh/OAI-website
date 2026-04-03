// Notice the import path ends in /react-server-conditional
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects:[
    {
      id: process.env.PLASMIC_PROJECT_ID!,
      token: process.env.PLASMIC_PROJECT_API_TOKEN!,
    },
  ],
  preview: false,
});