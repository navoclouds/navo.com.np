export default function OurWork() {
  const projects = [
    {
      tag: "CUSTOM SOFTWARE & AUTOMATION",
      tagColor: "bg-blue-100 text-blue-700",
      title: "Enterprise Logistics Intelligence",
      problem:
        "Fragmented dispatch scheduling causing severe route delays, manual paper handoffs, and 18% idle fuel wastage.",
      solution:
        "Custom automated dispatch engine combining real-time IoT telematics, route optimization, and driver apps.",
      outcome:
        "Consolidated fleet dispatch operations into a unified interface with zero scheduled route overruns.",
    },
    {
      tag: "WEB & MOBILE APPLICATION",
      tagColor: "bg-cyan-100 text-cyan-700",
      title: "CareSync Patient Health Portal",
      problem:
        "Complex patient intake onboarding, manual medical history records retrieval, and overloaded call centers.",
      solution:
        "Secure, HIPAA-compliant cross-platform mobile app and patient portal with automated OCR document indexing.",
      outcome:
        "Frictionless digital self-service onboarding, reducing clinic front-desk wait times from 25 min to under 3 min.",
    },
    {
      tag: "AI INTEGRATION & WEB PLATFORM",
      tagColor: "bg-purple-100 text-purple-700",
      title: "Aura Commerce Experience",
      problem:
        "High customer support friction around product sizing and checkout abandonment on bespoke retail catalogs.",
      solution:
        "Context-aware conversational AI shopping guide paired with a headless, ultra-fast Next.js architecture.",
      outcome:
        "Instant customer query resolution and a 34% increase in cart completion speed across international markets.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black mb-3">
          Our Work.
        </h2>
        <p className="text-gray-500 mb-14">
          Real products. Real problems. Practical technology built to
          deliver measurable outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[##f1f1f1] border border-gray-300 rounded-2xl p-8"
            >
              <span
                className={`inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-md mb-5 ${project.tagColor}`}
              >
                {project.tag}
              </span>

              <h3 className="text-xl font-bold text-black mb-6">
                {project.title}
              </h3>

              <div className="mb-5">
                <h4 className="text-xs font-bold text-black tracking-wide mb-1">
                  PROBLEM
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="mb-5">
                <h4 className="text-xs font-bold text-black tracking-wide mb-1">
                  SOLUTION
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-black tracking-wide mb-1">
                  OUTCOME
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}