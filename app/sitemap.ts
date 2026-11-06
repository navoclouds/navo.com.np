import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";
import { researchAndInsights } from "@/components/sections/ResearchAndInsights/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Research PDF documents
  const papers: MetadataRoute.Sitemap = researchAndInsights.map((article) => ({
    url: absoluteUrl(`/research-and-insights/${article.slug}`),
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  // Remove duplicate URLs
  const sitemapEntries = [...pages, ...papers];

  return Array.from(
    new Map(sitemapEntries.map((entry) => [entry.url, entry])).values(),
  );
}
