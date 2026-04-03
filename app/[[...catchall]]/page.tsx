import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init"; 
import { notFound } from "next/navigation";

export default async function PlasmicPage(props: { params: Promise<{ catchall?: string[] }> }) {
  const params = await props.params;
  
  // Clean the path for GitHub Pages
  let pathSegments = params.catchall || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }
  const path = "/" + pathSegments.join("/");

  // Fetch the page design from Plasmic
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData) {
    // If no Plasmic page exists, Next.js handles the 404
    return notFound();
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={plasmicData.entryCompMetadatas[0].name} />
    </PlasmicRootProvider>
  );
}

// Ensure the homepage is pre-rendered for GitHub Pages
export async function generateStaticParams() {
  return [{ catchall: [] }];
}