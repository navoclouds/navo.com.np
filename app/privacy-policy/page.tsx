import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicy } from "@/components/sections/PrivacyPolicy/data";

import InsightHero from "@/components/sections/ResearchAndInsights/InsightHero";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const pageUrl = absoluteUrl("/privacy-policy");

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Navo Cloud Solutions",
  description:
    "Read the Privacy Policy of Navo Cloud Solutions to understand how we collect, use, and protect personal information when you visit our website or use our services.",
  keywords: [
    "Navo Cloud Solutions privacy policy",
    "software company Nepal privacy",
    "website privacy policy",
    "data protection Nepal",
    "personal information policy",
    "Navo Cloud data practices",
  ],
  path: "/privacy-policy",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Navo Cloud Solutions",
  url: pageUrl,
  description:
    "Privacy Policy explaining how Navo Cloud Solutions handles personal information.",
  dateModified: privacyPolicy.lastUpdated,
  publisher: {
    "@type": "Organization",
    name: "Navo Cloud Solutions Pvt. Ltd.",
    url: siteConfig.url,
  },
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main id="top" className="min-h-screen bg-surface">
        <InsightHero
          hero={{
            title: "Privacy",
            accent: "Policy",
            subtitle: privacyPolicy.subtitle,
            bullets: [
              "Data Collection & Usage",
              "Privacy & Security",
              "Data Protection Practices",
            ],
          }}
        />

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 border-b border-gray-200 pb-6">
              <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                <p>Effective Date: {formatDate(privacyPolicy.effectiveDate)}</p>
                <p>Last Updated: {formatDate(privacyPolicy.lastUpdated)}</p>
              </div>

              <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                {privacyPolicy.title}
              </h1>

              <div
                className="space-y-4 text-[15px] leading-8 text-gray-600 [&_p]:mb-4 [&_p:last-child]:mb-0"
                dangerouslySetInnerHTML={{
                  __html: privacyPolicy.introduction,
                }}
              />
            </div>

            <article className="space-y-9">
              {privacyPolicy.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
                    {section.heading}
                  </h2>

                  <div
                    className="
                      text-[15px] leading-8 text-gray-600
                      [&_p]:mb-4
                      [&_p:last-child]:mb-0
                      [&_h3]:mb-2
                      [&_h3]:mt-6
                      [&_h3]:font-semibold
                      [&_h3]:text-gray-800
                      [&_ul]:mb-5
                      [&_ul]:mt-2
                      [&_ul]:list-disc
                      [&_ul]:space-y-1
                      [&_ul]:pl-6
                      [&_ol]:mb-5
                      [&_ol]:mt-2
                      [&_ol]:list-decimal
                      [&_ol]:space-y-1
                      [&_ol]:pl-6
                      [&_li]:pl-1
                      [&_strong]:font-semibold
                      [&_strong]:text-gray-800
                      [&_a]:text-brand-blue
                      [&_a]:underline
                      [&_a]:underline-offset-4
                    "
                    dangerouslySetInnerHTML={{
                      __html: section.content,
                    }}
                  />
                </section>
              ))}
            </article>

            <div className="mt-12 border-t border-gray-200 pt-6">
              <p className="text-sm leading-7 text-gray-600">
                For questions about this Privacy Policy or your personal
                information, please{" "}
                <Link
                  href="/contact"
                  className="font-medium text-brand-blue hover:underline"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
