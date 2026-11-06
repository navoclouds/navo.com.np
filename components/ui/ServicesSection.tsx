type ServiceItem = {
  category: string;
  title: string;
  description: string;
  features: string[];
};

type ServicesProps = {
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
};

export default function ServicesSection({ services }: ServicesProps) {
  return (
    <section
      className="bg-surface px-6 py-16 md:px-10 md:py-20"
      aria-label={services.title}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-8 w-1.5 rounded-full bg-brand-pink"
              aria-hidden="true"
            />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {services.title}
            </h2>
          </div>

          <p className="text-base leading-7 text-slate-600">
            {services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className="group border-t border-slate-200 py-8 transition-colors hover:border-brand-pink"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {service.category}
              </span>

              <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-pink">
                {service.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              {service.features.length > 0 && (
                <details className="mt-5 group/details">
                  <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue [&::-webkit-details-marker]:hidden">
                    Explore capabilities
                    <span className="text-base transition-transform group-open/details:rotate-45">
                      +
                    </span>
                  </summary>

                  <ul className="mt-4 space-y-2 border-l-2 border-slate-200 pl-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={`${feature}-${featureIndex}`}
                        className="text-sm leading-6 text-slate-600"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
