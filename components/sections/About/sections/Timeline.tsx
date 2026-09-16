import SectionHeading from "@/components/ui/Sectionheading";
import type { TimelineEntry } from "../data";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            title="How we got here."
            rule="pink"
            description="No funding rounds, no pivots — just a slow expansion of what we were willing to take on."
          />
        </div>

        <ol className="relative lg:col-span-8">
          <span
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gray-300"
            aria-hidden="true"
          />
          {entries.map((entry) => (
            <li key={entry.year} className="relative pb-10 pl-10 last:pb-0">
              <span
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-surface bg-brand-pink"
                aria-hidden="true"
              />
              <p className="text-xs font-bold tracking-[0.18em] text-brand-blue">
                {entry.year}
              </p>
              <h3 className="mt-2 text-lg font-bold text-black">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
