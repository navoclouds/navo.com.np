import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";

import PageHero from "@/components/ui/PageHero";
import { mobileApplicationContent as content } from "@/components/sections/MobileApplication/data";
import ServicesSection from "@/components/ui/ServicesSection";
import Benefit from "@/components/ui/Benefits";
import ContactCta from "@/components/sections/Home/ContactCta";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CustomPrice from "@/components/ui/CustomPricing";
import PricingSection from "@/components/ui/Pricing";

const pagePath = "/mobile-application-development";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App Development Company in Nepal | Navo Cloud Solutions",
  description:
    "Navo Cloud Solutions provides mobile app development in Nepal. Build custom Android, iOS and cross-platform apps for businesses, startups and enterprises.",
  path: pagePath,
  ogImage: "/images/opengraph/mobile_app_og.jpg",
  keywords: [
    "mobile app development company in Nepal",
    "mobile application development Nepal",
    "mobile app development Nepal",
    "app development company Nepal",
    "mobile application development company Nepal",
    "Android app development Nepal",
    "Android application development company Nepal",
    "iOS app development Nepal",
    "iPhone app development Nepal",
    "cross platform app development Nepal",
    "Flutter app development Nepal",
    "React Native app development Nepal",
    "custom mobile app development Nepal",
    "business mobile app development",
    "business application development Nepal",
    "ecommerce app development Nepal",
    "ecommerce mobile application",
    "delivery app development Nepal",
    "booking app development Nepal",
    "restaurant app development Nepal",
    "on demand app development",
    "custom Android and iOS applications",
    "mobile UI UX design Nepal",
    "mobile app backend development",
    "mobile API integration",
    "mobile app database development",
    "mobile app development services",
    "mobile software development Nepal",
    "Navo Cloud",
    "Navo Cloud Solutions",
    "Navo Cloud Solutions Pvt Ltd",
  ],
});

const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      legalName: "Navo Cloud Solutions Pvt Ltd",
      url: absoluteUrl("/"),
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl(`${pagePath}#webpage`),
      url: absoluteUrl(pagePath),
      name: "Mobile App Development Company in Nepal | Navo Cloud Solutions",
      description:
        "Mobile application development services in Nepal by Navo Cloud Solutions, including Android app development, iOS applications, cross-platform mobile apps and custom business applications.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl(`${pagePath}#service`),
      },
      mainEntity: {
        "@id": absoluteUrl(`${pagePath}#service`),
      },
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": absoluteUrl(`${pagePath}#service`),
      name: "Mobile Application Development Services",
      alternateName: [
        "Mobile App Development Nepal",
        "Android App Development",
        "iOS App Development",
        "Cross-Platform App Development",
      ],
      serviceType: [
        "Mobile Application Development",
        "Android Application Development",
        "iOS Application Development",
        "Cross-Platform Mobile App Development",
        "Custom Mobile App Development",
        "Mobile Backend Development",
        "Mobile API Integration",
        "Business Mobile Application Development",
        "E-commerce App Development",
        "On-Demand Mobile App Development",
      ],
      description:
        "Navo Cloud Solutions provides custom mobile application development services in Nepal. We build Android and iOS applications, cross-platform mobile apps, e-commerce applications, business platforms and specialized mobile solutions with integrated backend systems, databases and APIs.",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      audience: [
        {
          "@type": "Audience",
          audienceType: "Startups",
        },
        {
          "@type": "Audience",
          audienceType: "Small and Medium-Sized Businesses",
        },
        {
          "@type": "Audience",
          audienceType: "Enterprises",
        },
      ],
      url: absoluteUrl(pagePath),
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl(`${pagePath}#faq`),
      url: absoluteUrl(`${pagePath}#faq`),
      mainEntity: content.faqs.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function MobileApplicationDevelopment() {
  return (
    <>
      <JsonLd schema={mobileApplicationSchema} />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Mobile Application Development",
            path: pagePath,
          },
        ])}
      />

      <div>
        <PageHero hero={content.hero} />

        <ServicesSection services={content.services} />

        <Benefit benefits={content.benefits} />

        <PricingSection pricing={content.pricing} mostpopular={1} />

        <CustomPrice customPrice={content.customPricing} />

        <FaqAccordion
          items={content.faqs.items}
          title={content.faqs.title}
          description={content.faqs.description}
        />

        <ContactCta />
      </div>
    </>
  );
}
