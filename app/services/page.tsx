import type { Metadata } from "next";

import ServicesPage from "@/components/sections/Services/Services";
import JsonLd from "@/components/seo/JsonLd";
import { servicesContent } from "@/components/sections/Services/data";
import { breadcrumbSchema, buildMetadata, faqSchema, serviceListSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Software Engineering Services",
  description:
    "Website development, custom AI, desktop software, AI integration, mobile apps and business platforms — delivered by senior engineers who stay on call after launch.",
  path: "/services",
  keywords: [
    "software development services",
    "custom AI development",
    "AI integration company",
    "mobile app development Nepal",
    "Next.js development services",
  ],
});

export default function Services() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceListSchema(servicesContent.services),
          faqSchema(servicesContent.faq),
        ]}
      />
      <ServicesPage />
    </>
  );
}