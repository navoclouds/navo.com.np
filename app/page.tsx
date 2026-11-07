import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/sections/Home/Hero";
import Services from "@/components/sections/Home/Services";
import OurSolutions from "@/components/sections/Home/OurSolutions";
import OurWork from "@/components/sections/Home/Websites";
import Insights from "@/components/sections/Home/ResearchInsights";
import ContactCta from "@/components/sections/Home/ContactCta";

import { servicesContent } from "@/components/sections/Services/data";
import { buildMetadata, serviceListSchema } from "@/lib/seo";
import { AboutNavo } from "@/components/sections/Home/AboutNavo";

export const metadata = buildMetadata({
  title: "Software Development Company in Nepal | Navo Cloud Solutions",
  description:
    "Navo Cloud Solutions builds business websites, custom software, mobile apps and AI solutions in Nepal and worldwide.",
  path: "/",
  keywords: [
    "software development company Nepal",
    "IT company Nepal",
    "web development company Nepal",
    "custom software development Nepal",
    "AI development company Nepal",
    "mobile app development Nepal",
    "business software solutions Nepal",
    "website development Kathmandu",
    "Navo Cloud Solutions",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={serviceListSchema(servicesContent.services)} />
      <Hero />
      <Services />
      <OurSolutions />
      <OurWork />
      <Insights />
      <AboutNavo />
      <ContactCta />
    </>
  );
}
