import Check from "./Check";
import ActionLink from "./ActionLink";
import type { Hero } from "@/lib/types";

export default function PageHero({ hero }: { hero: Hero }) {
  return (
    <section
      className="relative border-b border-gray-300 px-6 py-20 md:py-24 bg-cover bg-center bg-no-repeat"
      style={hero.backgroundImage ? { backgroundImage: `url(${hero.backgroundImage})` } : undefined}
      aria-labelledby="page-title"
    >
      {hero.backgroundImage && (
        <div className="absolute inset-0 backdrop-blur-sm" aria-hidden="true" />
      )}

      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink">{hero.eyebrow}</p>
        <div className="mt-4 h-3 w-16 bg-brand-blue" aria-hidden="true" />

        <h1
          id="page-title"
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl"
        >
          {hero.title} <span className="text-gray-400">{hero.accent}</span>
        </h1>

        <p className="mt-6 max-w-2xl leading-relaxed text-gray-300">{hero.subtitle}</p>

        {hero.bullets.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-sm text-white">
                <Check />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {hero.actions && hero.actions.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {hero.actions.map((action, i) => (
              <ActionLink
                key={action.label}
                action={action}
                variant={i === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        )}

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-300 pt-8 md:grid-cols-4">
          {hero.meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-bold uppercase tracking-wide text-gray-400">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-bold text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}