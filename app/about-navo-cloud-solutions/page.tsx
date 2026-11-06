import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";

import PageHero from "@/components/ui/PageHero";
import Mission from "@/components/sections/About/sections/Mission";
import Stats from "@/components/sections/About/sections/Stats";
import Values from "@/components/sections/About/sections/Values";
import Timeline from "@/components/sections/About/sections/Timeline";
import CtaBand from "@/components/ui/CtaBand";
import { aboutContent as content } from "@/components/sections/About/data";
import Team from "@/components/sections/About/sections/Team";

export const metadata: Metadata = buildMetadata({
  title: "About Navo Cloud Solutions | Software Company in Nepal",
  description:
    "Discover Navo Cloud Solutions, a Nepal-based software development company building professional websites, custom business software, mobile applications and AI-powered solutions.",
  path: "/about-navo-cloud-solutions",
  keywords: [
    "about Navo Cloud Solutions",
    "Navo Cloud Solutions Nepal",
    "software development company in Nepal",
    "software company Kathmandu",
    "web development company Nepal",
    "AI development company Nepal",
    "custom software development Nepal",
  ],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      legalName: "Navo Cloud Solutions Pvt Ltd",
      alternateName: "NAVO",
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
      image: absoluteUrl(siteConfig.ogImage),
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      foundingDate: siteConfig.founded,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      knowsAbout: [
        "Website Development",
        "Custom Software Development",
        "Artificial Intelligence",
        "AI Development and Integration",
        "Mobile Application Development",
        "Business Software Solutions",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": absoluteUrl("/about-navo-cloud-solutions#webpage"),
      url: absoluteUrl("/about-navo-cloud-solutions"),
      name: "About Navo Cloud Solutions",
      description:
        "Learn about Navo Cloud Solutions, its mission, values, work and approach to building software, websites, mobile applications and AI-powered business solutions.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
      mainEntity: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: "en",
    },
  ],
};

export default function About() {
  return (
    <>
      <JsonLd schema={organizationSchema} />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "About Navo Cloud Solutions",
            path: "/about-navo-cloud-solutions",
          },
        ])}
      />

      <div className="">
        <PageHero hero={content.hero} />
        <Mission mission={content.mission} />
        <Stats stats={content.stats} />
        <Values values={content.values} />
        <Timeline entries={content.timeline} />
        <Team team={content.team} />
        <CtaBand />
      </div>
    </>
  );
}
