import Check from "@/components/ui/Check";
import SectionHeading from "@/components/ui/Sectionheading";
import type { EngagementModel } from "../data";

export default function Engagement({ models }: { models: EngagementModel[] }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Pick the shape that fits."
          rule="pink"
          description="Most teams start with a fixed-scope discovery and move into a sprint team once the problem is clear."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                model.featured ? "border-brand-pink" : "border-gray-300"
              }`}
            >
              {model.featured ? (
                <span className="absolute -top-3 left-8 rounded-md bg-brand-pink px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  MOST CHOSEN
                </span>
              ) : null}

              <h3 className="text-xl font-bold text-black">{model.name}</h3>
              <p className="mt-1.5 text-xs font-semibold tracking-wide text-brand-blue">
                {model.bestFor}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {model.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {model.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-gray-200 pt-5 text-sm font-bold text-black">
                {model.billing}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
