import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

export interface PricingItem {
  name: string;
  subtitle: string;
  description: string;
  nprPrice: string;
  usdPrice: string;
  billing: string;
  suitableFor: string;
  popular?: boolean;
  features: string[];
  hosting: string;
  action: {
    label: string;
    href: string;
  };
}

export default function PricingCard({
  item,
  popular = false,
}: {
  item: PricingItem;
  popular?: boolean;
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
        popular
          ? "border-blue-500 bg-white shadow-2xl shadow-blue-950/20"
          : "border-slate-800 bg-slate-900 hover:border-slate-600"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-7">
          <span className="rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold tracking-widest text-white shadow-lg">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Package Details */}
      <div>
        <h3
          className={`text-xl font-bold tracking-tight ${
            popular ? "text-slate-950" : "text-white"
          }`}
        >
          {item.name}
        </h3>

        <p
          className={`mt-1 text-sm font-medium ${
            popular ? "text-blue-600" : "text-blue-400"
          }`}
        >
          {item.subtitle}
        </p>

        <p
          className={`mt-4 min-h-[72px] text-sm leading-6 ${
            popular ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Price */}
      <div
        className={`my-7 border-y py-6 ${
          popular ? "border-slate-200" : "border-slate-800"
        }`}
      >
        <p
          className={`text-[11px] font-semibold uppercase tracking-widest ${
            popular ? "text-slate-500" : "text-slate-400"
          }`}
        >
          Starting from
        </p>

        <div className="mt-3 flex items-baseline gap-2">
          <span
            className={`text-sm font-semibold ${
              popular ? "text-blue-600" : "text-blue-400"
            }`}
          >
            Rs.
          </span>

          <span
            className={`text-4xl font-extrabold tracking-tight sm:text-[2.65rem] ${
              popular ? "text-slate-950" : "text-white"
            }`}
          >
            {item.nprPrice.replace(/^NPR\s*/i, "")}
          </span>
        </div>

        <p
          className={`mt-2 text-sm ${
            popular ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <span className="font-medium">$</span>{" "}
          {item.usdPrice.replace(/^USD\s*/i, "")}
          <span className="ml-1 text-xs">USD equivalent</span>
        </p>

        <p
          className={`mt-3 text-xs font-medium ${
            popular ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {item.billing}
        </p>
      </div>

      {/* Suitable For */}
      <div className="mb-7">
        <p
          className={`text-[11px] font-bold uppercase tracking-widest ${
            popular ? "text-slate-800" : "text-slate-300"
          }`}
        >
          Ideal for
        </p>

        <p
          className={`mt-2 text-sm leading-6 ${
            popular ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {item.suitableFor}
        </p>
      </div>

      {/* Features */}
      <div className="flex-1">
        <div
          className={`mb-5 border-t pt-5 ${
            popular ? "border-slate-200" : "border-slate-800"
          }`}
        >
          <p
            className={`text-[11px] font-bold uppercase tracking-widest ${
              popular ? "text-slate-800" : "text-slate-300"
            }`}
          >
            What&apos;s included
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {item.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-3 text-sm leading-5 ${
                popular ? "text-slate-600" : "text-slate-300"
              }`}
            >
              <Check
                size={17}
                strokeWidth={2.5}
                className={`mt-0.5 shrink-0 ${
                  popular ? "text-blue-600" : "text-blue-400"
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hosting */}
      <div
        className={`mt-8 rounded-xl p-4 ${
          popular ? "bg-slate-50" : "bg-slate-800/50"
        }`}
      >
        <p
          className={`text-xs font-bold ${
            popular ? "text-slate-800" : "text-slate-300"
          }`}
        >
          Hosting information
        </p>

        <p
          className={`mt-2 text-xs leading-6 ${
            popular ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {item.hosting}
        </p>
      </div>

      {/* Action */}
      <Link
        href={item.action.href}
        className={`mt-6 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-700 bg-slate-800 text-white hover:border-blue-500 hover:bg-slate-700"
        }`}
      >
        {item.action.label}
        <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
