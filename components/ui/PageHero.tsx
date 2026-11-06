import Check from "./Check";
import ActionLink from "./ActionLink";
import type { Hero } from "@/lib/types";

export default function PageHero({ hero }: { hero: Hero }) {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-200 bg-cover bg-center bg-no-repeat px-6 pb-20 pt-36 sm:pb-24 sm:pt-40 md:pb-28 md:pt-44"
      style={
        hero.backgroundImage
          ? { backgroundImage: `url(${hero.backgroundImage})` }
          : undefined
      }
      aria-labelledby="page-title"
    >
      {hero.backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-slate-950/75"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/30"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-pink">
            <span className="h-px w-7 bg-brand-pink" />
            {hero.eyebrow}
          </p>

          <h1
            id="page-title"
            className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {hero.title} <span className="text-brand-pink">{hero.accent}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            {hero.subtitle}
          </p>

          {hero.bullets.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {hero.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-xs font-medium text-white/90 sm:text-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {hero.actions && hero.actions.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {hero.actions.map((action, index) => (
                <ActionLink
                  key={action.label}
                  action={action}
                  variant={index === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
