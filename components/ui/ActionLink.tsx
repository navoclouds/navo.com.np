import Link from "next/link";
import type { Action } from "@/lib/types";

type Variant = "primary" | "secondary" | "onDark" | "onDarkGhost";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand-navy text-white hover:bg-brand-pink",
  secondary: "border border-gray-300 bg-white text-black hover:border-brand-blue",
  onDark: "bg-white text-brand-navy hover:bg-brand-pink hover:text-white",
  onDarkGhost: "border border-white/40 text-white hover:border-white",
};

export default function ActionLink({
  action,
  variant = "primary",
  className = "",
}: {
  action: Action;
  variant?: Variant;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors ${VARIANTS[variant]} ${className}`;

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={classes}>
      {action.label}
    </Link>
  );
}