import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";

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
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    slug: "coffee-bars",
    title: "Koffiezaken",
    subtitle: "Ochtenddrukte, loyaliteit, snelheid",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  },
  {
    slug: "cafes",
    title: "Café & kroeg",
    subtitle: "Snel aan de toog",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
  },
  {
    slug: "quick-service",
    title: "Quick Service",
    subtitle: "Van bestelling tot afgifte",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    slug: "bakkerijen",
    title: "Bakkerijen",
    subtitle: "Toonbank, snel, overzichtelijk",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    slug: "discotheken",
    title: "Discotheek & club",
    subtitle: "Ook als het donker en druk is",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    slug: "bowlingbanen",
    title: "Bowling & leisure",
    subtitle: "Van baan tot bar",
    img: "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=800&q=80",
  },
];

export default function DoelgroepenPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=2000&q=80"
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

      {/* ─── DOELGROEPEN GRID ─── */}
      <section className="bg-[#FCF9F4] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doelgroepen.map((d) => (
            <Link
              key={d.slug}
              href={`/doelgroepen/${d.slug}`}
              className="card-hover cursor-pointer group rounded-3xl overflow-hidden relative block min-h-72"
            >
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/80 via-[#1A1714]/20 to-transparent" />
              <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-72">
                <h2 className="font-serif text-2xl font-semibold text-white">{d.title}</h2>
                <p className="text-sm text-white/70 mt-1">{d.subtitle}</p>
              </div>
            </Link>
          ))}
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
