import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { siteConfig, absoluteUrl } from "@/lib/site";

import PageHero from "@/components/ui/PageHero";
import { softwareDevelopmentContent as content } from "@/components/sections/SoftwareDevelopment/data";
import ServicesSection from "@/components/ui/ServicesSection";
import Benefit from "@/components/ui/Benefits";
import ContactCta from "@/components/sections/Home/ContactCta";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CustomPrice from "@/components/ui/CustomPricing";

export const metadata: Metadata = buildMetadata({
  title: "Custom Software Development Company in Nepal | Navo Cloud Solutions",
  description:
    "Looking for a software development company in Nepal? Navo Cloud builds custom business software, ERP, CRM, inventory systems, web applications and automation solutions.",
  path: "/software-development",
  ogImage: "/images/opengraph/softwares_og.jpg",
  keywords: [
    "software development company in Nepal",
    "software development services Nepal",
    "custom software development Nepal",
    "business software development",
    "custom business software Nepal",
    "ERP software development Nepal",
    "CRM software development Nepal",
    "inventory management software development",
    "business management software",
    "enterprise software development",
    "custom web application development",
    "workflow automation software",
    "business process automation",
    "API development and integration",
    "software solutions for small businesses",
    "enterprise application development",
    "software maintenance Nepal",
    "Navo Cloud Solutions",
  ],
});

const softwareDevelopmentSchema = {
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
      "@id": absoluteUrl("/software-development#webpage"),
      url: absoluteUrl("/software-development"),
      name: "Custom Software Development Company in Nepal | Navo Cloud Solutions",
      description:
        "Custom software development services in Nepal, including business management software, ERP and CRM systems, inventory management applications, workflow automation, custom web applications and API integrations.",
      isPartOf: {
        "@id": absoluteUrl("/#website"),
      },
      about: {
        "@id": absoluteUrl("/#organization"),
      },
      mainEntity: {
        "@id": absoluteUrl("/software-development#service"),
      },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": absoluteUrl("/software-development#service"),
      name: "Custom Software Development Services",
      serviceType: [
        "Custom Software Development",
        "Business Management Software Development",
        "ERP Software Development",
        "CRM Software Development",
        "Inventory Management Software Development",
        "Sales and Order Management Systems",
        "Custom Web Application Development",
        "Business Process Automation",
        "API Development and Software Integration",
        "Custom Dashboard and Reporting Development",
        "Software Maintenance and Technical Support",
      ],
      description:
        "Navo Cloud Solutions provides custom software development services for startups, small businesses and enterprises in Nepal. We build business management applications, ERP and CRM systems, inventory management software, custom web applications, workflow automation solutions and integrated business platforms.",
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      url: absoluteUrl("/software-development"),
    },
  ],
};

export default function SoftwareDevelopment() {
  return (
    <>
      <JsonLd schema={softwareDevelopmentSchema} />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "Software Development",
            path: "/software-development",
          },
        ])}
      />

      <div>
        <PageHero hero={content.hero} />

        <ServicesSection services={content.services} />

        <Benefit benefits={content.benefits} />

        <div className="bg-slate-950 p-10" />

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
