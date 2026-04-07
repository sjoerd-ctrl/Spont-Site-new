import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Lees de privacyverklaring van Spont B.V. Wij beschermen je persoonsgegevens en leggen uit welke data we verzamelen en waarom.",
  alternates: { canonical: "https://www.spont.nl/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#FFFFFF] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-sans prose-headings:text-[#111827] prose-p:text-[#6B7280] prose-p:leading-relaxed prose-li:text-[#6B7280] prose-a:text-[#CC5533] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#111827] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-ul:my-4 prose-li:my-1">
        <h1 className="text-4xl font-semibold mb-2">Privacyverklaring Spont</h1>
        <p className="text-[#6B7280] text-sm !mt-0 mb-8">Laatst bijgewerkt: januari 2025</p>

        <h2>1. Wie zijn wij?</h2>
        <p>Spont wordt aangeboden door:</p>
        <p>
          <strong>Spont B.V.</strong><br />
          KvK-nummer: 72610549<br />
          Vestigingsadres: Oudezijds Achterburgwal, Amsterdam<br />
          Website: <a href="https://www.spont.nl">www.spont.nl</a><br />
          E-mail: <a href="mailto:support@spont.nl">support@spont.nl</a>
        </p>
        <p>Spont B.V. is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.</p>

        <h2>2. Welke persoonsgegevens verwerken wij?</h2>
        <p>Wij verwerken uitsluitend persoonsgegevens die noodzakelijk zijn voor het leveren van onze diensten. Dit kunnen onder andere de volgende gegevens zijn:</p>
        <ul>
          <li>Naam en bedrijfsnaam</li>
          <li>Adres- en vestigingsgegevens</li>
          <li>E-mailadres</li>
          <li>Telefoonnummer</li>
          <li>Facturatie- en betalingsgegevens</li>
          <li>IP-adres</li>
          <li>Inlog- en accountgegevens</li>
          <li>Gebruikersgegevens binnen de Spont-software</li>
          <li>Communicatiegegevens (zoals e-mails, supporttickets en chatberichten)</li>
        </ul>
        <p>Wij verwerken geen bijzondere of gevoelige persoonsgegevens (zoals medische gegevens), tenzij je deze zelf actief en bewust verstrekt. Dit wordt afgeraden.</p>

        <h2>3. Waarvoor gebruiken wij je persoonsgegevens?</h2>
        <p>Wij verwerken persoonsgegevens uitsluitend voor de volgende doeleinden:</p>
        <ul>
          <li>Het aangaan en uitvoeren van overeenkomsten</li>
          <li>Het leveren, beheren en onderhouden van de Spont-dienst</li>
          <li>Het aanmaken en beheren van accounts</li>
          <li>Facturatie, betalingen en administratie</li>
          <li>Klantenservice en support</li>
          <li>Communicatie over updates, wijzigingen en storingen</li>
          <li>Verbetering en beveiliging van onze dienstverlening</li>
          <li>Het voldoen aan wettelijke verplichtingen</li>
        </ul>
        <p>Wij gebruiken persoonsgegevens niet voor andere doeleinden dan hierboven beschreven.</p>

        <h2>4. Op welke grondslagen verwerken wij persoonsgegevens?</h2>
        <p>Wij verwerken persoonsgegevens op basis van één of meerdere van de volgende grondslagen:</p>
        <ul>
          <li>Uitvoering van een overeenkomst</li>
          <li>Wettelijke verplichting</li>
          <li>Toestemming (indien van toepassing)</li>
          <li>Gerechtvaardigd belang, zoals beveiliging, fraudepreventie en verbetering van onze diensten</li>
        </ul>

        <h2>5. Delen wij persoonsgegevens met derden?</h2>
        <p>Wij delen persoonsgegevens alleen met derden wanneer dit noodzakelijk is voor onze dienstverlening, zoals:</p>
        <ul>
          <li>Hosting- en infrastructuurproviders</li>
          <li>Betalings- en financiële dienstverleners</li>
          <li>IT-, support- en softwarepartners</li>
        </ul>
        <p>Deze partijen treden op als verwerker of subverwerker en mogen persoonsgegevens uitsluitend verwerken op basis van onze instructies.</p>
        <p><strong>Wij verkopen persoonsgegevens nooit aan derden.</strong></p>

        <h2>6. Verwerkers en subverwerkers</h2>
        <p>Voor zover wij binnen de Spont-software persoonsgegevens verwerken namens jou, geldt het volgende:</p>
        <ul>
          <li>Jij bent de verwerkingsverantwoordelijke</li>
          <li>Spont B.V. is de verwerker in de zin van de AVG</li>
        </ul>
        <p>Wij sluiten passende verwerkersovereenkomsten met subverwerkers en zorgen voor een passend beschermingsniveau.</p>
        <p>Op verzoek verstrekken wij een actueel overzicht van onze subverwerkers.</p>

        <h2>7. Hoe beveiligen wij persoonsgegevens?</h2>
        <p>Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen tegen verlies, misbruik en onbevoegde toegang, waaronder:</p>
        <ul>
          <li>Beveiligde verbindingen (SSL/TLS)</li>
          <li>Toegangsbeperkingen en autorisaties</li>
          <li>Logging en monitoring</li>
          <li>Regelmatige beveiligingsupdates</li>
        </ul>
        <p>De beveiligingsmaatregelen zijn afgestemd op de aard van de verwerking en de bijbehorende risico&apos;s.</p>

        <h2>8. Hoe lang bewaren wij persoonsgegevens?</h2>
        <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:</p>
        <ul>
          <li>Zolang de overeenkomst van kracht is</li>
          <li>Voor de duur van wettelijke bewaartermijnen (zoals fiscale verplichtingen)</li>
          <li>Na beëindiging alleen voor administratieve, juridische en beveiligingsdoeleinden</li>
        </ul>
        <p>Na beëindiging van de overeenkomst krijg je de mogelijkheid om je gegevens te exporteren, waarna deze conform onze bewaartermijnen worden verwijderd.</p>

        <h2>9. Jouw rechten</h2>
        <p>Je hebt onder de AVG de volgende rechten:</p>
        <ul>
          <li>Recht op inzage</li>
          <li>Recht op rectificatie</li>
          <li>Recht op verwijdering</li>
          <li>Recht op beperking van de verwerking</li>
          <li>Recht op dataportabiliteit</li>
          <li>Recht van bezwaar</li>
        </ul>
        <p>Je kunt een verzoek indienen via <a href="mailto:support@spont.nl">support@spont.nl</a>. Wij reageren binnen de wettelijke termijn.</p>

        <h2>10. Datalekken</h2>
        <p>Indien wij een datalek constateren dat mogelijk gevolgen heeft voor jouw privacy, stellen wij je hiervan zonder onredelijke vertraging op de hoogte.</p>
        <p>Je blijft zelf verantwoordelijk voor eventuele meldingen aan de Autoriteit Persoonsgegevens of betrokkenen, maar wij ondersteunen je hierbij waar nodig.</p>

        <h2>11. Gebruik van AI en geautomatiseerde verwerking</h2>
        <p>Spont B.V. maakt bij bepaalde onderdelen van haar dienstverlening gebruik van geautomatiseerde systemen en kunstmatige intelligentie (AI), bijvoorbeeld voor het beantwoorden van supportvragen, het analyseren van gebruik van de software en het verbeteren van onze dienstverlening.</p>
        <p>Deze systemen nemen geen besluiten die rechtsgevolgen hebben voor klanten of gebruikers zonder menselijke tussenkomst. AI wordt uitsluitend ingezet ter ondersteuning van onze medewerkers.</p>
        <p>Indien persoonsgegevens worden verwerkt via AI-systemen, gebeurt dit altijd:</p>
        <ul>
          <li>in overeenstemming met de AVG;</li>
          <li>op basis van een geldige grondslag;</li>
          <li>met passende technische en organisatorische beveiligingsmaatregelen.</li>
        </ul>
        <p>Je hebt het recht om bezwaar te maken tegen geautomatiseerde verwerking en kunt altijd verzoeken om menselijke tussenkomst.</p>

        <h2>12. Cookies</h2>
        <p>Spont gebruikt functionele en analytische cookies om de website goed te laten functioneren en te verbeteren. Wij gebruiken geen trackingcookies zonder jouw toestemming.</p>

        <h2>13. Wijzigingen</h2>
        <p>Wij kunnen deze privacyverklaring wijzigen als onze dienstverlening of wetgeving verandert. De meest actuele versie is altijd beschikbaar op <a href="https://www.spont.nl/privacy">www.spont.nl/privacy</a>.</p>

        <h2>14. Vragen of klachten</h2>
        <p>Heb je vragen over deze privacyverklaring of over de verwerking van persoonsgegevens? Neem dan contact op via <a href="mailto:support@spont.nl">support@spont.nl</a>.</p>
        <p>Je hebt daarnaast het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.</p>
      </div>
    </section>
  );
}
