import Frame from "@/components/ui/Frame";
import { formatDate, type Article } from "../data";

export default function Featured({ article }: { article: Article }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20" aria-labelledby="featured-article">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Frame
            src={article.image}
            alt={article.title}
            className="aspect-16/10"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-pink-100 px-3 py-1 text-xs font-semibold tracking-wide text-pink-700">
              FEATURED
            </span>
            <span className="text-xs font-semibold tracking-wide text-brand-blue">
              {article.category}
            </span>
          </div>

          <h2
            id="featured-article"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl"
          >
            {article.title}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">{article.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>{article.author}</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="h-1 w-1 rounded-full bg-gray-300" aria-hidden="true" />
            <span>{article.readingTime}</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={article.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
            >
              Read article (PDF)
            </a>
            <a
              href={article.pdf}
              download
              className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:border-brand-blue"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}