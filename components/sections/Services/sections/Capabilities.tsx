import Check from "@/components/ui/Check";
import SectionHeading from "@/components/ui/Sectionheading";
import type { Service } from "../data";

export default function Capabilities({ services }: { services: Service[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What we do."
          rule="pink"
          description="We deliberately keep the list short. Each practice is staffed by people who have run it in production, not by whoever was free that month."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="flex scroll-mt-28 flex-col rounded-2xl border border-gray-300 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-blue"
            >
              <span
                className={`mb-5 inline-block self-start rounded-md px-3 py-1 text-xs font-semibold tracking-wide ${service.tagClass}`}
              >
                {service.tag}
              </span>

              <h3 className="text-xl font-bold text-black">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {service.summary}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5">
                <div>
                  <dt className="text-xs font-bold tracking-wide text-gray-400">
                    FROM
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-black">
                    {service.startingAt}
                  </dd>
                </div>
                <div className="text-right">
                  <dt className="text-xs font-bold tracking-wide text-gray-400">
                    TIMELINE
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-black">
                    {service.timeline}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
