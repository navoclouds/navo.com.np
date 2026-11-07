import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";

import PageHero from "@/components/ui/PageHero";
import { aiDevelopmentContent as content } from "@/components/sections/AiDevelopment/data";
import ServicesSection from "@/components/ui/ServicesSection";
import Benefit from "@/components/ui/Benefits";
import ContactCta from "@/components/sections/Home/ContactCta";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CustomPrice from "@/components/ui/CustomPricing";
import PricingSection from "@/components/ui/Pricing";

const pagePath = "/ai-development-and-integration";

export const metadata: Metadata = buildMetadata({
  title: "AI Development Company in Nepal | Navo Cloud Solutions",
  description:
    "Navo Cloud provides AI development services in Nepal, including RAG chatbots, predictive machine learning, AI object detection, image recognition and custom AI applications.",
  path: pagePath,
  ogImage: "/images/opengraph/artificial_intelligence.jpg",
  keywords: [
    "AI development company in Nepal",
    "AI development services Nepal",
    "artificial intelligence development Nepal",
    "AI chatbot development Nepal",
    "RAG chatbot development",
    "RAG AI chatbot integration",
    "custom AI chatbot development",
    "machine learning development Nepal",
    "predictive AI development",
    "predictive analytics solutions",
    "machine learning model development",
    "AI object detection Nepal",
    "computer vision development Nepal",
    "image recognition AI",
    "AI image classification",
    "custom AI application development",
    "business AI solutions Nepal",
    "AI software development",
    "Navo Cloud Solutions",
  ],
});

const aiDevelopmentSchema = {
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
      name: "AI Development Company in Nepal | Navo Cloud Solutions",
      description:
        "Explore AI development services in Nepal, including RAG-powered AI chatbots, predictive machine learning, object detection, image recognition and custom AI application development.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
      mainEntity: {
        "@id": absoluteUrl(`${pagePath}#service`),
      },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": absoluteUrl(`${pagePath}#service`),
      name: "AI Development & Integration Services",
      serviceType: [
        "AI Chatbot Development",
        "Retrieval-Augmented Generation (RAG) Integration",
        "Predictive Machine Learning Development",
        "Predictive Analytics",
        "AI Object Detection",
        "Computer Vision Development",
        "Image Recognition and Classification",
        "Custom AI Application Development",
      ],
      description:
        "Navo Cloud Solutions provides AI development and integration services in Nepal. We develop RAG-powered business chatbots, predictive machine learning models, computer vision applications, object detection systems and custom AI solutions for businesses.",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      url: absoluteUrl(pagePath),
    },
  ],
};

export default function AIDevelopment() {
  return (
    <>
      <JsonLd schema={aiDevelopmentSchema} />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "AI Development & Integration",
            path: pagePath,
          },
        ])}
      />

      <div>
        <PageHero hero={content.hero} />

        <ServicesSection services={content.services} />

        <Benefit benefits={content.benefits} />

        <PricingSection pricing={content.pricing} mostpopular={0} />

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
