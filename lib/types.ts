
export type Action = {
  label: string;
  href: string;
  external?: boolean;
};

export type Stat = { value: string; label: string; caption?: string };

export type Faq = { question: string; answer: string };

export type MetaItem = { label: string; value: string };

export type Hero = {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  bullets: string[];
  actions?: Action[];
  meta: MetaItem[];
  backgroundImage?: string;
};

export type CtaBand = {
  title: string;
  description: string;
  actions: Action[];
};

export type Office = {
  city: string;
  country: string;
  address: string;
  timezone: string;
  email: string;
  phone?: string;
};