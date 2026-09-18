import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

import Featured from "./sections/Featured";
import Library from "./sections/Library";
import Resources from "./sections/Resources";
import Newsletter from "./sections/Newsletter";

import { articlesContent as content } from "./data";

export default function ArticlesPage() {
  return (
    <div className="bg-surface">
      <PageHero hero={content.hero} />
      <Featured article={content.featured} />
      <Library articles={content.articles} />
      {/* <Resources resources={content.resources} /> */}
      <Newsletter newsletter={content.newsletter} />
      <CtaBand cta={content.cta} />
    </div>
  );
}