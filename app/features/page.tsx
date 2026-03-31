import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import {
  Smartphone,
  CalendarDays,
  QrCode,
  Monitor,
  Globe,
  CreditCard,
  UtensilsCrossed,
  BarChart3,
  Gift,
  FileText,
  Bot,
  Map,
  Receipt,
  Users,
  Wand2,
  Watch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alle functies",
  description:
    "Ontdek alle functies van Spont: kassa, QR-bestellen, reserveringen, KDS, rapportages, loyalty, online bestellen en AI-support.",
  openGraph: {
    title: "Alle functies | Spont",
    description:
      "Ontdek alle functies van Spont: kassa, QR-bestellen, reserveringen, KDS, rapportages, loyalty en meer.",
    url: "https://www.spont.nl/features",
  },
  alternates: { canonical: "https://www.spont.nl/features" },
  other: { "article:modified_time": "2026-03-30" },
};

const solutions = [
  {
    icon: Smartphone,
    title: "Kassasysteem",
    body: "Volledig kassasysteem op iPad of tablet. Bonnen, tafelbeheer, splits- en samenvoeging — allemaal in één scherm.",
  },
  {
    icon: CalendarDays,
    title: "Reserveringen",
    body: "Online reserveringen zonder commissie. Direct gekoppeld aan je kassa en tafelplattegrond.",
  },
  {
    icon: QrCode,
    title: "QR-bestellen",
    body: "Gasten bestellen zelf via QR-code. De bon gaat direct naar de bar of keuken. Geen misverstand, geen vertraging.",
  },
  {
    icon: Monitor,
    title: "Bestelzuil",
    body: "Zelfbedieningskiosken voor quick service en afhaal. Minder wachtrij, meer bestellingen.",
  },
  {
    icon: Globe,
    title: "Online bestellen",
    body: "Een complete bestelpagina voor afhaal en bezorging. Geen derde partij, geen commissie.",
  },
  {
    icon: CreditCard,
    title: "Spont Pay",
    body: "Geïntegreerde pinbetalingen. Bonnen splitsen gaat in seconden. Tap to Pay op iPhone.",
  },
  {
    icon: UtensilsCrossed,
    title: "Keuken & bardisplay",
    body: "Digitale bonnen voor keuken en bar. Geen papier, geen verwarring over volgorde.",
  },
  {
    icon: BarChart3,
    title: "Rapportages & BI",
    body: "Omzet per periode, medewerker en product. Real-time dashboard, ook op je telefoon.",
  },
  {
    icon: Gift,
    title: "Loyalty",
    body: "Spaarprogramma, kortingscodes en cadeaukaarten. Gasten komen terug.",
  },
  {
    icon: FileText,
    title: "Digitale menukaarten",
    body: "QR-menukaarten die automatisch meegaan met je kassa. Prijswijziging? Overal tegelijk aangepast.",
  },
  {
    icon: Bot,
    title: "AI Assistent",
    body: "24/7 beschikbaar voor support en configuratievragen. Wacht nooit op een antwoord.",
  },
];

const extras = [
  { icon: Map, title: "Tafelplattegronden", body: "Teken je zaak na en wijs tafels toe aan orders." },
  { icon: Receipt, title: "Facturatie & offertes", body: "Stuur facturen en offertes direct vanuit het systeem." },
  { icon: Users, title: "Rollen & rechten", body: "Bepaal wie wat mag. Per medewerker of rol." },
  { icon: Wand2, title: "Menu engineering", body: "Ontdek welke gerechten het meest opleveren en stuur bij." },
  { icon: Watch, title: "iPhone Handhelds", body: "Neem bestellingen op aan tafel met Tap to Pay op iPhone." },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Wat zit er allemaal in het Spont kassasysteem?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Spont bevat: POS-kassa, QR-bestellen, reserveringen, keuken- en bardisplay (KDS), online bestellen, rapportages, loyalty, AI-assistent, Tap to Pay op iPhone, bestelzuilen en meer. Alles is inbegrepen in het abonnement.",
              },
            },
            {
              "@type": "Question",
              name: "Werkt Spont op een iPad of tablet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, Spont werkt op iPad, Android-tablets en touchscreens. Het systeem is browser-based en vereist geen speciale hardware.",
              },
            },
            {
              "@type": "Question",
              name: "Heeft Spont een AI-assistent?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, Spont is AI-first gebouwd. De AI-assistent helpt bij installatie, configuratie en supportvragen. 24/7 beschikbaar, zonder wachttijden.",
              },
            },
            {
              "@type": "Question",
              name: "Kan ik QR-bestellen gebruiken met Spont?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, gasten bestellen zelf via QR-code aan tafel. De bestelling gaat direct naar de bar of keuken. Geen misverstand, geen vertraging.",
              },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spont.nl" },
            { "@type": "ListItem", position: 2, name: "Features", item: "https://www.spont.nl/features" },
          ],
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-dNH4CywjIPI?w=2000&q=80"
            alt="Modern restaurant interieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Alle functies
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold leading-tight mb-6">
            Eén systeem voor alles.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-6">
            Geen losse tools, geen integratie-gedoe. Spont bundelt alles wat je
            nodig hebt in één platform — en het werkt gewoon.
          </p>
          <p className="text-white/40 text-xs mb-10">
            Laatst bijgewerkt: <time dateTime="2026-03-30">30 maart 2026</time>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admin.spont.nl"
              className="bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Start direct
            </a>
            <Link
              href="/prijzen"
              className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>

      {/* ─── AI SECTIE ─── */}
      <section className="bg-[#2D4B3F] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
                AI-first
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-6">
                AI maakt het verschil.
              </h2>
              <p className="text-white/70 leading-relaxed">
                Spont is AI-first gebouwd — niet als marketingterm, maar als
                fundament. AI regelt het standaardwerk, zodat jij tijd hebt voor
                je gasten.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "AI-assistent voor installatie en configuratie",
                "Slimme chatbot voor supportvragen",
                "Automatische suggesties voor optimalisatie",
                "24/7 beschikbaar, zonder wachttijden",
              ].map((item) => (
                <div
                  key={item}
                  className="card-hover bg-white/10 rounded-2xl px-5 py-4 flex items-center gap-3"
                >
                  <Bot size={16} className="text-[#CC5533] shrink-0" />
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── KERNOPLOSSINGEN ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Kernfuncties
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              De kern van het Spont-platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="card-hover bg-[#F6F3EE] rounded-3xl p-8 hover:bg-[#F0EDE8]"
                >
                  <div className="w-12 h-12 bg-[#CC5533]/10 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#CC5533]" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#1A1714] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EXTRA FUNCTIES ─── */}
      <section className="bg-[#F6F3EE] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-semibold text-[#1A1714]">
              Extra functionaliteit.
            </h2>
            <p className="text-[#5C5550] mt-2">Handige extras om je zaak nog soepeler te laten draaien.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {extras.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="card-hover bg-white rounded-3xl p-6 text-center">
                  <Icon size={22} className="text-[#CC5533] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1A1714] text-sm mb-1">{e.title}</h3>
                  <p className="text-[#5C5550] text-xs leading-relaxed">{e.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Klaar om alles in één te hebben?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
