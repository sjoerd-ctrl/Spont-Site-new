import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import { DoelgroepTile } from "@/components/doelgroepen/DoelgroepTile";

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

      {/* ─── TILE GRID ─── */}
      <section className="bg-[#FCF9F4] py-6 px-6">
        <div className="w-full">

          {/* Rij 1: featured links + 2 tiles rechts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start mb-3">
            <DoelgroepTile
              label="Vol terras, drukke bediening"
              headline="Restaurants"
              description="Of je nu een bruine kroeg, een trendy bistro of een groot terrasrestaurant hebt — Spont houdt de bediening soepel. Tafelorders, splits rekeningen, alles in één systeem."
              href="/doelgroepen/restaurants"
              imageSrc="https://images.unsplash.com/photo-1657198642762-bae3c6958e80?w=1200&q=80"
              featured
            />
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <DoelgroepTile
                label="Ochtenddrukte, loyaliteit, snelheid"
                headline="Koffiezaken"
                description="In de ochtendspits telt elke seconde. Razendsnel afrekenen, loyaliteitskaarten bijhouden en je meest bestelde drankjes altijd op één tik."
                href="/doelgroepen/coffee-bars"
                imageSrc="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
              />
              <DoelgroepTile
                label="Snel aan de toog"
                headline="Café & kroeg"
                description="Grote knoppen, snelle tap-betaling en een omzetoverzicht aan het einde van de avond — zonder gedoe."
                href="/doelgroepen/cafes"
                imageSrc="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
              />
              <DoelgroepTile
                label="Van bestelling tot afgifte"
                headline="Quick Service"
                description="Kassa direct gekoppeld aan de keuken. Nummers voor gasten, elke bestelling op de juiste plek — snel en foutloos."
                href="/doelgroepen/quick-service"
                imageSrc="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
              />
              <DoelgroepTile
                label="Toonbank, snel, overzichtelijk"
                headline="Bakkerijen"
                description="Afrekenen aan de balie snel en overzichtelijk. Een kassa die bijhoudt wat je verkoopt en wat je verdient."
                href="/doelgroepen/bakkerijen"
                imageSrc="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
              />
            </div>
          </div>

          {/* Rij 2: 3 gelijke tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <DoelgroepTile
              label="Ook als het donker en druk is"
              headline="Discotheek & club"
              description="Helder scherm, grote knoppen en Tap to Pay. Spont werkt ook als de muziek hard staat."
              href="/doelgroepen/discotheken"
              imageSrc="/images/disco-muziekgieterij.jpg"
            />
            <DoelgroepTile
              label="Van baan tot bar"
              headline="Bowling & leisure"
              description="Van baanverhuur tot horeca-omzet — alles op één plek. Helder overzicht, ook op drukke vrijdagavonden."
              href="/doelgroepen/bowlingbanen"
              imageSrc="https://images.unsplash.com/photo-1539805668195-3c16b76c90c1?w=800&q=80"
            />
            <DoelgroepTile
              label="Plug-and-play, geen contract"
              headline="Evenementen & festivals"
              description="Eén keer opstarten, meteen aan de slag. Tap to Pay op je telefoon of vaste kassa — jij kiest."
              href="/doelgroepen/evenementen"
              imageSrc="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
            />
          </div>

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
