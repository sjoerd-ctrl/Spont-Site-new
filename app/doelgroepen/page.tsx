import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import DoelgroepenFeatureRows from "@/components/doelgroepen/DoelgroepenFeatureRows";

export const metadata: Metadata = {
  title: "Doelgroepen",
  description:
    "Spont werkt voor restaurants, koffiezaken, cafés, quick service, bakkerijen, bars en bowlingbanen. Ontdek wat Spont voor jouw type zaak doet.",
  openGraph: {
    title: "Doelgroepen | Spont",
    description:
      "Spont werkt voor restaurants, koffiezaken, cafés, quick service, bakkerijen, bars en bowlingbanen.",
    url: "https://www.spont.nl/doelgroepen",
  },
  alternates: { canonical: "https://www.spont.nl/doelgroepen" },
};

const doelgroepen = [
  {
    slug: "restaurants",
    title: "Restaurants",
    subtitle: "Vol terras, drukke bediening",
    description:
      "Of je nu een bruine kroeg, een trendy bistro of een groot terrasrestaurant hebt — Spont houdt de bediening soepel. Tafelorders, splits rekeningen, kaart- én contant betalen, alles in één systeem. Meer tafels bedienen zonder dat het ten koste gaat van de gastvrijheid.",
    img: "https://images.unsplash.com/photo-1657198642762-bae3c6958e80?w=1200&q=80",
  },
  {
    slug: "coffee-bars",
    title: "Koffiezaken",
    subtitle: "Ochtenddrukte, loyaliteit, snelheid",
    description:
      "In de ochtendspits is elke seconde telt. Spont laat je razendsnel afrekenen, loyaliteitskaarten bijhouden en je meest bestelde drankjes altijd op één tik bereiken. Klanten komen terug — en jij weet waarom.",
    img: "https://images.unsplash.com/photo-1702540565983-f9184533c42a?w=1200&q=80",
  },
  {
    slug: "cafes",
    title: "Café & kroeg",
    subtitle: "Snel aan de toog",
    description:
      "Druk aan de bar, muziek op volle sterkte, een rij klanten. Spont is ontworpen om in die chaos feilloos te werken. Grote knoppen, snelle tap-betaling, en een overzicht van de omzet aan het einde van de avond — zonder gedoe.",
    img: "https://images.unsplash.com/photo-1761671595965-e03c4d5f779f?w=1200&q=80",
  },
  {
    slug: "quick-service",
    title: "Quick Service",
    subtitle: "Van bestelling tot afgifte",
    description:
      "Bij quick service draait alles om doorlooptijd. Spont verbindt de kassa direct met de keuken, geeft nummers uit aan gasten en zorgt dat elke bestelling op de juiste plek uitkomt — snel, foutloos, zonder papieren bonnetjes.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
  },
  {
    slug: "bakkerijen",
    title: "Bakkerijen",
    subtitle: "Toonbank, snel, overzichtelijk",
    description:
      "Een volle toonbank, vaste klanten en een lunchpiek om 12 uur. Spont maakt afrekenen aan de balie snel en overzichtelijk. Geen ingewikkeld systeem, gewoon een kassa die bijhoudt wat je verkoopt en wat je verdient.",
    img: "https://images.unsplash.com/photo-1738153730506-3f1c165c30fc?w=1200&q=80",
  },
  {
    slug: "discotheken",
    title: "Discotheek & club",
    subtitle: "Ook als het donker en druk is",
    description:
      "Spont werkt ook als het donker is en de muziek hard staat. Helder scherm, grote knoppen, en Tap to Pay zodat je geen muntjes of bonnetjes nodig hebt. Ideaal voor drukke bars en nachtclubs waar snelheid alles is.",
    img: "/images/disco-muziekgieterij.jpg",
  },
  {
    slug: "bowlingbanen",
    title: "Bowling & leisure",
    subtitle: "Van baan tot bar",
    description:
      "Van het reserveren van banen tot bestellingen aan de bar: Spont beheert alles op één plek. Combineer horeca-omzet met baanverhuur en houd altijd een helder overzicht — ook op drukke vrijdagavonden.",
    img: "https://images.unsplash.com/photo-1539805668195-3c16b76c90c1?w=1200&q=80",
  },
  {
    slug: "evenementen",
    title: "Evenementen & festivals",
    subtitle: "Plug-and-play, Tap to Pay, geen contract",
    description:
      "Eén keer opstarten, meteen aan de slag. Spont heeft geen langlopend contract nodig. Tap to Pay op je telefoon, mobiele pinautomaat of vaste kassa — jij kiest. Perfect voor festivals, markten en tijdelijke pop-ups.",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
  },
];

export default function DoelgroepenPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1740953846896-b3acd846fa61?w=2000&q=80"
            alt="Horeca omgeving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Doelgroepen
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold leading-tight mb-6">
            Voor welk type zaak
            <br />
            <em className="not-italic text-white/80">ben jij?</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Spont werkt voor restaurants, cafés, koffiezaken en meer. Zelfde systeem, eerlijke prijs, gemaakt voor jouw manier van werken.
          </p>
        </div>
      </section>

      {/* ─── FEATURE ROWS ─── */}
      <section className="bg-[#FCF9F4] py-16 md:py-20">
        <DoelgroepenFeatureRows items={doelgroepen} />
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Herken je jouw zaak hier?"
        subtitle="Probeer Spont voor jouw type horeca. Starten duurt twee minuten."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
