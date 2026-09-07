import ParticlesBackground from "../ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <ParticlesBackground />
      <div className="relative z-20 text-center px-6 pt-20">
        <h1 className="text-white font-bold text-4xl sm:text-6xl leading-tight">
          Build Your Future With <span className="text-[#cf3f9a]">Navo</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          Cloud solutions engineered for growth, speed, and reliability.
        </p>
        <button className="mt-8 py-3 px-7 bg-black border border-[#cf3f9a] text-white rounded-2xl font-semibold hover:bg-[#cf3f9a] transition-colors">
          BUILD WITH US
        </button>
      </div>
    </section>
  );
}