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
  // This tells the production build to at least create the index.html
  return [{ page: [] }];
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  // This logic works for BOTH local (root) and GitHub (subfolder)
  let pathSegments = params?.page || [];
  if (pathSegments[0] === "OAI-website") {
    pathSegments = pathSegments.slice(1);
  }

  const urlPath = "/" + (pathSegments.join("/") || "");

  const builderContent = await builder
    .get("page", {
      userAttributes: { urlPath: urlPath },
      includeUnpublished: true,
    })
    .toPromise();

  if (builderContent) {
    return (
      <>
        <OAIHeader /> 
        <RenderBuilderContent content={builderContent} model="page" />
      </>
    );
  }

  if (urlPath === "/") {
    return (
      <>
        <OAIHeader />
        <OAIHeroVideo />
        <OAILanding />
      </>
    );
  }

  return <RenderBuilderContent content={builderContent} model="page" />;
}