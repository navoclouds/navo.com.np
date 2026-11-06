import type { Hero } from "@/lib/types";

export type SoftwareClient = {
  id: string;
  logo: string;
  name: string;
  description: string;
};

export type SoftwareService = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

export type SoftwareBenefit = {
  title: string;
  description: string;
};

export type DevelopmentStep = {
  number: string;
  title: string;
  description: string;
};
export type SoftwareFaq = {
  question: string;
  answer: string;
};

export type SoftwareDevelopmentContent = {
  hero: Hero;
  services: {
    title: string;
    description: string;
    items: SoftwareService[];
  };
  benefits: {
    tag: string;
    title: string;
    description: string;
    image: string;
    items: string[];
    imageAlt: string;
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
    items: SoftwareFaq[];
  };
};

export const softwareDevelopmentContent: SoftwareDevelopmentContent = {
  hero: {
    eyebrow: "CUSTOM SOFTWARE DEVELOPMENT SERVICES",
    title: "Custom Software",
    accent: "Development in Nepal.",
    subtitle:
      "Looking for a reliable software development company in Nepal? Navo Cloud Solutions designs and develops custom business software, ERP systems, CRM applications, inventory management platforms and scalable web-based solutions. We turn your business requirements into practical software tailored to your workflows, operations and long-term goals.",
    bullets: [
      "Custom Business & Enterprise Software",
      "ERP, CRM & Management Systems",
      "Scalable Applications & Integrations",
    ],
    actions: [
      {
        label: "Discuss Your Software Project",
        href: "/contact",
      },
    ],
    meta: [
      {
        label: "Solutions",
        value: "Custom Business Software",
      },
      {
        label: "Applications",
        value: "Web-Based Systems",
      },
      {
        label: "Business Size",
        value: "Startups to Enterprises",
      },
      {
        label: "Location",
        value: "Nepal",
      },
    ],
    backgroundImage: "/about-banner.webp",
  },

  services: {
    title: "Custom Software Development & Business Solutions",
    description:
      "From business management applications and ERP systems to workflow automation and custom integrations, we develop software that simplifies operations, organizes business data and supports business growth. Every solution is planned around your specific requirements and operational processes.",
    items: [
      {
        category: "BUSINESS MANAGEMENT",
        title: "Business Management Software Development",
        description:
          "Simplify daily operations with custom business management software designed to organize your processes, manage resources and improve operational efficiency.",
        features: [
          "Custom business management modules",
          "Centralized business data and records",
          "Employee roles and access management",
          "Business analytics and reporting dashboards",
        ],
      },
      {
        category: "ERP & ENTERPRISE SYSTEMS",
        title: "ERP Software Development & Implementation",
        description:
          "Connect different business operations through customized ERP software. Manage essential business processes, departments and information within one integrated management system.",
        features: [
          "Inventory and resource management",
          "Sales, purchasing and order management",
          "Accounting and operational integrations",
          "Centralized enterprise data management",
        ],
      },
      {
        category: "INVENTORY & SALES",
        title: "Inventory, Sales & Order Management Systems",
        description:
          "Improve stock control and sales operations with custom inventory management software. Manage products, stock movements, customer orders and business transactions from one platform.",
        features: [
          "Product, category and stock management",
          "Stock-in, stock-out and inventory tracking",
          "Sales, billing and order management",
          "Inventory summaries and sales reports",
        ],
      },
      {
        category: "CRM & CUSTOMER MANAGEMENT",
        title: "Customer Relationship Management (CRM) Software",
        description:
          "Build stronger customer relationships with custom CRM software that helps businesses organize customer information, manage leads, track enquiries and streamline sales activities.",
        features: [
          "Customer profiles and contact management",
          "Lead and enquiry management",
          "Sales pipeline and follow-up tracking",
          "Customer activity and sales reporting",
        ],
      },
      {
        category: "CUSTOM WEB APPLICATIONS",
        title: "Custom Web Application Development",
        description:
          "Transform business ideas and manual processes into scalable web applications. We develop customized browser-based software, portals and platforms accessible across supported devices.",
        features: [
          "Custom web application interfaces",
          "Backend and database development",
          "User authentication and permissions",
          "Responsive and scalable application architecture",
        ],
      },
      {
        category: "WORKFLOW AUTOMATION",
        title: "Business Process Automation Software",
        description:
          "Reduce repetitive administrative tasks with business process automation solutions. Streamline approvals, notifications, data processing and everyday workflows through customized software.",
        features: [
          "Automated business workflows",
          "Approval and task management systems",
          "Automated notifications and reminders",
          "Third-party application integrations",
        ],
      },
      {
        category: "DASHBOARDS & SYSTEM INTEGRATION",
        title: "Custom Dashboards, API Development & Integration",
        description:
          "Connect business applications and visualize important operational information through custom dashboards and API integrations. Improve data accessibility and communication between different software systems.",
        features: [
          "Custom admin dashboards and reporting",
          "REST API development and integration",
          "Third-party software connectivity",
          "Data synchronization and export solutions",
        ],
      },
      {
        category: "MAINTENANCE & TECHNICAL SUPPORT",
        title: "Software Maintenance & Application Support",
        description:
          "Maintain the reliability and performance of your business applications with ongoing software maintenance, technical troubleshooting and feature improvements as your business evolves.",
        features: [
          "Software bug fixes and troubleshooting",
          "Performance and application optimization",
          "Security and dependency updates",
          "New features and system enhancements",
        ],
      },
    ],
  },

  benefits: {
    tag: "BENEFITS OF CUSTOM SOFTWARE",
    title: "Why Invest in Custom Software Development for Your Business?",
    description:
      "Every business has different operational requirements. Custom software development provides purpose-built applications that help businesses automate processes, manage information and improve productivity without relying entirely on generic software solutions.",
    image: "/images/additional/benefits.avif",
    items: [
      "Automate repetitive business operations and reduce manual workloads.",
      "Centralize business information with customized management systems.",
      "Improve inventory, sales and customer data management.",
      "Make informed decisions using real-time dashboards and business reports.",
      "Protect business information with user roles and access permissions.",
      "Integrate existing applications and third-party business tools.",
      "Scale software functionality as your business requirements grow.",
    ],
    imageAlt:
      "Custom business software development with an integrated management dashboard",
  },

  customPricing: {
    title: "Custom Software Solutions for Every Business",
    description:
      "Whether you are a startup, small business, growing company or established enterprise, we develop software tailored to your requirements and budget. From simple business management applications and inventory systems to complex ERP platforms, SaaS products and enterprise software, every project receives a customized quotation based on its features, complexity and development scope.",
    action: {
      label: "Request a Custom Quotation",
      href: "/contact",
    },
  },

  faqs: {
    title: "Custom Software Development FAQs",
    description:
      "Find answers to common questions about custom software development, ERP systems, business applications, project costs, integrations and software development services in Nepal.",
    items: [
      {
        question: "What is custom software development?",
        answer:
          "Custom software development is the process of designing and building software applications specifically for a business's requirements. These solutions can include ERP systems, CRM platforms, inventory management software, booking systems, business dashboards and custom web applications.",
      },
      {
        question: "How much does custom software development cost in Nepal?",
        answer:
          "Custom software development costs depend on project complexity, features, database requirements, integrations, user roles and development time. At Navo Cloud Solutions, we provide customized quotations after understanding your business requirements. Contact our team to discuss your project and receive an estimated development cost.",
      },
      {
        question: "What types of business software can you develop?",
        answer:
          "We develop custom business management software, ERP systems, CRM applications, inventory and sales management platforms, order management systems, booking applications, administrative dashboards, workflow automation tools and other business-specific software solutions.",
      },
      {
        question: "Do you develop software for startups and small businesses?",
        answer:
          "Yes. We develop software solutions for startups, small businesses, growing companies and established enterprises. Whether you need a simple management application or a complex multi-module business system, we can plan the development around your requirements and available budget.",
      },
      {
        question: "Can you develop ERP and CRM software for my business?",
        answer:
          "Yes. We can develop customized ERP and CRM software to help manage business operations, inventory, sales, purchasing, customer relationships and other organizational processes. Features and modules are selected according to your actual business requirements.",
      },
      {
        question:
          "Can custom business software integrate with existing applications?",
        answer:
          "Yes. We can integrate custom software with existing websites, databases, payment services and third-party applications where suitable APIs or integration methods are available. Integration requirements are evaluated before development begins.",
      },
      {
        question: "Can I access custom software from mobile phones?",
        answer:
          "Yes. Browser-based software can be developed with responsive interfaces for mobile phones, tablets and desktop computers. If you require an installable Android or iOS application, we can plan it as a separate mobile application development project.",
      },
      {
        question: "How long does it take to develop custom software?",
        answer:
          "Development timelines depend on the application's complexity, number of features, integrations and testing requirements. Smaller business applications may take several weeks, while larger ERP platforms and enterprise systems can require several months. A more accurate timeline is provided after reviewing the project scope.",
      },
      {
        question: "Will I receive source code and administrative access?",
        answer:
          "Source-code ownership, repository access, administrative credentials, technical documentation and deployment handover are agreed upon in the project scope. We clarify these arrangements before development begins.",
      },
      {
        question: "Do you provide software maintenance and future upgrades?",
        answer:
          "Yes. We can provide ongoing software maintenance, technical support, bug fixes, performance improvements and additional feature development. Maintenance arrangements and associated costs are agreed upon separately based on your requirements.",
      },
    ],
  },
};
