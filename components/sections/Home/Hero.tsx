import { ArrowRight } from "lucide-react";
import Link from "next/link";

import ParticlesBackground from "@/components/ParticlesBackground";
import Testimonials from "./Testimonials";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24">
      <ParticlesBackground className="absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-20 text-center">
        <h1 className="text-4xl font-bold leading-tight text-slate-800 sm:text-6xl">
          <span className="text-brand-blue">Build Smarter.</span> Build With{" "}
          <span className="text-brand-pink">Navo</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
          From AI-powered systems and automation to responsive web applications and custom software,
          NAVO builds reliable technology tailored to the way your business works.
        </p>
        <Link
          href="/contact"
          className="mx-auto mt-8 inline-flex items-center justify-center gap-3 rounded-2xl border border-brand-pink bg-black px-7 py-3 font-semibold text-white transition-colors hover:bg-brand-pink"
        >
          BUILD WITH US <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>

      <div className="relative z-20 mt-12">
        <Testimonials />
      </div>
    </section>
  );
}