import type { Metadata } from "next";

import ResearchInsightsList from "@/components/sections/ResearchAndInsights/ResearchInsights";
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
    "Explore AI research, machine learning insights, software engineering reports, and real-world technology case studies from Navo Cloud Solutions.",
  bullets: [
    "Artificial Intelligence & Machine Learning",
    "Software Engineering",
    "Technical Reports & Case Studies",
  ],
  meta: [],
};

export const metadata: Metadata = buildMetadata({
  title: "Research & Insights | Navo Cloud Solutions",
  description:
    "Explore Navo Cloud Solutions' research and insights on AI, machine learning, software engineering, technical reports and real-world technology projects in Nepal.",
  path: pagePath,
  keywords: [
    "AI research Nepal",
    "artificial intelligence research",
    "machine learning research",
    "deep learning research",
    "computer vision research",
    "software engineering insights",
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
    "Navo Cloud research",
  ],
});

export default function ResearchAndInsights() {
  const pageUrl = absoluteUrl(pagePath);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Research & Technical Insights",
    url: pageUrl,
    description:
      "Research and technical insights on AI, machine learning, software engineering, technical reports and project case studies published by Navo Cloud Solutions.",
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

        <ResearchInsightsList />
      </main>
    </>
  );
}
