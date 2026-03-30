import Link from "next/link";
import { MessageCircle, Calendar, MapPin, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-[#FCF9F4] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1A1714] font-semibold leading-tight mb-6">
            Laten we kennismaken.
          </h1>
          <p className="text-[#5C5550] text-lg max-w-xl mx-auto">
            Geen verkooppraatje. Gewoon een gesprek over jouw zaak en wat Spont
            voor jou kan betekenen.
          </p>
        </div>
      </section>

      {/* ─── TWO ROUTES ─── */}
      <section className="bg-[#FCF9F4] py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Route 1 – Demo */}
          <div className="bg-[#2D4B3F] rounded-3xl p-10 text-white">
            <Calendar size={28} className="mb-6 text-white/60" />
            <h2 className="font-serif text-2xl font-semibold mb-3">
              Demo aanvragen
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              We laten je Spont zien in actie — afgestemd op jouw type zaak.
              Een demo duurt 30 minuten en je weet daarna precies of het bij je
              past.
            </p>
            <a
              href="mailto:demo@spont.nl"
              className="inline-block bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
            >
              Demo inplannen
            </a>
          </div>

          {/* Route 2 – Partner */}
          <div className="bg-[#F6F3EE] rounded-3xl p-10">
            <Users size={28} className="mb-6 text-[#CC5533]" />
            <h2 className="font-serif text-2xl font-semibold text-[#1A1714] mb-3">
              Dealer of partner
            </h2>
            <p className="text-[#5C5550] text-sm leading-relaxed mb-8">
              Wil je Spont aanbieden aan jouw klanten? Of ben je op zoek naar
              een dealer bij jou in de buurt? We helpen je verder.
            </p>
            <a
              href="mailto:partners@spont.nl"
              className="inline-block bg-[#1A1714] hover:bg-[#2D4B3F] text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="bg-[#F6F3EE] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold text-[#1A1714] mb-8 text-center">
            Of stuur ons direct een bericht.
          </h2>
          <form className="space-y-5" action="mailto:info@spont.nl" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1A1714] mb-2">
                  Voornaam
                </label>
                <input
                  type="text"
                  className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
                  placeholder="Jan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1714] mb-2">
                  Achternaam
                </label>
                <input
                  type="text"
                  className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
                  placeholder="Jansen"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1714] mb-2">
                E-mailadres
              </label>
              <input
                type="email"
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50"
                placeholder="jan@mijnzaak.nl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1714] mb-2">
                Type zaak
              </label>
              <select className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533]">
                <option value="">Selecteer...</option>
                <option>Restaurant</option>
                <option>Café</option>
                <option>Koffiezaak</option>
                <option>Lunchroom</option>
                <option>Fastcasual / afhaal</option>
                <option>Bakkerij</option>
                <option>Discotheek / club</option>
                <option>Hotel</option>
                <option>Anders</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1714] mb-2">
                Bericht
              </label>
              <textarea
                rows={5}
                className="w-full bg-white rounded-2xl px-5 py-3.5 text-[#1A1714] text-sm outline-none focus:ring-2 focus:ring-[#CC5533] placeholder-[#5C5550]/50 resize-none"
                placeholder="Vertel ons over jouw zaak en wat je nodig hebt..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold py-4 rounded-full transition-colors text-sm"
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </section>

      {/* ─── DIRECT CONTACT ─── */}
      <section className="bg-[#FCF9F4] py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <MessageCircle size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#1A1714] mb-1">WhatsApp</h3>
            <p className="text-[#5C5550] text-sm">Direct een bericht sturen</p>
            <a href="https://wa.me/31000000000" className="text-[#CC5533] text-sm font-medium mt-1 inline-block hover:underline">
              App ons →
            </a>
          </div>
          <div>
            <Calendar size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#1A1714] mb-1">E-mail</h3>
            <p className="text-[#5C5550] text-sm">We reageren binnen één werkdag</p>
            <a href="mailto:info@spont.nl" className="text-[#CC5533] text-sm font-medium mt-1 inline-block hover:underline">
              info@spont.nl →
            </a>
          </div>
          <div>
            <MapPin size={22} className="text-[#CC5533] mx-auto mb-3" />
            <h3 className="font-semibold text-[#1A1714] mb-1">Kantoor</h3>
            <p className="text-[#5C5550] text-sm">Nederland</p>
            <span className="text-[#5C5550] text-sm">Op afspraak</span>
          </div>
        </div>
      </section>
    </>
  );
}
