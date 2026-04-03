import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Lees de algemene voorwaarden van Spont B.V. Transparant over onze dienstverlening, prijzen en afspraken.",
  alternates: { canonical: "https://www.spont.nl/voorwaarden" },
};

export default function VoorwaardenPage() {
  return (
    <section className="bg-[#FFFFFF] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-sans prose-headings:text-[#111827] prose-p:text-[#6B7280] prose-p:leading-relaxed prose-li:text-[#6B7280] prose-a:text-[#4353FF] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#111827] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2 prose-ul:my-4 prose-li:my-1 prose-ol:my-4">
        <h1 className="text-4xl font-semibold mb-2">Algemene Voorwaarden Spont</h1>
        <p className="text-[#6B7280] text-sm !mt-0 mb-8">Laatst bijgewerkt: januari 2025</p>

        <h2>1. Definities</h2>
        <p>In deze Algemene Voorwaarden wordt verstaan onder:</p>
        <ul>
          <li><strong>Overeenkomst:</strong> de overeenkomst tussen Leverancier en Klant met betrekking tot de levering van de Dienst.</li>
          <li><strong>App:</strong> de native Apple Spont-applicatie, beschikbaar via de Apple App Store.</li>
          <li><strong>Klant:</strong> de natuurlijke persoon of rechtspersoon die een Overeenkomst aangaat met Leverancier.</li>
          <li><strong>Gebrek:</strong> een aantoonbare storing in de Dienst waardoor deze niet functioneert conform de overeengekomen Functionaliteit.</li>
          <li><strong>Spoedonderhoud:</strong> onderhoud dat onmiddellijk moet worden uitgevoerd ter voorkoming of oplossing van beveiligingsincidenten of ernstige storingen.</li>
          <li><strong>Functionaliteit:</strong> de door Leverancier aangeboden functies en mogelijkheden van de Dienst.</li>
          <li><strong>Algemene Voorwaarden:</strong> deze algemene voorwaarden.</li>
          <li><strong>Onderhoudsvenster:</strong> Niet-Werkdagen.</li>
          <li><strong>Dienst:</strong> de door Leverancier als SaaS aangeboden Spont-software, toegankelijk via internet (HTML-applicatie) en/of de App.</li>
          <li><strong>Dienstvenster:</strong> alle tijd, met uitzondering van het Onderhoudsvenster en de tijd benodigd voor Spoedonderhoud.</li>
          <li><strong>Support:</strong> ondersteuning door Leverancier tijdens Werkuren met betrekking tot het gebruik van de Dienst, met uitdrukkelijke uitsluiting van ondersteuning voor hardware zoals pinterminals en bonprinters.</li>
          <li><strong>Gebruiker:</strong> een door Klant geautoriseerde gebruiker van de Dienst.</li>
          <li><strong>Leverancier:</strong> Spont B.V., gevestigd aan de Oudezijds Achterburgwal 136, 1012 DV Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 72610549, dan wel diens rechtsopvolger.</li>
          <li><strong>Werkuren:</strong> maandag tot en met vrijdag van 09:00 tot 17:00 uur (Nederlandse tijd), met uitzondering van Nederlandse feestdagen.</li>
          <li><strong>Werkdagen:</strong> maandag tot en met vrijdag, met uitzondering van Nederlandse feestdagen.</li>
        </ul>

        <h2>2. Toepasselijkheid en totstandkoming</h2>
        <p>2.1 Deze Algemene Voorwaarden zijn van toepassing op alle Overeenkomsten tussen Leverancier en Klant.</p>
        <p>2.2 De Overeenkomst komt tot stand door:</p>
        <ul>
          <li>online aanmelding via de website van Leverancier, bevestigd per e-mail; of</li>
          <li>ondertekening van een door Leverancier uitgebrachte offerte.</li>
        </ul>
        <p>2.3 Door het aangaan van de Overeenkomst verklaart Klant akkoord te gaan met deze Algemene Voorwaarden.</p>
        <p>2.4 De toepasselijkheid van algemene voorwaarden van Klant wordt uitdrukkelijk van de hand gewezen.</p>

        <h2>3. Levering van de Dienst</h2>
        <p>3.1 De Dienst wordt geleverd als Software as a Service (SaaS). Klant verkrijgt geen eigendomsrechten of licentie op de onderliggende software, uitsluitend een niet-exclusief gebruiksrecht gedurende de looptijd van de Overeenkomst.</p>
        <p>3.2 Hosting van de Dienst is inbegrepen.</p>
        <p>3.3 Klant zal de Dienst niet gebruiken op een wijze die schade, beveiligingsrisico&apos;s, overmatige belasting of onderbrekingen kan veroorzaken.</p>
        <p>3.4 Leverancier hanteert een fair use-beleid en is gerechtigd maatregelen te nemen bij excessief gebruik.</p>
        <p>3.5 Klant is verantwoordelijk voor zorgvuldig beheer van inloggegevens en het gebruik door Gebruikers.</p>
        <p>3.6 Klant gebruikt uitsluitend door Leverancier aangewezen software, browsers en hardware.</p>
        <p>3.7 Leverancier is nimmer verantwoordelijk voor gebreken in hardware. Klant dient zich hiervoor tot de hardwareleverancier te wenden.</p>
        <p>3.8 Klant is verantwoordelijk voor eigen infrastructuur, internetverbinding en minimaal één vast IP-adres.</p>
        <p>3.9 Leverancier streeft naar een beschikbaarheid van 99,9% per kalenderjaar binnen het Dienstvenster.</p>
        <p>3.10 Leverancier maakt back-ups uitsluitend voor interne continuïteitsdoeleinden. Klant heeft geen recht op herstel van back-ups.</p>

        <h2>4. Support, updates en upgrades</h2>
        <p>4.1 Support wordt geleverd op basis van best effort tijdens Werkuren.</p>
        <p>4.2 Een Gebrek wordt alleen in behandeling genomen indien dit aantoonbaar en reproduceerbaar is.</p>
        <p>4.3 Leverancier kan tijdelijke oplossingen implementeren indien noodzakelijk.</p>
        <p>4.4 Updates en upgrades worden uitgevoerd binnen het Onderhoudsvenster.</p>
        <p>4.5 Leverancier onderhoudt een roadmap; hieraan kunnen geen rechten worden ontleend.</p>
        <p>4.6 Klant is verantwoordelijk voor het tijdig bijwerken van de App.</p>

        <h2>5. Intellectuele eigendom</h2>
        <p>5.1 Alle intellectuele eigendomsrechten met betrekking tot de Dienst berusten bij Leverancier of diens licentiegevers.</p>
        <p>5.2 Klant verkrijgt uitsluitend een beperkt, niet-overdraagbaar gebruiksrecht voor interne doeleinden.</p>

        <h2>6. Prijzen, facturatie en betaling</h2>
        <p>6.1 Alle prijzen zijn exclusief btw.</p>
        <p>6.2 Leverancier is gerechtigd prijzen jaarlijks per 1 januari te indexeren.</p>
        <p>6.3 Facturatie vindt maandelijks achteraf plaats. Betaling dient binnen 30 dagen te geschieden.</p>
        <p>6.4 Leverancier is gerechtigd de Dienst op te schorten bij niet-tijdige betaling.</p>

        <h2>7. Duur en beëindiging</h2>
        <p>7.1 De Overeenkomst wordt aangegaan voor onbepaalde tijd.</p>
        <p>7.2 Leverancier is gerechtigd de Overeenkomst per direct te beëindigen bij wanprestatie, insolventie of misbruik.</p>
        <p>7.3 Na beëindiging behoudt Klant gedurende drie (3) maanden toegang tot de backend om data te exporteren.</p>

        <h2>8. Aansprakelijkheid</h2>
        <p>8.1 De totale aansprakelijkheid van Leverancier is beperkt tot het bedrag dat Klant in de maand voorafgaand aan het schadeveroorzakende feit heeft betaald.</p>
        <p>8.2 Leverancier is niet aansprakelijk voor indirecte schade, gevolgschade, winstderving of bedrijfsstagnatie.</p>
        <p>8.3 Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van het hoger management van Leverancier.</p>

        <h2>9. Overmacht</h2>
        <p>9.1 Leverancier is niet gehouden tot nakoming bij overmacht.</p>
        <p>9.2 Indien overmacht langer dan tien (10) dagen duurt, kan Klant de Overeenkomst buitengerechtelijk ontbinden zonder recht op schadevergoeding.</p>

        <h2>10. Geheimhouding</h2>
        <p>10.1 Partijen zijn verplicht vertrouwelijke informatie strikt geheim te houden.</p>
        <p>10.2 Geheimhoudingsverplichtingen blijven van kracht na beëindiging van de Overeenkomst.</p>

        <h2>11. Persoonsgegevens (AVG)</h2>
        <p>11.1 Klant treedt op als verwerkingsverantwoordelijke; Leverancier als verwerker.</p>
        <p>11.2 Leverancier verwerkt persoonsgegevens uitsluitend op instructie van Klant.</p>
        <p>11.3 Dit artikel geldt als basisverwerkersovereenkomst in de zin van de AVG.</p>

        <h2>12. Overdracht van rechten</h2>
        <p>12.1 Klant mag rechten en verplichtingen niet overdragen zonder schriftelijke toestemming van Leverancier.</p>
        <p>12.2 Leverancier mag rechten en verplichtingen vrij overdragen.</p>

        <h2>13. Toepasselijk recht en forumkeuze</h2>
        <p>13.1 Op de Overeenkomst is Nederlands recht van toepassing.</p>
        <p>13.2 Geschillen worden exclusief voorgelegd aan de bevoegde rechter te Amsterdam.</p>

        <h2>14. Gebruik van kunstmatige intelligentie (AI)</h2>
        <p>14.1 Leverancier kan gebruikmaken van geautomatiseerde systemen en kunstmatige intelligentie ter ondersteuning van haar dienstverlening, waaronder maar niet beperkt tot support, analyse en optimalisatie van de Dienst.</p>
        <p>14.2 Uitkomsten die (mede) tot stand komen door AI zijn informatief en adviserend van aard. Klant blijft te allen tijde zelf verantwoordelijk voor beslissingen die worden genomen op basis van deze informatie.</p>
        <p>14.3 Leverancier garandeert niet dat door AI gegenereerde output volledig foutloos, volledig of actueel is en is niet aansprakelijk voor schade die voortvloeit uit het gebruik daarvan, behoudens opzet of bewuste roekeloosheid.</p>
      </div>
    </section>
  );
}
