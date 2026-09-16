import SectionHeading from "@/components/ui/Sectionheading";
import type { Project } from "../data";

export default function Work({ projects }: { projects: Project[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Work."
          rule="blue"
          description="Real products. Real problems. Practical technology built to deliver measurable outcomes."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-gray-300 bg-surface p-8"
            >
              <span
                className={`mb-5 inline-block rounded-md px-3 py-1 text-xs font-semibold tracking-wide ${project.tagClass}`}
              >
                {project.tag}
              </span>

              <h3 className="mb-6 text-xl font-bold text-black">
                {project.title}
              </h3>

              <dl>
                <dt className="mb-1 text-xs font-bold tracking-wide text-black">
                  PROBLEM
                </dt>
                <dd className="mb-5 text-sm leading-relaxed text-gray-500">
                  {project.problem}
                </dd>

                <dt className="mb-1 text-xs font-bold tracking-wide text-black">
                  SOLUTION
                </dt>
                <dd className="mb-5 text-sm leading-relaxed text-gray-500">
                  {project.solution}
                </dd>

                <dt className="mb-1 text-xs font-bold tracking-wide text-black">
                  OUTCOME
                </dt>
                <dd className="text-sm leading-relaxed text-gray-500">
                  {project.outcome}
                </dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
