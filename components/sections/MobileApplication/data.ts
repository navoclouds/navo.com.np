import type { Action, Hero } from "@/lib/types";

export type MobileService = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

export type MobilePlan = {
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

export type MobileFaq = {
  question: string;
  answer: string;
};

export type MobileApplicationContent = {
  hero: Hero;
  services: {
    title: string;
    description: string;
    items: MobileService[];
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
    items: MobilePlan[];
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
    items: MobileFaq[];
  };
};

export const mobileApplicationContent: MobileApplicationContent = {
  hero: {
    eyebrow: "Mobile Application Development",
    title: "Mobile App Development Company",
    accent: "in Nepal",
    subtitle:
      "Build powerful Android and iOS applications with Navo Cloud. We provide custom mobile app development in Nepal, from business applications and e-commerce apps to advanced platforms with integrated backend systems and real-time functionality.",
    bullets: [
      "Android & iOS App Development",
      "Cross-Platform Mobile Applications",
      "Custom Backend & API Integration",
    ],
    actions: [
      {
        label: "Discuss Your App Idea",
        href: "/contact",
      },
      {
        label: "Explore App Pricing",
        href: "#pricing",
      },
    ],
    meta: [
      {
        label: "Platforms",
        value: "Android & iOS",
      },
      {
        label: "Development",
        value: "Custom Mobile Apps",
      },
      {
        label: "Solutions",
        value: "Business & Consumer Apps",
      },
    ],
    backgroundImage: "/about-banner.webp",
  },

  services: {
    title: "Mobile Application Development Services",
    description:
      "From simple business applications to feature-rich mobile platforms, we develop Android and iOS applications with intuitive interfaces, reliable backend systems and functionality tailored to your business requirements.",
    items: [
      {
        category: "Android Development",
        title: "Android Application Development",
        description:
          "Build Android applications designed for your users and business operations. We develop mobile experiences with practical functionality, intuitive navigation and reliable application architecture.",
        features: [
          "Custom Android application development",
          "User registration and authentication",
          "Business and service applications",
          "Backend and database integration",
        ],
      },
      {
        category: "iOS Development",
        title: "iOS Application Development",
        description:
          "Develop applications for Apple devices with platform-appropriate interfaces, smooth user experiences and integrations that support your business requirements.",
        features: [
          "Custom iOS application development",
          "iPhone application interfaces",
          "API and backend integration",
          "Application testing and deployment",
        ],
      },
      {
        category: "Cross-Platform Apps",
        title: "Cross-Platform Mobile App Development",
        description:
          "Build applications for Android and iOS using a shared development approach. Cross-platform development can reduce duplicated development effort while maintaining a consistent experience across devices.",
        features: [
          "Android and iOS app development",
          "Shared application functionality",
          "Consistent user experience",
          "Backend and third-party integrations",
        ],
      },
      {
        category: "Backend & Integration",
        title: "Mobile Backend & API Integration",
        description:
          "Connect mobile applications with the systems that power them. We develop or integrate backend services, databases and APIs to support user accounts, business operations and application data.",
        features: [
          "Custom backend development",
          "Database and API integration",
          "Authentication and user management",
          "Third-party service integration",
        ],
      },
    ],
  },

  benefits: {
    tag: "Why Choose Navo Cloud Solutions",
    title: "Mobile Applications Designed Around Your Business",
    description:
      "A successful mobile application needs more than an attractive interface. We focus on application usability, dependable backend functionality and maintainable architecture to build mobile solutions that support your business as it grows.",
    image: "/images/additional/benefits.avif",
    imageAlt:
      "Custom Android and iOS mobile application development by Navo Cloud Solutions",
    items: [
      "Business-focused mobile application development",
      "Android and iOS platform support",
      "Intuitive UI/UX and mobile-first interfaces",
      "Integrated backend, database and API development",
      "Secure authentication and user management",
      "Third-party service and payment integrations",
      "Application testing and deployment support",
      "Maintainable architecture for future improvements",
    ],
  },

  pricing: {
    title: "Mobile App Development Packages & Starting Prices",
    description:
      "Choose a mobile application package based on your required functionality and project complexity. Each package has a defined starting scope, covering everything from focused Android applications to advanced cross-platform business platforms.",
    note: "Prices are starting estimates for the stated project scope, not fixed prices for unlimited features. Additional screens, complex workflows, platform requirements, integrations and specialized functionality may increase the final quotation. Hosting, third-party services, developer accounts and ongoing maintenance are generally charged separately.",
    items: [
      {
        name: "Basic Mobile App",
        subtitle: "Focused Android Applications",
        description:
          "A straightforward Android application for businesses that need to present information, showcase services or provide a limited set of useful features.",
        nprPrice: "75,000",
        usdPrice: "575",
        billing: "One-time",
        features: [
          "Android application development",
          "Up to 6 standard app screens",
          "Custom mobile UI/UX design",
          "Basic navigation and user interface",
          "One primary user type",
          "Contact forms and basic submissions",
          "Backend, API and database for agreed dynamic features",
          "Basic application testing and deployment support",
        ],
        hosting:
          "Backend hosting, domain, third-party services and Google Play developer account fees are separate.",
        suitableFor:
          "Startups, small businesses, company applications, informational apps and simple service applications.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
      {
        name: "Business Mobile App",
        subtitle: "Complete Business Applications",
        description:
          "A functional cross-platform application for businesses that need user accounts, data management and complete workflows such as bookings, orders or customer services.",
        nprPrice: "180,000",
        usdPrice: "1,375",
        billing: "One-time",
        popular: true,
        features: [
          "Cross-platform Android and iOS development",
          "Up to 12 standard app screens",
          "Custom UI/UX design",
          "User registration, login and profiles",
          "Up to 2 user roles",
          "Backend, API and database development",
          "One primary business workflow",
          "Order, booking or service management",
          "Push notification integration",
          "One standard third-party integration",
          "Basic admin management interface",
          "Application testing and deployment support",
        ],
        hosting:
          "Backend hosting, payment gateway charges, third-party service fees and app store developer account fees are separate.",
        suitableFor:
          "E-commerce applications, restaurant apps, booking platforms, customer portals and business service applications.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
      {
        name: "Advanced Mobile App",
        subtitle: "Multi-Module & Feature-Rich Applications",
        description:
          "A more complex mobile application for businesses that require multiple interconnected modules, advanced user roles and specialized application functionality.",
        nprPrice: "350,000",
        usdPrice: "2,675",
        billing: "One-time",
        features: [
          "Cross-platform Android and iOS development",
          "Up to 20 standard app screens",
          "Advanced UI/UX and application architecture",
          "Multiple user roles and permissions",
          "Up to 3 major application modules",
          "Custom backend, APIs and database architecture",
          "Real-time data synchronization where required",
          "Selected GPS, location or map functionality",
          "Selected chat, messaging or notification features",
          "Multiple third-party integrations",
          "Advanced admin dashboard integration",
          "Performance, security and application testing",
          "Deployment and technical handover",
        ],
        hosting:
          "Cloud infrastructure, maps, messaging, payment gateway charges, third-party services and app store developer account fees are separate.",
        suitableFor:
          "Delivery platforms, logistics applications, marketplaces, multi-role business platforms and complex service applications.",
        action: {
          label: "Get Started",
          href: "/contact",
        },
      },
    ],
  },

  customPricing: {
    title: "Need a Custom Mobile App for Your Business?",
    description:
      "Every business has different requirements. Whether you are a startup planning your first mobile application, an established company digitizing operations or an enterprise building a specialized platform, we can scope a solution around your goals. From e-commerce and delivery platforms to fintech, healthcare, IoT-connected and AI-powered applications, contact us for a project assessment and a tailored development quotation.",
    action: {
      label: "Discuss a Custom Mobile App",
      href: "/contact",
    },
  },

  faqs: {
    title: "Frequently Asked Questions About Mobile App Development",
    description:
      "Learn more about Android and iOS app development, cross-platform applications, pricing, backend integration and the mobile app development process at Navo Cloud.",
    items: [
      {
        question: "How much does mobile app development cost in Nepal?",
        answer:
          "Mobile app development costs depend on the number of screens, application features, supported platforms, backend complexity and integrations. Our starting packages are NPR 75,000 for Basic Android applications, NPR 180,000 for Business cross-platform applications and NPR 350,000 for Advanced applications. Larger or specialized projects receive custom quotations.",
      },
      {
        question: "Do you develop both Android and iOS applications?",
        answer:
          "Yes. We develop Android and iOS applications. Depending on project requirements, we can use a cross-platform approach or a platform-specific development approach. The supported platforms are confirmed during project scoping.",
      },
      {
        question:
          "What is the difference between native and cross-platform app development?",
        answer:
          "Native development builds an application specifically for a platform such as Android or iOS. Cross-platform development uses a shared codebase to support multiple platforms. The best approach depends on functionality, performance requirements, budget and long-term maintenance.",
      },
      {
        question: "Does mobile app development include a backend and database?",
        answer:
          "When an application requires dynamic data, user accounts or business functionality, its backend, APIs and database are included according to the agreed project scope. Simple informational applications may not require a custom backend.",
      },
      {
        question:
          "Can you integrate payment gateways into mobile applications?",
        answer:
          "Yes. We can integrate supported payment gateways into mobile applications. Integration availability, provider requirements, transaction fees and implementation complexity depend on the selected payment service.",
      },
      {
        question: "Can you build an admin dashboard for a mobile application?",
        answer:
          "Yes. We can develop or integrate an admin dashboard to manage users, products, bookings, orders and other application data. Dashboard complexity and functionality are included according to the project scope.",
      },
      {
        question: "Are app store publishing and hosting included in the price?",
        answer:
          "Application build and deployment support are included according to the selected package. Google Play and Apple App Store developer account fees, backend hosting, domains and third-party service charges are generally separate expenses.",
      },
      {
        question:
          "Can you add more features after the application is launched?",
        answer:
          "Yes. Applications can be extended with additional modules, integrations and functionality. New requirements are assessed separately and quoted based on the development effort involved.",
      },
      {
        question: "Do you provide mobile app maintenance and updates?",
        answer:
          "Yes. We can provide ongoing technical support, bug fixes, compatibility updates and feature improvements. Maintenance arrangements can be discussed and quoted separately based on the application and support requirements.",
      },
      {
        question: "Can you develop a mobile app specifically for my industry?",
        answer:
          "Yes. We develop custom mobile applications for different industries and business models, including retail, restaurants, logistics, education, healthcare and service businesses. Requirements are assessed before recommending an appropriate development approach.",
      },
    ],
  },
};
