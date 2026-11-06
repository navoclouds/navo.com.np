import type { Action, Hero } from "@/lib/types";

export type WebsiteClient = {
  id: string;
  logo: string;
  name: string;
  description: string;
};

export type WebsiteService = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

export type WebsiteBenefit = {
  title: string;
  description: string;
};

export type DevelopmentStep = {
  number: string;
  title: string;
  description: string;
};

export type WebsitePlan = {
  name: string;
  subtitle: string;
  description: string;
  nprPrice: string;
  usdPrice: string;
  billing: string;
  features: string[];
  hosting: string;
  suitableFor: string;
  popular?: boolean;
  action: Action;
};

export type WebsiteFaq = {
  question: string;
  answer: string;
};

export type WebsiteDevelopmentContent = {
  hero: Hero;
  clients: {
    title: string;
    description: string;
    items: WebsiteClient[];
  };
  services: {
    title: string;
    description: string;
    items: WebsiteService[];
  };
  benefits: {
    tag: string;
    title: string;
    description: string;
    image: string;
    items: string[];
    imageAlt: string;
  };
  pricing: {
    title: string;
    description: string;
    note: string;
    items: WebsitePlan[];
  };
  customPricing: {
    title: string;
    description: string;
    action: {
      label: string;
      href: string;
    };
  };
  faqs: {
    title: string;
    description: string;
    items: WebsiteFaq[];
  };
};

