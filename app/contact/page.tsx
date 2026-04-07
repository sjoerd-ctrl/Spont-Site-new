import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calendar, MapPin, Users } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact & direct starten",
  description:
    "Start direct met Spont of neem contact op. Geen verkooppraatje, gewoon een gesprek over jouw horecazaak.",
  openGraph: {
    title: "Contact & direct starten | Spont",
    description:
      "Start direct met Spont of neem contact op. Geen verkooppraatje.",
    url: "https://www.spont.nl/contact",
  },
  alternates: { canonical: "https://www.spont.nl/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-[#FFFFFF] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-sans text-[#111827] font-semibold leading-tight mb-6">
            Laten we kennismaken.
          </h1>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Geen verkooppraatje. Gewoon een gesprek over jouw zaak en wat Spont
            voor jou kan betekenen.
          </p>
        </div>
      </section>

      {/* ─── TWO ROUTES ─── */}
      <section className="bg-[#FFFFFF] py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Route 1 – Start direct */}
          <div className="card-hover bg-[#111827] rounded-3xl p-10 text-white">
            <Calendar size={28} className="mb-6 text-white/60" />
            <h2 className="font-sans text-2xl font-semibold mb-3">
              Probeer Spont direct
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Maak een account aan en begin direct. Geen creditcard nodig, geen
              verplichtingen. Je bent binnen een paar minuten operationeel.
            </p>
            <a
              href="https://admin.spont.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
            >
              Start direct
            </a>
          </div>

          {/* Route 2 – Partner */}
          <div className="card-hover bg-[#F9FAFB] rounded-3xl p-10">
            <Users size={28} className="mb-6 text-[#CC5533]" />
            <h2 className="font-sans text-2xl font-semibold text-[#111827] mb-3">
              Dealer of partner
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              Wil je Spont aanbieden aan jouw klanten? Of ben je op zoek naar
              een dealer bij jou in de buurt? We helpen je verder.
            </p>
            <a
              href="#formulier"
              className="inline-block bg-[#111827] hover:bg-[#111827] text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section id="formulier" className="bg-[#F9FAFB] py-20 px-6 scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sans text-2xl font-semibold text-[#111827] mb-8 text-center">
            Of stuur ons direct een bericht.
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* ─── DIRECT CONTACT ─── */}
      <section className="bg-[#FFFFFF] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <MessageCircle size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#111827] mb-1">WhatsApp</h3>
            <p className="text-[#6B7280] text-sm">Direct een bericht sturen</p>
            <a href="https://wa.me/31000000000" className="text-[#CC5533] text-sm font-medium mt-1 inline-block hover:underline">
              App ons →
            </a>
          </div>
          <div>
            <Calendar size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#111827] mb-1">E-mail</h3>
            <p className="text-[#6B7280] text-sm">We reageren binnen één werkdag</p>
            <a href="mailto:info@spont.nl" className="text-[#CC5533] text-sm font-medium mt-1 inline-block hover:underline">
              info@spont.nl →
            </a>
          </div>
          <div>
            <MapPin size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#111827] mb-1">Kantoor</h3>
            <p className="text-[#6B7280] text-sm">Nederland</p>
            <span className="text-[#6B7280] text-sm">Op afspraak</span>
          </div>
        </div>
      </section>
    </>
  );
}
