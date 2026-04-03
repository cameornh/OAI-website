import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import OAILanding from "../../components/oai-landing";
import OAIHeader from "../../components/oai-header";

// Initialize with your API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
}

// 1. This function tells Next.js which paths to pre-render.
// For now, we tell it to at least render the homepage (empty array).
export async function generateStaticParams() {
  return [
    { page: [] }, // The homepage
  ];
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const urlPath = "/" + (params?.page?.join("/") || "");

  // For homepage, render the OAI landing page with header
  if (urlPath === "/") {
    return (
      <>
        <OAIHeader />
        <OAILanding />
      </>
    );
  }

  const builderContent = await builder
    .get("page", {
      userAttributes: {
        urlPath: urlPath,
      },
      includeUnpublished: true,
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={builderContent} model="page" />
    </>
  );
}
