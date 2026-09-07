import { ArrowRight } from "lucide-react";
import ParticlesBackground from "../ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <ParticlesBackground />
      <div className="relative z-20 text-center px-6 pt-20">
        <h1 className="text-white font-bold text-4xl sm:text-6xl leading-tight">
          <span className="text-[#1eaefc]">Build Smarter.</span> Build With <span className="text-[#cf3f9a]">Navo</span>
        </h1>
        <p className="text-gray-300 mt-4 text-xl max-w-2xl mx-auto">
          From AI-powered systems and automation to responsive web applications and custom software, NAVO builds reliable technology tailored to the way your business works.
        </p>
        <button className="mt-8 mx-auto py-3 px-7 flex justify-center gap-3 bg-black border border-[#cf3f9a] text-white rounded-2xl font-semibold hover:bg-[#cf3f9a] transition-colors cursor-pointer">
          BUILD WITH US <ArrowRight />
        </button>
      </div>
    </section>
  );
}