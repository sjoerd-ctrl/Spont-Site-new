import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";

const articles = [
  {
    slug: "wat-kost-kassasysteem-restaurant",
    title: "Wat kost een kassasysteem voor een restaurant?",
    excerpt: "Abonnement, hardware, transactiekosten, support — alles op een rij. Zo vergelijk je het eerlijk.",
    date: "20 maart 2026",
    category: "Ondernemen",
  },
  {
    slug: "kassasysteem-vergelijken",
    title: "Kassasysteem vergelijken: waar let je op?",
    excerpt: "Prijs is één ding. Maar wat met contracten, support en gebruiksgemak voor je personeel? Dit zijn de vragen die tellen.",
    date: "10 maart 2026",
    category: "Ondernemen",
  },
  {
    slug: "nieuw-restaurant-welke-kassa",
    title: "Nieuw restaurant openen: welke kassa kies je?",
    excerpt: "Als je net begint, wil je geen gedoe. Hier is wat je moet weten voordat je een kassasysteem kiest.",
    date: "25 februari 2026",
    category: "Restaurant",
  },
  {
    slug: "hoe-werken-kaartbetalingen",
    title: "Hoe werken kaartbetalingen eigenlijk?",
    excerpt: "Van tikken op de terminal tot geld op je rekening — uitgelegd voor horecaondernemers.",
    date: "9 december 2025",
    category: "Betalingen",
  },
  {
    slug: "tap-to-pay-iphone",
    title: "Tap to Pay op iPhone: bestellen aan tafel",
    excerpt: "Je medewerker neemt bestelling op en rekent direct af — zonder losse pin-terminal. Zo werkt het.",
    date: "22 november 2025",
    category: "Betalingen",
  },
  {
    slug: "ai-support-revolutie",
    title: "Hoe AI de support in de horeca verandert",
    excerpt: "AI handelt de standaardvragen af. Tickets pakken de rest op. Zo blijft support snel en de prijs laag — zonder supportteam.",
    date: "12 maart 2026",
    category: "Support",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#FCF9F4] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-5xl font-serif text-[#1A1714] font-semibold mb-4">
            Kennis voor de horeca.
          </h1>
          <p className="text-[#5C5550] text-lg">
            Praktische artikelen over kassatechnologie, betalingen en het runnen van een horecazaak.
          </p>
        </div>
      </section>

      <section className="bg-[#FCF9F4] pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block bg-[#F6F3EE] hover:bg-[#F0EDE8] rounded-3xl p-8 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#CC5533] uppercase tracking-widest">
                  {a.category}
                </span>
                <span className="text-[#5C5550] text-xs">{a.date}</span>
              </div>
              <h2 className="font-serif text-xl font-semibold text-[#1A1714] mb-2 group-hover:text-[#CC5533] transition-colors">
                {a.title}
              </h2>
              <p className="text-[#5C5550] text-sm leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Klaar voor een kassa die gewoon werkt?"
        subtitle="Demo aanvragen duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Demo aanvragen", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
