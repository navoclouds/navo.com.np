/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";

import InsightHero from "@/components/sections/ResearchAndInsights/InsightHero";
import { termsAndConditions } from "@/components/sections/TermsServices/data";
import { formatDate } from "@/components/sections/ResearchAndInsights/data";

const pageUrl = "https://www.navo.com.np/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms and Conditions | Navo Cloud Solutions",
  description:
    "Read the Terms and Conditions of Navo Cloud Solutions Pvt. Ltd. covering website development, custom software, mobile applications, AI integration, SaaS subscriptions, payments, intellectual property, and service usage.",
  keywords: [
    "Navo Cloud terms and conditions",
    "Navo Cloud Solutions terms of service",
    "website development terms Nepal",
    "software development service agreement Nepal",
    "SaaS subscription terms",
    "AI development terms",
    "mobile application development terms",
    "Navo Cloud policies",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Terms and Conditions | Navo Cloud Solutions",
    description:
      "Review the terms governing the use of Navo Cloud Solutions' website, software development services, mobile applications, AI solutions, and SaaS products.",
    url: pageUrl,
    siteName: "Navo Cloud Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | Navo Cloud Solutions",
    description:
      "Understand the terms, responsibilities, payments, and conditions associated with Navo Cloud services and digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms and Conditions | Navo Cloud Solutions",
  url: pageUrl,
  description: metadata.description,
  dateModified: termsAndConditions.lastUpdated,
  publisher: {
    "@type": "Organization",
    name: "Navo Cloud Solutions Pvt. Ltd.",
    url: "https://www.navo.com.np/",
  },
  mainEntity: {
    "@type": "CreativeWork",
    name: "Terms and Conditions",
    datePublished: termsAndConditions.effectiveDate,
    dateModified: termsAndConditions.lastUpdated,
    publisher: {
      "@type": "Organization",
      name: "Navo Cloud Solutions Pvt. Ltd.",
    },
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main id="top" className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <InsightHero
        hero={{
          title: "Terms and",
          accent: "Conditions",
          subtitle: termsAndConditions.subtitle,
          bullets: [
            "Service Terms & Conditions",
            "Payments & Subscriptions",
            "User Rights & Responsibilities",
          ],
        }}
      />

      <section className="px-6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Document dates */}
          <div className="mb-10 flex flex-col gap-3 border-b border-gray-200 pb-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              {formatDate(termsAndConditions.effectiveDate)}
            </p>

            <p>
              <span className="font-semibold text-gray-700">Last Updated:</span>{" "}
              {formatDate(termsAndConditions.lastUpdated)}
            </p>
          </div>

          {/* Introduction */}
          <div
            className="terms-content mb-12"
            dangerouslySetInnerHTML={{
              __html: termsAndConditions.introduction,
            }}
          />

          {/* Terms Sections */}
          <div className="space-y-10">
            {termsAndConditions.sections.map((section: any) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="mb-4 text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                  {section.heading}
                </h2>

                <div
                  className="terms-content"
                  dangerouslySetInnerHTML={{
                    __html: section.content,
                  }}
                />
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-14 border-t border-gray-200 pt-8">
            <p className="text-sm leading-7 text-gray-600">
              By using Navo Cloud&apos;s website, software, applications, or
              services, you acknowledge that you have read and understood these
              Terms and Conditions. For further clarification, please{" "}
              <a
                href="/contact"
                className="font-medium text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900"
              >
                contact our team
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
