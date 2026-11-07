export const siteConfig = {
  name: "Navo Cloud Solutions",
  shortName: "NAVO",

  /** No trailing slash. Override per-environment with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://navo.com.np").replace(
    /\/$/,
    "",
  ),

  locale: "en_US",
  lang: "en",

  description:
    "Navo Cloud Solutions is a Nepal-based software company building websites, custom software, mobile apps and AI solutions for businesses in Nepal and worldwide.",

  tagline: "Software, Websites, Applications & AI Solutions",

  logo: "/Logo.webp",
  ogImage: "/images/opengraph/main_og.jpg",

  email: ["info@navo.com.np", "navoclouds@gmail.com"],
  phone: ["+977 9851430510", "+977 9829077624"],

  address: {
    street: "Naxal",
    city: "Kathmandu",
    region: "Bagmati",
    postalCode: "44600",
    country: "NP",
  },

  founded: "2025",

  social: {
    instagram: "https://instagram.com/navoclouds",
    facebook: "https://facebook.com/navoclouds",
    twitter: "https://x.com/navoclouds",
    linkedin: "https://linkedin.com/company/navo-cloud-solutions",
  },

  twitterHandle: "@navoclouds",
} as const;

export type NavLink = {
  name: string;
  href: string;
  title: string;
};

export const navLinks: NavLink[] = [
  {
    name: "Website",
    href: "/website-development",
    title: "Website Design and Development in Nepal",
  },
  {
    name: "Software",
    href: "/software-development",
    title: "Custom Software Development in Nepal",
  },
  {
    name: "Artificial Intelligence",
    href: "/ai-development-and-integration",
    title: "AI Development and Integration in Nepal",
  },
  {
    name: "Application",
    href: "/mobile-application-development",
    title: "Mobile App Development in Nepal",
  },
  {
    name: "Solutions",
    href: "/business-solutions",
    title: "Business Software and Digital Solutions",
  },
];

export const companyLink: NavLink[] = [
  {
    name: "About Navo",
    href: "/about-navo-cloud-solutions",
    title: "About Navo Cloud Solutions - Software Development Company in Nepal",
  },
  {
    name: "Research & Insights",
    href: "/research-and-insights",
    title: "Research and Technical Insights on Software Development",
  },
];

/** Every indexable route, used by app/sitemap.ts. */
export const routes: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  {
    path: "/website-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/software-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/ai-development-and-integration",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/mobile-application-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/business-solutions",
    changeFrequency: "monthly",
    priority: 0.9,
  },

  {
    path: "/about-navo-cloud-solutions",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/research-and-insights",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/terms-and-conditions",
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export const serviceLinks: NavLink[] = [
  {
    name: "Website Development",
    href: "/website-development",
    title: "Professional Website Design and Development",
  },
  {
    name: "Software Development",
    href: "/software-development",
    title: "Custom Business Software Development",
  },
  {
    name: "Artificial Intelligence",
    href: "/ai-development-and-integration",
    title: "Custom AI Development and Integration",
  },
  {
    name: "Mobile Application Development",
    href: "/mobile-application-development",
    title: "Mobile Application Design and Development",
  },
];

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
