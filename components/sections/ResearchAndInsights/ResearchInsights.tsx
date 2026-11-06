import ResearchCard from "@/components/ui/ResearchCard";
import { researchAndInsights, ResearchInsight } from "./data";

export default function ResearchInsights() {
  return (
    <div className="w-full bg-white py-14">
      <div className="w-full max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {researchAndInsights?.map((article: ResearchInsight) => (
          <ResearchCard key={article.id} data={article} />
        ))}
      </div>
    </div>
  );
}
