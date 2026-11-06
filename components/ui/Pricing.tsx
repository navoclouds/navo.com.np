import PricingCard, { type PricingItem } from "./PricingCard";

interface Pricing {
  title: string;
  description: string;
  note: string;
  items: PricingItem[];
}

export default function PricingSection({
  pricing,
  mostpopular,
}: {
  pricing: Pricing;
  mostpopular: number;
}) {
  return (
    <section
      id="pricing"
      className="bg-slate-950 px-6 py-20 md:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
            PRICING & PACKAGES
          </p>

          <h2
            id="pricing-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl"
          >
            {pricing.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            {pricing.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.items.map((item, index) => (
            <div
              key={item.name}
              className={
                pricing.items.length === 3 && index === 2
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:max-w-none"
                  : ""
              }
            >
              <PricingCard item={item} popular={index === mostpopular} />
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-xs leading-6 text-slate-500">{pricing.note}</p>
        </div>
      </div>
    </section>
  );
}
