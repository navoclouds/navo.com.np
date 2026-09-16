import type { ContactChannel, Expectation } from "../data";

export default function Channels({
  channels,
  expectations,
}: {
  channels: ContactChannel[];
  expectations: Expectation[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-gray-300 bg-white p-8" aria-labelledby="reach-us">
        <h2 id="reach-us" className="text-xl font-bold text-black">
          Reach us directly
        </h2>
        <ul className="mt-6 divide-y divide-gray-200">
          {channels.map((channel) => (
            <li key={channel.label} className="py-5 first:pt-0 last:pb-0">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                {channel.label}
              </p>
              <a
                href={channel.href}
                className="mt-1 block text-sm font-bold text-brand-navy transition-colors hover:text-brand-pink"
              >
                {channel.value}
              </a>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{channel.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-gray-300 bg-white p-8" aria-labelledby="what-next">
        <h2 id="what-next" className="text-xl font-bold text-black">
          What happens next
        </h2>
        <ol className="mt-6 flex flex-col gap-6">
          {expectations.map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="text-2xl font-extrabold leading-none text-brand-blue">
                {item.step}
              </span>
              <div>
                <h3 className="text-sm font-bold text-black">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}