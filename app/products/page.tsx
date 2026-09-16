import type { Metadata } from "next";

import ProductsPage from "@/components/sections/Products/Products";
import JsonLd from "@/components/seo/JsonLd";
import { productsContent } from "@/components/sections/Products/data";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Products",
  description:
    "FlowDesk workflow orchestration, InsightAI predictive analytics and PayGrid payments infrastructure — products we build, run and support in production.",
  path: "/products",
  keywords: [
    "workflow orchestration platform",
    "predictive analytics software",
    "payments infrastructure API",
    "enterprise software products",
  ],
});

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: productsContent.products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.summary,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: absoluteUrl(`/products#${product.id}`),
    },
  })),
};

export default function Products() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
          productSchema,
          faqSchema(productsContent.faq),
        ]}
      />
      <ProductsPage />
    </>
  );
}