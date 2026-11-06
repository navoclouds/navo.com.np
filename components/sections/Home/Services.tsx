import Link from "next/link";
import { serviceLinks } from "@/lib/site";

type Service = {
  id: string;
  title: string;
  description: string;
};

const allServices: Service[] = [
  {
    id: "website-development",
    title: "Website Design & Development",
    description:
      "<p>Navo Cloud Solutions offers website design and website development services in Nepal and worldwide.</p><p>We provide custom website development, business websites, corporate websites, portfolio websites, e-commerce development, responsive web design, landing pages, and SEO-friendly websites.</p><p>As a website development company in Nepal, we build fast, secure, scalable websites for international clients.</p>",
  },
  {
    id: "software-development",
    title: "Custom Software Development",
    description:
      "<p>Navo Cloud Solutions provides custom software development services in Nepal and worldwide.</p><p>We build business software, desktop application development solutions, inventory management systems, POS software, business management systems, and workflow automation.</p><p>Our tailored software solutions serve startups, small businesses, and established organizations.</p>",
  },
  {
    id: "ai-development-and-integration",
    title: "Artificial Intelligence Development & Integration",
    description:
      "<p>Navo Cloud Solutions offers AI development and artificial intelligence integration services in Nepal and worldwide.</p><p>Our custom AI solutions include machine learning, deep learning, computer vision, natural language processing (NLP), AI-powered applications, and intelligent business automation.</p><p>We integrate artificial intelligence into existing software and build intelligent systems.</p>",
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Development",
    description:
      "<p>Navo Cloud Solutions provides mobile application development services in Nepal and worldwide.</p><p>We build custom Android applications, iOS apps, cross-platform mobile applications, business apps, and mobile software with modern UI/UX design.</p><p>Our secure, scalable mobile solutions serve startups and enterprises.</p>",
  },
];

export default function Services() {
  return (
    <section
      className="bg-surface px-6 py-16 md:px-10"
      aria-labelledby="home-services"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-6 flex items-center gap-3">
            <span
              className="inline-block h-10 w-2.5 rounded-sm bg-brand-pink"
              aria-hidden="true"
            />
            <h2
              id="home-services"
              className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900"
            >
              Our Services
            </h2>
          </div>
          <div className="mb-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              Navo Cloud Solutions is a Nepal-based technology company offering
              website design and development, custom software development,
              mobile application development, and artificial intelligence (AI)
              development.
            </p>

            <p>
              We build responsive business websites, e-commerce platforms,
              custom business software, web applications, Android and iOS apps,
              and AI-powered solutions for businesses in Nepal and worldwide.
            </p>
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Website • Software • AI • Application
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {allServices.map((service, index) => (
            <li key={service.id} className="group">
              <span className="mb-1 block text-sm font-semibold tracking-wider text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                <Link
                  href={serviceLinks[index]?.href ?? "services"}
                  className="transition-colors group-hover:text-brand-pink"
                >
                  {service.title}
                </Link>
              </h3>
              <div
                className="space-y-2 text-sm leading-relaxed flex flex-col gap-4 text-slate-700 [&>p]:m-0"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