export const websiteDevelopmentContent: WebsiteDevelopmentContent = {
  hero: {
    eyebrow: "WEBSITE DEVELOPMENT SERVICES",
    title: "Professional Website",
    accent: "Development in Nepal.",
    subtitle:
      "Build a professional online presence with responsive website design, custom web development and business-focused digital experiences. Navo Cloud Solutions develops websites that help businesses reach customers, showcase services and grow online.",
    bullets: [
      "Responsive Website Design",
      "Custom Website Development",
      "SEO-Friendly Foundations",
    ],
    actions: [
      {
        label: "Get a Website Quote",
        href: "/contact",
      },
      {
        label: "Explore Website Pricing",
        href: "#pricing",
      },
    ],
    meta: [
      { label: "Services", value: "Design & Development" },
      { label: "Websites", value: "Business & E-commerce" },
      { label: "Location", value: "Nepal" },
      { label: "Approach", value: "Custom-Built" },
    ],
    backgroundImage: "/about-banner.webp",
  },

  clients: {
    title: "Websites Developed for Businesses",
    description:
      "We work with businesses across different industries to create professional websites that communicate their services and support their online presence.",
    items: [
      {
        id: "taali-education",
        name: "TAALI Education",
        description: "Education and learning platform",
        logo: "/images/clients/taali.avif",
      },
      {
        id: "nepal-memorable",
        name: "Nepal Memorable Tours",
        description: "Travel and tourism website",
        logo: "/images/clients/nepalmemorable.avif",
      },
      {
        id: "sachitra-kitab",
        name: "Sachitra Kitab",
        description: "Children's books and publishing",
        logo: "/images/clients/sachitra.avif",
      },
    ],
  },

  services: {
    title: "Complete Website Design & Development Services",
    description:
      "From initial website planning and UI/UX design to development, testing and launch, we provide website development services that cover the essential needs of a business website.",
    items: [
      {
        category: "DESIGN",
        title: "Website UI/UX Design",
        description:
          "Create an intuitive and professional website experience with layouts designed around your business, audience and goals.",
        features: [
          "Website structure and page planning",
          "User interface (UI) design",
          "User experience (UX) improvements",
          "Brand-aligned layouts and visual design",
        ],
      },
      {
        category: "DEVELOPMENT",
        title: "Custom Website Development",
        description:
          "Get a professionally developed website tailored to your business requirements, content and desired functionality.",
        features: [
          "Business and corporate websites",
          "Responsive frontend development",
          "Custom website functionality",
          "Contact forms and integrations",
        ],
      },
      {
        category: "RESPONSIVE DESIGN",
        title: "Mobile-Friendly Website Development",
        description:
          "Make your website accessible and easy to use across mobile phones, tablets, laptops and desktop screens.",
        features: [
          "Mobile-first responsive layouts",
          "Cross-device compatibility",
          "Consistent user experience",
          "Touch-friendly navigation",
        ],
      },
      {
        category: "CONTENT MANAGEMENT",
        title: "CMS & Dynamic Websites",
        description:
          "Manage website content without editing code. We develop content management systems for businesses that regularly update their websites.",
        features: [
          "Custom admin dashboards",
          "Page and content management",
          "Blog and article publishing",
          "Image and media management",
        ],
      },
      {
        category: "E-COMMERCE",
        title: "E-commerce Website Development",
        description:
          "Take your business online with an e-commerce website that allows customers to browse products, place orders and interact with your store.",
        features: [
          "Product catalogue and categories",
          "Shopping cart and checkout",
          "Order management",
          "Payment gateway integration options",
        ],
      },
      {
        category: "SEARCH OPTIMIZATION",
        title: "Website SEO Setup",
        description:
          "Build a search-engine-friendly website with the technical and on-page SEO foundations needed to help search engines understand your content.",
        features: [
          "SEO-friendly page structure",
          "Page titles and meta descriptions",
          "XML sitemap and robots.txt setup",
          "Image optimization and descriptive alt text",
          "Basic technical SEO checks",
        ],
      },
      {
        category: "QUALITY ASSURANCE",
        title: "Website Testing & Optimization",
        description:
          "Check website functionality, usability and performance before launch to deliver a reliable experience across supported devices and browsers.",
        features: [
          "Functional and form testing",
          "Mobile and browser testing",
          "Page speed optimization",
          "Broken link and navigation checks",
        ],
      },
      {
        category: "ONGOING SUPPORT",
        title: "Website Maintenance & Support",
        description:
          "Keep your website updated and working with technical assistance, content updates and ongoing improvements.",
        features: [
          "Website updates and bug fixes",
          "Content and image updates",
          "Technical troubleshooting",
          "Backup and security support options",
        ],
      },
    ],
  },

  benefits: {
    tag: "BENEFITS OF WEBSITE",
    title: "Why Does Your Business Need a Professional Website?",
    description:
      "A professional business website strengthens your online presence, improves search engine visibility and helps potential customers discover your products and services.",
    image: "/images/additional/benefits.avif",
    items: [
      "Build business credibility with a professional online presence.",
      "Improve Google visibility with an SEO-friendly website.",
      "Showcase your products, services and business portfolio.",
      "Reach potential customers with a 24/7 business website.",
      "Generate more leads through website contact forms and enquiries.",
      "Support business growth with scalable web development solutions.",
    ],
    imageAlt: "",
  },

  pricing: {
    title: "Website Development Packages & Starting Prices",
    description:
      "Explore our website development starting prices for businesses in Nepal. Whether you need a simple business website, a dynamic website with content management or a complete e-commerce platform, we build solutions tailored to your requirements.",
    note: "All prices are starting estimates, not fixed package quotations. Final costs depend on the number of pages, design complexity, functionality, integrations and project requirements. Domain registration, premium third-party services, paid plugins, payment gateway charges and additional hosting requirements may cost extra. Custom website development is quoted separately after discussing your project.",
    items: [
      {
        name: "Static Website",
        subtitle: "A professional online presence",
        description:
          "A fast, responsive and professionally designed website for individuals, startups and small businesses that need to showcase their company, services and information online.",
        nprPrice: "NPR 18,000",
        usdPrice: "USD 135",
        billing: "One-time starting price",
        suitableFor:
          "Personal portfolios, startups, small businesses, local shops and service providers.",
        features: [
          "Up to 5 standard pages",
          "Custom responsive website design",
          "Business information and service sections",
          "Contact details and enquiry links",
          "Basic on-page SEO setup",
          "Mobile and desktop optimization",
          "Website testing before launch",
          "1 year of complimentary static hosting",
        ],
        hosting:
          "Static hosting is provided through a supported hosting platform. Domain registration is separate. You may also use your own compatible hosting account.",
        action: {
          label: "Discuss Static Website",
          href: "/contact",
        },
      },
      {
        name: "Dynamic Website",
        subtitle: "Interactive and scalable websites",
        description:
          "A dynamic website with database-driven functionality and flexible content management options, designed for businesses that need more than static information pages.",
        nprPrice: "NPR 45,000",
        usdPrice: "USD 340",
        billing: "One-time starting price",
        suitableFor:
          "Growing businesses, corporate websites, education providers, news platforms and organizations with regularly updated content.",
        features: [
          "Custom responsive UI/UX design",
          "Dynamic pages and database integration",
          "Contact and enquiry forms",
          "Custom website functionality",
          "CMS and admin dashboard options",
          "Blog and content publishing options",
          "Basic on-page and technical SEO",
          "Performance and browser testing",
          "Hosting options based on project requirements",
        ],
        hosting:
          "Hosting is provided according to the agreed project infrastructure and requirements. Navo-managed hosting can be included in the final quotation where applicable. Client-owned compatible hosting is also supported.",
        action: {
          label: "Discuss Dynamic Website",
          href: "/contact",
        },
      },
      {
        name: "E-commerce Website",
        subtitle: "Sell and manage products online",
        description:
          "A complete online shopping platform that allows customers to browse products, place orders and purchase through supported payment options while your business manages products and sales.",
        nprPrice: "NPR 85,000",
        usdPrice: "USD 640",
        billing: "One-time starting price",
        suitableFor:
          "Retail businesses, online stores, product brands, wholesalers and businesses expanding into online sales.",
        features: [
          "Custom responsive e-commerce design",
          "Product catalogue and categories",
          "Product details and management",
          "Shopping cart and checkout",
          "Order management dashboard",
          "Payment gateway integration options",
          "Basic e-commerce SEO setup",
          "Mobile and desktop optimization",
          "1 year of complimentary hosting",
        ],
        hosting:
          "One year of hosting on Navo-managed infrastructure is included for the agreed project scope. Alternatively, the website can be deployed to compatible client-owned hosting, with hosting charges paid separately.",
        action: {
          label: "Discuss E-commerce Website",
          href: "/contact",
        },
      },
    ],
  },

  customPricing: {
    title: "Need a Website Tailored to Your Requirements?",
    description:
      "Every website project is different. Whether you need a simple single-page website, a dynamic business website, a custom web application or a large-scale enterprise website, Navo Cloud Solutions provides tailored website development solutions based on your goals, functionality and project scope. Get a customized quotation for a website designed around your specific requirements.",
    action: {
      label: "Request a Custom Website Quote",
      href: "/contact",
    },
  },

  faqs: {
    title: "Website Development FAQs",
    description:
      "Answers to common questions about website design, development, pricing, hosting and search engine optimization.",
    items: [
      {
        question: "How much does website development cost in Nepal?",
        answer:
          "Website development prices depend on the website type, number of pages, design requirements and functionality. Our starting packages are NPR 18,000 for a static website, NPR 35,000 for a business website, NPR 55,000 for a CMS website and NPR 85,000 for an e-commerce website. The final quote depends on your specific requirements.",
      },
      {
        question: "How long does it take to develop a website?",
        answer:
          "A small static website may take around 1–2 weeks. A larger business or CMS website may take 2–5 weeks, while e-commerce and more complex projects can take longer. The timeline depends on the project scope, content availability, feedback and integrations.",
      },
      {
        question: "Will my website work on mobile phones?",
        answer:
          "Yes. Responsive website design is included in our website development packages. We build and test layouts for mobile phones, tablets and desktop screens.",
      },
      {
        question: "Is website hosting included in the price?",
        answer:
          "The listed packages include one year of complimentary hosting under the stated package conditions. Static websites can use supported static hosting platforms. Dynamic websites can be hosted on Navo-managed infrastructure or deployed to a compatible hosting account you own. Domain registration and paid third-party services are separate.",
      },
      {
        question: "Can I manage and update my website myself?",
        answer:
          "Yes, with a CMS website. We can provide a content management dashboard that allows authorized users to update supported website content, publish articles and manage images without directly editing the website code.",
      },
      {
        question: "Will my website appear on Google?",
        answer:
          "We implement essential SEO foundations such as page titles, meta descriptions, responsive layouts, sitemap configuration and search-friendly page structures. Search engine indexing and rankings depend on many factors, and no specific Google ranking can be guaranteed.",
      },
      {
        question: "Can you redesign my existing business website?",
        answer:
          "Yes. We can review your existing website and discuss a redesign involving its layout, user experience, responsiveness, performance, content structure and technical SEO. The cost depends on the current website and the required changes.",
      },
      {
        question: "Do I own my website after development?",
        answer:
          "Ownership, source-code handover, domain access and administrative credentials are agreed as part of the project scope. We discuss these details before development begins so both sides understand the handover arrangements.",
      },
      {
        question: "Can I request custom features not listed in the packages?",
        answer:
          "Yes. The packages are starting points, not limitations. Custom dashboards, booking systems, integrations, advanced e-commerce features and other functionality can be discussed and quoted separately.",
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer:
          "Yes. Website maintenance and ongoing support can be arranged separately depending on the website, update frequency and support requirements.",
      },
    ],
  },
};
