import SectionHeading from "@/components/ui/Sectionheading";
import type { Comparison as ComparisonType } from "../data";

export default function Comparison({
  comparison,
}: {
  comparison: ComparisonType;
}) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={comparison.title}
          rule="pink"
          description={comparison.description}
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-300 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Feature comparison across {comparison.columns.join(", ")}
            </caption>
            <thead>
              <tr className="border-b border-gray-300 bg-surface">
                <th
                  scope="col"
                  className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-gray-500"
                >
                  Capability
                </th>
                {comparison.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-5 py-4 text-center text-sm font-bold text-black"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-gray-200 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-5 py-4 text-sm font-semibold text-black"
                  >
                    {row.feature}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={`${row.feature}-${comparison.columns[i]}`}
                      className="px-5 py-4 text-center text-sm text-gray-500"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
