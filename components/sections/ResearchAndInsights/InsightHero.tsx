interface Hero {
  title: string;
  accent: string;
  subtitle: string;
  bullets: string[];
}

export default function InsightHero({ hero }: { hero: Hero }) {
  return (
    <section
      className="bg-slate-950 px-6 pb-20 pt-36 text-center sm:pb-24 sm:pt-40 md:pb-28 md:pt-44"
      aria-labelledby="insights-title"
    >
      <div className="mx-auto max-w-5xl">
        <h1
          id="insights-title"
          className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {hero.title} <span className="text-brand-blue">{hero.accent}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          {hero.subtitle}
        </p>

        {hero.bullets.length > 0 && (
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-5 gap-y-3">
            {hero.bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-xs font-medium text-slate-300 sm:text-sm"
              >
                <span className="mr-2 text-brand-pink">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
