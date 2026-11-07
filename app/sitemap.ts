import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";
import { researchAndInsights } from "@/components/sections/ResearchAndInsights/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static website pages
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Individual research and insights pages
  const insightPages: MetadataRoute.Sitemap = researchAndInsights.map(
    (insight) => ({
      url: absoluteUrl(`/research-and-insights/${insight.slug}`),
      lastModified: new Date(insight.date),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  );

  // Combine and remove duplicate URLs
  const sitemapEntries = [...pages, ...insightPages];

  return Array.from(
    new Map(sitemapEntries.map((entry) => [entry.url, entry])).values(),
  );
}
