import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = siteConfig.ogImage,
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const pageTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: pageTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          alt: pageTitle,
        },
        {
          url: ogImage.replace(/\.jpe?g$/i, ".avif"),
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: siteConfig.lang,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceListSchema(
  services: { name: string; summary: string; id: string }[],
) {
  const servicePages: Record<string, string> = {
    "website-development": "/website-development",
    "custom-ai-development": "/ai-development-and-integration",
    "ai-integration": "/ai-development-and-integration",
    "mobile-application-development": "/mobile-application-development",
    "desktop-software-development": "/software-development",
    "business-tools-and-platforms": "/software-development",
  };

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        url: absoluteUrl(servicePages[service.id] ?? "/"),
        provider: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}

export function researchInsightsSchema(
  insights: {
    slug: string;
    id: string;
    heading: string;
    subheading: string;
    description: string; // HTML
    content: string; // HTML
    category: string;
    date: string;
    additionals?: {
      pdf?: string;
      [key: string]: unknown;
    };
  }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: insights.map((insight, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: insight.heading,
        description: insight.description
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
        datePublished: insight.date,
        url: absoluteUrl(`/research-and-insights/${insight.slug}`),
        mainEntityOfPage: absoluteUrl(`/research-and-insights/${insight.slug}`),
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absoluteUrl("/contact"),
    name: `Contact ${siteConfig.name}`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          telephone: siteConfig.phone,
          areaServed: "Worldwide",
          availableLanguage: ["English", "Nepali"],
        },
      ],
    },
  };
}
