import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import OfficeGrid from "@/components/ui/OfficeGrid";

import Mission from "./sections/Mission";
import Stats from "./sections/Stats";
import Values from "./sections/Values";
import Work from "./sections/Work";
import Timeline from "./sections/Timeline";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";

import { aboutContent as content } from "./data";

export default function AboutUsPage() {
  return (
    <div className="bg-surface">
      <PageHero hero={content.hero} />
      <Mission mission={content.mission} />
      <Stats stats={content.stats} />
      <Values values={content.values} />
      <Work projects={content.projects} />
      <Timeline entries={content.timeline} />
      <Team team={content.team} />
      <Testimonials testimonials={content.testimonials} />
      <OfficeGrid offices={content.offices} title="Where you'll find us." />
      <CtaBand cta={content.cta} />
    </div>
  );
}