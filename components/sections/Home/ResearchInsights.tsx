import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  researchAndInsights,
  formatDate,
} from "@/components/sections/ResearchAndInsights/data";
import ResearchCard from "@/components/ui/ResearchCard";

export default function ResearchInsights() {
  return (
    <section
      className="bg-black px-6 py-20"
      aria-labelledby="home-research-and-insights"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div className="max-w-3xl">
            <h2
              id="home-research-and-insights"
              className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              Software Development{" "}
              <span className="text-brand-blue">Research</span> {"&"}{" "}
              <span className="text-brand-pink">Insights</span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Explore AI research, software engineering reports, and technical
              insights from our work in developing intelligent software
              solutions.
            </p>
          </div>
          <Link
            href="/research-and-insights"
            className="group inline-flex items-center gap-3 font-semibold text-white"
          >
            <span>Explore research & insights</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all group-hover:bg-brand-pink group-hover:text-white">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {researchAndInsights.map((article) => (
            <ResearchCard key={article.id} data={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
