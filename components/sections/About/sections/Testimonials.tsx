import SectionHeading from "@/components/ui/Sectionheading";
import type { Testimonial } from "../data";

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="In their words." rule="pink" />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col rounded-2xl border border-gray-300 bg-white p-8"
            >
              <span
                className="text-4xl font-extrabold leading-none text-brand-blue"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 leading-relaxed text-black">
                {item.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-gray-200 pt-5">
                <p className="text-sm font-bold text-black">{item.author}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.role}, {item.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
