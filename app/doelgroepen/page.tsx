import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import { FeatureRow } from "@/components/doelgroepen/DoelgroepenFeatureRows";

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

// ─── Visual helper ────────────────────────────────────────────────────────────
// Verwijder img en vervang door een illustratie of UI-mockup.
function Visual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-72 bg-[#E8E0D6]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

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
      <section className="bg-[#FCF9F4] py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-6 md:px-8">

          <FeatureRow
            eyebrow="VOL TERRAS, DRUKKE BEDIENING"
            title="Restaurants"
            description="Of je nu een bruine kroeg, een trendy bistro of een groot terrasrestaurant hebt — Spont houdt de bediening soepel. Tafelorders, splits rekeningen, kaart- én contant betalen, alles in één systeem. Meer tafels bedienen zonder dat het ten koste gaat van de gastvrijheid."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/restaurants"
            reverse={false}
          >
            <Visual
              src="https://images.unsplash.com/photo-1657198642762-bae3c6958e80?w=1200&q=80"
              alt="Restaurants"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="OCHTENDDRUKTE, LOYALITEIT, SNELHEID"
            title="Koffiezaken"
            description="In de ochtendspits telt elke seconde. Spont laat je razendsnel afrekenen, loyaliteitskaarten bijhouden en je meest bestelde drankjes altijd op één tik bereiken. Klanten komen terug — en jij weet waarom."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/coffee-bars"
            reverse={true}
          >
            <Visual
              src="https://images.unsplash.com/photo-1702540565983-f9184533c42a?w=1200&q=80"
              alt="Koffiezaken"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="SNEL AAN DE TOOG"
            title="Café & kroeg"
            description="Druk aan de bar, muziek op volle sterkte, een rij klanten. Spont is ontworpen om in die chaos feilloos te werken. Grote knoppen, snelle tap-betaling, en een overzicht van de omzet aan het einde van de avond — zonder gedoe."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/cafes"
            reverse={false}
          >
            <Visual
              src="https://images.unsplash.com/photo-1761671595965-e03c4d5f779f?w=1200&q=80"
              alt="Café & kroeg"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="VAN BESTELLING TOT AFGIFTE"
            title="Quick Service"
            description="Bij quick service draait alles om doorlooptijd. Spont verbindt de kassa direct met de keuken, geeft nummers uit aan gasten en zorgt dat elke bestelling op de juiste plek uitkomt — snel, foutloos, zonder papieren bonnetjes."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/quick-service"
            reverse={true}
          >
            <Visual
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80"
              alt="Quick Service"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="TOONBANK, SNEL, OVERZICHTELIJK"
            title="Bakkerijen"
            description="Een volle toonbank, vaste klanten en een lunchpiek om 12 uur. Spont maakt afrekenen aan de balie snel en overzichtelijk. Geen ingewikkeld systeem, gewoon een kassa die bijhoudt wat je verkoopt en wat je verdient."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/bakkerijen"
            reverse={false}
          >
            <Visual
              src="https://images.unsplash.com/photo-1738153730506-3f1c165c30fc?w=1200&q=80"
              alt="Bakkerijen"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="OOK ALS HET DONKER EN DRUK IS"
            title="Discotheek & club"
            description="Spont werkt ook als het donker is en de muziek hard staat. Helder scherm, grote knoppen, en Tap to Pay zodat je geen muntjes of bonnetjes nodig hebt. Ideaal voor drukke bars en nachtclubs waar snelheid alles is."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/discotheken"
            reverse={true}
          >
            <Visual
              src="/images/disco-muziekgieterij.jpg"
              alt="Discotheek & club"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="VAN BAAN TOT BAR"
            title="Bowling & leisure"
            description="Van het reserveren van banen tot bestellingen aan de bar: Spont beheert alles op één plek. Combineer horeca-omzet met baanverhuur en houd altijd een helder overzicht — ook op drukke vrijdagavonden."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/bowlingbanen"
            reverse={false}
          >
            <Visual
              src="https://images.unsplash.com/photo-1539805668195-3c16b76c90c1?w=1200&q=80"
              alt="Bowling & leisure"
            />
          </FeatureRow>

          <FeatureRow
            eyebrow="PLUG-AND-PLAY, TAP TO PAY, GEEN CONTRACT"
            title="Evenementen & festivals"
            description="Eén keer opstarten, meteen aan de slag. Spont heeft geen langlopend contract nodig. Tap to Pay op je telefoon, mobiele pinautomaat of vaste kassa — jij kiest. Perfect voor festivals, markten en tijdelijke pop-ups."
            ctaLabel="Meer info"
            ctaHref="/doelgroepen/evenementen"
            reverse={true}
          >
            <Visual
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
              alt="Evenementen & festivals"
            />
          </FeatureRow>

        </div>
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
