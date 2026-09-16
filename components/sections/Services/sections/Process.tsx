import SectionHeading from "@/components/ui/Sectionheading";
import type { ProcessStep } from "../data";

export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="border-b border-gray-300 bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="How we work."
          rule="blue"
          description="The same four stages on every engagement, scaled to the size of the problem. You always know what is being produced and when."
        />

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.step}
              className="flex flex-col rounded-2xl border border-gray-300 bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold text-brand-pink">
                  {step.step}
                </span>
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-gray-500">
                  {step.duration}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-black">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>

              <div className="mt-6 border-t border-gray-300 pt-4">
                <p className="text-xs font-bold tracking-wide text-gray-400">
                  OUTPUTS
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {step.outputs.map((output) => (
                    <li
                      key={output}
                      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600"
                    >
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
