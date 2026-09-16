import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";
import FaqAccordion from "@/components/ui/FaqAccordion";

import Stats from "./sections/Stats";
import Showcase from "./sections/Showcase";
import Comparison from "./sections/Comparison";

import { productsContent as content } from "./data";

export default function ProductsPage() {
  return (
    <div className="bg-surface">
      <PageHero hero={content.hero} />
      <Stats stats={content.stats} />

      {content.products.map((product, index) => (
        <Showcase key={product.id} product={product} index={index} />
      ))}

      <Comparison comparison={content.comparison} />
      <FaqAccordion
        items={content.faq}
        title="Questions."
        description="The things people ask before a demo. If yours is not here, ask it directly."
        rule="blue"
      />
      <CtaBand cta={content.cta} />
    </div>
  );
}