"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Zap,
  FileText,
  BarChart2,
  Boxes,
  Globe2,
  AlertTriangle,
  TrendingUp,
  Mic,
  Sparkles,
  AppWindow,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  label: string;
};

type Product = {
  name: string;
  logoIcon: LucideIcon;
  titleLine1: string;
  titleLine2: string;
  description: string;
  features: Feature[];
  cta: string;
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
    image: "/scanner.jpg",
  },
  // {
  //   name: "AURORA",
  //   logoIcon: Boxes,
  //   titleLine1: "Inventory",
  //   titleLine2: "Management",
  //   description:
  //     "Real-time stock visibility across every warehouse, in one command view.",
  //   features: [
  //     { icon: Globe2, label: "Global Stock Sync" },
  //     { icon: AlertTriangle, label: "Low-Stock Alerts" },
  //     { icon: TrendingUp, label: "Fulfillment Insights" },
  //   ],
  //   cta: "Track Every Unit, Everywhere.",
  //   image: "/ims.jpg",
  // },
  // {
  //   name: "AURA AI",
  //   logoIcon: Mic,
  //   titleLine1: "Desktop Voice",
  //   titleLine2: "Assistant",
  //   description:
  //     "Ask anything, get grounded answers, without leaving what you're working on.",
  //   features: [
  //     { icon: Mic, label: "Voice-First Control" },
  //     { icon: Sparkles, label: "Context Aware" },
  //     { icon: AppWindow, label: "Works Across Apps" },
  //   ],
  //   cta: "Talk to Your Desktop.",
  //   image: "/junkiri.jpg",
  // },
];

export default function OurProducts() {
  const [active, setActive] = useState(0);
  const count = products.length;

  const go = (dir: number) => setActive((i) => (i + dir + count) % count);

  const product = products[active];
  const LogoIcon = product.logoIcon;

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-[#1aadf1]">Products</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Technology we build, experiment with, and turn into useful software
            products.
          </p>
        </div>

        <div className="relative mt-10">
          {/* arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous product"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 p-2 text-white shadow-lg transition hover:bg-slate-700 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next product"
            className="absolute right-0 top-1/2 z-10 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 p-2 text-white shadow-lg transition hover:bg-slate-700 sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="rounded-3xl border border-slate-300 bg-slate-50/60 p-6 sm:p-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              {/* left: copy, driven by the products array */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1aadf1] text-white">
                    <LogoIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold tracking-wide text-slate-900">
                    {product.name}
                  </span>
                </div>

                <h3 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                  <span className="text-[#1aadf1]">{product.titleLine1}</span>
                  <br />
                  {product.titleLine2}
                </h3>

                <p className="mt-4 text-slate-500">{product.description}</p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {product.features.map((feature) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <span
                        key={feature.label}
                        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        <FeatureIcon className="h-3.5 w-3.5 text-[#1aadf1]" />
                        {feature.label}
                      </span>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="mt-7 flex items-center gap-2 rounded-xl bg-[#1aadf1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#32baf9]"
                >
                  {product.cta}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* right: image for this product */}
              <div className="relative aspect-5/3 w-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={`${product.name} preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* mobile arrows */}
          <div className="mt-4 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous product"
              className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next product"
              className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.name}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-slate-900" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
