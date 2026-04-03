import { PLASMIC } from "@/plasmic-init";
import PlasmicClientRenderer from "@/components/PlasmicClientRenderer";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  // 1. Handle GitHub Pages subfolder
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  // 2. Fetch data on the Server
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    return notFound();
  }

  // 3. Pass data to the Client Renderer
  return (
    <PlasmicClientRenderer 
      plasmicData={plasmicData} 
      componentName={plasmicData.entryCompMetas[0].name} 
    />
  );
}

export async function generateStaticParams() {
  return [{ catchall: [] }];
}