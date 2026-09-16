import ActionLink from "./ActionLink";
import type { CtaBand as CtaBandType } from "@/lib/types";

/** Closing call-to-action panel used at the bottom of every page. */
export default function CtaBand({ cta }: { cta: CtaBandType }) {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 md:px-14">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(90% 120% at 100% 0%, rgba(207,63,154,0.5) 0%, transparent 55%), radial-gradient(80% 120% at 0% 100%, rgba(30,174,252,0.45) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">{cta.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            {cta.actions.map((action, i) => (
              <ActionLink
                key={action.label}
                action={action}
                variant={i === 0 ? "onDark" : "onDarkGhost"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}