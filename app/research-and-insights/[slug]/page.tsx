import type { Metadata } from "next";

import ContactCta from "@/components/sections/Home/ContactCta";
import InsightHero from "@/components/sections/ResearchAndInsights/InsightHero";
import {
  researchAndInsights as content,
  formatDate,
} from "@/components/sections/ResearchAndInsights/data";
import Back from "@/components/ui/Back";
import JsonLd from "@/components/seo/JsonLd";

import { ArrowRight, CalendarDays, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

import { absoluteUrl, siteConfig } from "@/lib/site";

interface Hero {
  title: string;
  accent: string;
  subtitle: string;
  bullets: string[];
}

async function getArticle(slug: string) {
  return content.find((article) => article.slug === slug);
}

// Convert HTML content into plain text for SEO descriptions.
function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticle(slug);

  if (!data) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const pagePath = `/research-and-insights/${data.slug}`;

  const description = stripHtml(data.subheading || data.description).slice(
    0,
    160,
  );

  const keywords = [
    data.heading,
    data.category,
    "AI research",
    "machine learning",
    "deep learning",
    "software engineering",
    "technical articles",
    "technology insights",
    "Navo Cloud Solutions",
    "Nepal",
  ].filter(Boolean);

  return buildMetadata({
    title: data.heading,
    description,
    path: pagePath,
    keywords,
  });
}

export default async function ResearchAndInsights({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getArticle(slug);

  if (!data) {
    notFound();
  }

  const pagePath = `/research-and-insights/${data.slug}`;
  const pageUrl = absoluteUrl(pagePath);

  const description = stripHtml(data.subheading || data.description).slice(
    0,
    300,
  );

  const hero: Hero = {
    title: data.heading,
    accent: "",
    subtitle: data.subheading,
    bullets: [],
  };

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: data.heading,
    description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    datePublished: data.date,
    articleSection: data.category,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "Navo Cloud Solutions",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "Navo Cloud Solutions",
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <JsonLd
        schema={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Research & Insights",
              path: "/research-and-insights",
            },
            {
              name: data.heading,
              path: pagePath,
            },
          ]),
        ]}
      />

      <InsightHero hero={hero} />

      <section className="w-full py-20 px-8 max-w-4xl mx-auto text-justify flex flex-col">
        {/* Back */}
        <div className="w-full pb-10 mx-auto max-w-2xl">
          <Back />
        </div>

        {/* Metadata */}
        <div className="flex w-full max-w-2xl mx-auto flex-wrap items-center gap-x-6 gap-y-3 mb-10 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <Tag size={16} className="text-blue-600" />
            {data.category}
          </span>

          <span className="flex items-center gap-2">
            <CalendarDays size={16} className="text-blue-600" />
            {formatDate(data.date)}
          </span>
        </div>

        {/* Description */}
        <div
          className="w-full text-gray-500 max-w-2xl mx-auto flex flex-col pb-10"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />

        {/* Main Content */}
        <div
          className="w-full flex flex-col gap-4 content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        {/* Additional Resources */}
        {data.additionals?.pdf && (
          <Link
            href={data.additionals.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="my-10 text-blue-600 w-fit flex items-center gap-4 transition-all duration-300 hover:scale-102"
          >
            Read paper
            <ArrowRight size={16} />
          </Link>
        )}
      </section>

      <ContactCta />
    </>
  );
}
