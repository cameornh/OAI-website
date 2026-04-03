import { PLASMIC } from "@/plasmic-init";
import PlasmicClientRoot from "@/components/plasmic-client-root";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  // 1. Clean path for GitHub Pages subfolder
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  // 2. Fetch data ON THE SERVER
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    return notFound();
  }

  // 3. Pass that data to the CLIENT component for rendering
  return <PlasmicClientRoot plasmicData={plasmicData} />;
}

export async function generateStaticParams() {
  return [{ catchall: [] }];
}