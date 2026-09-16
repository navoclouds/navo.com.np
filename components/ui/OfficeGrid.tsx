import SectionHeading from "./Sectionheading";
import type { Office } from "@/lib/types";

export default function OfficeGrid({
  offices,
  title,
  rule = "blue",
  className = "border-b border-gray-300 bg-white px-6 py-20",
}: {
  offices: Office[];
  title: string;
  rule?: "pink" | "blue";
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={title} rule={rule} />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <address
              key={office.city}
              className="rounded-2xl border border-gray-300 bg-surface p-7 not-italic"
            >
              <h3 className="text-base font-bold text-black">
                {office.city}, {office.country}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {office.address}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gray-400">
                {office.timezone}
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {office.phone ? (
                  <a
                    href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-pink"
                  >
                    {office.phone}
                  </a>
                ) : null}
                <a
                  href={`mailto:${office.email}`}
                  className="text-sm font-semibold text-brand-navy transition-colors hover:text-brand-pink"
                >
                  {office.email}
                </a>
              </div>
            </address>
          ))}
        </div>
      </div>
    </section>
  );
}
