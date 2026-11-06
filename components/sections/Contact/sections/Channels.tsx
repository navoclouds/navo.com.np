import type { ContactChannel, Expectation } from "../data";

export default function Channels({
  channels,
  expectations,
}: {
  channels: ContactChannel[];
  expectations: Expectation[];
}) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      {/* Reach Us Directly */}
      <section aria-labelledby="reach-us">
        <h2
          id="reach-us"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Reach us directly
        </h2>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Have a question or project in mind? Get in touch with our team through
          any of the following channels.
        </p>

        <ul className="mt-8 divide-y divide-slate-800">
          {channels.map((channel) => (
            <li key={channel.label} className="py-5 first:pt-0 last:pb-0">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {channel.label}
              </p>

              <a
                href={channel.href}
                className="mt-1.5 inline-block text-base font-semibold text-white transition-colors hover:text-blue-400"
              >
                {channel.value}
              </a>

              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {channel.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Vertical Divider */}
      <section
        aria-labelledby="what-next"
        className="border-t border-slate-800 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
      >
        <h2
          id="what-next"
          className="text-2xl font-bold tracking-tight text-white"
        >
          What happens next
        </h2>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          We keep the process straightforward, from understanding your
          requirements to discussing the right solution.
        </p>

        <ol className="mt-8 divide-y divide-slate-800">
          {expectations.map((item) => (
            <li
              key={item.step}
              className="flex gap-5 py-5 first:pt-0 last:pb-0"
            >
              <span className="shrink-0 text-sm font-semibold text-blue-400">
                {item.step}
              </span>

              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
