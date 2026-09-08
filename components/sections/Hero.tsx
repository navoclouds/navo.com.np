import { ArrowRight } from "lucide-react";
import ParticlesBackground from "../ParticlesBackground";
import Testimonial from "./Testimonial";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 sm:px-6 pt-24 pb-12">
      <ParticlesBackground className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-20 text-center">
        <h1 className="text-slate-800 font-bold text-4xl sm:text-6xl leading-tight">
          <span className="text-[#1eaefc]">Build Smarter.</span> Build With <span className="text-[#cf3f9a]">Navo</span>
        </h1>
        <p className="text-slate-600 mt-4 text-xl max-w-2xl mx-auto">
          From AI-powered systems and automation to responsive web applications and custom software, NAVO builds reliable technology tailored to the way your business works.
        </p>
        <button className="mt-8 mx-auto py-3 px-7 flex justify-center gap-3 bg-black border border-[#cf3f9a] text-white rounded-2xl font-semibold hover:bg-[#cf3f9a] transition-colors cursor-pointer">
          BUILD WITH US <ArrowRight />
        </button>
      </div>
      <div className="relative z-20 mt-8">
        <Testimonial />
      </div>
    </section>
  );
}