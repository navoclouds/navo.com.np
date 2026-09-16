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

export type TimelineEntry = { year: string; title: string; description: string };

export type TeamMember = { name: string; role: string; focus: string; image: string };

export type Testimonial = { quote: string; author: string; role: string; company: string };

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
    bullets: ["Founded 2019", "41 people", "Three offices"],
    actions: [
      { label: "Work with us", href: "/contact" },
      { label: "See our services", href: "/services" },
    ],
    meta: [
      { label: "Founded", value: "2019" },
      { label: "Team", value: "41 people" },
      { label: "Offices", value: "Kathmandu · Berlin · Singapore" },
      { label: "Median tenure", value: "3.4 years" },
    ],
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
    { value: "41", label: "Engineers, designers and analysts" },
    { value: "60+", label: "Projects delivered since 2019" },
    { value: "92%", label: "Clients who come back" },
    { value: "3.4 yrs", label: "Median team tenure" },
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
      tag: "CUSTOM SOFTWARE & AUTOMATION",
      tagClass: "bg-blue-100 text-blue-700",
      title: "Enterprise Logistics Intelligence",
      problem:
        "Fragmented dispatch scheduling causing severe route delays, manual paper handoffs, and 18% idle fuel wastage.",
      solution:
        "Custom automated dispatch engine combining real-time IoT telematics, route optimization, and driver apps.",
      outcome:
        "Consolidated fleet dispatch operations into a unified interface with zero scheduled route overruns.",
    },
    {
      tag: "WEB & MOBILE APPLICATION",
      tagClass: "bg-cyan-100 text-cyan-700",
      title: "CareSync Patient Health Portal",
      problem:
        "Complex patient intake onboarding, manual medical history records retrieval, and overloaded call centers.",
      solution:
        "Secure, HIPAA-compliant cross-platform mobile app and patient portal with automated OCR document indexing.",
      outcome:
        "Frictionless digital self-service onboarding, reducing clinic front-desk wait times from 25 min to under 3 min.",
    },
    {
      tag: "AI INTEGRATION & WEB PLATFORM",
      tagClass: "bg-purple-100 text-purple-700",
      title: "Aura Commerce Experience",
      problem:
        "High customer support friction around product sizing and checkout abandonment on bespoke retail catalogs.",
      solution:
        "Context-aware conversational AI shopping guide paired with a headless, ultra-fast Next.js architecture.",
      outcome:
        "Instant customer query resolution and a 34% increase in cart completion speed across international markets.",
    },
  ],

  timeline: [
    {
      year: "2019",
      title: "Three people and one contract",
      description:
        "Started as a two-room studio taking on platform work that larger consultancies considered too messy to quote.",
    },
    {
      year: "2021",
      title: "First product: FlowDesk",
      description:
        "A workflow engine originally built for a single logistics client became a product after four others asked for the same thing.",
    },
    {
      year: "2023",
      title: "Berlin office, data practice",
      description:
        "Opened in Europe and formalised the data platform practice after it quietly became a third of delivered work.",
    },
    {
      year: "2024",
      title: "InsightAI reaches general availability",
      description:
        "Shipped the analytics engine with self-hosted deployment and an independent security review.",
    },
    {
      year: "2026",
      title: "PayGrid private beta",
      description:
        "Payments infrastructure entered private beta with fourteen design partners across marketplaces and fintech.",
    },
  ],

  team: [
    {
      name: "Asha Karki",
      role: "CO-FOUNDER & CEO",
      focus: "Sets direction, still reviews every proposal that goes out the door.",
      image: "",
    },
    {
      name: "Tobias Lehmann",
      role: "CO-FOUNDER & CTO",
      focus: "Architecture, security review and the uncomfortable questions in design meetings.",
      image: "",
    },
    {
      name: "Mei Lin Tan",
      role: "HEAD OF DATA",
      focus: "Warehouse design, modelling standards and making dashboards people believe.",
      image: "",
    },
    {
      name: "Samuel Adeyemi",
      role: "HEAD OF PLATFORM",
      focus: "Reliability practice, incident review and the on-call rotation nobody dreads.",
      image: "",
    },
  ],

  testimonials: [
    {
      quote:
        "They were the first team who told us the honest version of the estimate. Everything after that was easier, including the parts that went wrong.",
      author: "Priya Raman",
      role: "VP Engineering",
      company: "Meridian Bank",
    },
    {
      quote:
        "Our dispatchers stopped fighting the tool in about a week. That has never happened with software we have rolled out before.",
      author: "Daniel Okafor",
      role: "Head of Operations",
      company: "Hollow Freight",
    },
    {
      quote:
        "The handover was the best part. Documentation, runbooks, and two of our own engineers who could actually maintain it.",
      author: "Lena Fischer",
      role: "CTO",
      company: "Northbend",
    },
  ],

  offices: [
    {
      city: "Kathmandu",
      country: "Nepal",
      address: "Level 4, Jhamsikhel Road, Lalitpur 44700",
      timezone: "GMT+5:45",
      email: "ktm@navo.com.np",
    },
    {
      city: "Berlin",
      country: "Germany",
      address: "Prinzessinnenstraße 20, 10969 Berlin",
      timezone: "GMT+1",
      email: "berlin@navo.com.np",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "71 Robinson Road, #14-01, 068895",
      timezone: "GMT+8",
      email: "sg@navo.com.np",
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