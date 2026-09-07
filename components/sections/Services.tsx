const allServices = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications designed around business goals, lightning-fast performance, and user experience.",
  },
  {
    id: 2,
    title: "Custom AI Development",
    description:
      "AI-powered systems, model fine-tuning, and semantic intelligence designed for specialized business problems and proprietary workflows.",
  },
  {
    id: 3,
    title: "Desktop Software Development",
    description:
      "Custom desktop applications engineered for specific high-throughput operational, offline-first, and enterprise system requirements.",
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Integrate AI seamlessly into existing products, CRM databases, and automate repetitive business workflows with complete data security.",
  },
  {
    id: 5,
    title: "Mobile Application Development",
    description:
      "Scalable native and cross-platform mobile apps for iOS and Android built with fluid touch interactions and reliable offline sync.",
  },
  {
    id: 6,
    title: "Business Tools And Platforms",
    description:
      "Internal enterprise dashboards, operations management systems, and custom portal platforms that make team operations 10x faster.",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#f1f1f1] p-10">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-10 rounded-sm bg-linear-to-b from-[#2d4182] via-[#1eabf1] to-[#b8338e] inline-block"></span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Services</h1>
        </div>
        <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
          We provide multiple services from Website Development to
          AI-Integration services. Based on understanding your business and
          goals we tailor the right process for you.
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          End-to-End Capabilities • High Reliability
        </p>
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
        {allServices.map(service => (
            <div key={service.id} className="group">
                <span className="text-sm font-semibold tracking-wider text-slate-400 block mb-1">0{service.id}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#c9449e] transition-colors mb-2">{service.title}</h3>
                <p className="text-slate-800 text-sm leading-relaxed">{service.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
