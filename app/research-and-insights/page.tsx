import type { Metadata } from "next";

import ArticlesPage from "@/components/sections/ResearchAndInsights/ResearchInsights";
import JsonLd from "@/components/seo/JsonLd";

import { researchAndInsights } from "@/components/sections/ResearchAndInsights/data";
import {
  researchInsightsSchema,
  breadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

import { absoluteUrl } from "@/lib/site";
import InsightHero from "@/components/sections/ResearchAndInsights/InsightHero";

const pagePath = "/research-and-insights";

const hero = {
  title: "Research & Technical",
  accent: "Insights",
  subtitle:
    "Explore AI research, machine learning, software engineering articles, technical reports, and real-world project case studies from Navo Cloud Solutions.",
  bullets: [
    "Artificial Intelligence & Machine Learning",
    "Software Engineering",
    "Technical Reports & Case Studies",
  ],
  meta: [],
};

export const metadata: Metadata = buildMetadata({
  title: "AI Research, Technical Articles & Software Engineering Insights",
  description:
    "Explore AI research, machine learning articles, software engineering insights, technical reports and project case studies by Navo Cloud Solutions, Nepal.",
  path: pagePath,
  keywords: [
    "AI research articles",
    "artificial intelligence research",
    "machine learning articles",
    "deep learning research",
    "computer vision research",
    "software engineering articles",
    "software development insights",
    "AI technical reports",
    "machine learning case studies",
    "AI project case studies",
    "technical research papers",
    "software engineering case studies",
    "large language model research",
    "LLM evaluation",
    "AI system development",
    "technology insights",
    "technical publications",
    "AI and software development Nepal",
    "Navo Cloud Solutions",
    "Navo Cloud articles",
  ],
});

export default function ResearchAndInsights() {
  const pageUrl = absoluteUrl(pagePath);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "AI Research, Articles & Technical Reports",
    url: pageUrl,
    description:
      "A collection of AI research articles, machine learning insights, software engineering publications, technical reports and project case studies published by Navo Cloud Solutions.",
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    about: [
      { "@type": "Thing", name: "Artificial Intelligence" },
      { "@type": "Thing", name: "Machine Learning" },
      { "@type": "Thing", name: "Deep Learning" },
      { "@type": "Thing", name: "Software Engineering" },
      { "@type": "Thing", name: "Computer Vision" },
    ],
    inLanguage: "en",
  };

  return (
    <>
      <JsonLd
        schema={[
          pageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Research & Insights", path: pagePath },
          ]),
          researchInsightsSchema(researchAndInsights),
        ]}
      />

      <main>
        <InsightHero hero={hero} />

        <ArticlesPage />
      </main>
    </>
  );
}
