import type { CtaBand, Faq, Hero, Stat } from "@/lib/types";

export type Product = {
  id: string;
  name: string;
  category: string;
  status: string;
  statusClass: string;
  summary: string;
  features: string[];
  metrics: Stat[];
  tech: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export type Comparison = {
  title: string;
  description: string;
  columns: string[];
  rows: { feature: string; values: string[] }[];
};

export type ProductsContent = {
  hero: Hero;
  stats: Stat[];
  products: Product[];
  // comparison: Comparison;
  faq: Faq[];
  cta: CtaBand;
};

export const productsContent: ProductsContent = {
  hero: {
    eyebrow: "PRODUCTS",
    title: "Products we're",
    accent: "building.",
    subtitle:
      "A portfolio of engineered solutions designed to solve complex operational, analytical and financial challenges — built in-house, running in production, shipped on a weekly cadence.",
    bullets: [
      "Self-hosted or cloud",
      "Open REST & GraphQL APIs",
      "SOC 2 aligned",
    ],
    actions: [
      { label: "Book a demo", href: "/contact" },
      { label: "Read the articles", href: "/articles" },
    ],
    meta: [
      { label: "Products live", value: "2 shipped" },
      { label: "In development", value: "1 private beta" },
      { label: "Uptime (12 mo)", value: "99.98%" },
      { label: "Release cadence", value: "Weekly" },
    ],
  },

  stats: [
    {
      value: "1.4B",
      label: "Events processed monthly",
      caption: "Across all production tenants.",
    },
    {
      value: "42ms",
      label: "Median API response",
      caption: "p50 measured at the edge.",
    },
    {
      value: "99.98%",
      label: "Rolling 12-month uptime",
      caption: "Independently monitored.",
    },
    {
      value: "38",
      label: "Enterprise deployments",
      caption: "In 11 countries.",
    },
  ],

  products: [
    {
      id: "InventoryIQ",
      name: "InventoryIQ",
      category: "SUPPLY CHAIN / OPS",
      status: "Live",
      statusClass: "bg-cyan-100 text-cyan-700",
      summary:
        "An enterprise inventory management system with intelligent automation for stock tracking, replenishment and warehouse operations across distributed locations. Built for high-throughput environments requiring strict compliance and auditability.",
      features: [
        "Automated reorder points and replenishment triggers.",
        "Real-time stock monitoring and analytics.",
        "Enterprise-grade RBAC and compliance logging.",
        "Multi-warehouse sync with barcode/RFID integration.",
      ],
      metrics: [
        { value: "120k", label: "Inventory transactions per day" },
        { value: "-61%", label: "Manual stock handling removed" },
        { value: "4 min", label: "Median time to recover" },
      ],
      tech: [
        "TypeScript",
        "Temporal",
        "PostgreSQL",
        "Kubernetes",
        "OpenTelemetry",
      ],
      image: "/IMS.webp",
      imageAlt:
        "InventoryIQ dashboard showing real-time stock levels across warehouses",
      cta: {
        label: "Explore InventoryIQ",
        href: "/contact?product=inventoryiq",
      },
    },
    // {
    //   id: "insightai",
    //   name: "InsightAI",
    //   category: "ANALYTICS / BI",
    //   status: "Live",
    //   statusClass: "bg-cyan-100 text-cyan-700",
    //   summary:
    //     "A predictive analytics engine that turns raw telemetry and structured data into decisions people act on. Proprietary models forecast trends and surface operational anomalies before they cost anything.",
    //   features: [
    //     "Automated anomaly detection algorithms.",
    //     "Natural language querying across complex datasets.",
    //     "Customisable, headless BI reporting pipelines.",
    //     "Model lineage and drift monitoring included.",
    //   ],
    //   metrics: [
    //     { value: "94%", label: "Anomaly precision" },
    //     { value: "17x", label: "Faster reporting cycles" },
    //     { value: "260+", label: "Connected data sources" },
    //   ],
    //   tech: ["Python", "DuckDB", "dbt", "PyTorch", "Next.js"],
    //   image: "",
    //   imageAlt:
    //     "InsightAI analytics dashboard with area charts and anomaly markers",
    //   cta: { label: "Explore InsightAI", href: "/contact?product=insightai" },
    // },
    // {
    //   id: "paygrid",
    //   name: "PayGrid",
    //   category: "PAYMENTS",
    //   status: "In Dev",
    //   statusClass: "bg-pink-100 text-pink-700",
    //   summary:
    //     "A developer-first payments infrastructure layer. Consolidates global gateways, manages complex ledgering and automates high-volume reconciliation for marketplace platforms.",
    //   features: [
    //     "Unified API for global gateway aggregation.",
    //     "Immutable ledgering for high-fidelity auditing.",
    //     "Automated cross-border settlement logic.",
    //     "Idempotent webhooks with replay protection.",
    //   ],
    //   metrics: [
    //     { value: "Q3", label: "Public beta target" },
    //     { value: "9", label: "Gateways integrated" },
    //     { value: "14", label: "Design partners" },
    //   ],
    //   tech: ["Go", "gRPC", "Kafka", "CockroachDB", "Terraform"],
    //   image: "",
    //   imageAlt:
    //     "PayGrid payments network visualisation with interconnected routing nodes",
    //   cta: { label: "Join the waitlist", href: "/contact?product=paygrid" },
    // },
  ],

  // comparison: {
  //   title: "Which product fits your stack?",
  //   description:
  //     "Every product shares the same identity layer, audit trail and deployment model, so they run independently or together.",
  //   columns: ["FlowDesk", "InsightAI", "PayGrid"],
  //   rows: [
  //     {
  //       feature: "Availability",
  //       values: [
  //         "General availability",
  //         "General availability",
  //         "Private beta",
  //       ],
  //     },
  //     { feature: "Self-hosted deployment", values: ["Yes", "Yes", "—"] },
  //     { feature: "SSO / SCIM provisioning", values: ["Yes", "Yes", "Yes"] },
  //     {
  //       feature: "Audit log retention",
  //       values: ["7 years", "3 years", "10 years"],
  //     },
  //     {
  //       feature: "Public API",
  //       values: ["REST + GraphQL", "REST", "REST + gRPC"],
  //     },
  //     {
  //       feature: "Data residency",
  //       values: ["EU, US, APAC", "EU, US", "EU, US"],
  //     },
  //     { feature: "Support SLA", values: ["99.9%", "99.9%", "Best effort"] },
  //   ],
  // },

  faq: [
    {
      question: "Can we run these products inside our own cloud account?",
      answer:
        "Yes. InventoryIQ ship as Helm charts and Terraform modules that deploy into your own VPC on AWS, GCP or Azure. You keep the data plane; we operate the control plane only if you want us to.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is a base per workspace plus a usage component inventory transactions for InventoryIQ. There is no per-seat fee, so adding viewers or auditors costs nothing.",
    },
    {
      question: "What happens to our data if we leave?",
      answer:
        "Every product has a documented export path. You can pull all raw records, definitions and audit logs through the API or a one-click archive, in open formats, without contacting support.",
    },
    {
      question: "Do you offer implementation support?",
      answer:
        "Yes. Enterprise plans include a named solutions engineer for the first 90 days, plus migration tooling for the most common systems already in place.",
    },
  ],

  cta: {
    title: "See the products running on your own data.",
    description:
      "We run a 45-minute working session using a sample of your data, then hand back a short written read on fit, effort and expected impact. No pitch deck.",
    actions: [
      { label: "Book a demo", href: "/contact" },
      { label: "Talk to engineering", href: "/contact?team=engineering" },
    ],
  },
};
