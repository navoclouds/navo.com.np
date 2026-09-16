import type { Metadata } from "next";

import AboutUsPage from "@/components/sections/About/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Who we are, how we work, and the principles behind the software we build — a 41-person engineering group working out of Kathmandu, Berlin and Singapore since 2019.",
  path: "/about-us",
  keywords: [
    "about Navo Cloud Solution",
    "software engineering team Nepal",
    "custom software company",
  ],
});

export default function About() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <AboutUsPage />
    </>
  );
}