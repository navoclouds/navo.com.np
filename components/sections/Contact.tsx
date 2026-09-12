import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 text-slate-600 md:flex-row md:gap-12 lg:px-8">
        <p className="whitespace-nowrap text-xs font-semibold tracking-wider text-slate-500 sm:text-sm">
          HEARD ENOUGH? &rarr;
        </p>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-8 sm:text-5xl md:text-6xl lg:text-7xl">
            Contact us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tell us what you&rsquo;re trying to solve. We&rsquo;ll help you
            figure out the right technology.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/contact"
            aria-label="Contact us"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#36467a] text-white transition-transform duration-200 hover:scale-105 active:scale-95 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          >
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
