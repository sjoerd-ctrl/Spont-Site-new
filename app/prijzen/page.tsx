import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import { CheckCircle, Bot, Users, Wrench } from "lucide-react";
import PaymentsTabs from "@/components/pricing/PaymentsTabs";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "Spont Start vanaf €69/mnd (met Payments). Alle functies inbegrepen, geen verborgen kosten, maandelijks opzegbaar.",
  openGraph: {
    title: "Prijzen | Spont",
    description:
      "Spont Start vanaf €69/mnd met Spont Payments. Alle functies inbegrepen, geen verborgen kosten.",
    url: "https://www.spont.nl/prijzen",
  },
  alternates: { canonical: "https://www.spont.nl/prijzen" },
  other: { "article:modified_time": "2026-03-31" },
};

// ─── PLANS ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Start",
    price: "€69",
    priceNote: "*",
    basePriceWithoutPayments: "€89",
    period: "/maand",
    description: "Perfect voor 1–2 kassa's. Alle functies van Spont, inclusief betalingen.",
    badge: null,
    badgeSub: null,
    cta: "Start direct",
    ctaHref: "https://admin.spont.nl",
    highlight: false,
    featureGroups: [
      {
        label: "Wat je krijgt",
        items: [
          "Kassasysteem (POS)",
          "Handhelds, QR-bestellen, Kiosks, KDS",
          "Online bestellen & reserveringen",
          "Loyalty & BI-rapportages",
          "AI Assistent",
          "Spont Payments inbegrepen",
          "Maximaal 2 verkooppunten",
        ],
      },
      {
        label: "Support",
        items: [
          "AI + tickets inbegrepen",
          "Menselijke hulp bijkoopbaar (dealer of €59/uur)",
        ],
      },
    ],
  },
  {
    name: "Pro",
    price: "€149",
    priceNote: "*",
    basePriceWithoutPayments: "€169",
    period: "/vestiging/maand",
    description: "Onbeperkt kassa's, apparaten en vestigingen. Alles van Start, plus prioriteit.",
    badge: "Meest gekozen",
    badgeSub: "voor groeiende zaken",
    cta: "Start met Pro",
    ctaHref: "https://admin.spont.nl",
    highlight: true,
    featureGroups: [
      {
        label: "Alles van Start, plus",
        items: [
          "Onbeperkte verkooppunten",
          "Onbeperkte apparaten & gebruikers",
          "Meerdere vestigingen in één dashboard",
          "AI-inzichten & suggesties",
          "Support via AI + prioriteitstickets",
          "Menselijke hulp bijkoopbaar (dealer of €59/uur)",
        ],
      },
    ],
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Zit ik vast aan een contract?",
    a: "Nee. Spont is maandelijks opzegbaar. Geen lock-in, geen boeteclausules.",
  },
  {
    q: "Zijn er opstartkosten?",
    a: "Geen. Je betaalt het maandelijkse bedrag, en dat is het.",
  },
  {
    q: "Wat is het verschil tussen Start en Pro?",
    a: "Beide plannen hebben alle functies. Start is voor zaken met 1–2 verkooppunten. Pro heeft geen limiet — ideaal als je meerdere kassa's of vestigingen hebt.",
  },
  {
    q: "Hoe snel ben ik operationeel?",
    a: "Binnen een paar uur. Je richt je menukaart in, koppelt je printer en betaalterminal — klaar.",
  },
  {
    q: "Kan ik meerdere locaties beheren?",
    a: "Ja, met het Pro-plan beheer je meerdere vestigingen vanuit één dashboard.",
  },
  {
    q: "Wat als er iets misgaat tijdens de dienst?",
    a: "Stuur een ticket in via het platform. AI + ons team pakt het snel op. Heb je iemand nodig die langskomt of belt? Dat kan via onze dealers of als losse ondersteuning à €59/uur.",
  },
  {
    q: "Wat kost Spont Payments?",
    a: "Spont Payments is standaard inbegrepen. Geen extra terminal-kosten of setup fees. POS-tarieven: debit €0,085/tx, creditcard consumer 1,89%, creditcard zakelijk 2,79%, Amex €0,05 + 2,20%, Bancontact €0,06 + 0,30%. Voor online bestellingen (ECOM) gelden aparte tarieven — zie de tariefstabel op deze pagina. Wil je geen betaaloplossing gebruiken? Dan betaal je €20/maand minder.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spont.nl" },
            { "@type": "ListItem", position: 2, name: "Prijzen", item: "https://www.spont.nl/prijzen" },
          ],
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1453903907086-6ef96c6f63d6?w=2000&q=80"
            alt="Restaurant interieur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Prijzen
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold leading-tight mb-6">
            Alles in
            <br />
            <em className="not-italic text-white/80">één pakket.</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Kassasysteem, betalingen, QR-bestellen, loyalty, rapportages en AI — alles inbegrepen. Geen verborgen kosten, geen jaarcontract.
          </p>
          <p className="text-white/40 text-xs mt-4">
            Laatst bijgewerkt: <time dateTime="2026-03-30">30 maart 2026</time>
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="bg-[#FCF9F4] pt-20 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#2D4B3F] text-white ring-2 ring-[#2D4B3F]"
                    : "bg-[#F6F3EE] text-[#1A1714]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className="inline-block bg-[#CC5533] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                    {plan.badgeSub && (
                      <span className={`ml-2 text-xs ${plan.highlight ? "text-white/50" : "text-[#5C5550]"}`}>
                        {plan.badgeSub}
                      </span>
                    )}
                  </div>
                )}

                {/* Naam + beschrijving */}
                <h2 className={`font-serif text-xl font-semibold mb-1 ${plan.highlight ? "text-white" : "text-[#1A1714]"}`}>
                  {plan.name}
                </h2>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-[#5C5550]"}`}>
                  {plan.description}
                </p>

                {/* Prijs */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-serif font-bold ${plan.highlight ? "text-white" : "text-[#1A1714]"}`}>
                      {plan.price}
                    </span>
                    {plan.priceNote && (
                      <sup className="text-sm font-semibold text-[#CC5533] align-super">{plan.priceNote}</sup>
                    )}
                  </div>
                  <span className={`text-sm ml-1 ${plan.highlight ? "text-white/60" : "text-[#5C5550]"}`}>
                    {plan.period}
                  </span>
                </div>

                {/* "Alles inbegrepen" pill — alleen op Start */}
                {!plan.highlight && (
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#2D4B3F]/10 text-[#2D4B3F] text-xs font-semibold px-3 py-1.5 rounded-full">
                      <CheckCircle size={12} />
                      Alles inbegrepen — niets apart bijkopen
                    </span>
                  </div>
                )}

                {/* Feature groepen */}
                <div className="flex-1 space-y-5 mb-8">
                  {plan.featureGroups.map((group) => (
                    <div key={group.label}>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? "text-white/40" : "text-[#5C5550]/60"}`}>
                        {group.label}
                      </p>
                      <ul className="space-y-2.5">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <CheckCircle size={15} className="text-[#CC5533] mt-0.5 shrink-0" />
                            <span className={plan.highlight ? "text-white/90" : "text-[#1A1714]"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.ctaHref}
                  className={`text-center font-semibold py-3.5 rounded-full transition-colors text-sm ${
                    plan.highlight
                      ? "bg-[#CC5533] hover:bg-[#A33818] text-white"
                      : "bg-[#1A1714] hover:bg-[#2D4B3F] text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-center text-[#5C5550] text-sm mt-8">
            <span className="font-semibold">* Met Spont Payments.</span> Wil je een ander betaalmiddel gebruiken? Start zonder Payments voor €89/maand (Start) of €169/maand (Pro).
          </p>
        </div>
      </section>

      {/* ─── SPONT PAYMENTS ─── */}
      <section className="bg-[#FCF9F4] pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Header callout */}
          <div className="bg-[#2D4B3F] rounded-3xl p-8 md:p-10">
            <p className="text-[#CC5533] font-semibold text-xs uppercase tracking-widest mb-3">
              Spont Payments
            </p>
            <h3 className="font-serif text-2xl text-white font-semibold mb-2">
              Reeds inbegrepen.<br />
              Geïntegreerde betalingen, geen extra terminal.
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Spont Payments is standaard inbegrepen in onze prijzen. Tap to Pay, debit- en creditcard — alles in één terminal, zonder aparte SLA's.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-white/60 text-xs mb-1">Zonder Payments</p>
                <p className="text-white text-2xl font-serif font-bold">€89<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
              <div className="bg-[#CC5533] rounded-2xl px-6 py-4 text-center">
                <p className="text-white/80 text-xs mb-1">Met Payments (bespaar €20)</p>
                <p className="text-white text-2xl font-serif font-bold">€69<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
            </div>
          </div>

          {/* Tarieven tabs */}
          <PaymentsTabs />

        </div>
      </section>

      {/* ─── MULTI-LOCATIE BANNER ─── */}
      <section className="bg-[#F6F3EE] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl px-8 py-6">
          <div>
            <h3 className="font-serif font-semibold text-[#1A1714] text-lg mb-1">
              Meer vestigingen of maatwerk nodig?
            </h3>
            <p className="text-[#5C5550] text-sm">
              We maken het mogelijk. Neem contact op voor een gesprek op maat.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#1A1714] hover:bg-[#2D4B3F] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
          >
            Gesprek inplannen
          </Link>
        </div>
      </section>

      {/* ─── SUPPORT SECTIE ─── */}
      <section className="bg-[#FCF9F4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Support
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714] mb-4">
              Support die werkt.<br />Zonder wachtrijen.
            </h2>
            <p className="text-[#5C5550] max-w-2xl mx-auto">
              AI lost het meeste direct op. Tickets voor de rest — snel opgepakt, geen wachtrijen. Wil je toch iemand die je persoonlijk kent? Dat kan via een dealer of losse hulp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Blok 1 – inbegrepen */}
            <div className="bg-[#2D4B3F] rounded-3xl p-7">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Bot size={20} className="text-white" />
              </div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                Inbegrepen
              </p>
              <h3 className="font-serif font-semibold text-white mb-2">
                AI + Tickets
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Direct antwoord via AI, tickets voor complexere vragen. Snel, geen telefoon, geen wachtrijen.
              </p>
            </div>

            {/* Blok 2 – optioneel */}
            <Link href="/contact#formulier" className="card-hover bg-[#F6F3EE] rounded-3xl p-7 block">
              <div className="w-10 h-10 bg-[#CC5533]/10 rounded-2xl flex items-center justify-center mb-4">
                <Users size={20} className="text-[#CC5533]" />
              </div>
              <p className="text-[#5C5550] text-xs font-semibold uppercase tracking-wider mb-2">
                Optioneel
              </p>
              <h3 className="font-serif font-semibold text-[#1A1714] mb-2">
                Spont Dealer
              </h3>
              <p className="text-[#5C5550] text-sm leading-relaxed">
                Wil je een vast contactpersoon? Een gecertificeerde dealer
                helpt je. Eigen maandelijks tarief.
              </p>
            </Link>

            {/* Blok 3 – optioneel */}
            <div className="bg-[#F6F3EE] rounded-3xl p-7">
              <div className="w-10 h-10 bg-[#CC5533]/10 rounded-2xl flex items-center justify-center mb-4">
                <Wrench size={20} className="text-[#CC5533]" />
              </div>
              <p className="text-[#5C5550] text-xs font-semibold uppercase tracking-wider mb-2">
                Optioneel
              </p>
              <h3 className="font-serif font-semibold text-[#1A1714] mb-2">
                Losse hulp
              </h3>
              <p className="text-[#5C5550] text-sm leading-relaxed">
                €59 per uur. Online of op locatie. Per half uur afgerekend.
              </p>
            </div>
          </div>

          <p className="text-center text-[#5C5550] text-sm mt-8">
            De meeste klanten komen prima uit met AI + tickets. Maar wil je meer — het kan altijd.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F6F3EE] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-[#1A1714] mb-12 text-center">
            Veelgestelde vragen.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-2xl px-7 py-5 group cursor-pointer"
              >
                <summary className="font-semibold text-[#1A1714] text-base list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#CC5533] text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-[#5C5550] text-sm mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Nog vragen over onze pakketten?"
        subtitle="We helpen je kiezen wat past bij jouw zaak. Geen verkooppraatjes."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Stuur ons een bericht", href: "/contact" }}
      />
    </>
  );
}
