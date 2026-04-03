"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  // If we have content, OR if we are currently inside the Builder editor, 
  // render the BuilderComponent.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }

  // Only show 404 if we are NOT in the editor and there is no content.
  return <DefaultErrorPage statusCode={404} />;
}