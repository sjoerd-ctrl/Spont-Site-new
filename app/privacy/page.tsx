import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees het privacybeleid van Spont. Wij beschermen je persoonsgegevens en leggen uit welke data we verzamelen en waarom.",
  alternates: { canonical: "https://www.spont.nl/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#FCF9F4] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="font-serif text-4xl font-semibold text-[#1A1714] mb-6">Privacybeleid</h1>
        <p className="text-[#5C5550] text-sm mb-8">Laatst bijgewerkt: 1 januari 2026</p>
        <p className="text-[#5C5550] leading-relaxed">
          Spont hecht veel waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid
          leggen we uit welke gegevens we verzamelen, waarom we dat doen en hoe we daarmee omgaan.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-[#1A1714] mt-10 mb-4">
          Welke gegevens verzamelen we?
        </h2>
        <p className="text-[#5C5550] leading-relaxed">
          We verzamelen alleen gegevens die noodzakelijk zijn voor het leveren van onze diensten,
          zoals naam, e-mailadres en bedrijfsnaam. We verkopen uw gegevens nooit aan derden.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-[#1A1714] mt-10 mb-4">
          Vragen?
        </h2>
        <p className="text-[#5C5550] leading-relaxed">
          Neem contact op via{" "}
          <a href="mailto:privacy@spont.nl" className="text-[#CC5533] hover:underline">
            privacy@spont.nl
          </a>
        </p>
      </div>
    </section>
  );
}
