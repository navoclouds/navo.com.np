import SectionHeading from "@/components/ui/Sectionheading";
import type { Value } from "../data";

export default function Values({ values }: { values: Value[] }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="What we don't negotiate on." rule="pink" />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <article
              key={value.title}
              className="border-t border-gray-300 pt-6"
            >
              <span className="text-sm font-extrabold text-brand-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-black">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
