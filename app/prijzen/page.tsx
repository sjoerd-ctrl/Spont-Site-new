import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import { CheckCircle, Bot, Users, Wrench } from "lucide-react";

// ─── PLANS ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Start",
    price: "€89",
    period: "/maand",
    description: "1–2 verkooppunten. Alle functies inbegrepen.",
    cta: "Demo aanvragen",
    ctaHref: "/contact",
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
    price: "€169",
    period: "/maand",
    description: "Onbeperkt verkooppunten. Meerdere vestigingen. Alles.",
    cta: "Start met Pro",
    ctaHref: "/contact",
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
    a: "Gebruik je Spont als betaaloplossing, dan betaal je €30/maand minder op je abonnement. POS-tarieven: debit €0,085/tx, creditcard consumer 1,89%, creditcard zakelijk 2,79%, Amex €0,05 + 2,20%, Bancontact €0,06 + 0,30%. Voor online bestellingen (ECOM) gelden aparte tarieven — zie de tariefstabel op deze pagina. Geen verborgen kosten.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2000&q=80"
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
            Wat je ziet,
            <br />
            <em className="not-italic text-white/80">is wat je betaalt.</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Volledig kassasysteem. Vanaf €59/maand. Geen opstartkosten,
            geen jaarcontract.
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
                className={`rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#2D4B3F] text-white ring-2 ring-[#2D4B3F]"
                    : "bg-[#F6F3EE] text-[#1A1714]"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block bg-[#CC5533] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    Meest gekozen
                  </span>
                )}
                <h2
                  className={`font-serif text-xl font-semibold mb-1 ${
                    plan.highlight ? "text-white" : "text-[#1A1714]"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlight ? "text-white/60" : "text-[#5C5550]"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-serif font-bold ${
                      plan.highlight ? "text-white" : "text-[#1A1714]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlight ? "text-white/60" : "text-[#5C5550]"
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
                          className="text-[#CC5533] mt-0.5 shrink-0"
                        />
                      ) : (
                        <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center">
                          <span
                            className={`text-base leading-none ${
                              plan.highlight
                                ? "text-white/25"
                                : "text-[#5C5550]/35"
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
                              : "text-[#1A1714]"
                            : plan.highlight
                            ? "text-white/35"
                            : "text-[#5C5550]/50"
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
                      ? "bg-[#CC5533] hover:bg-[#A33818] text-white"
                      : "bg-[#1A1714] hover:bg-[#2D4B3F] text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
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
              Gebruik je Spont als betaaloplossing?<br />
              Dan betaal je €30/maand minder.
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Geïntegreerde betalingen. Geen aparte terminal-SLA's. Geen verborgen kosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-white/60 text-xs mb-1">Start + Payments</p>
                <p className="text-white text-2xl font-serif font-bold">€59<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
              <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="text-white/60 text-xs mb-1">Pro + Payments</p>
                <p className="text-white text-2xl font-serif font-bold">€139<span className="text-sm font-normal text-white/60">/maand</span></p>
              </div>
            </div>
          </div>

          {/* Tarieven tabellen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* POS */}
            <div className="bg-[#F6F3EE] rounded-3xl p-7">
              <p className="text-[#CC5533] font-semibold text-xs uppercase tracking-widest mb-5">
                Kassa (POS)
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#EBE8E3]">
                    <th className="text-left text-[#5C5550] font-medium pb-3 pr-4">Betaalmethode</th>
                    <th className="text-right text-[#5C5550] font-medium pb-3">Tarief</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBE8E3]">
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Debit / pin</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,085 / tx</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Creditcard (consumer)</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">1,89%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Creditcard (zakelijk)</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">2,79%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">American Express</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,05 + 2,20%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Bancontact</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,06 + 0,30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ECOM */}
            <div className="bg-[#F6F3EE] rounded-3xl p-7">
              <p className="text-[#CC5533] font-semibold text-xs uppercase tracking-widest mb-5">
                Online bestellen (ECOM)
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#EBE8E3]">
                    <th className="text-left text-[#5C5550] font-medium pb-3 pr-4">Betaalmethode</th>
                    <th className="text-right text-[#5C5550] font-medium pb-3">Tarief</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBE8E3]">
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Maestro</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,10 / tx</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">iDEAL</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,25 / tx</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Creditcard (consumer)</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,05 + 1,89%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Creditcard (zakelijk)</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,05 + 2,79%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">American Express</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,08 + 3,10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-[#1A1714]">Bancontact</td>
                    <td className="py-3 text-right font-semibold text-[#1A1714]">€0,10 + 0,30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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
              Geen supportteam. Wel een lage prijs.
            </h2>
            <p className="text-[#5C5550] max-w-2xl mx-auto">
              Spont heeft geen mensen die op de telefoon wachten. Dat kost geld
              — en dat betaal jij dan. Wij vinden het niet nodig. Support gaat
              via AI en tickets, en wordt snel opgepakt.
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
                Snel, effectief, geen wachtrijen. Inbegrepen in elk plan.
              </p>
            </div>

            {/* Blok 2 – optioneel */}
            <div className="bg-[#F6F3EE] rounded-3xl p-7">
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
            </div>

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
            De meeste klanten hebben blok 2 en 3 nooit nodig. Maar als je het
            wil — het kan.
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
        primary={{ label: "Demo aanvragen", href: "/contact" }}
        secondary={{ label: "Stuur ons een bericht", href: "/contact" }}
      />
    </>
  );
}
