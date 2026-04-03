import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Replace with your Public API Key from Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const builderContent = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
      // Set to true to include unpublished content for previewing
      includeUnpublished: true,
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page content */}
      <RenderBuilderContent content={builderContent} model="page" />
    </>
  );
}