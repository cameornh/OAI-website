import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
// Keep your imports in case you want to use them as "blocks" later
import OAILanding from "../../components/oai-landing";
import OAIHeader from "../../components/oai-header";
import OAIHeroVideo from "../../components/oai-hero-video";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
}

export async function generateStaticParams() {
  return [
    { page: [] }, 
  ];
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  // 1. CLEAN THE PATH: 
  // If the URL is /OAI-website/about, params.page is ["OAI-website", "about"].
  // We need to remove "OAI-website" so Builder just sees "/about".
  let pathSegments = params?.page || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }

  const urlPath = "/" + (pathSegments.join("/") || "");

  // 2. GET CONTENT FROM BUILDER
  const builderContent = await builder
    .get("page", {
      userAttributes: {
        urlPath: urlPath,
      },
      includeUnpublished: true,
    })
    .toPromise();

  // 3. LOGIC FOR HOMEPAGE
  // If Builder has content for this page, show it! 
  // This allows your collaborator to edit the homepage.
  if (builderContent) {
    return (
      <>
        {/* You can keep your Header here so it's on every page */}
        <OAIHeader /> 
        <RenderBuilderContent content={builderContent} model="page" />
      </>
    );
  }

  // 4. FALLBACK:
  // If Builder is empty and it's the homepage, show your original hardcoded components.
  if (urlPath === "/") {
    return (
      <>
        <OAIHeader />
        <OAIHeroVideo />
        <OAILanding />
      </>
    );
  }

  // 5. If truly nothing exists, RenderBuilderContent will show a 404
  return <RenderBuilderContent content={builderContent} model="page" />;
}