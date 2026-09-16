import type { CtaBand, Faq, Hero, Office } from "@/lib/types";

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export type SelectField = { id: string; label: string; options: string[] };

export type Expectation = { step: string; title: string; description: string };

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
  offices: Office[];
  expectations: Expectation[];
  faq: Faq[];
  cta: CtaBand;
};

export const contactContent: ContactContent = {
  hero: {
    eyebrow: "CONTACT",
    title: "Tell us what you're",
    accent: "building.",
    subtitle:
      "A short brief is enough to start. We reply within two working days with an honest read on scope, risk and whether we are the right team for it.",
    bullets: ["Reply within 2 working days", "No sales sequence", "NDA on request"],
    meta: [
      { label: "Response time", value: "Under 48 hours" },
      { label: "First call", value: "30 minutes" },
      { label: "Languages", value: "English, Nepali, German" },
      { label: "Time zones", value: "GMT+1 to GMT+8" },
    ],
  },

  form: {
    title: "Start a conversation",
    description:
      "The more context you give, the more useful our first reply will be. Rough numbers are fine.",
    projectTypes: {
      id: "projectType",
      label: "What do you need?",
      options: [
        "Website development",
        "Custom AI development",
        "Desktop software development",
        "AI integration",
        "Mobile application development",
        "Business tools and platforms",
        "Something else",
      ],
    },
    budgets: {
      id: "budget",
      label: "Indicative budget",
      options: ["Under $25k", "$25k – $50k", "$50k – $150k", "$150k+", "Not sure yet"],
    },
    timelines: {
      id: "timeline",
      label: "When do you want to start?",
      options: ["As soon as possible", "Within a month", "This quarter", "Just exploring"],
    },
    consentLabel: "I'm happy to be contacted about this enquiry.",
    submitLabel: "Send message",
    successTitle: "Thanks — your message is ready to send.",
    successBody:
      "Connect this form to your own API route or email provider and submissions will land in your inbox.",
    note: "Prefer email? Write to info@navo.com directly.",
  },

  channels: [
    {
      label: "New projects",
      value: "info@navo.com",
      href: "mailto:info@navo.com",
      description: "Briefs, scoping questions and anything commercial.",
    },
    {
      label: "Engineering",
      value: "engineering@navo.com.np",
      href: "mailto:engineering@navo.com.np",
      description: "Technical questions about our products and integrations.",
    },
    {
      label: "Careers",
      value: "careers@navo.com.np",
      href: "mailto:careers@navo.com.np",
      description: "Send something you have built — we read everything.",
    },
    {
      label: "Phone",
      value: "+977 9876543210",
      href: "tel:+9779876543210",
      description: "Weekdays, 10:00 to 18:00 GMT+5:45.",
    },
  ],

  offices: [
    {
      city: "Kathmandu",
      country: "Nepal",
      address: "Level 4, Jhamsikhel Road, Lalitpur 44700",
      timezone: "GMT+5:45",
      phone: "+977 9876543210",
      email: "ktm@navo.com.np",
    },
    {
      city: "Berlin",
      country: "Germany",
      address: "Prinzessinnenstraße 20, 10969 Berlin",
      timezone: "GMT+1",
      phone: "+49 30 0000 0000",
      email: "berlin@navo.com.np",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "71 Robinson Road, #14-01, 068895",
      timezone: "GMT+8",
      phone: "+65 0000 0000",
      email: "sg@navo.com.np",
    },
  ],

  expectations: [
    {
      step: "01",
      title: "We read the brief",
      description:
        "A senior engineer reads it, not a sales rep. If it is not a fit we say so and point you somewhere better.",
    },
    {
      step: "02",
      title: "Thirty-minute call",
      description:
        "We ask about constraints, existing systems and what success looks like in numbers. No deck.",
    },
    {
      step: "03",
      title: "Written proposal",
      description:
        "Scope, sequencing, team shape and price in a short document you can circulate internally.",
    },
  ],

  faq: [
    {
      question: "What should I include in the first message?",
      answer:
        "What you are building, what is currently blocking it, any hard deadline, and the systems already in place. Two paragraphs is usually enough.",
    },
    {
      question: "Do you work with early-stage companies?",
      answer:
        "Yes, though below a certain size an advisory retainer usually serves you better than a full delivery squad. We will tell you which one we think fits.",
    },
    {
      question: "Will you sign an NDA before we talk?",
      answer:
        "Happily. Send yours with the first message, or ask for ours and we will return a signed copy the same day.",
    },
    {
      question: "Do you take on fixed-price work?",
      answer:
        "For clearly specified deliverables, yes. For open-ended product work we use a monthly retainer, because a fixed price on an unclear scope only protects one side.",
    },
  ],

  cta: {
    title: "Not ready to talk yet?",
    description:
      "Read what we have published, or look at what we have already shipped. Both say more than a sales call would.",
    actions: [
      { label: "Read the articles", href: "/articles" },
      { label: "See the products", href: "/products" },
    ],
  },
};