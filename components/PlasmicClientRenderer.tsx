"use client";

import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicClientRenderer({ 
  plasmicData, 
  componentName 
}: { 
  plasmicData: any, 
  componentName: string 
}) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={componentName} />
    </PlasmicRootProvider>
  );
}