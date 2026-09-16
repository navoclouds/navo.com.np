import Frame from "@/components/ui/Frame";
import { formatDate, type Article } from "../data";

export default function Library({ articles }: { articles: Article[] }) {
  return (
    <section id="library" className="scroll-mt-28 bg-black px-6 py-20" aria-labelledby="library-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="library-title" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Articles
        </h2>
        <div className="mt-3 h-3 w-16 bg-brand-blue" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-gray-400">
          Everything we have published. Each card opens the PDF in a new tab.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <Frame
                src={article.image}
                alt={article.title}
                className="h-56"
                rounded="rounded-none"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold tracking-wide text-brand-pink">
                  {article.category}
                </p>
                <h3 className="text-lg font-bold text-black">
                  <a
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-pink"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-200 pt-5">
                  <div className="text-xs text-gray-500">
                    <p className="text-black">{article.author}</p>
                    <time dateTime={article.date}>
                      {formatDate(article.date)} · {article.readingTime}
                    </time>
                  </div>

                  <a
                    href={article.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${article.title} as PDF`}
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-black transition-all hover:gap-2 hover:text-brand-pink"
                  >
                    PDF <span aria-hidden="true">&rarr;</span>
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