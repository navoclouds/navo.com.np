import SectionHeading from "@/components/ui/Sectionheading";
import type { TimelineEntry } from "../data";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            title="Our Journey as a Technology Company in Nepal"
            rule="pink"
            bg="dark"
            description="Discover how Navo Cloud Solutions has grown since 2025, building software, digital products and technology solutions from Nepal."
          />
        </div>

        <ol className="relative lg:col-span-8">
          <span
            className="absolute left-1.75 top-2 h-[calc(100%-1rem)] w-px bg-gray-300"
            aria-hidden="true"
          />
          {entries.map((entry) => (
            <li key={entry.year} className="relative pb-10 pl-10 last:pb-0">
              <span
                className="absolute left-0 top-1.5 h-3.75 w-3.75 rounded-full border-[3px] border-surface bg-brand-pink"
                aria-hidden="true"
              />
              <p className="text-xs font-bold tracking-[0.18em] text-brand-blue">
                {entry.year}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                {entry.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-300">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
