import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/sections/Home/Hero";
import Services from "@/components/sections/Home/Services";
import OurSolutions from "@/components/sections/Home/OurSolutions";
import OurWork from "@/components/sections/Home/Websites";
import Articles from "@/components/sections/Home/ResearchInsights";
import ContactCta from "@/components/sections/Home/ContactCta";

import { servicesContent } from "@/components/sections/Services/data";
import { serviceListSchema } from "@/lib/seo";
import { AboutNavo } from "@/components/sections/Home/AboutNavo";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={serviceListSchema(servicesContent.services)} />
      <Hero />
      <Services />
      <OurSolutions />
      <OurWork />
      <Articles />
      <AboutNavo />
      <ContactCta />
    </>
  );
}
