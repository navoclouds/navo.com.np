import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";

import PageHero from "@/components/ui/PageHero";
import { websiteDevelopmentContent as content } from "@/components/sections/WebsiteDevelopment/data";
import Clients from "@/components/sections/WebsiteDevelopment/sections/Clients";
import ServicesSection from "@/components/ui/ServicesSection";
import Benefit from "@/components/ui/Benefits";
import PricingSection from "@/components/ui/Pricing";
import ContactCta from "@/components/sections/Home/ContactCta";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CustomPrice from "@/components/ui/CustomPricing";

export const metadata: Metadata = buildMetadata({
  title: "Website Development Company in Nepal | Navo Cloud Solutions",
  description:
    "Get professional website development services in Nepal. We build responsive business websites, custom websites, CMS platforms and e-commerce websites with SEO-friendly foundations.",
  path: "/website-development",
  keywords: [
    "website development company in Nepal",
    "website development services Nepal",
    "web development company Nepal",
    "website design company Nepal",
    "professional website development Nepal",
    "business website development",
    "custom website development",
    "responsive website design",
    "ecommerce website development Nepal",
    "CMS website development",
    "SEO friendly website development",
    "website redesign services",
    "website maintenance Nepal",
    "website hosting Nepal",
    "Navo Cloud Solutions",
  ],
});

const websiteDevelopmentSchema = {
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
      "@id": absoluteUrl("/website-development#webpage"),
      url: absoluteUrl("/website-development"),
      name: "Website Development Services in Nepal | Navo Cloud Solutions",
      description:
        "Professional website design and development services in Nepal, including responsive business websites, custom web development, CMS platforms, e-commerce websites and website SEO.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
      mainEntity: {
        "@id": absoluteUrl("/website-development#service"),
      },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/website-development#service"),
      name: "Website Design and Development Services",
      serviceType: [
        "Website Design",
        "UI/UX Design",
        "Custom Website Development",
        "Responsive Web Development",
        "CMS Development",
        "E-commerce Website Development",
        "Website SEO Setup",
        "Website Testing and Optimization",
        "Website Maintenance",
      ],
      description:
        "Navo Cloud Solutions provides professional website design and development services for businesses, including responsive websites, custom web applications, content management systems, e-commerce platforms and SEO-friendly website foundations.",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      url: absoluteUrl("/website-development"),
    },
  ],
};

export default function WebsiteDevelopment() {
  return (
    <>
      <JsonLd schema={websiteDevelopmentSchema} />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Website Development",
            path: "/website-development",
          },
        ])}
      />

      <div>
        <PageHero hero={content.hero} />
        <Clients clients={content.clients} />
        <ServicesSection services={content.services} />
        <Benefit benefits={content.benefits} />
        <PricingSection pricing={content.pricing} mostpopular={1}/>
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
