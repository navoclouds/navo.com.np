import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutNavo() {
  return (
    <section
      className="bg-radial from-white to-slate-100"
      aria-labelledby="home-about-navo"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:py-20 md:grid-cols-2 md:gap-14">
        {/* About Navo Content */}
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-wider text-brand-navy">
            ABOUT NAVO CLOUD SOLUTIONS
          </p>

          <h2
            id="home-about-navo"
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Software Development Company{" "}
            <span className="text-brand-pink">in Nepal</span>
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Navo Cloud Solutions Pvt. Ltd. is a Nepal-based software Navo
              Cloud Solutions Pvt. Ltd. is a Nepal-based software development
              company delivering digital solutions for businesses in Nepal and
              worldwide.
            </p>

            <p>
              We specialize in custom software, website and web application
              development, AI engineering, and mobile app development to help
              businesses build and scale digitally.
            </p>
          </div>

          {/* About Page CTA */}
          <div className="mt-6 flex justify-start">
            <Link
              href="/about-navo-cloud-solutions"
              className="group inline-flex items-center gap-3 font-semibold text-black transition-transform duration-300 hover:translate-x-1 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span>Discover Navo</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-brand-blue">
                <ArrowRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* Supporting Image */}
        <div className="relative min-h-80 overflow-hidden rounded-2xl sm:min-h-105">
          <Image
            src="/images/about/home-about.avif"
            width={600}
            height={520}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover absolute inset-0 object-right"
            alt="Navo Cloud Solutions software development workspace"
          />
        </div>
      </div>
    </section>
  );
}
