import Link from "next/link";

import Check from "@/components/ui/Check";
import Frame from "@/components/ui/Frame";
import type { Product } from "../data";

/** One product block. Alternates sides so the page doesn't read as a list. */
export default function Showcase({ product, index }: { product: Product; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={product.id}
      aria-labelledby={`${product.id}-title`}
      className="scroll-mt-28 border-b border-gray-300 px-6 py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div
          className={`flex flex-col lg:col-span-5 ${reversed ? "lg:order-2 lg:pl-6" : "lg:pr-6"}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-gray-500">
              {product.category}
            </span>
            <span
              className={`rounded-md px-3 py-1 text-xs font-semibold tracking-wide ${product.statusClass}`}
            >
              {product.status}
            </span>
          </div>

          <h2 id={`${product.id}-title`} className="mt-4 text-3xl font-extrabold text-black md:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">{product.summary}</p>

          <ul className="mt-8 flex flex-col gap-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check />
                <span className="text-sm leading-relaxed text-black">{feature}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2">
            {product.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-500"
              >
                {tech}
              </li>
            ))}
          </ul>

          <Link
            href={product.cta.href}
            className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-black transition-all hover:gap-2 hover:text-brand-pink"
          >
            {product.cta.label} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
          <Frame
            src={product.image}
            alt={product.imageAlt}
            className="aspect-4/3"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority={index === 0}
          />

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-gray-300 bg-white p-5">
                <dd className="text-2xl font-extrabold text-brand-navy">{metric.value}</dd>
                <dt className="mt-1 text-sm text-gray-500">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}