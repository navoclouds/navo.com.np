import Frame from "@/components/ui/Frame";
import SectionHeading from "@/components/ui/Sectionheading";
import type { TeamMember } from "../data";

export default function Team({ team }: { team: TeamMember[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="The people accountable."
          rule="blue"
          description="Everyone listed here is still on delivery. None of them are full-time in sales."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name}>
              <Frame
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="aspect-3/4"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <h3 className="mt-5 text-base font-bold text-black">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wide text-brand-pink">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {member.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
