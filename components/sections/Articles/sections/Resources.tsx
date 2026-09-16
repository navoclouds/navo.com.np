import SectionHeading from "@/components/ui/Sectionheading";
import type { Resource } from "../data";

export default function Resources({ resources }: { resources: Resource[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Templates and checklists."
          rule="pink"
          description="The working documents behind the writing — free to copy and adapt inside your own team."
        />

        <ul className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
          {resources.map((resource) => (
            <li key={resource.title}>
              <a
                href={resource.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface text-brand-navy transition-colors group-hover:bg-brand-pink group-hover:text-white"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8M16 17H8M10 9H8" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-black transition-colors group-hover:text-brand-pink">
                      {resource.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-gray-500">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <span className="shrink-0 pl-[3.75rem] text-xs font-bold uppercase tracking-wide text-gray-400 md:pl-0">
                  {resource.type} · {resource.size}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}