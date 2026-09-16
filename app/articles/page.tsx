import type { Metadata } from "next";

import ArticlesPage from "@/components/sections/Articles/Articles";
import JsonLd from "@/components/seo/JsonLd";
import { articlesContent } from "@/components/sections/Articles/data";
import { articleListSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Articles & Technical Reports",
  description:
    "Engineering write-ups from the Navo team on threat detection, semantic resume matching, LLM evaluation, SLOs and data modelling — free to read and download as PDFs.",
  path: "/articles",
  keywords: [
    "software engineering articles",
    "AI technical reports",
    "LLM evaluation",
    "threat detection research",
    "machine learning case study",
  ],
});

export default function Articles() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
          ]),
          articleListSchema([articlesContent.featured, ...articlesContent.articles]),
        ]}
      />
      <ArticlesPage />
    </>
  );
}