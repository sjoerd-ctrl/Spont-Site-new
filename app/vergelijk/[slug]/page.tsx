import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import KostenCalculator from "@/components/shared/KostenCalculator";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type TabelRij = {
  criterium: string;
  spont: string;
  concurrent: string;
};

type Vergelijking = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subkop: string;
  spontSamenvatting: string;
  concurrentNaam: string;
  concurrentSamenvatting: string;
  tabel: TabelRij[];
  kiesSpont: string[];
  kiesConcurrent: string[];
  quote: { text: string; name: string; role: string };
  calculator?: "lightspeed" | "tebi";
};

// ─── CONTENT ──────────────────────────────────────────────────────────────────

const vergelijkingen: Record<string, Vergelijking> = {
  "lightspeed-alternatief": {
    metaTitle: "Spont vs Lightspeed | Eerlijk vergeleken",
    metaDescription:
      "Lightspeed Restaurant kost al snel €289/mnd. Spont start bij €59. Zie wat je krijgt voor je geld.",
    h1: "Spont vs Lightspeed Restaurant: wat past bij jouw zaak?",
    subkop:
      "Lightspeed is de marktleider. Spont is de betaalbare tegenhanger die net zoveel kan — voor een fractie van de prijs.",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "Lightspeed Restaurant",
    concurrentSamenvatting:
      "Lightspeed is gebouwd voor ketens en grotere organisaties. Krachtig, maar prijzig. Het volledige pakket kost snel €289/mnd, plus hardware en modules bovenop.",
    tabel: [
      { criterium: "Maandprijs (start)", spont: "€89/mnd (€59 met Payments)", concurrent: "Basis: €79/mnd — Volledig pakket: €289/mnd" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "~€1.100–€1.500 (hardware)" },
      { criterium: "Contract", spont: "Maandelijks opzegbaar", concurrent: "Maandelijks of jaarlijks" },
      { criterium: "Voorraadbeheer", spont: "✅ Basis inbegrepen", concurrent: "€129/mnd extra" },
      { criterium: "Hardware lock-in", spont: "❌ Geen", concurrent: "Pinautomaat verplicht via Lightspeed" },
      { criterium: "Support", spont: "AI + tickets", concurrent: "24/7 bij premium plan" },
      { criterium: "PIN tarieven", spont: "€0,085/tx debit", concurrent: "~1,4% pin, ~2,8% creditcard" },
      { criterium: "Analytics", spont: "✅ Realtime dashboard + AI insights", concurrent: "Geavanceerd (tegen meerprijs)" },
    ],
    kiesSpont: [
      "Je een volledig kassasysteem wil zonder enterprise-rekening",
      "Je eerlijk wil weten wat je betaalt",
      "Je geen duur supportteam nodig hebt",
      "Je snel wil starten zonder grote investering",
    ],
    kiesConcurrent: [
      "Je 10+ vestigingen hebt en een IT-afdeling",
      "Je geavanceerde analytics en internationale integraties nodig hebt",
      "Je een dedicated accountmanager verwacht",
    ],
    quote: {
      text: "Ons oude systeem kostte het dubbele en deed niet meer. Spont doet alles wat we nodig hebben, voor een eerlijke prijs.",
      name: "Marloes V.",
      role: "Eigenaar, Brasserie de Hoek",
    },
    calculator: "lightspeed",
  },

  "untill-alternatief": {
    metaTitle: "Spont vs unTill | Vergeleken op prijs, functies en support",
    metaDescription:
      "unTill werkt via resellers, prijzen zijn niet transparant. Spont wel. Vergelijk en beslis.",
    h1: "Spont vs unTill: welk kassasysteem past bij jouw zaak?",
    subkop:
      "unTill is populair in cafés en restaurants. Spont biedt hetzelfde voor een transparante prijs — zonder reseller tussenin.",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "unTill",
    concurrentSamenvatting:
      "unTill werkt via een netwerk van gecertificeerde resellers. Sterk voor wie lokale ondersteuning wil, maar je betaalt meer — en je weet van tevoren niet hoeveel.",
    tabel: [
      { criterium: "Maandprijs (start)", spont: "€89/mnd (€59 met Payments)", concurrent: "€69–€149/mnd via reseller" },
      { criterium: "Prijstransparantie", spont: "✅ Direct op website", concurrent: "❌ Alleen via reseller" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "€500–€2.000+ hardware + installatie" },
      { criterium: "Contract", spont: "Maandelijks opzegbaar", concurrent: "Afhankelijk van reseller" },
      { criterium: "Support", spont: "AI + tickets (bijkoopbaar)", concurrent: "24/7 via gecertificeerde resellers" },
      { criterium: "PIN tarieven", spont: "€0,085/tx debit", concurrent: "1,5–2,5% via reseller/betaalpartner" },
      { criterium: "Koppelingen", spont: "✅ Boekhouding, reservering, PMS, tap, delivery", concurrent: "✅ 125+ via resellers" },
      { criterium: "Horeca-specifiek", spont: "✅", concurrent: "✅" },
    ],
    kiesSpont: [
      "Je zelf wil weten wat je betaalt, zonder via een reseller te gaan",
      "Je snel wil starten zonder installatiekosten",
      "Je geen langlopend reseller-contract wil",
    ],
    kiesConcurrent: [
      "Je lokale, menselijke ondersteuning bij installatie en beheer wil",
      "Je een breed netwerk van gecertificeerde partners prefereert",
      "Je al een vaste relatie hebt met een unTill-reseller",
    ],
    quote: {
      text: "Eindelijk een kassasysteem waarbij de prijs gewoon klopt. Geen verborgen kosten, geen rare contracten.",
      name: "Thomas K.",
      role: "Bedrijfsleider, Café Central",
    },
  },



  "tebi-alternatief": {
    metaTitle: "Spont vs Tebi | Eerlijk vergeleken voor horeca",
    metaDescription:
      "Tebi start gratis. Spont start bij €59/mnd. Zie wanneer welk systeem beter past.",
    h1: "Spont vs Tebi: wat is het verschil voor jouw horecazaak?",
    subkop:
      "Tebi trekt aan met een gratis instap. Spont kiest voor een vaste prijs. Welk model past bij jou?",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "Tebi",
    concurrentSamenvatting:
      "Tebi is gratis tot €10.000 omzet per maand, daarna omzetgebaseerd. Goed voor starters — maar bij groei stijgt je rekening mee.",
    tabel: [
      { criterium: "Maandprijs", spont: "€89/mnd (€59 met Payments)", concurrent: "Gratis tot €10k omzet, daarna omzetgebaseerd" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "€0" },
      { criterium: "Contract", spont: "Maandelijks opzegbaar", concurrent: "Maandelijks opzegbaar" },
      { criterium: "Voorraadbeheer", spont: "✅ Basis inbegrepen", concurrent: "Beperkt" },
      { criterium: "Tafelbeheer", spont: "✅ Volledig (plattegrond, doorschuiven, splitsen)", concurrent: "Beperkt" },
      { criterium: "PIN tarieven", spont: "€0,085/tx debit", concurrent: "Maestro: €0,05 flat + % (Adyen interchange++)" },
      { criterium: "Hardware lock-in", spont: "❌ Geen", concurrent: "❌ Geen" },
      { criterium: "Facturatie", spont: "✅", concurrent: "❌ Niet aanwezig" },
      { criterium: "Horeca-specifiek", spont: "✅ Volledig", concurrent: "⚠️ Deels (ook retail-gericht)" },
    ],
    kiesSpont: [
      "Je serieus horeca runt met tafelbeheer, split bills en meerdere medewerkers",
      "Je een vaste, voorspelbare maandprijs wil",
      "Je facturatie en volledige BI-rapportages nodig hebt",
    ],
    kiesConcurrent: [
      "Je net begint en zo weinig mogelijk wil betalen",
      "Je een heel eenvoudige setup nodig hebt",
      "Je maandelijks minder dan €10.000 omzet draait",
    ],
    quote: {
      text: "Eindelijk een kassasysteem zonder verrassingen op de factuur. Wat ze zeggen, is wat je betaalt.",
      name: "Anita R.",
      role: "Eigenaar, Lunchroom Zonnig",
    },
    calculator: "tebi",
  },

  "dish-alternatief": {
    metaTitle: "Spont vs DISH Kassasysteem | Vergeleken",
    metaDescription:
      "DISH heeft hardware lock-in en prijzen op aanvraag. Spont is transparant en hardware-vrij.",
    h1: "Spont vs DISH: wat past bij jouw horecazaak?",
    subkop:
      "DISH (Eijsink) is gebonden aan eigen hardware en het METRO-ecosysteem. Spont werkt op elk apparaat, met transparante prijzen.",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "DISH (Eijsink)",
    concurrentSamenvatting:
      "DISH is het kassasysteem van Eijsink, gekoppeld aan METRO/Makro. Geschikt voor ondernemers in dat ecosysteem, maar je bent gebonden aan hun hardware en prijsopbouw.",
    tabel: [
      { criterium: "Maandprijs", spont: "€89/mnd (€59 met Payments)", concurrent: "€50–€150/mnd op aanvraag" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "~€2.000 eenmalig" },
      { criterium: "Hardware lock-in", spont: "❌ Geen", concurrent: "✅ JA — verplicht DISH hardware" },
      { criterium: "Platform", spont: "iOS + Android", concurrent: "Alleen Android" },
      { criterium: "Offline modus", spont: "✅", concurrent: "✅" },
      { criterium: "Tap to Pay", spont: "✅ iPhone & Android", concurrent: "✅ via Adyen" },
      { criterium: "Prijstransparantie", spont: "✅", concurrent: "❌ Alleen op aanvraag" },
    ],
    kiesSpont: [
      "Je niet vast wil zitten aan specifieke hardware",
      "Je transparante prijzen wil zonder een offerte aan te vragen",
      "Je ook op iOS wil werken",
      "Je snel wil starten zonder grote hardware-investering",
    ],
    kiesConcurrent: [
      "Je al diep in het METRO/Makro-ecosysteem zit",
      "Je een sterke offline-modus nodig hebt",
      "Je de hardware-investering niet erg vindt",
    ],
    quote: {
      text: "Geen gedoe met hardware die alleen bij één leverancier werkt. Spont draait gewoon op onze eigen iPads.",
      name: "Kevin S.",
      role: "Eigenaar, Grand Café De Linde",
    },
  },

  "trivec-alternatief": {
    metaTitle: "Spont vs Trivec | Eerlijk vergeleken voor horeca",
    metaDescription:
      "Trivec werkt via resellers en is prijzig. Spont is transparant, hardware-vrij en maandelijks opzegbaar. Vergelijk en beslis.",
    h1: "Spont vs Trivec: welk kassasysteem past bij jouw zaak?",
    subkop:
      "Trivec is een Scandinavisch systeem populair in grote horecaketens. Spont biedt vergelijkbare functionaliteit voor een transparante prijs, zonder installatiekosten.",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "Trivec",
    concurrentSamenvatting:
      "Trivec is gericht op middelgrote en grote horecabedrijven. Krachtig en uitgebreid, maar de prijs is hoog en de implementatie tijdrovend. Setup vereist een technicus.",
    tabel: [
      { criterium: "Maandprijs (start)", spont: "€89/mnd (€59 met Payments)", concurrent: "€100–€200/mnd op aanvraag" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "€1.500–€3.000+ (hardware + installatie)" },
      { criterium: "Contract", spont: "Maandelijks opzegbaar", concurrent: "Jaarcontract standaard" },
      { criterium: "Setup door technicus", spont: "❌ Zelf instellen in 15 min", concurrent: "✅ Verplicht" },
      { criterium: "Hardware lock-in", spont: "❌ Geen", concurrent: "✅ Eigen hardware verplicht" },
      { criterium: "Platform", spont: "iOS + Android", concurrent: "Eigen hardware (Windows-based)" },
      { criterium: "Tap to Pay", spont: "✅ iPhone & Android", concurrent: "❌ Niet beschikbaar" },
      { criterium: "Prijstransparantie", spont: "✅", concurrent: "❌ Alleen via offerte" },
      { criterium: "Support", spont: "AI + tickets", concurrent: "24/7 via eigen team" },
    ],
    kiesSpont: [
      "Je niet vast wil zitten aan dure hardware en jaarcontracten",
      "Je snel wil starten zonder technicus",
      "Je Tap to Pay op iPhone wil gebruiken",
      "Je transparante prijzen wil zonder een offerte aan te vragen",
    ],
    kiesConcurrent: [
      "Je een grote keten runt met 10+ vestigingen en een IT-afdeling",
      "Je bereid bent te investeren in een uitgebreide implementatie",
      "Je 24/7 menselijke support wil bij complexe setups",
    ],
    quote: {
      text: "We zijn overgestapt van een duur systeem met jaarcontract naar Spont. Zelfde functies, veel lagere kosten, en we kunnen maandelijks opzeggen.",
      name: "Joost B.",
      role: "Eigenaar, Brasserie Noord",
    },
  },

  "orderbird-alternatief": {
    metaTitle: "Spont vs Orderbird | Vergeleken op prijs en functies",
    metaDescription:
      "Orderbird focust op iPad-kassa's voor de horeca. Spont biedt hetzelfde plus Tap to Pay, betere prijzen en meer koppelingen.",
    h1: "Spont vs Orderbird: wat past bij jouw horecazaak?",
    subkop:
      "Orderbird is een Duits iPad-kassasysteem voor de horeca. Spont biedt vergelijkbare functionaliteit met eigen betaalintegratie en lagere kosten.",
    spontSamenvatting:
      "Volledig kassasysteem. Geen supportteam — dat is waarom het zo goedkoop is. AI + tickets handelen het af. Wil je een mens? Dat koop je bij.",
    concurrentNaam: "Orderbird",
    concurrentSamenvatting:
      "Orderbird is een Duits kassasysteem gericht op restaurants en cafés. Werkt op iPad, maar vereist een aparte betaalterminal en heeft hogere transactiekosten door samenwerking met externe betaalpartners.",
    tabel: [
      { criterium: "Maandprijs (start)", spont: "€89/mnd (€59 met Payments)", concurrent: "€69–€129/mnd" },
      { criterium: "Opstartkosten", spont: "€0", concurrent: "€0–€500 (afhankelijk van pakket)" },
      { criterium: "Contract", spont: "Maandelijks opzegbaar", concurrent: "Maandelijks of jaarlijks" },
      { criterium: "Tap to Pay", spont: "✅ iPhone & Android", concurrent: "❌ Losse terminal verplicht" },
      { criterium: "Betaalintegratie", spont: "✅ Eigen integratie, één factuur", concurrent: "❌ Losse betaalpartner" },
      { criterium: "Platform", spont: "iOS + Android", concurrent: "iPad (iOS)" },
      { criterium: "Tafelbeheer", spont: "✅ Volledig (plattegrond, splitsen)", concurrent: "✅ Beschikbaar" },
      { criterium: "PIN tarieven", spont: "€0,085/tx debit", concurrent: "~1,5–2% via externe partner" },
      { criterium: "Koppelingen", spont: "✅ Boekhouding, reservering, delivery", concurrent: "Beperkt in NL" },
    ],
    kiesSpont: [
      "Je geen aparte betaalterminal wil aanschaffen",
      "Je Tap to Pay op iPhone wil gebruiken aan tafel",
      "Je ook op Android wil werken",
      "Je lagere transactiekosten wil via een eigen betaalintegratie",
    ],
    kiesConcurrent: [
      "Je al een iPad-setup hebt en tevreden bent met een losse betaalterminal",
      "Je een Duitstalige interface of support prefereert",
      "Je specifiek orderbird-koppelingen gebruikt",
    ],
    quote: {
      text: "Eindelijk één systeem voor kassa en betalingen. Geen losse terminal meer, geen tweede factuur. Simpeler dan ik dacht.",
      name: "Laura M.",
      role: "Eigenaar, Café De Oesterbar",
    },
  },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function CelIcon({ value }: { value: string }) {
  if (value.startsWith("✅")) return <CheckCircle size={16} className="text-[#111827] inline mr-1 shrink-0" />;
  if (value.startsWith("❌")) return <XCircle size={16} className="text-[#CC5533] inline mr-1 shrink-0" />;
  if (value.startsWith("⚠️")) return <AlertCircle size={16} className="text-amber-500 inline mr-1 shrink-0" />;
  return null;
}

function CelText({ value }: { value: string }) {
  const clean = value.replace(/^[✅❌⚠️]\s*/, "");
  return <>{clean}</>;
}

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = vergelijkingen[slug];
  if (!v) return {};
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  return Object.keys(vergelijkingen).map((slug) => ({ slug }));
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function VergelijkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = vergelijkingen[slug];
  if (!v) notFound();

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-[#FFFFFF] pt-32 pb-16 px-6 border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Vergelijking
          </p>
          <h1 className="text-4xl md:text-5xl font-sans text-[#111827] font-semibold mb-5 leading-tight">
            {v.h1}
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mb-8">{v.subkop}</p>
          <a
            href="https://admin.spont.nl"
            className="bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-8 py-4 rounded-full transition-colors inline-block"
          >
            Start direct
          </a>
        </div>
      </section>

      {/* ─── SAMENVATTING ─── */}
      <section className="bg-[#FFFFFF] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-hover bg-[#111827] rounded-3xl p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Spont</p>
            <p className="text-white/90 leading-relaxed">{v.spontSamenvatting}</p>
          </div>
          <div className="card-hover bg-[#F9FAFB] rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#CC5533] mb-3">{v.concurrentNaam}</p>
            <p className="text-[#6B7280] leading-relaxed">{v.concurrentSamenvatting}</p>
          </div>
        </div>
      </section>

      {/* ─── VERGELIJKINGSTABEL ─── */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-[#111827] mb-8">
            Vergelijking op een rij
          </h2>
          <div className="rounded-3xl overflow-hidden border border-[#E5E7EB]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#111827] text-white">
                  <th className="text-left px-6 py-4 font-medium text-white/60 w-1/3">Criterium</th>
                  <th className="text-left px-6 py-4 font-semibold">Spont</th>
                  <th className="text-left px-6 py-4 font-medium text-white/80">{v.concurrentNaam}</th>
                </tr>
              </thead>
              <tbody>
                {v.tabel.map((rij, i) => (
                  <tr
                    key={rij.criterium}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FFFFFF]"}
                  >
                    <td className="px-6 py-4 text-[#6B7280] font-medium">{rij.criterium}</td>
                    <td className="px-6 py-4 text-[#111827] font-medium">
                      <span className="inline-flex items-start gap-1">
                        <CelIcon value={rij.spont} />
                        <CelText value={rij.spont} />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#6B7280]">
                      <span className="inline-flex items-start gap-1">
                        <CelIcon value={rij.concurrent} />
                        <CelText value={rij.concurrent} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      {v.calculator && (
        <section className="bg-[#FFFFFF] py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <KostenCalculator model={v.calculator} concurrentNaam={v.concurrentNaam} />
          </div>
        </section>
      )}

      {/* ─── VOOR WIE ─── */}
      <section className="bg-[#FFFFFF] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-[#111827] mb-8">
            Voor wie is welk systeem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-hover bg-[#111827] rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC5533] mb-4">
                Kies Spont als…
              </p>
              <ul className="space-y-3">
                {v.kiesSpont.map((punt) => (
                  <li key={punt} className="flex items-start gap-3 text-white/90 text-sm">
                    <CheckCircle size={16} className="text-[#CC5533] shrink-0 mt-0.5" />
                    {punt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-hover bg-[#F9FAFB] rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC5533] mb-4">
                Kies {v.concurrentNaam} als…
              </p>
              <ul className="space-y-3">
                {v.kiesConcurrent.map((punt) => (
                  <li key={punt} className="flex items-start gap-3 text-[#6B7280] text-sm">
                    <CheckCircle size={16} className="text-[#6B7280] shrink-0 mt-0.5" />
                    {punt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="bg-[#F9FAFB] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-sans text-2xl text-[#111827] leading-snug italic mb-6">
            &ldquo;{v.quote.text}&rdquo;
          </blockquote>
          <p className="text-[#6B7280] text-sm font-medium">{v.quote.name}</p>
          <p className="text-[#6B7280] text-xs mt-1">{v.quote.role}</p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Klaar voor een kassa die gewoon werkt?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen. Geen creditcard."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
