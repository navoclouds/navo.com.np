type SectionHeadingProps = {
  title: string;
  description?: string;
  rule?: "pink" | "blue";
  eyebrow?: string;
  as?: "h2" | "h3";
  className?: string;
};

const RULE = {
  pink: "bg-brand-pink",
  blue: "bg-brand-blue",
} as const;

export default function SectionHeading({
  title,
  description,
  rule = "pink",
  eyebrow,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.2em] text-brand-pink">{eyebrow}</span>
      ) : null}
      <Tag className="text-4xl font-extrabold tracking-tight text-black">{title}</Tag>
      <div className={`mt-3 h-3 w-16 ${RULE[rule]}`} aria-hidden="true" />
      {description ? (
        <p className="mt-6 max-w-2xl leading-relaxed text-gray-500">{description}</p>
      ) : null}
    </div>
  );
}