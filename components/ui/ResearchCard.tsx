import Link from "next/link";
import {
  formatCardDate,
  ResearchInsight,
} from "../sections/ResearchAndInsights/data";

export default function ResearchCard({ data }: { data: ResearchInsight }) {
  return (
    <article
      key={data.id}
      className="flex flex-col rounded-lg bg-white p-6 shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.125)] hover:scale-[1.01]"
    >
      <p className="mb-2 text-xs font-semibold tracking-wide text-brand-blue">
        {data.category}
      </p>

      <h3 className="mb-3 line-clamp-3 text-lg font-bold text-black">
        {data.heading}
      </h3>

      <div
        className="mb-6 line-clamp-6 flex-1 text-sm leading-relaxed text-gray-500"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      <div className="flex items-center justify-between gap-4">
        <time dateTime={data.date} className="text-xs text-gray-400">
          {formatCardDate(data.date)}
        </time>

        <Link
          href={`/research-and-insights/${data.slug}`}
          className="shrink-0 text-sm font-semibold text-black hover:text-brand-pink"
        >
          Read Paper
        </Link>
      </div>
    </article>
  );
}
