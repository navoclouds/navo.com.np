import type { CtaBand, Hero } from "@/lib/types";

export type Article = {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  /** ISO date — also used for <time> and the sitemap. */
  date: string;
  readingTime: string;
  /** Image inside /public. Leave "" for the placeholder frame. */
  image: string;
  /** PDF inside /public, e.g. "/Assets/Threat Detection.pdf" */
  pdf: string;
};

export type Resource = {
  title: string;
  description: string;
  type: string;
  size: string;
  pdf: string;
};

export type ArticlesContent = {
  hero: Hero;
  featured: Article;
  articles: Article[];
  resources: Resource[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonLabel: string;
    note: string;
  };
  cta: CtaBand;
};

export const articlesContent: ArticlesContent = {
  hero: {
    eyebrow: "ARTICLES",
    title: "Notes from",
    accent: "the build.",
    subtitle:
      "Technical reports, field notes and reference guides written by the people who did the work. Every piece is published as a PDF you can read, download and circulate internally.",
    bullets: ["Free, no email wall", "Published as PDF", "Written by the delivery team"],
    actions: [
      { label: "Browse the library", href: "#library" },
      { label: "Subscribe", href: "#subscribe" },
    ],
    meta: [
      { label: "Papers published", value: "6" },
      { label: "Updated", value: "Monthly" },
      { label: "Format", value: "PDF" },
      { label: "Licence", value: "CC BY 4.0" },
    ],
  },

  featured: {
    id: "threat-detection",
    category: "SOFTWARE",
    title: "Threat Detection for Smart Surveillance",
    description:
      "The detection of threats using surveillance systems is an effective way to ensure the security of people, since it provides an opportunity to detect suspicious activity at an early stage. This report covers the model architecture, the labelling strategy and the false-positive trade-offs we accepted in deployment.",
    author: "Navo Cloud Solution",
    date: "2026-08-14",
    readingTime: "18 min read",
    image: "/Detection.webp",
    pdf: "/Assets/Threat Detection.pdf",
  },

  articles: [
    {
      id: "resume-scanner",
      category: "SOFTWARE",
      title: "Resumes Scanner for Semantic Matching",
      description:
        "The system is made of two sequentially connected agents. The first is a fine-tuned Qwen2.5-0.5B-Instruct model responsible for converting unstructured resumes into a structured semantic representation.",
      author: "Navo Cloud Solution",
      date: "2026-07-29",
      readingTime: "12 min read",
      image: "/Scanning.webp",
      pdf: "/Assets/HR-Tool Technical Report.pdf",
    },
    {
      id: "evaluating-llm-features",
      category: "AI",
      title: "Evaluating LLM Features Before You Ship Them",
      description:
        "A practical harness for grading model output against a fixed rubric, wired into CI so a prompt change cannot silently regress quality on the paths your users depend on.",
      author: "Navo Cloud Solution",
      date: "2026-06-18",
      readingTime: "11 min read",
      image: "",
      pdf: "/Assets/Evaluating LLM Features.pdf",
    },
    {
      id: "slos-that-survive",
      category: "RELIABILITY",
      title: "SLOs That Survive Their First Bad Quarter",
      description:
        "Most service level objectives are abandoned within six months. The ones that last share four properties, and none of them involve picking a number with more nines in it.",
      author: "Navo Cloud Solution",
      date: "2026-05-11",
      readingTime: "9 min read",
      image: "",
      pdf: "/Assets/SLOs That Survive.pdf",
    },
    {
      id: "zero-downtime-migration",
      category: "ARCHITECTURE",
      title: "Zero-Downtime Ledger Migration",
      description:
        "Four months of dual-writing, one account-by-account cutover, and the seven things we would do differently. Includes the reconciliation queries used to prove correctness at every stage.",
      author: "Navo Cloud Solution",
      date: "2026-04-02",
      readingTime: "16 min read",
      image: "",
      pdf: "/Assets/Zero-Downtime Ledger Migration.pdf",
    },
    {
      id: "dimensional-modelling",
      category: "DATA",
      title: "Dimensional Modelling Is Not Obsolete",
      description:
        "Wide tables and cheap storage changed the economics, not the reasoning. Where star schemas still earn their keep inside a modern warehouse, and where they genuinely do not.",
      author: "Navo Cloud Solution",
      date: "2026-02-20",
      readingTime: "14 min read",
      image: "",
      pdf: "/Assets/Dimensional Modelling.pdf",
    },
  ],

  resources: [
    {
      title: "Capability deck",
      description: "Services, engagement models, indicative pricing and team structure in one document.",
      type: "PDF",
      size: "2.1 MB",
      pdf: "/Assets/Capability Deck.pdf",
    },
    {
      title: "Architecture review checklist",
      description: "The 64-point checklist we run before signing off any production system design.",
      type: "PDF",
      size: "480 KB",
      pdf: "/Assets/Architecture Review Checklist.pdf",
    },
    {
      title: "Data platform reference architecture",
      description:
        "Ingestion, storage, modelling and serving layers with trade-offs annotated at each boundary.",
      type: "PDF",
      size: "3.4 MB",
      pdf: "/Assets/Data Platform Reference Architecture.pdf",
    },
    {
      title: "Incident review template",
      description: "The blameless one-page template referenced in our reliability writing, ready to copy.",
      type: "PDF",
      size: "180 KB",
      pdf: "/Assets/Incident Review Template.pdf",
    },
  ],

  newsletter: {
    title: "One paper a month, nothing else.",
    description:
      "When we publish something new you get a single email with the PDF attached. No drip sequence, no product announcements.",
    placeholder: "you@company.com",
    buttonLabel: "Subscribe",
    note: "Roughly twelve emails a year. Unsubscribe in one click.",
  },

  cta: {
    title: "Want to talk through something we wrote?",
    description:
      "If a paper is relevant to a decision you are making, we are happy to spend half an hour on it with no expectation of work.",
    actions: [
      { label: "Get in touch", href: "/contact" },
      { label: "See our services", href: "/services" },
    ],
  },
};

/** "2026-08-14" -> "14 August 2026" for display, ISO kept for <time dateTime>. */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}