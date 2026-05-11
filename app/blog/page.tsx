import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: "Blog — Kennis voor de horeca",
  description:
    "Praktische artikelen over kassatechnologie, betalingen en het runnen van een horecazaak. Tips en inzichten van Spont.",
  openGraph: {
    title: "Blog — Kennis voor de horeca | Spont",
    description:
      "Praktische artikelen over kassatechnologie, betalingen en het runnen van een horecazaak.",
    url: "https://www.spont.nl/blog",
  },
  alternates: { canonical: "https://www.spont.nl/blog" },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spont.nl" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.spont.nl/blog" },
          ],
        }}
      />

      <section className="bg-[#FFFFFF] pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#b8a020] font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-5xl font-sans text-[#111827] font-semibold mb-4">
            Kennis voor de horeca.
          </h1>
          <p className="text-[#6B7280] text-lg">
            Praktische artikelen over kassatechnologie, betalingen en het runnen van een horecazaak.
          </p>
        </div>
      </section>

      <BlogContent />

      <CTABanner
        title="Klaar voor een kassa die gewoon werkt?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
