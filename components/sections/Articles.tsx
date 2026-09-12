import Image from "next/image";
import Link from "next/link";

export default function ArticlesSection() {
  const articles = [
    {
      category: "SOFTWARE",
      title: "Threat Detection for Smart Surveillance",
      description:
        "The detection of threats using surveillance systems is an effective way to ensure the security of people, since it provides an opportunity to detect suspicious activity at an early stage.",
      image: "/Detection.webp",
      pdf: "/Assets/Threat Detection.pdf",
    },
    {
      category: "SOFTWARE",
      title: "Resumes Scanner for Semantic Matching",
      description:
        "The system is made of two sequentially connected agents. The first agent is a fine-tuned version of Qwen2.5-0.5B-Instruct model, which is responsible for converting unstructured resumes into structured semantic representation.",
      image: "/Scanning.webp",
      pdf: "/Assets/HR-Tool Technical Report.pdf",
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-3">Articles</h2>
        <div className="w-16 h-3 bg-[#1aadf1] mb-6" />
        <p className="text-gray-400 max-w-xl mb-14">
          Insights on software engineering, artificial intelligence, and
          building better digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-blue-600 text-xs font-semibold tracking-wide mb-2">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-black mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>
                <Link
                  href={article.pdf}
                  className="text-black font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read Article <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}