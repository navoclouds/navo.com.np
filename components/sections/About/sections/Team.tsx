import Image from "next/image";
import SectionHeading from "@/components/ui/Sectionheading";
import type { TeamMember } from "../data";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Team({ team }: { team: TeamMember[] }) {
  if (!team.length) return null;

  return (
    <section className="bg-slate-100 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Meet the Team Behind Navo Cloud Solutions"
          rule="blue"
          bg="light"
          description="Meet the people leading our software development, AI initiatives and technology products."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-lg bg-white shadow-sm p-0 group"
            >
              {/* <div className="flex p-4 justify-between text-lg text-slate-300 capitalize">
                <span>MEMBER</span>
                <span>{index + 1}</span>
              </div> */}
              <div className="w-full p-4 flex flex-col pt-8 text-center">
                <Image
                  src={member.image}
                  width={300}
                  height={300}
                  alt={`Profile picture of ${member.name} `}
                  className="aspect-square w-35 h-35 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg object-cover object-center rounded-full mx-auto border-2 border-slate-100 p-2"
                />
                <h3 className="font-semibold text-xl pt-4 text-brand-navy transition-all duration-300 group-hover:text-brand-blue">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold text-slate-500">
                  {member.role}
                </p>
                <div className="my-5 border-t border-dashed border-slate-200" />

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Area of Responsibility
                </p>

                <p className="mt-2 min-h-20 text-xs leading-6 text-slate-600">
                  {member.focus}
                </p>
                {member.link && (
                  <Link
                    href={member.link}
                    target="_blank"
                    className="text-sm mx-auto w-fit cursor-pointer my-4 transition-all duration-300 hover:text-brand-pink hover:border-brand-pink flex uppercase p-2 px-4 border-dashed border-2 rounded-sm border-gray-400 items-center gap-4 justify-around text-gray-400"
                  >
                    <span>PORTFOLIO</span>
                    <ExternalLink size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
