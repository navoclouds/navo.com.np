import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";
import { articlesContent } from "@/components/sections/Articles/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // PDFs are real, indexable documents — list them so they get crawled.
  const papers: MetadataRoute.Sitemap = [
    articlesContent.featured,
    ...articlesContent.articles,
  ].map((article) => ({
    url: absoluteUrl(article.pdf),
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pages, ...papers];
}