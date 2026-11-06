import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CustomPriceProps {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
}

export default function CustomPrice({
  customPrice,
}: {
  customPrice: CustomPriceProps;
}) {
  return (
    <section className="bg-slate-950 px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 px-6 py-10 sm:px-10 md:py-12">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5">
                <Sparkles size={13} className="text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Custom Development
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {customPrice.title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                {customPrice.description}
              </p>
            </div>

            {/* Action */}
            <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
              <Link
                href={customPrice.action.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
              >
                {customPrice.action.label}
                <ArrowUpRight size={17} />
              </Link>

              <span className="text-xs text-slate-500">
                Let&apos;s discuss your requirements
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
