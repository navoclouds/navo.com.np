import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion from "@/components/ui/FaqAccordion";
import OfficeGrid from "@/components/ui/OfficeGrid";

import Enquiry from "./sections/Enquiry";
import { contactContent as content } from "./data";

export default function ContactPage() {
  return (
    <div className="bg-surface">
      <PageHero hero={content.hero} />
      <Enquiry content={content} />
      {/* <OfficeGrid offices={content.offices} title="Offices." rule="pink" /> */}
      <FaqAccordion items={content.faq} title="Before you write." rule="blue" />
      <CtaBand cta={content.cta} />
    </div>
  );
}