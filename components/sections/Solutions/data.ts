export type Solution = {
  id: string;
  name: string;
  title: string;
  description: string;
  cover: string;
  links: { text: string; link: string }[];
};

export const solutions: Solution[] = [
  {
    id: "navo-pos",
    name: "Navo POS",
    title: "POS Software for Sales, Inventory & Accounting",
    description:
      "<p>Navo POS is point of sale (POS) software for sales recording, stock and inventory management, expense tracking, and basic accounting.</p><p>This business management software serves businesses in Nepal and beyond, with new modules and features added over time.</p>",
    cover: "/images/solutions/NavoPos.avif",
    links: [{ text: "Start Now", link: "https://pos.navo.com.np/sign-in" }],
  },
  {
    id: "navo-hire",
    name: "Navo Hire",
    title: "AI-Powered Recruitment & Candidate Matching",
    description:
      "<p>Navo Hire is AI recruitment software that matches candidates to roles by comparing job descriptions with resumes.</p><p>Its AI candidate matching scores applicants to support resume screening and hiring. Request a Navo Hire demo.</p>",
    cover: "/images/solutions/NavoHire.avif",
    links: [{ text: "Request a Demo", link: "/contact" }],
  },
];
