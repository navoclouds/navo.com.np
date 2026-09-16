import Link from "next/link";
import { serviceLinks } from "@/lib/site";

const allServices = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications designed around business goals, lightning-fast performance, and user experience.",
  },
  {
    id: "custom-ai-development",
    title: "Custom AI Development",
    description:
      "AI-powered systems, model fine-tuning, and semantic intelligence designed for specialized business problems and proprietary workflows.",
  },
  {
    id: "desktop-software-development",
    title: "Desktop Software Development",
    description:
      "Custom desktop applications engineered for specific high-throughput operational, offline-first, and enterprise system requirements.",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Integrate AI seamlessly into existing products, CRM databases, and automate repetitive business workflows with complete data security.",
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Development",
    description:
      "Scalable native and cross-platform mobile apps for iOS and Android built with fluid touch interactions and reliable offline sync.",
  },
  {
    id: "business-tools-and-platforms",
    title: "Business Tools And Platforms",
    description:
      "Internal enterprise dashboards, operations management systems, and custom portal platforms that make team operations 10x faster.",
  },
];

export default function Services() {
  return (
    <section className="bg-surface px-6 py-16 md:px-10" aria-labelledby="home-services">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block h-10 w-2.5 rounded-sm bg-brand-pink" aria-hidden="true" />
            <h2 id="home-services" className="text-4xl font-extrabold tracking-tight text-slate-900">
              Services
            </h2>
          </div>
          <p className="mb-6 leading-relaxed text-slate-600">
            We provide multiple services from website development to AI integration. Based on
            understanding your business and goals, we tailor the right process for you.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            End-to-end capabilities • High reliability
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-all hover:gap-2 hover:text-brand-pink"
          >
            See all services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
          {allServices.map((service, index) => (
            <li key={service.id} className="group">
              <span className="mb-1 block text-sm font-semibold tracking-wider text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                <Link
                  href={serviceLinks[index]?.href ?? "/services"}
                  className="transition-colors group-hover:text-brand-pink"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}