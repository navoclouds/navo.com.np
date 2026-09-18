import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion from "@/components/ui/FaqAccordion";

import Capabilities from "./sections/Capabilities";
import Process from "./sections/Process";
import Engagement from "./sections/Engagement";
import TechStack from "./sections/TechStack";

import { servicesContent as content } from "./data";

export default function ServicesPage() {
  return (
    <div className="bg-surface">
      <PageHero hero={content.hero} />
      <Capabilities services={content.services} />
      <Process steps={content.process} />
      {/* <Engagement models={content.engagementModels} /> */}
      <TechStack groups={content.techStack} />
      <FaqAccordion
        items={content.faq}
        title="Before you brief us."
        description="The questions that come up in almost every first call."
      />
      <CtaBand cta={content.cta} />
    </div>
  );
}