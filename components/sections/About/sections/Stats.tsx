import type { Stat } from "@/lib/types";

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section
      className="bg-slate-950 px-6 py-16 md:py-20"
      aria-label="Navo Cloud Solutions company figures"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            NAVO IN NUMBERS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-brand-pink">Websites, Software & AI.</span>{" "}
            Technology Built for Business.
          </h2>
        </div>

        <dl className="grid grid-cols-2 gap-y-10 border-t border-white/20 pt-8 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${
                index % 2 === 1 ? "border-l border-white/20 pl-6" : "pr-6"
              } ${
                index >= 2 ? "pt-8" : ""
              } lg:border-l lg:border-white/20 lg:px-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0`}
            >
              <dd className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>

              <dt className="mt-3 text-sm font-semibold text-white">
                {stat.label}
              </dt>

              {stat.caption && (
                <p className="mt-2 max-w-55 text-sm leading-relaxed text-white/65">
                  {stat.caption}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
