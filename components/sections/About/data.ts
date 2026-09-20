import type { CtaBand, Hero, Office, Stat } from "@/lib/types";

export type Value = { title: string; description: string };

export type Project = {
  tag: string;
  tagClass: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type AboutContent = {
  hero: Hero;
  mission: { title: string; body: string[]; image: string; imageAlt: string };
  stats: Stat[];
  values: Value[];
  projects: Project[];
  timeline: TimelineEntry[];
  team: TeamMember[];
  testimonials: Testimonial[];
  offices: Office[];
  cta: CtaBand;
};

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "ABOUT US",
    title: "A small team with",
    accent: "long memories.",
    subtitle:
      "We are an engineering group of forty-one people who would rather maintain what we build than hand it over and disappear. We started in 2019 and we still work the same way.",
    bullets: ["Founded 2024", "7 people", "One offices"],
    actions: [
      { label: "Work with us", href: "/contact" },
      { label: "See our services", href: "/services" },
    ],
    meta: [
      { label: "Founded", value: "2024" },
      { label: "Team", value: "7 people" },
      { label: "Offices", value: "Kathmandu" },
      { label: "Median tenure", value: "2 years" },
    ],
    backgroundImage: "about-banner.webp",
  },

  mission: {
    title: "Software should be boring in the right places.",
    body: [
      "Most systems fail slowly. A shortcut here, an undocumented decision there, and eighteen months later nobody can change anything without holding their breath. We build against that.",
      "That means fewer clever abstractions, more written-down decisions, and a strong bias towards handing teams something they can still understand once we are gone.",
    ],
    image: "/AboutMission.webp",
    imageAlt: "The Navo team working together in an open studio space",
  },

  stats: [
    { value: "7", label: "Engineers, designers and analysts" },
    { value: "8+", label: "Projects delivered since 2024" },
    { value: "92%", label: "Clients who come back" },
    { value: "2 yrs", label: "Median team tenure" },
  ],

  values: [
    {
      title: "Say the real estimate",
      description:
        "We give the number we believe, not the one that wins the work. It costs us some projects and saves everyone the worse conversation later.",
    },
    {
      title: "Write the decision down",
      description:
        "Every meaningful architectural choice gets a document with the alternatives we rejected and why. Future maintainers deserve the reasoning, not just the result.",
    },
    {
      title: "Own the pager",
      description:
        "If we built it, we carry it until your team is ready to. Nothing improves design quality faster than being woken up by your own shortcuts.",
    },
    {
      title: "Leave a stronger team",
      description:
        "Pairing, review and handover are part of scope, not a bonus. Success is your engineers not needing us for the next one.",
    },
    {
      title: "Measure after launch",
      description:
        "We agree the metric before the build and report the result afterwards, including the times the number did not move.",
    },
    {
      title: "Default to least access",
      description:
        "Minimum permissions, short-lived credentials and audited entry — applied to our own team first, not only to the systems we ship.",
    },
  ],

  projects: [
    {
      tag: "SUPPLY CHAIN & AUTOMATION",
      tagClass: "bg-blue-100 text-blue-700",
      title: "Enterprise Inventory Management System",
      problem:
        "Fragmented stock tracking across warehouses causing frequent overstocking, stockouts, and manual reconciliation errors.",
      solution:
        "Automated inventory platform with real-time stock monitoring, intelligent reorder triggers, and multi-warehouse sync via barcode/RFID integration.",
      outcome:
        "Consolidated inventory operations into a unified dashboard, cutting manual stock handling by over 60%.",
    },
    {
      tag: "AI DESKTOP ASSISTANT",
      tagClass: "bg-cyan-100 text-cyan-700",
      title: "Aria Voice Assistant",
      problem:
        "Users juggling multiple desktop apps and tasks with no hands-free way to search, launch, or automate routine actions.",
      solution:
        "A Siri-like AI voice assistant for desktop with natural language command processing, system-level automation, and contextual task execution.",
      outcome:
        "Seamless voice-driven control of everyday desktop workflows, reducing task-switching time and boosting productivity.",
    },
    {
      tag: "AI INTEGRATION & WEB PLATFORM",
      tagClass: "bg-purple-100 text-purple-700",
      title: "Dream Uni — AI University Advisor",
      problem:
        "Students overwhelmed by scattered, inconsistent information when choosing universities and programs that fit their profile.",
      solution:
        "AI-powered recommendation platform that matches students to universities and courses based on academic profile, interests, and goals.",
      outcome:
        "Personalized, data-driven university shortlists that simplify decision-making and cut research time significantly.",
    },
  ],

  timeline: [
    {
      year: "2024",
      title: "Three people and one contract",
      description:
        "Started as a two-room studio taking on platform work that larger consultancies considered too messy to quote.",
    },
    {
      year: "2025",
      title: "First product: InventoryIQ",
      description:
        "An inventory management system originally built for a single retail client became a product after four others asked for the same thing.",
    },
    {
      year: "2026",
      title: "Kathmandu office, delivery process",
      description:
        "Opened our Kathmandu office and formalised a structured delivery process across discovery, build and audit stages.",
    },
  ],

  team: [
    {
      name: "Asha Karki",
      role: "CO-FOUNDER & CEO",
      focus:
        "Sets direction, still reviews every proposal that goes out the door.",
      image: "",
    },
    {
      name: "Tobias Lehmann",
      role: "CO-FOUNDER & CTO",
      focus:
        "Architecture, security review and the uncomfortable questions in design meetings.",
      image: "",
    },
    {
      name: "Mei Lin Tan",
      role: "HEAD OF DATA",
      focus:
        "Warehouse design, modelling standards and making dashboards people believe.",
      image: "",
    },
    {
      name: "Samuel Adeyemi",
      role: "HEAD OF PLATFORM",
      focus:
        "Reliability practice, incident review and the on-call rotation nobody dreads.",
      image: "",
    },
  ],

  testimonials: [
    {
      quote:
        "They were the first team who told us the honest version of the estimate. Everything after that was easier, including the parts that went wrong.",
      author: "Rabi Gauchan",
      role: "Engineering",
      company: "Pure Wave",
    },
    {
      quote:
        "Our warehouse staff stopped fighting the tool in about a week. Stock counts finally match what's on the shelf.",
      author: "Rajendra Dutta",
      role: "Head of Operations",
      company: "Hamro Saman",
    },
    {
      quote:
        "The handover was the best part. Documentation, runbooks, and two of our own engineers who could actually maintain it.",
      author: "Dipesh Neupane",
      role: "CTO",
      company: "Powlowski Brothers",
    },
  ],

  offices: [
    {
      city: "Kathmandu",
      country: "Nepal",
      address: "Naxal, 44600",
      timezone: "GMT+5:45",
      email: "info@navo.com",
    },
  ],

  cta: {
    title: "We hire slowly and keep people a long time.",
    description:
      "Open roles are rare and specific. If you want to be told when one opens that matches what you do, send us something you have built.",
    actions: [
      { label: "Get in touch", href: "/contact" },
      { label: "See the products", href: "/products" },
    ],
  },
};
