import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import DoelgroepenRotator from "@/components/home/DoelgroepenRotator";
import JsonLd from "@/components/shared/JsonLd";
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Bot,
  ShieldCheck,
  Zap,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const badges = [
  "Binnen enkele minuten operationeel",
  "Geen opstartkosten",
  "Maandelijks opzegbaar",
  "Updates inbegrepen",
  "AI + ticketsupport inbegrepen",
];

const valueProps = [
  {
    icon: Zap,
    title: "Klaar in één dienst",
    body: "Nieuw personeel leert het systeem in één dienst. Geen dag training, geen dikke handleiding.",
  },
  {
    icon: Bot,
    title: "Goedkoop omdat het slim is",
    body: "Geen supportteam dat je kosten opstuwt. AI en tickets handelen het af — snel en effectief. Wil je meer? Dat koop je bij.",
  },
  {
    icon: ShieldCheck,
    title: "Eerlijke prijs",
    body: "Geen verborgen kosten, geen verplichte modules. Wat je ziet, is wat je betaalt.",
  },
  {
    icon: BarChart3,
    title: "Altijd inzicht",
    body: "Via het dashboard zie je je omzet, ook als je er niet bij bent. Per product, per medewerker, per dag.",
  },
];

const steps = [
  {
    num: "01",
    title: "Maak een account",
    body: "Start in een paar minuten. Geen creditcard, geen verplichtingen.",
  },
  {
    num: "02",
    title: "Zelf instellen in enkele minuten",
    body: "Menukaart aanmaken, printer koppelen, betaalterminal instellen. De AI-assistent helpt je stap voor stap.",
  },
  {
    num: "03",
    title: "Klaar om te serveren",
    body: "Je bent live. Bestellingen komen direct binnen.",
  },
];

const testimonials = [
  {
    quote:
      "Ons oude systeem was te ingewikkeld voor nieuw personeel. Spont is zo simpel dat iedereen er binnen een uur mee overweg kan.",
    name: "Marloes V.",
    role: "Eigenaar, Brasserie de Hoek",
  },
  {
    quote:
      "Eindelijk een kassa waarbij de prijs gewoon klopt. Geen verborgen kosten, geen rare contracten. We zijn al twee jaar klant.",
    name: "Thomas K.",
    role: "Bedrijfsleider, Café Central",
  },
  {
    quote:
      "Eindelijk een kassasysteem zonder verrassingen op de factuur. Wat ze zeggen, is wat je betaalt.",
    name: "Anita R.",
    role: "Eigenaar, Lunchroom Zonnig",
  },
];


