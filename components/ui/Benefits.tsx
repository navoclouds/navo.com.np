import Frame from "@/components/ui/Frame";
import { Check } from "lucide-react";

interface Benefits {
  tag: string;
  title: string;
  description: string;
  image: string;
  items: string[];
  imageAlt: string;
}

export default function Benefit({ benefits }: { benefits: Benefits }) {
  return (
    <section
      className="border-b border-gray-300 px-6 py-20"
      aria-labelledby="benefit"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-pink">
            {benefits.tag}
          </p>

          <h2
            id="benefit"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl"
          >
            {benefits.title}
          </h2>

          <div
            className="py-2 leading-relaxed text-gray-600"
            dangerouslySetInnerHTML={{ __html: `${benefits.description}` }}
          />

          <ul className="mt-6 flex flex-col gap-3">
            {benefits.items.map((paragraph) => (
              <li
                key={paragraph}
                className="flex items-start gap-3 text-sm leading-relaxed text-gray-500"
              >
                <Check
                  size={18}
                  strokeWidth={2.5}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center lg:col-span-6">
          <Frame
            src={benefits.image}
            alt={benefits.imageAlt}
            className="aspect-16/11"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
