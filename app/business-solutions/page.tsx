import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ProductsPage from "@/components/sections/Solutions/Solutions";
import JsonLd from "@/components/seo/JsonLd";
import { solutions } from "@/components/sections/Solutions/data";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";
import type { Hero } from "@/lib/types";
import ContactCta from "@/components/sections/Home/ContactCta";

export const metadata: Metadata = buildMetadata({
  title: "Business Solutions & Software Tools",
  description:
    "Explore business solutions developed by Navo Cloud Solutions. Simplify retail operations with Navo POS and streamline recruitment with Navo Hire AI resume screening and candidate matching.",
  path: "/business-solutions",
  keywords: [
    "business solutions",
    "business software solutions",
    "business management software",
    "custom business software",
    "business tools",
    "POS software",
    "point of sale system",
    "inventory management software",
    "retail management software",
    "sales and order management system",
    "AI recruitment software",
    "AI resume screening tool",
    "automated resume screening",
    "candidate matching software",
    "recruitment management tools",
    "business software Nepal",
    "Navo Cloud Solutions",
    "Navo POS",
    "Navo Hire",
  ],
});

const hero: Hero = {
  eyebrow: "NAVO BUSINESS SOLUTIONS",
  title: "Smart Business",
  accent: "Software & Digital Tools.",
  subtitle:
    "Explore in-house business software developed by Navo Cloud Solutions, including POS and inventory management systems and AI-powered recruitment tools.",
  bullets: [
    "POS & Inventory Management Software",
    "AI Resume Screening & Candidate Matching",
    "Business Automation & Digital Tools",
  ],
  actions: [
    {
      label: "Talk to Our Team",
      href: "/contact",
    },
  ],
  meta: [
    {
      label: "Developed By",
      value: "Navo Cloud Solutions",
    },
    {
      label: "Solutions",
      value: "POS & AI Recruitment",
    },
    {
      label: "Focus",
      value: "Business Automation",
    },
  ],
  backgroundImage: "/solutions-banner.webp",
};

const solutionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Navo In-House Business Solutions",
  description:
    "A collection of business software and digital tools developed by Navo Cloud Solutions to simplify business operations, retail management and recruitment.",
  itemListElement: solutions.map((solution, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: solution.name,
      description: solution.description.replace(/<[^>]*>/g, " ").trim(),
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: absoluteUrl(`/business-solutions#${solution.id}`),
      author: {
        "@type": "Organization",
        name: "Navo Cloud Solutions",
        url: absoluteUrl("/"),
      },
    },
  })),
};

export default function BusinessSolutions() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Business Solutions", path: "/business-solutions" },
          ]),
          solutionsSchema,
        ]}
      />

      <PageHero hero={hero} />

      <ProductsPage />

      <ContactCta />
    </>
  );
}
