import { PLASMIC } from "@/plasmic-init";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  // 1. Clean path for GitHub Pages subfolder
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  // 2. Fetch data (Server Side)
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    return notFound();
  }

  // 3. Render directly here. 
  // Because this is a Server Component, we don't need a separate "use client" wrapper
  // unless you have complex interactive state-driven components.
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
    </PlasmicRootProvider>
  );
}

export async function generateStaticParams() {
  return [{ catchall: [] }];
}