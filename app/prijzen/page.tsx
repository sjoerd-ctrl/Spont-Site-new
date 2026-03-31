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
    description: "1–2 verkooppunten. Alle functies inbegrepen. Met Spont Payments.",
    cta: "Start direct",
    ctaHref: "https://admin.spont.nl",
    highlight: false,
    features: [
      { text: "Alle functies inbegrepen", included: true },
      { text: "Kassasysteem (POS)", included: true },
      { text: "Handhelds, QR-bestellen, Kiosks, KDS", included: true },
      { text: "Online bestellen & reserveringen", included: true },
      { text: "Loyalty, BI-rapportages, AI Assistent", included: true },
      { text: "Support via AI + tickets", included: true },
      { text: "Menselijke hulp bijkoopbaar (dealer of €59/uur)", included: true },
      { text: "Maximaal 2 verkooppunten", included: true },
      { text: "Meerdere verkooppunten", included: false },
    ],
  },
  {
    name: "Pro",
    price: "€149",
    priceNote: "*",
    basePriceWithoutPayments: "€169",
    period: "/vestiging/maand",
    description: "Onbeperkt verkooppunten per vestiging. Meerdere vestigingen. Alles. Met Spont Payments.",
    cta: "Start met Pro",
    ctaHref: "https://admin.spont.nl",
    highlight: true,
    features: [
      { text: "Alles van Start", included: true },
      { text: "Onbeperkte verkooppunten", included: true },
      { text: "Onbeperkte apparaten & gebruikers", included: true },
      { text: "Meerdere vestigingen in één dashboard", included: true },
      { text: "AI-inzichten & suggesties", included: true },
      { text: "Support via AI + prioriteitstickets", included: true },
      { text: "Menselijke hulp bijkoopbaar (dealer of €59/uur)", included: true },
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
          <div className="absolute inset-0 bg-[#111827]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#4353FF] font-semibold text-sm uppercase tracking-widest mb-4">
            Prijzen
          </p>
          <h1 className="text-5xl md:text-6xl font-sans text-white font-semibold leading-tight mb-6">
            Wat je ziet,
            <br />
            <em className="not-italic text-white/80">is wat je betaalt.</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Volledig kassasysteem met betaaloplossing. Vanaf €69/maand. Geen opstartkosten,
            geen jaarcontract.
          </p>
          <p className="text-white/40 text-xs mt-4">
            Laatst bijgewerkt: <time dateTime="2026-03-30">30 maart 2026</time>
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="bg-[#FFFFFF] pt-20 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#111827] text-white ring-2 ring-[#111827]"
                    : "bg-[#F9FAFB] text-[#111827]"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-[#4353FF] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    Meest gekozen
                  </span>
                )}
                <h2
                  className={`font-sans text-xl font-semibold mb-1 ${
                    plan.highlight ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? "text-white/60" : "text-[#6B7280]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-sans font-bold ${
                        plan.highlight ? "text-white" : "text-[#111827]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.priceNote && (
                      <sup className="text-sm font-semibold text-[#4353FF] align-super">
                        {plan.priceNote}
                      </sup>
                    )}
                  </div>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlight ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <CheckCircle
                          size={16}
                          className="text-[#4353FF] mt-0.5 shrink-0"
                        />
                      ) : (
                        <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
                          <span
                            className={`text-base leading-none ${
                              plan.highlight
                                ? "text-white/25"
                                : "text-[#6B7280]/35"
                            }`}
                          >
                            —
                          </span>
                        </span>
                      )}
                      <span
                        className={
                          f.included
                            ? plan.highlight
                              ? "text-white/90"
                              : "text-[#111827]"
                            : plan.highlight
                            ? "text-white/35"
                            : "text-[#6B7280]/50"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`text-center font-semibold py-3.5 rounded-full transition-colors text-sm ${
                    plan.highlight
                      ? "bg-[#4353FF] hover:bg-[#3344DD] text-white"
                      : "bg-[#111827] hover:bg-[#111827] text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="text-center text-[#6B7280] text-sm mt-8">
            <span className="font-semibold">* Met Spont Payments.</span> Wil je een ander betaalmiddel gebruiken? Start zonder Payments voor €89/maand (Start) of €169/maand (Pro).
          </p>
        </div>
      </section>

      {/* ─── SPONT PAYMENTS ─── */}
      <section className="bg-[#FFFFFF] pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Header callout */}
          <div className="bg-[#111827] rounded-3xl p-8 md:p-10">
            <p className="text-[#4353FF] font-semibold text-xs uppercase tracking-widest mb-3">
              Spont Payments
            </p>
            <h3 className="font-sans text-2xl text-white font-semibold mb-2">
              Reeds inbegrepen.<br />
              Geïntegreerde betalingen, geen extra terminal.
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Spont Payments is standaard inbegrepen in onze prijzen. Tap to Pay, debit- en creditcard — alles in één terminal, zonder aparte SLA's.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-white/60 text-xs mb-1">Zonder Payments</p>
                <p className="text-white text-2xl font-sans font-bold">€89<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
              <div className="bg-[#4353FF] rounded-2xl px-6 py-4 text-center">
                <p className="text-white/80 text-xs mb-1">Met Payments (bespaar €20)</p>
                <p className="text-white text-2xl font-sans font-bold">€69<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
            </div>
          </div>

          {/* Tarieven tabs */}
          <PaymentsTabs />

        </div>
      </section>

      {/* ─── MULTI-LOCATIE BANNER ─── */}
      <section className="bg-[#F9FAFB] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl px-8 py-6">
          <div>
            <h3 className="font-sans font-semibold text-[#111827] text-lg mb-1">
              Meer vestigingen of maatwerk nodig?
            </h3>
            <p className="text-[#6B7280] text-sm">
              We maken het mogelijk. Neem contact op voor een gesprek op maat.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#111827] hover:bg-[#111827] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap"
          >
            Gesprek inplannen
          </Link>
        </div>
      </section>

      {/* ─── SUPPORT SECTIE ─── */}
      <section className="bg-[#FFFFFF] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#4353FF] font-semibold text-sm uppercase tracking-widest mb-3">
              Support
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-[#111827] mb-4">
              Geen supportteam. Wel een lage prijs.
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Spont heeft geen mensen die op de telefoon wachten. Dat kost geld
              — en dat betaal jij dan. Wij vinden het niet nodig. Support gaat
              via AI en tickets, en wordt snel opgepakt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Blok 1 – inbegrepen */}
            <div className="bg-[#111827] rounded-3xl p-7">
              <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Bot size={20} className="text-white" />
              </div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                Inbegrepen
              </p>
              <h3 className="font-sans font-semibold text-white mb-2">
                AI + Tickets
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Snel, effectief, geen wachtrijen. Inbegrepen in elk plan.
              </p>
            </div>

            {/* Blok 2 – optioneel */}
            <Link href="/contact#formulier" className="card-hover bg-[#F9FAFB] rounded-3xl p-7 block">
              <div className="w-10 h-10 bg-[#4353FF]/10 rounded-2xl flex items-center justify-center mb-4">
                <Users size={20} className="text-[#4353FF]" />
              </div>
              <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mb-2">
                Optioneel
              </p>
              <h3 className="font-sans font-semibold text-[#111827] mb-2">
                Spont Dealer
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Wil je een vast contactpersoon? Een gecertificeerde dealer
                helpt je. Eigen maandelijks tarief.
              </p>
            </Link>

            {/* Blok 3 – optioneel */}
            <div className="bg-[#F9FAFB] rounded-3xl p-7">
              <div className="w-10 h-10 bg-[#4353FF]/10 rounded-2xl flex items-center justify-center mb-4">
                <Wrench size={20} className="text-[#4353FF]" />
              </div>
              <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-wider mb-2">
                Optioneel
              </p>
              <h3 className="font-sans font-semibold text-[#111827] mb-2">
                Losse hulp
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                €59 per uur. Online of op locatie. Per half uur afgerekend.
              </p>
            </div>
          </div>

          <p className="text-center text-[#6B7280] text-sm mt-8">
            De meeste klanten hebben blok 2 en 3 nooit nodig. Maar als je het
            wil — het kan.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-sans font-semibold text-[#111827] mb-12 text-center">
            Veelgestelde vragen.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-2xl px-7 py-5 group cursor-pointer"
              >
                <summary className="font-semibold text-[#111827] text-base list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[#4353FF] text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-[#6B7280] text-sm mt-4 leading-relaxed">{faq.a}</p>
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
