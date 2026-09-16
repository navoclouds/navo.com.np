"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = { icon: LucideIcon; label: string };

type Product = {
  name: string;
  logoIcon: LucideIcon;
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: Feature[];
  cta: string;
  href: string;
  image: string;
};

const products: Product[] = [
  {
    name: "NAVO",
    logoIcon: Zap,
    titleLine1: "AI Resume",
    titleLine2: "Screening",
    description: "Screen smarter. Hire better. Build stronger teams.",
    features: [
      { icon: Zap, label: "AI-Powered Matching" },
      { icon: FileText, label: "Instant Screening" },
      { icon: BarChart2, label: "Data-Driven Decisions" },
    ],
    cta: "Find the Right Talent, Faster.",
    href: "/products",
    image: "/scanner.jpg",
  },
];

export default function OurProducts() {
  const [active, setActive] = useState(0);
  const count = products.length;

  // Nothing to render rather than crashing on products[0].
  if (count === 0) return null;

  const go = (dir: number) => setActive((i) => (i + dir + count) % count);
  const product = products[active];
  const LogoIcon = product.logoIcon;
  const showControls = count > 1;

  return (
    <section className="bg-white" aria-labelledby="home-products">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 id="home-products" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-brand-blue">Products</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Technology we build, experiment with, and turn into useful software products.
          </p>
        </div>

        <div className="relative mt-10">
          {showControls && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous product"
                className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 p-2 text-white shadow-lg transition hover:bg-slate-700 sm:flex"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next product"
                className="absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 p-2 text-white shadow-lg transition hover:bg-slate-700 sm:flex"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </>
          )}

          <div className="rounded-3xl border border-slate-300 bg-slate-50/60 p-6 sm:p-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-white"
                    aria-hidden="true"
                  >
                    <LogoIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold tracking-wide text-slate-900">
                    {product.name}
                  </span>
                </div>

                <h3 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                  <span className="text-brand-blue">{product.titleLine1}</span>
                  <br />
                  {product.titleLine2}
                </h3>

                <p className="mt-4 text-slate-500">{product.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {product.features.map((feature) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li
                        key={feature.label}
                        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        <FeatureIcon className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
                        {feature.label}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={product.href}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
                >
                  {product.cta}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="relative aspect-5/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.titleLine1} ${product.titleLine2} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {showControls && (
            <div className="mt-4 flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous product"
                className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next product"
                className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-white"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {showControls && (
          <div className="mt-6 flex justify-center gap-2">
            {products.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${item.name}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-slate-900" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}