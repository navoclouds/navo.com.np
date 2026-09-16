import type { Metadata } from "next";

import ContactPage from "@/components/sections/Contact/ContactPage";
import JsonLd from "@/components/seo/JsonLd";
import { contactContent } from "@/components/sections/Contact/data";
import { breadcrumbSchema, buildMetadata, contactPageSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Tell us what you're building. Send a short brief and we reply within two working days with an honest read on scope, risk and fit.",
  path: "/contact",
  keywords: ["contact software company", "hire software developers Nepal", "project enquiry"],
});

export default function Contact() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageSchema(),
          faqSchema(contactContent.faq),
        ]}
      />
      <ContactPage />
    </>
  );
}