const plans = [
  {
    name: "Start",
    price: "€89",
    period: "/maand",
    description: "1–2 verkooppunten. Alle functies inbegrepen.",
    features: ["Kassasysteem, handhelds, KDS", "QR-bestellen & online bestellen", "Loyalty & BI-rapportages", "AI + ticketsupport"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "€169",
    period: "/maand",
    description: "Onbeperkt verkooppunten. Meerdere vestigingen.",
    features: ["Alles van Start", "Onbeperkte verkooppunten", "Meerdere vestigingen in één dashboard", "AI-inzichten & prioriteitstickets"],
    highlight: true,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Spont",
          url: "https://www.spont.nl",
          description:
            "Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig voor het personeel, snel in support, eerlijk in prijs.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.spont.nl/blog?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.spont.nl",
            },
          ],
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-6">
              Kassasysteem voor de horeca
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-semibold leading-[1.05] mb-6">
              Jouw kassa.
              <br />
              <em className="not-italic text-white/80">Jouw tempo.</em>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
              Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig
              voor het personeel. Eerlijk in prijs. Geen verrassingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-8 py-4 rounded-full transition-colors text-base inline-block text-center"
              >
                Start direct
              </Link>
              <Link
                href="/doelgroepen"
                className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base inline-block text-center backdrop-blur-sm"
              >
                Voor jouw type zaak
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 text-xs text-white/70 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <CheckCircle size={12} className="text-[#CC5533]" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY SPONT ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Waarom Spont?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Meer tafels, minder gedoe.
            </h2>
            <p className="text-[#5C5550] mt-4 max-w-xl mx-auto">
              Alles wat je nodig hebt. Niks wat je niet gebruikt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <div
                  key={vp.title}
                  className="card-hover bg-[#F6F3EE] rounded-3xl p-8 hover:bg-[#F0EDE8]"
                >
                  <div className="w-12 h-12 bg-[#CC5533]/10 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#CC5533]" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#1A1714] mb-2">
                    {vp.title}
                  </h3>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{vp.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURE SHOWCASE ─── */}
      <section className="bg-[#F6F3EE] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Het platform
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Eén systeem voor alles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-hover md:col-span-2 bg-[#2D4B3F] rounded-[2rem] overflow-hidden relative min-h-72">
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=80"
                alt="Kassasysteem"
                className="w-full h-full object-cover opacity-40 absolute inset-0"
              />
              <div className="relative z-10 p-10 flex flex-col justify-end h-full min-h-72">
                <Smartphone size={28} className="text-white/60 mb-4" />
                <h3 className="font-serif text-2xl text-white font-semibold mb-2">
                  Kassasysteem
                </h3>
                <p className="text-white/70 text-sm max-w-sm">
                  Snel, overzichtelijk en betrouwbaar. Werkt op iPad, tablet of
                  touchscreen. Personeel leert het in één dienst.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="card-hover bg-[#FCF9F4] rounded-[2rem] p-8 flex-1">
                <TrendingUp size={22} className="text-[#CC5533] mb-4" />
                <h3 className="font-serif font-semibold text-[#1A1714] mb-2">Rapportages</h3>
                <p className="text-[#5C5550] text-sm">
                  Omzet per periode, medewerker en product. Altijd beschikbaar — ook van thuis.
                </p>
              </div>
              <div className="card-hover bg-[#CC5533] rounded-[2rem] p-8 flex-1">
                <CheckCircle size={22} className="text-white mb-4" />
                <h3 className="font-serif font-semibold text-white mb-2">QR-bestellen</h3>
                <p className="text-white/80 text-sm">
                  Gasten bestellen zelf via QR-code. De bon gaat direct naar de bar of keuken.
                </p>
              </div>
            </div>

            <div className="card-hover bg-[#FCF9F4] rounded-[2rem] p-8">
              <Clock size={22} className="text-[#CC5533] mb-4" />
              <h3 className="font-serif font-semibold text-[#1A1714] mb-2">Reserveringen</h3>
              <p className="text-[#5C5550] text-sm">
                Zonder commissie. Direct gekoppeld aan je kassa.
              </p>
            </div>
            <div className="card-hover bg-[#F0EDE8] rounded-[2rem] p-8">
              <Zap size={22} className="text-[#CC5533] mb-4" />
              <h3 className="font-serif font-semibold text-[#1A1714] mb-2">Betalingen</h3>
              <p className="text-[#5C5550] text-sm">
                Geïntegreerde pinbetalingen. Bonnen splitsen in seconden.
              </p>
            </div>
            <div className="card-hover bg-[#2D4B3F] rounded-[2rem] p-8">
              <BarChart3 size={22} className="text-white mb-4" />
              <h3 className="font-serif font-semibold text-white mb-2">Keuken & bar display</h3>
              <p className="text-white/70 text-sm">
                Digitale bonnen voor de keuken. Geen papier, geen misverstanden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOELGROEPEN ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Voor jou
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Voor welk type zaak ben jij?
            </h2>
            <p className="text-[#5C5550] mt-4 max-w-xl mx-auto">
              Zelfde systeem, eerlijke prijs — gemaakt voor jouw manier van werken.
            </p>
          </div>

          <DoelgroepenRotator />

          <div className="text-center mt-8">
            <Link href="/doelgroepen" className="text-sm text-[#CC5533] font-semibold hover:underline">
              Bekijk alle doelgroepen →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING PREVIEW ─── */}
      <section className="bg-[#F6F3EE] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Prijzen
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Wat je ziet, is wat je betaalt.
            </h2>
            <p className="text-[#5C5550] mt-4">
              Geen verborgen kosten. Geen jaarcontract. Alle functies inbegrepen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover rounded-3xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[#2D4B3F] text-white"
                    : "bg-white text-[#1A1714]"
                }`}
              >
                <div className="mb-6">
                  <h3 className={`font-serif text-xl font-semibold mb-1 ${plan.highlight ? "text-white" : "text-[#1A1714]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? "text-white/70" : "text-[#5C5550]"}`}>
                    {plan.description}
                  </p>
                  <p className={`text-4xl font-serif font-bold ${plan.highlight ? "text-white" : "text-[#1A1714]"}`}>
                    {plan.price}
                    <span className={`text-base font-normal ml-1 ${plan.highlight ? "text-white/60" : "text-[#5C5550]"}`}>
                      {plan.period}
                    </span>
                  </p>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white/80" : "text-[#5C5550]"}`}>
                      <CheckCircle size={14} className={plan.highlight ? "text-[#CC5533]" : "text-[#CC5533]"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[#CC5533] hover:bg-[#A33818] text-white"
                      : "bg-[#1A1714] hover:bg-[#2D4B3F] text-white"
                  }`}
                >
                  Start direct
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/prijzen" className="text-sm text-[#CC5533] font-semibold hover:underline">
              Alle prijsdetails bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Hoe werkt het?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Binnen enkele minuten operationeel.
            </h2>
            <p className="text-[#5C5550] mt-4">
              Geen wekenlange implementaties. Geen verborgen opstartkosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#CC5533]/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif font-bold text-[#CC5533] text-lg">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-[#1A1714] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5C5550] text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#F6F3EE] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-[#1A1714]">
              Wat horecaondernemers zeggen.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-white rounded-3xl p-8 shadow-sm">
                <p className="text-[#1A1714] text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1A1714] text-sm">{t.name}</p>
                  <p className="text-[#5C5550] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Klaar voor een kassa die gewoon werkt?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
