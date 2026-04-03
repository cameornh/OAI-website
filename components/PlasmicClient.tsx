"use client";

import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicClient({ plasmicData }: { plasmicData: any }) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
    </PlasmicRootProvider>
  );
}