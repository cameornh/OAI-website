"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }
  return <DefaultErrorPage statusCode={404} />;
}