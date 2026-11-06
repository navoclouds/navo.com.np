import type { CtaBand, Faq, Hero } from "@/lib/types";

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export type SelectField = {
  id: string;
  label: string;
  options: string[];
};

export type Expectation = {
  step: string;
  title: string;
  description: string;
};

export type ContactContent = {
  hero: Hero;
  form: {
    title: string;
    description: string;
    projectTypes: SelectField;
    budgets: SelectField;
    timelines: SelectField;
    consentLabel: string;
    submitLabel: string;
    successTitle: string;
    successBody: string;
    note: string;
  };
  channels: ContactChannel[];
  expectations: Expectation[];
  faq: Faq[];
  cta: CtaBand;
};

export const contactContent: ContactContent = {
  hero: {
    eyebrow: "CONTACT NAVO CLOUD SOLUTIONS",
    title: "Let's Build",
    accent: "Something Great.",
    subtitle:
      "Looking for a software development company in Nepal? Discuss your website, custom software, AI development or mobile app project with our team.",
    bullets: [
      "Website & Custom Software Development",
      "AI Development & Integration",
      "Mobile App & Business Solutions",
    ],
    meta: [
      {
        label: "Response Time",
        value: "Within 2 Working Days",
      },
      {
        label: "Consultation",
        value: "Project Discussion",
      },
      {
        label: "Location",
        value: "Kathmandu, Nepal",
      },
      {
        label: "Languages",
        value: "English & Nepali",
      },
    ],
    backgroundImage: "contact-banner.webp",
  },

  form: {
    title: "Discuss Your Project With Our Team",
    description:
      "Tell us about your business, project requirements or technical challenges. Our team will review your enquiry and help identify the right development approach.",

    projectTypes: {
      id: "projectType",
      label: "What service are you looking for?",
      options: [
        "Website Development",
        "Custom Software Development",
        "AI Development & Integration",
        "Machine Learning Solutions",
        "Computer Vision Development",
        "Mobile App Development",
        "Business Software & SaaS",
        "Existing System Improvement",
        "Other Enquiries",
      ],
    },

    budgets: {
      id: "budget",
      label: "Estimated Project Budget",
      options: [
        "Under $25k",
        "$25k – $50k",
        "$50k – $150k",
        "$150k+",
        "Not sure yet",
      ],
    },

    timelines: {
      id: "timeline",
      label: "When are you planning to start?",
      options: [
        "As soon as possible",
        "Within a month",
        "Within 3 months",
        "Within 6 months",
        "Just exploring",
      ],
    },

    consentLabel:
      "I agree to be contacted by Navo Cloud Solutions regarding my enquiry.",

    submitLabel: "Send Project Enquiry",

    successTitle: "Thank You for Contacting Navo!",

    successBody:
      "Your enquiry has been received. Our team will review your project requirements and get back to you within two working days.",

    note:
      "Prefer direct communication? Email us at info@navo.com.np.",
  },

  channels: [
    {
      label: "Project Enquiries",
      value: "info@navo.com.np",
      href: "mailto:info@navo.com.np",
      description:
        "Website development, custom software, AI projects and business enquiries.",
    },
    {
      label: "WhatsApp Support",
      value: "+977 9829077624",
      href: "https://wa.me/9779829077624",
      description:
        "Discuss project requirements and get in touch with our team.",
    },
    {
      label: "WhatsApp Support",
      value: "+977 9845763432",
      href: "https://wa.me/9779845763432",
      description:
        "Contact us for software development and general enquiries.",
    },
  ],

  expectations: [
    {
      step: "01",
      title: "Share Your Requirements",
      description:
        "Tell us about your business, project goals, required features and technical requirements through our project enquiry form.",
    },
    {
      step: "02",
      title: "Discuss the Project",
      description:
        "Our team reviews your requirements and discusses the development approach, technologies, timeline and project scope.",
    },
    {
      step: "03",
      title: "Get a Project Proposal",
      description:
        "Receive a clear proposal outlining the project scope, development milestones, estimated timeline and pricing.",
    },
  ],

  faq: [
    {
      question: "How can I contact Navo Cloud Solutions for a project?",
      answer:
        "You can contact Navo Cloud Solutions through our website enquiry form, email or WhatsApp. Share your project requirements, preferred timeline and budget. Our team aims to respond within two working days.",
    },
    {
      question: "What software development services does Navo provide?",
      answer:
        "Navo Cloud Solutions provides website development, custom software development, AI development and integration, machine learning solutions, computer vision applications and mobile app development for businesses.",
    },
    {
      question: "Does Navo provide software development services in Nepal?",
      answer:
        "Yes. Navo Cloud Solutions is based in Kathmandu, Nepal, and provides digital development services for businesses seeking professional websites, custom business software, AI applications and mobile solutions.",
    },
    {
      question: "Can Navo develop custom software for my business?",
      answer:
        "Yes. We develop custom software based on your business workflows, operational requirements and technical goals. Our solutions can include business management systems, web applications, SaaS platforms and software integrations.",
    },
    {
      question: "Does Navo offer AI development and integration services?",
      answer:
        "Yes. Our AI development capabilities include AI chatbot and RAG applications, machine learning prediction models, computer vision systems and AI integration into existing business applications.",
    },
    {
      question: "How much does website or software development cost?",
      answer:
        "Development costs depend on project complexity, functionality, design requirements, integrations and delivery timelines. Contact our team with your requirements to receive a project-specific estimate.",
    },
    {
      question: "How long does it take to receive a project proposal?",
      answer:
        "We aim to respond to enquiries within two working days. The time required to prepare a detailed proposal depends on the complexity and scope of your project.",
    },
    {
      question: "Can I discuss my project before committing?",
      answer:
        "Yes. You can contact our team to discuss your business requirements, project feasibility, technical approach and estimated development costs before making a commitment.",
    },
  ],

  cta: {
    title: "Ready to Start Your Next Project?",
    description:
      "From professional website development to custom software and AI-powered applications, Navo Cloud Solutions helps turn business ideas into practical digital solutions.",
    actions: [
      {
        label: "Explore Our Services",
        href: "/services",
      },
      {
        label: "Our Business Solutions",
        href: "/products",
      },
    ],
  },
};
