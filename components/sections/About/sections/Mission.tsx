import Frame from "@/components/ui/Frame";
import type { AboutContent } from "../data";

export default function Mission({ mission }: { mission: AboutContent["mission"] }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20" aria-labelledby="about-mission">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink">MISSION</p>
          <h2
            id="about-mission"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl"
          >
            {mission.title}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {mission.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-gray-500">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <Frame
            src={mission.image}
            alt={mission.imageAlt}
            className="aspect-16/11"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>
    </section>
  );
}