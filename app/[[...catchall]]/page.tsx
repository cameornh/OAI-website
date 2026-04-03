import { PLASMIC } from "@/plasmic-init";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    return notFound();
  }

  const componentName = plasmicData.entryCompMetas[0].name;

  return (
    // We pass the data here - the 'transpilePackages' fix in next.config 
    // ensures this doesn't crash the server build anymore.
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={componentName} />
    </PlasmicRootProvider>
  );
}

export async function generateStaticParams() {
  return [{ catchall: [] }];
}