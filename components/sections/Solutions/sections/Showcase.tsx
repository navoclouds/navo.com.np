import Image from "next/image";
import Link from "next/link";
import type { Solution } from "../data";

export default function Showcase({
  product,
  index,
}: {
  product: Solution;
  index: number;
}) {
  const productId = product.id;
  const reversed = index % 2 === 1;
  const dark = reversed;

  return (
    <section
      id={productId}
      aria-labelledby={`${productId}-title`}
      className={`scroll-mt-28 py-16 sm:py-20 ${
        dark ? "border-slate-800 bg-slate-950" : "border-gray-200 bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className={reversed ? "lg:order-2" : ""}>
          <h2
            id={`${productId}-title`}
            className={`text-3xl font-extrabold md:text-4xl ${
              dark ? "text-white" : "text-black"
            }`}
          >
            {product.name}
          </h2>

          <h3
            className={`mt-3 text-lg font-semibold ${
              dark ? "text-slate-200" : "text-slate-800"
            }`}
          >
            {product.title}
          </h3>

          <div
            className={`mt-4 space-y-3 text-sm leading-7 ${
              dark ? "text-slate-300" : "text-slate-600"
            } [&>p]:m-0`}
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />

          <div className="mt-7 flex flex-wrap gap-3">
            {product.links.map(({ text, link }) => (
              <Link
                target="_blank"
                key={`${text}-${link}`}
                href={link}
                className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                  dark
                    ? "bg-white text-slate-950 hover:bg-slate-200"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`group relative flex h-80 w-full items-center justify-center overflow-hidden rounded-xl shadow-sm md:h-100 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          {/* Blurred background */}
          <Image
            src={product.cover}
            alt={`Background blur for ${product.title}`}
            width={100}
            height={100}
            className="absolute z-0 h-full w-full scale-110 object-cover object-center blur-lg"
            aria-hidden="true"
          />

          {/* Original image */}
          <Image
            src={product.cover}
            alt={`${product.name} - ${product.title}`}
            width={400}
            height={400}
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="relative z-10 h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
