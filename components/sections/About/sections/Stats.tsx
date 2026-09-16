import type { Stat } from "@/lib/types";

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-16" aria-label="Company figures">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-gray-300 bg-surface p-7">
            <dd className="text-4xl font-extrabold tracking-tight text-brand-navy">{stat.value}</dd>
            <dt className="mt-3 text-sm font-bold text-black">{stat.label}</dt>
            {stat.caption ? (
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{stat.caption}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </section>
  );
}