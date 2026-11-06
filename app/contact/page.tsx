import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { contactContent as content } from "@/components/sections/Contact/data";
import {
  breadcrumbSchema,
  buildMetadata,
  contactPageSchema,
  faqSchema,
} from "@/lib/seo";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Enquiry from "@/components/sections/Contact/sections/Enquiry";

export const metadata: Metadata = buildMetadata({
  title: "Contact Navo Cloud Solutions | Software Company Nepal",
  description:
    "Contact Navo Cloud Solutions, a software development company in Nepal. Discuss website development, custom software, AI solutions, integrations and mobile app development.",
  path: "/contact",
  keywords: [
    "contact Navo Cloud Solutions",
    "software development company Nepal",
    "web development company Nepal",
    "hire software developers Nepal",
    "custom software development Nepal",
    "AI development company Nepal",
    "AI integration services",
    "mobile app development Nepal",
    "website development services",
    "business software development",
    "software project consultation",
    "IT company Kathmandu",
    "software company Kathmandu",
    "technology solutions Nepal",
  ],
});

export default function Contact() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageSchema(),
          faqSchema(content.faq),
        ]}
      />
      <div className="bg-surface">
        <PageHero hero={content.hero} />
        <Enquiry content={content} />
        <FaqAccordion
          items={content.faq}
          title="Before you write."
          rule="blue"
        />
      </div>
    </>
  );
}
