import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import { FadeUp, HeroReveal, Stagger, StaggerItem } from "@/components/shared/Animate";
import { ArrowRight, Clock } from "lucide-react";

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

const articles = [
  {
    slug: "kassasysteem-festival-evenement",
    title: "Kassasysteem voor festivals en evenementen: waar let je op?",
    excerpt: "Plug-and-play, Tap to Pay, offline modus en geen contract. Waar je op moet letten bij het kiezen van een kassasysteem voor je festival of evenement.",
    date: "30 maart 2026",
    category: "Evenementen",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
  },
  {
    slug: "kassasysteem-kiezen-starter",
    title: "Kassasysteem kiezen als starter: 7 vragen die je moet stellen",
    excerpt: "Begin je een horecazaak? Stel deze 7 vragen voordat je een kassasysteem kiest. Van kosten tot contracten en support.",
    date: "30 maart 2026",
    category: "Ondernemen",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  },
  {
    slug: "ai-support-revolutie",
    title: "Hoe AI de support in de horeca verandert",
    excerpt: "AI handelt de standaardvragen af. Tickets pakken de rest op. Zo blijft support snel en de prijs laag — zonder supportteam.",
    date: "12 maart 2026",
    category: "Support",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    slug: "wat-kost-kassasysteem-restaurant",
    title: "Wat kost een kassasysteem voor een restaurant?",
    excerpt: "Abonnement, hardware, transactiekosten, support — alles op een rij. Zo vergelijk je het eerlijk.",
    date: "20 maart 2026",
    category: "Ondernemen",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    slug: "kassasysteem-vergelijken",
    title: "Kassasysteem vergelijken: waar let je op?",
    excerpt: "Prijs is één ding. Maar wat met contracten, support en gebruiksgemak voor je personeel? Dit zijn de vragen die tellen.",
    date: "10 maart 2026",
    category: "Ondernemen",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    slug: "meerdere-horecalocaties-beheren",
    title: "Meerdere horecalocaties beheren: zo houd je het overzicht",
    excerpt: "Twee of drie locaties? Zo houd je grip op omzet, personeel en menukaarten zonder dagelijks heen en weer te rijden.",
    date: "15 februari 2026",
    category: "Ondernemen",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    slug: "nieuw-restaurant-welke-kassa",
    title: "Nieuw restaurant openen: welke kassa kies je?",
    excerpt: "Als je net begint, wil je geen gedoe. Hier is wat je moet weten voordat je een kassasysteem kiest.",
    date: "25 februari 2026",
    category: "Restaurant",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
  },
  {
    slug: "hoe-werken-kaartbetalingen",
    title: "Hoe werken kaartbetalingen eigenlijk?",
    excerpt: "Van tikken op de terminal tot geld op je rekening — uitgelegd voor horecaondernemers.",
    date: "9 december 2025",
    category: "Betalingen",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    slug: "tap-to-pay-iphone",
    title: "Tap to Pay op iPhone: bestellen aan tafel",
    excerpt: "Je medewerker neemt bestelling op en rekent direct af — zonder losse pin-terminal. Zo werkt het.",
    date: "22 november 2025",
    category: "Betalingen",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
];

const categoryColors: Record<string, string> = {
  Evenementen: "bg-purple-100 text-purple-700",
  Ondernemen:  "bg-blue-100 text-blue-700",
  Betalingen:  "bg-green-100 text-green-700",
  Restaurant:  "bg-orange-100 text-orange-700",
  Support:     "bg-yellow-100 text-yellow-700",
};

const [featured, ...rest] = articles;

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

      <section className="bg-[#FFFFFF] pt-32 pb-16 px-6">
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

      <section className="bg-[#FFFFFF] pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="card-hover cursor-pointer block bg-[#F9FAFB] hover:bg-[#F3F4F6] rounded-3xl p-8 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#b8a020] uppercase tracking-widest">
                  {a.category}
                </span>
                <span className="text-[#6B7280] text-xs">{a.date}</span>
              </div>
              <h2 className="font-sans text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#b8a020] transition-colors">
                {a.title}
              </h2>
              <p className="text-[#6B7280] text-sm leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── ARTIKEL GRID ─── */}
      <section className="bg-[#FCF9F4] px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a) => (
              <StaggerItem key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col bg-white rounded-[1.5rem] overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
                >
                  {/* Foto */}
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[#1A1714]/10 group-hover:bg-[#1A1714]/0 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryColors[a.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {a.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#5C5550] text-xs">
                        <Clock size={11} />
                        {a.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-lg font-semibold text-[#1A1714] leading-snug mb-2 group-hover:text-[#b8a020] transition-colors duration-200">
                      {a.title}
                    </h2>
                    <p className="text-[#5C5550] text-sm leading-relaxed flex-1 mb-4">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#EBE8E3]">
                      <span className="text-[#5C5550] text-xs">{a.date}</span>
                      <span className="text-[#b8a020] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        Lees meer <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABanner
        title="Klaar voor een kassa die gewoon werkt?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
