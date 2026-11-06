import WebsiteCard from "@/components/ui/WebsiteCard";
import { Website } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const websites: Website[] = [
  {
    id: "taali-education",
    tag: "Business Website Development",
    title: "TAALI Education",
    link: "https://taalieducation.com",
    cover: "/images/websites/taali.avif",
  },
  {
    id: "nepal-memorable",
    tag: "Tours & Travel Website Development",
    title: "Nepal Memorable",
    link: "https://nepalmemorable.com",
    cover: "/images/websites/nepalmemorable.avif",
  },
  {
    id: "prabesh-lamichhane-portfolio",
    tag: "Portfolio Website Development",
    title: "Prabesh Portfolio",
    link: "https://prabeshlamichhane2004.com.np",
    cover: "/images/websites/prabesh.avif",
  },
  {
    id: "tika-datta-founder-portfolio",
    tag: "Portfolio Website Development",
    title: "Deepsu Portfolio",
    link: "https://tikadatta.com.np",
    cover: "/images/websites/tika.avif",
  },
];

export default function Websites() {
  return (
    <section
      className="bg-surface px-6 py-20"
      aria-labelledby="professional-websites"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div className="max-w-3xl">
            <h2
              id="professional-websites"
              className="mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
            >
              <span className="text-brand-pink">Professional </span> Websites{" "}
              {"We've"} Built
            </h2>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-500">
              Explore business websites designed and developed by Navo Cloud
              Solutions. Discover our website design and development projects,
              built with modern technologies, responsive layouts, and
              user-focused experiences to help businesses establish a strong
              online presence.
            </p>
          </div>
          <div className="shrink-0 md:pb-1">
            <Link
              href="/website-development"
              className="group inline-flex items-center gap-3 font-semibold text-black transition-transform duration-300 hover:scale-105 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span>Website Development</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-brand-blue">
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {websites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </div>
    </section>
  );
}
