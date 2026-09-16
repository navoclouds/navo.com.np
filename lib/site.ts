export const siteConfig = {
  name: "Navo Cloud Solution",
  shortName: "NAVO",
  /** No trailing slash. Override per-environment with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://navo.com.np").replace(/\/$/, ""),
  locale: "en_US",
  lang: "en",
  description:
    "From AI-powered systems and automation to responsive web applications and custom software, NAVO builds reliable technology tailored to the way your business works.",
  tagline: "Building Software, Apps, and Websites",
  logo: "/Logo.webp",
  ogImage: "/og-image.png",
  email: "info@navo.com",
  phone: "+977 9876543210",
  address: {
    street: "Jhamsikhel Road",
    city: "Kathmandu",
    region: "Bagmati",
    postalCode: "44700",
    country: "NP",
  },
  founded: "2019",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/",
  },
  twitterHandle: "@navocloud",
} as const;

export type NavLink = { name: string; href: string; title: string };

export const navLinks: NavLink[] = [
  { name: "Home", href: "/", title: "Navo Cloud Solution home" },
  { name: "Services", href: "/services", title: "Software engineering services" },
  { name: "Products", href: "/products", title: "Products we build" },
  { name: "Articles", href: "/articles", title: "Technical articles and reports" },
  { name: "About Us", href: "/about-us", title: "About Navo Cloud Solution" },
];

export const serviceLinks: NavLink[] = [
  { name: "Website Development", href: "/services#website-development", title: "Website development" },
  { name: "Custom AI Development", href: "/services#custom-ai-development", title: "Custom AI development" },
  { name: "Desktop Software Development", href: "/services#desktop-software-development", title: "Desktop software development" },
  { name: "AI Integration", href: "/services#ai-integration", title: "AI integration" },
  { name: "Mobile Application Development", href: "/services#mobile-application-development", title: "Mobile application development" },
  { name: "Business Tools And Platforms", href: "/services#business-tools-and-platforms", title: "Business tools and platforms" },
];

/** Every indexable route, used by app/sitemap.ts. */
export const routes: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;