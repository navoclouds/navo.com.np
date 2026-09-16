import Link from "next/link";

import Frame from "@/components/ui/Frame";
import { articlesContent, formatDate } from "@/components/sections/Articles/data";

/** Shows the three most recent papers, sourced from the Articles page data. */
const latest = [articlesContent.featured, ...articlesContent.articles].slice(0, 3);

export default function Articles() {
  return (
    <section className="bg-black px-6 py-20" aria-labelledby="home-articles">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="home-articles" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Articles
            </h2>
            <div className="mt-3 h-3 w-16 bg-brand-blue" aria-hidden="true" />
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white transition-all hover:gap-2 hover:text-brand-pink"
          >
            View all articles <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <article key={article.id} className="flex flex-col overflow-hidden rounded-2xl bg-white">
              <Frame
                src={article.image}
                alt={article.title}
                className="h-56"
                rounded="rounded-none"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold tracking-wide text-brand-blue">
                  {article.category}
                </p>
                <h3 className="mb-3 text-lg font-bold text-black">{article.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
                  {article.description}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <time dateTime={article.date} className="text-xs text-gray-400">
                    {formatDate(article.date)}
                  </time>
                  <a
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${article.title} as PDF`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-black transition-all hover:gap-2 hover:text-brand-pink"
                  >
                    Read Article <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}