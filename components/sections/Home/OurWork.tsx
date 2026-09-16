const projects = [
  {
    id: "enterprise-logistics-intelligence",
    tag: "CUSTOM SOFTWARE & AUTOMATION",
    tagClass: "bg-blue-100 text-blue-700",
    title: "Enterprise Logistics Intelligence",
    problem:
      "Fragmented dispatch scheduling causing severe route delays, manual paper handoffs, and 18% idle fuel wastage.",
    solution:
      "Custom automated dispatch engine combining real-time IoT telematics, route optimization, and driver apps.",
    outcome:
      "Consolidated fleet dispatch operations into a unified interface with zero scheduled route overruns.",
  },
  {
    id: "caresync-patient-health-portal",
    tag: "WEB & MOBILE APPLICATION",
    tagClass: "bg-cyan-100 text-cyan-700",
    title: "CareSync Patient Health Portal",
    problem:
      "Complex patient intake onboarding, manual medical history records retrieval, and overloaded call centers.",
    solution:
      "Secure, HIPAA-compliant cross-platform mobile app and patient portal with automated OCR document indexing.",
    outcome:
      "Frictionless digital self-service onboarding, reducing clinic front-desk wait times from 25 min to under 3 min.",
  },
  {
    id: "aura-commerce-experience",
    tag: "AI INTEGRATION & WEB PLATFORM",
    tagClass: "bg-purple-100 text-purple-700",
    title: "Aura Commerce Experience",
    problem:
      "High customer support friction around product sizing and checkout abandonment on bespoke retail catalogs.",
    solution:
      "Context-aware conversational AI shopping guide paired with a headless, ultra-fast Next.js architecture.",
    outcome:
      "Instant customer query resolution and a 34% increase in cart completion speed across international markets.",
  },
];

export default function OurWork() {
  return (
    <section className="bg-surface px-6 py-20" aria-labelledby="home-work">
      <div className="mx-auto max-w-7xl">
        <h2 id="home-work" className="mb-3 text-4xl font-extrabold tracking-tight text-black">
          Our Work.
        </h2>
        <p className="mb-14 text-gray-500">
          Real products. Real problems. Practical technology built to deliver measurable outcomes.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-300 bg-white p-8"
            >
              <span
                className={`mb-5 inline-block rounded-md px-3 py-1 text-xs font-semibold tracking-wide ${project.tagClass}`}
              >
                {project.tag}
              </span>

              <h3 className="mb-6 text-xl font-bold text-black">{project.title}</h3>

              <dl>
                <dt className="mb-1 text-xs font-bold tracking-wide text-black">PROBLEM</dt>
                <dd className="mb-5 text-sm leading-relaxed text-gray-500">{project.problem}</dd>

                <dt className="mb-1 text-xs font-bold tracking-wide text-black">SOLUTION</dt>
                <dd className="mb-5 text-sm leading-relaxed text-gray-500">{project.solution}</dd>

                <dt className="mb-1 text-xs font-bold tracking-wide text-black">OUTCOME</dt>
                <dd className="text-sm leading-relaxed text-gray-500">{project.outcome}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}