import type { CtaBand, Hero, Office, Stat } from "@/lib/types";

export type Value = {
  title: string;
  description: string;
};

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
  link?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type AboutContent = {
  hero: Hero;
  mission: {
    title: string;
    body: string[];
    image: string;
    imageAlt: string;
  };
  stats: Stat[];
  values: Value[];
  timeline: TimelineEntry[];
  team: TeamMember[];
  testimonials: Testimonial[];
  offices: Office[];
  cta: CtaBand;
};

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "ABOUT NAVO CLOUD SOLUTIONS",
    title: "Tech Company",
    accent: "in Nepal.",
    subtitle:
      "Navo Cloud Solutions Pvt Ltd is a Nepal-based software development company building professional websites, custom software, mobile applications and AI-powered solutions for businesses.",
    bullets: [
      "Founded in 2025",
      "Based in Kathmandu, Nepal",
      "Built in Nepal. Designed for the World.",
    ],
    actions: [
      {
        label: "Start a Project",
        href: "/contact",
      },
      {
        label: "Explore Business Solutions",
        href: "/business-solutions",
      },
    ],
    meta: [
      { label: "Founded", value: "2025" },
      { label: "Founding Team", value: "2 Co-founders" },
      { label: "Clients", value: "3" },
      { label: "Headquarters", value: "Kathmandu, Nepal" },
    ],
    backgroundImage: "/about-banner.webp",
  },

  mission: {
    title: "Building useful technology for businesses.",
    body: [
      "Navo Cloud Solutions Pvt Ltd builds digital solutions that help businesses establish their online presence, improve operations and adapt to changing technology.",
      "From professional websites and custom software to mobile applications and AI-powered products, we focus on practical solutions designed around real business needs.",
      "Based in Kathmandu, Nepal, we are building with a global perspective: Built in Nepal. Designed for the World.",
    ],
    image: "/images/about/home-about.avif",
    imageAlt: "Navo Cloud Solutions Workspace",
  },
  stats: [
    {
      value: "2025",
      label: "Year Founded",
    },
    {
      value: "2",
      label: "Co-founders",
    },
    {
      value: "3",
      label: "Clients Worked With",
    },
    {
      value: "2",
      label: "In-house Product Initiatives",
    },
  ],

  values: [
    {
      title: "Technology with a Purpose",
      description:
        "We focus on building technology that addresses practical needs rather than adding complexity without a clear purpose.",
    },
    {
      title: "Business Growth First",
      description:
        "We consider the goals and everyday challenges of businesses when planning and developing digital solutions.",
    },
    {
      title: "Build, Learn and Improve",
      description:
        "We believe good software comes from continuous learning, thoughtful development and consistent improvement.",
    },
    {
      title: "Think Beyond Boundaries",
      description:
        "Although we are based in Nepal, we approach technology with a broader perspective and global ambitions.",
    },
    {
      title: "Practical Innovation",
      description:
        "We explore modern technologies, including artificial intelligence, with an emphasis on useful applications.",
    },
    {
      title: "Long-Term Vision",
      description:
        "We aim to develop reliable digital solutions and technology products that can evolve with changing needs.",
    },
  ],

  timeline: [
    {
      year: "2025",
      title: "The Beginning of Navo Cloud Solutions",
      description:
        "Navo Cloud Solutions Pvt Ltd was established in Nepal with the ambition of developing websites, software and digital solutions that help businesses make better use of technology.",
    },
  ],

  team: [
    {
      name: "Tika Datta Gautam",
      role: "Founder, CEO & Director",
      focus:
        "Company leadership, software development, AI initiatives, product strategy and research.",
      image: "/images/team/tika.avif",
      link: "https://tikadatta.com.np",
    },
    {
      name: "Prabesh Lamichhane",
      role: "Co-Founder & CTO",
      focus:
        "Technical direction, software architecture, engineering practices and technology development.",
      image: "/images/team/prabesh.avif",
      link: "https://prabeshlamichhane2004.com.np",
    },
  ],

  testimonials: [],

  offices: [
    {
      city: "Kathmandu",
      country: "Nepal",
      address: "Naxal, Kathmandu, Bagmati Province, Nepal",
      timezone: "GMT+5:45",
      email: "info@navo.com.np",
      phone: "+977 9851430510",
    },
  ],

  cta: {
    title: "Let's build something that moves your business forward.",
    description:
      "Whether you need a professional website, custom software, a mobile application or an AI-powered solution, Navo Cloud Solutions can help turn your requirements into a practical digital product.",
    actions: [
      {
        label: "Discuss Your Project",
        href: "/contact",
      },
      {
        label: "Explore Our Services",
        href: "/website-development",
      },
    ],
  },
};
