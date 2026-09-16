import type { CtaBand, Faq, Hero } from "@/lib/types";

export type Service = {
  id: string;
  tag: string;
  tagClass: string;
  name: string;
  summary: string;
  deliverables: string[];
  startingAt: string;
  timeline: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  duration: string;
  outputs: string[];
};

export type EngagementModel = {
  name: string;
  bestFor: string;
  description: string;
  includes: string[];
  billing: string;
  featured?: boolean;
};

export type TechGroup = { group: string; items: string[] };

export type ServicesContent = {
  hero: Hero;
  services: Service[];
  process: ProcessStep[];
  engagementModels: EngagementModel[];
  techStack: TechGroup[];
  faq: Faq[];
  cta: CtaBand;
};

export const servicesContent: ServicesContent = {
  hero: {
    eyebrow: "SERVICES",
    title: "Engineering teams that",
    accent: "ship.",
    subtitle:
      "We embed with your team to design, build and operate software that has to work — from the first architecture diagram to the on-call rotation that keeps it alive.",
    bullets: ["Senior-only engineers", "Fixed-scope discovery", "Code you fully own"],
    actions: [
      { label: "Start a project", href: "/contact" },
      { label: "See the products", href: "/products" },
    ],
    meta: [
      { label: "Average team size", value: "4–7 engineers" },
      { label: "Time to first commit", value: "10 days" },
      { label: "Engagements since 2019", value: "60+" },
      { label: "Client retention", value: "92%" },
    ],
  },

  services: [
    {
      id: "website-development",
      tag: "WEB & MOBILE APPLICATION",
      tagClass: "bg-cyan-100 text-cyan-700",
      name: "Website Development",
      summary:
        "Modern, responsive websites and web applications designed around business goals, fast performance and a user experience people finish.",
      deliverables: [
        "Design system and component library",
        "Next.js application build",
        "Automated test suite and CI pipeline",
        "Core Web Vitals and SEO groundwork",
      ],
      startingAt: "$28k",
      timeline: "8–16 weeks",
    },
    {
      id: "custom-ai-development",
      tag: "AI & MACHINE LEARNING",
      tagClass: "bg-purple-100 text-purple-700",
      name: "Custom AI Development",
      summary:
        "AI-powered systems, model fine-tuning and semantic intelligence built for specialised problems and proprietary workflows.",
      deliverables: [
        "Use-case scoping and feasibility spike",
        "Retrieval, fine-tuning or classical ML build",
        "Evaluation harness with regression gates",
        "Drift monitoring and retraining workflow",
      ],
      startingAt: "$40k",
      timeline: "12–24 weeks",
    },
    {
      id: "desktop-software-development",
      tag: "CUSTOM SOFTWARE",
      tagClass: "bg-blue-100 text-blue-700",
      name: "Desktop Software Development",
      summary:
        "Desktop applications engineered for high-throughput operational, offline-first and enterprise system requirements.",
      deliverables: [
        "Offline-first data layer",
        "Signed, auto-updating builds",
        "Hardware and peripheral integration",
        "Crash reporting and telemetry",
      ],
      startingAt: "$34k",
      timeline: "10–20 weeks",
    },
    {
      id: "ai-integration",
      tag: "AI INTEGRATION",
      tagClass: "bg-purple-100 text-purple-700",
      name: "AI Integration",
      summary:
        "Bring AI into existing products, CRMs and databases, and automate repetitive workflows without loosening data security.",
      deliverables: [
        "Integration architecture and data boundaries",
        "Prompt, retrieval and guardrail design",
        "Human-in-the-loop review flows",
        "Cost and latency budgets",
      ],
      startingAt: "$22k",
      timeline: "6–12 weeks",
    },
    {
      id: "mobile-application-development",
      tag: "WEB & MOBILE APPLICATION",
      tagClass: "bg-cyan-100 text-cyan-700",
      name: "Mobile Application Development",
      summary:
        "Scalable native and cross-platform apps for iOS and Android with fluid interactions and reliable offline sync.",
      deliverables: [
        "React Native or native build",
        "Offline sync and conflict handling",
        "Store submission and release pipeline",
        "Analytics and crash monitoring",
      ],
      startingAt: "$30k",
      timeline: "10–20 weeks",
    },
    {
      id: "business-tools-and-platforms",
      tag: "PLATFORMS & DASHBOARDS",
      tagClass: "bg-pink-100 text-pink-700",
      name: "Business Tools And Platforms",
      summary:
        "Internal dashboards, operations management systems and custom portals that make day-to-day team operations far faster.",
      deliverables: [
        "Role-based access and audit trails",
        "Reporting and export pipelines",
        "Workflow automation",
        "Admin tooling and runbooks",
      ],
      startingAt: "$26k",
      timeline: "8–18 weeks",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "We map the problem, the constraints and the systems already in place, then agree what success looks like in numbers.",
      duration: "1–2 weeks",
      outputs: ["Problem brief", "System map", "Success metrics"],
    },
    {
      step: "02",
      title: "Design",
      description:
        "Architecture, interface and data model are decided together and written down, so nobody is guessing during the build.",
      duration: "2–3 weeks",
      outputs: ["Architecture RFC", "Prototype", "Delivery plan"],
    },
    {
      step: "03",
      title: "Build",
      description:
        "Two-week increments, demoed every Friday, shipped behind flags. You see working software long before the deadline.",
      duration: "6–20 weeks",
      outputs: ["Production code", "Test suite", "Weekly demos"],
    },
    {
      step: "04",
      title: "Operate",
      description:
        "We run it with you, hand over the runbooks, and stay on call until your team is comfortable owning the rotation alone.",
      duration: "4–8 weeks",
      outputs: ["Runbooks", "SLO dashboards", "Handover"],
    },
  ],

  engagementModels: [
    {
      name: "Sprint Team",
      bestFor: "FOCUSED DELIVERY",
      description:
        "A cross-functional squad embedded in your workflow, delivering against a shared backlog in two-week increments.",
      includes: [
        "3–6 senior engineers",
        "Delivery lead and designer",
        "Weekly demo and written update",
        "Your tools, your repository",
      ],
      billing: "Monthly retainer",
      featured: true,
    },
    {
      name: "Fixed Scope",
      bestFor: "DEFINED OUTCOMES",
      description:
        "A single, tightly specified deliverable with an agreed price and date — ideal when the requirement is already clear.",
      includes: [
        "Written scope and acceptance criteria",
        "Fixed price and delivery date",
        "Two revision rounds included",
        "30-day warranty after handover",
      ],
      billing: "Fixed fee",
    },
    {
      name: "Advisory Retainer",
      bestFor: "IN-HOUSE TEAMS",
      description:
        "Ongoing senior input for a team that builds its own software but wants review, direction and a hand during hard weeks.",
      includes: [
        "Fortnightly architecture review",
        "Pull request and design feedback",
        "Incident escalation support",
        "Quarterly roadmap session",
      ],
      billing: "Monthly retainer",
    },
  ],

  techStack: [
    {
      group: "Frontend",
      items: ["Next.js (App Router)", "React & React Native", "TypeScript", "Tailwind CSS", "Playwright"],
    },
    {
      group: "Backend",
      items: ["Node.js & Go", "Python / FastAPI", "PostgreSQL", "Redis & Kafka", "gRPC / REST"],
    },
    {
      group: "Data & AI",
      items: ["dbt & DuckDB", "Snowflake / BigQuery", "PyTorch", "Vector search", "Evaluation harnesses"],
    },
    {
      group: "Platform",
      items: ["AWS, GCP, Azure", "Kubernetes", "Terraform", "GitHub Actions", "OpenTelemetry"],
    },
  ],

  faq: [
    {
      question: "Do you work with our existing engineers?",
      answer:
        "Almost always. Our teams join your repositories, your stand-ups and your review process. The goal is that your engineers can maintain everything we write without us in the room.",
    },
    {
      question: "Who owns the code and the IP?",
      answer:
        "You do, from the first commit. Work happens in your repository under your licence, with no vendor runtime, no hidden dependency on us, and full documentation at handover.",
    },
    {
      question: "How quickly can a team start?",
      answer:
        "Discovery usually begins within two weeks of a signed scope. A full delivery squad typically ramps within three to four weeks, depending on the specialisms required.",
    },
    {
      question: "What if the scope changes mid-project?",
      answer:
        "Scope changes are expected. On retainers we re-prioritise the backlog together each sprint; on fixed-scope work we quote the change as a clearly priced addendum before anyone starts building.",
    },
    {
      question: "Do you sign NDAs and work under our security policy?",
      answer:
        "Yes. We work under client NDAs, background-check our engineers, and can operate on managed hardware inside your own identity provider where your policy requires it.",
    },
  ],

  cta: {
    title: "Tell us what's blocking the roadmap.",
    description:
      "Send a short brief and we'll come back within two working days with an honest read on scope, risk and whether we're the right team for it.",
    actions: [
      { label: "Start a conversation", href: "/contact" },
      { label: "Read our articles", href: "/articles" },
    ],
  },
};