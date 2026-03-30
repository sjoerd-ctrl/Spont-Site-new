import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import { Heart, Users, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer het team achter Spont kennen. Wij bouwen een eerlijk, eenvoudig kassasysteem voor de horeca. Zonder verborgen kosten, zonder gedoe.",
  openGraph: {
    title: "Over ons | Spont",
    description:
      "Het team achter Spont. Wij bouwen een eerlijk kassasysteem voor de horeca.",
    url: "https://www.spont.nl/over-ons",
  },
  alternates: { canonical: "https://www.spont.nl/over-ons" },
  other: { "article:modified_time": "2026-03-30" },
};

const kernwaarden = [
  {
    icon: Heart,
    title: "Eerlijk",
    body: "Geen verborgen kosten, geen ingewikkelde contracten. We zeggen wat we doen, en we doen wat we zeggen.",
  },
  {
    icon: Zap,
    title: "Laagdrempelig",
    body: "Technologie die werkt zonder uitleg. Nieuw personeel is er in één dienst mee vertrouwd.",
  },
  {
    icon: Users,
    title: "Persoonlijk",
    body: "We zijn geen anoniem bedrijf. Achter elk ticket zit een mens die de horeca kent en begrijpt wat je nodig hebt.",
  },
  {
    icon: Shield,
    title: "Betrouwbaar",
    body: "Tijdens de drukke vrijdagavond mag er niks misgaan. Wij ook niet.",
  },
];

const team = [
  {
    name: "Flip van den Bosch",
    role: "Co-founder & CEO",
    bio: "Flip groeide op in de horeca. Hij zag hoe kassasystemen het werk zwaarder maakten in plaats van makkelijker. Dat wilde hij anders.",
  },
  {
    name: "Sjoerd van den Bosch",
    role: "Co-founder & CTO",
    bio: "Sjoerd bouwt het systeem dat Flip voor ogen had. Technologie die zichzelf wegcijfert, zodat de horeca centraal staat.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=2000&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Over ons
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-white font-semibold leading-tight mb-6">
            Minder techniek,
            <br />
            <em className="not-italic text-white/80">meer gastvrijheid.</em>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Spont is gebouwd door twee broers die geloofden dat een kassasysteem
            het werk in de horeca makkelijker moet maken — niet ingewikkelder.
          </p>
        </div>
      </section>

      {/* ─── WAAROM WE ZIJN BEGONNEN ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
              Ons verhaal
            </p>
            <h2 className="text-3xl font-serif font-semibold text-[#1A1714] mb-6">
              Waarom we zijn begonnen.
            </h2>
            <p className="text-[#5C5550] leading-relaxed mb-4">
              We groeiden op in de horeca. We zagen hoe kassasystemen het werk
              zwaarder maakten. Trage systemen, ingewikkelde interfaces, support
              die pas drie dagen later reageerde.
            </p>
            <p className="text-[#5C5550] leading-relaxed mb-4">
              Dus bouwden we Spont. Een systeem dat personeel in één dienst
              onder de knie heeft. Met support via AI en tickets — snel, zonder
              contracten die je vastzetten.
            </p>
            <p className="text-[#5C5550] leading-relaxed">
              Geen grote investeerders, geen anoniem bedrijf. Gewoon twee broers
              die iets wilden bouwen dat echt werkt — voor ondernemers zoals jij.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2D4B3F] rounded-3xl p-8 text-white">
              <p className="text-5xl font-serif font-bold mb-2">500+</p>
              <p className="text-white/70 text-sm">Horecazaken die dagelijks draaien op Spont</p>
            </div>
            <div className="bg-[#CC5533] rounded-3xl p-8 text-white">
              <p className="text-5xl font-serif font-bold mb-2">&lt;2u</p>
              <p className="text-white/70 text-sm">Gemiddelde responstijd via AI + tickets</p>
            </div>
            <div className="bg-[#F6F3EE] rounded-3xl p-8 col-span-2">
              <p className="text-5xl font-serif font-bold text-[#1A1714] mb-2">2019</p>
              <p className="text-[#5C5550] text-sm">Opgericht. Sindsdien geen dag zonder horeca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="bg-[#F6F3EE] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-[#1A1714] leading-snug italic">
            &ldquo;Persoonlijk werken betekent niet dat alles handmatig moet.
            AI regelt het standaardwerk — wij regelen de rest.&rdquo;
          </blockquote>
          <p className="text-[#5C5550] mt-6 text-sm">— Flip & Sjoerd van den Bosch, oprichters Spont</p>
        </div>
      </section>

      {/* ─── KERNWAARDEN ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Onze waarden
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Onze kernwaarden.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kernwaarden.map((kw) => {
              const Icon = kw.icon;
              return (
                <div key={kw.title} className="bg-[#F6F3EE] rounded-3xl p-8">
                  <div className="w-12 h-12 bg-[#CC5533]/10 rounded-2xl flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#CC5533]" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#1A1714] mb-2">
                    {kw.title}
                  </h3>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{kw.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="bg-[#F6F3EE] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Het team
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              De gezichten achter Spont.
            </h2>
            <p className="text-[#5C5550] mt-4">
              Geen anoniem bedrijf. Geen supportfabriek. Gewoon mensen die het
              vak kennen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="w-full h-20 bg-[#F6F3EE] flex items-end px-8 pt-8">
                  <div className="w-16 h-16 rounded-full bg-[#2D4B3F] flex items-center justify-center text-white font-serif font-bold text-xl">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif font-semibold text-xl text-[#1A1714] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#CC5533] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Klaar voor meer rust in je zaak?"
        subtitle="Probeer Spont en ontdek hoe het past bij jouw manier van werken."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
