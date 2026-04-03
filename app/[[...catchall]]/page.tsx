import { PLASMIC } from "@/plasmic-init";
import PlasmicClient from "@/components/PlasmicClient";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  // Clean path for GitHub Pages subfolder
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  // Fetch data on the SERVER
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    return notFound();
  }

  // Pass data to the CLIENT
  return <PlasmicClient plasmicData={plasmicData} />;
}

export async function generateStaticParams() {
  return [{ catchall: [] }];
}