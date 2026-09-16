import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/sections/Home/Hero";
import Services from "@/components/sections/Home/Services";
import OurProducts from "@/components/sections/Home/OurProducts";
import OurWork from "@/components/sections/Home/OurWork";
import Articles from "@/components/sections/Home/Articles";
import ContactCta from "@/components/sections/Home/ContactCta";

import { servicesContent } from "@/components/sections/Services/data";
import { serviceListSchema } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={serviceListSchema(servicesContent.services)} />
      <Hero />
      <Services />
      <OurProducts />
      <OurWork />
      <Articles />
      <ContactCta />
    </>
  );
}