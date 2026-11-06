import Showcase from "./sections/Showcase";
import { Solution, solutions } from "./data";

export default function SolutionsPage() {
  return (
    <div className="w-full flex flex-col">
      {solutions?.map((solution: Solution, index: number) => (
        <Showcase key={index} product={solution} index={index} />
      ))}
    </div>
  );
}
