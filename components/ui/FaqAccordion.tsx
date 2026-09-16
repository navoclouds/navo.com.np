import SectionHeading from "./Sectionheading";
import type { Faq } from "@/lib/types";

export default function FaqAccordion({
  items,
  title,
  description,
  rule = "pink",
}: {
  items: Faq[];
  title: string;
  description?: string;
  rule?: "pink" | "blue";
}) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading title={title} description={description} rule={rule} />
        </div>

        <div className="divide-y divide-gray-300 border-y border-gray-300 lg:col-span-8">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-black marker:hidden">
                {item.question}
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gray-300 text-gray-500 transition-colors group-open:border-brand-pink group-open:bg-brand-pink group-open:text-white"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" className="group-open:hidden" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 pr-12 text-sm leading-relaxed text-gray-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
