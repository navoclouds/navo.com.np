import SectionHeading from "@/components/ui/Sectionheading";
import type { TechGroup } from "../data";

export default function TechStack({ groups }: { groups: TechGroup[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What we build with."
          rule="blue"
          description="Pragmatic about tools, opinionated about the ones we will maintain at three in the morning."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.group}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 border-t border-gray-300 pt-4">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
