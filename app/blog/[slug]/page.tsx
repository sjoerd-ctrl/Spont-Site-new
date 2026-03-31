import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import { ScrollProgress } from "@/components/blog/ScrollProgress";
import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import { FadeUp, HeroReveal } from "@/components/shared/Animate";
import { Clock, ArrowLeft } from "lucide-react";

// Hero-afbeelding per artikel
const articleImages: Record<string, string> = {
  "kassasysteem-festival-evenement": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80",
  "kassasysteem-kiezen-starter":      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80",
  "hoe-werken-kaartbetalingen":       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80",
  "kassasysteem-vergelijken":         "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  "meerdere-horecalocaties-beheren":  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  "nieuw-restaurant-welke-kassa":     "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80",
  "tap-to-pay-iphone":                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80",
  "wat-kost-kassasysteem-restaurant": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
  "ai-support-revolutie":             "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80",
};

const readTimes: Record<string, string> = {
  "kassasysteem-festival-evenement": "5 min",
  "kassasysteem-kiezen-starter":      "6 min",
  "hoe-werken-kaartbetalingen":       "4 min",
  "kassasysteem-vergelijken":         "5 min",
  "meerdere-horecalocaties-beheren":  "5 min",
  "nieuw-restaurant-welke-kassa":     "4 min",
  "tap-to-pay-iphone":                "3 min",
  "wat-kost-kassasysteem-restaurant": "5 min",
  "ai-support-revolutie":             "4 min",
};

// ─── ARTICLE DATA ─────────────────────────────────────────────────────────────

type Article = {
  title: string;
  metaDescription: string;
  date: string;
  dateISO: string;
  category: string;
  content: React.ReactNode;
};

const articles: Record<string, Article> = {
  "kassasysteem-festival-evenement": {
    title: "Kassasysteem voor festivals en evenementen: waar let je op?",
    metaDescription:
      "Kies het juiste kassasysteem voor je festival of evenement. Plug-and-play, Tap to Pay, offline modus en geen contract.",
    date: "30 maart 2026",
    dateISO: "2026-03-30",
    category: "Evenementen",
    content: (
      <>
        <p>
          Je organiseert een festival, popupbar of cateringevenement. Je hebt een
          kassasysteem nodig dat direct werkt, zonder gedoe met een technicus,
          contracten of ingewikkelde setup. Dit artikel helpt je de juiste keuze
          te maken.
        </p>

        <h2>Wat is anders aan evenementenkassa&apos;s?</h2>
        <p>
          Een vaste horecazaak en een festival stellen totaal verschillende eisen
          aan een kassasysteem. In een vaste zaak heb je stabiele wifi, bekende
          klanten en hetzelfde team iedere dag. Op een festival staat alles onder
          druk: wifi die uitvalt, wisselende medewerkers en een setup die binnen
          twee uur klaar moet zijn.
        </p>
        <p>
          Een goed kassasysteem voor festivals is plug-and-play, flexibel en
          betrouwbaar als het internet faalt.
        </p>

        <h2>7 eisen voor een evenementenkassasysteem</h2>

        <h3>1. Plug-and-play, geen installatie</h3>
        <p>
          Je hebt geen tijd voor gedoe. Een kassasysteem voor festivals moet in
          15 minuten klaar zijn. Geen technicus, geen nachtenlang instellen.
          Direct na download beginnen met verkopen.
        </p>

        <h3>2. Tap to Pay op iPhone</h3>
        <p>
          Een aparte betaalterminal meeslepen is onpraktisch. Met Tap to Pay op
          je eigen iPhone kun je overal afrekenen. Sneller, minder hardware nodig.
        </p>

        <h3>3. Geen contractverplichting</h3>
        <p>
          Je bent twee maanden bezig met het event. Daarna niet meer. Waarom zou
          je twaalf maanden betalen? Zorg dat je maandelijks kunt opzeggen. Geen
          jaarcontracten, geen opzegtermijn.
        </p>

        <h3>4. Werkt op je eigen hardware</h3>
        <p>
          Geen verplichte hardware. Je eigen iPhone, je eigen iPad. Dit scheelt
          honderden euro&apos;s en je bent niet afhankelijk van apparaten van de
          leverancier.
        </p>

        <h3>5. QR-bestellen</h3>
        <p>
          Op drukke festivals heb je veel klanten en weinig handen. QR-bestellen
          helpt: gasten scannen een QR-code, bestellen en betalen zelf, en jij
          maakt het drankje. Dit scheelt een fulltime medewerker.
        </p>

        <h3>6. Offline modus</h3>
        <p>
          Festival-wifi is onbetrouwbaar. Je wilt niet stoppen met verkopen als
          het internet 20 minuten uitvalt. Zorg dat je kassasysteem offline kan
          werken en later synchroniseert wanneer wifi terugkomt.
        </p>

        <h3>7. Real-time rapportages</h3>
        <p>
          Na afloop wil je weten hoeveel je hebt omgezet. Per bar, per shift, per
          betaalmiddel. Real-time, niet na drie weken. Dit helpt je ook
          tussentijds bij te sturen.
        </p>

        <h2>Grote systemen versus wat je echt nodig hebt</h2>
        <p>
          Veel grote kassasystemen (Lightspeed, Square) zijn gemaakt voor vaste
          restaurants. Ze werken ook voor festivals, maar je betaalt veel meer dan
          nodig is: maandabonnementen van €50+, verplichte hardware voor
          honderden euro&apos;s, setup door een technicus en jaarcontracten.
        </p>
        <p>
          Wat je wél nodig hebt: snelle setup (15 minuten), Tap to Pay op je
          iPhone, offline modus, maandelijks opzegbaar en real-time omzet.
        </p>

        <h2>Wat biedt Spont voor evenementen?</h2>
        <ul>
          <li>Plug-and-play, je begint in 15 minuten</li>
          <li>Tap to Pay op je iPhone, geen aparte terminal nodig</li>
          <li>Maandelijks opzegbaar, geen contract</li>
          <li>Werkt op je eigen hardware (iPhone, iPad)</li>
          <li>QR-bestellen, zodat gasten zelf kunnen bestellen</li>
          <li>Offline modus, je werkt door als wifi uitvalt</li>
          <li>Real-time rapportages per bar en per shift</li>
        </ul>
        <p>
          Je betaalt alleen voor wat je gebruikt. Geen setupkosten, geen
          hardware.
        </p>

        <h2>Checklist voor je evenement</h2>
        <ul>
          <li>Hoeveel bars/verkooppunten heb ik nodig?</li>
          <li>Hoeveel medewerkers tegelijk aan het kassasysteem?</li>
          <li>Hoe lang duurt het event?</li>
          <li>Is wifi stabiel genoeg, of moet ik offline kunnen werken?</li>
          <li>Hebben gasten hun telefoon bij zich (voor QR-bestellen)?</li>
          <li>Wil ik per locatie rapportages zien?</li>
          <li>Hoeveel betaal ik zonder verborgen kosten?</li>
        </ul>

        <h2>Wat veel events vergeten</h2>
        <p>Dit zijn dingen waar organisatoren pas bij stilstaan als het evenement begint:</p>
        <ul>
          <li>
            <strong>Wifi valt weg, je kassa ook.</strong> Offline modus is geen luxe, het is noodzaak.
          </li>
          <li>
            <strong>Te weinig devices.</strong> Gebruik je eigen hardware, dan heb je dit probleem niet.
          </li>
          <li>
            <strong>Medewerkers kennen het systeem niet.</strong> Setup moet in 15 minuten.
          </li>
          <li>
            <strong>Betaalkosten hoger dan verwacht.</strong> Vraag het percentage per transactie van tevoren.
          </li>
          <li>
            <strong>Geen inzicht onderweg.</strong> Real-time dashboards zijn essentieel.
          </li>
        </ul>
      </>
    ),
  },

  "kassasysteem-kiezen-starter": {
    title: "Kassasysteem kiezen als starter: 7 vragen die je moet stellen",
    metaDescription:
      "Begin je een horecazaak? Stel deze 7 vragen voordat je een kassasysteem kiest. Van kosten tot contracten en support.",
    date: "30 maart 2026",
    dateISO: "2026-03-30",
    category: "Ondernemen",
    content: (
      <>
        <p>
          Je bent net begonnen met je horecazaak of je gaat binnenkort open. Een
          kassasysteem is nodig, maar welke? Er zijn tientallen aanbieders,
          iedereen beweert het beste te zijn, en je weet niet waar je op moet
          letten. Dit artikel helpt je daarbij.
        </p>

        <h2>Waarom deze 7 vragen?</h2>
        <p>
          Een goed kassasysteem bespaart je tijd en hoofdpijn. Een slechte keuze
          kost je maanden later veel geld en gedoe. Als starter heb je weinig
          marge voor fouten. Daarom deze zeven vragen &mdash; direct en
          praktisch.
        </p>

        <h2>1. Wat kost het echt?</h2>
        <p>
          Je ziet advertenties met &ldquo;vanaf 29 euro per maand&rdquo;. Mooi,
          maar wat staat daar onder? Vraag altijd naar het totaalpakket:
        </p>
        <ul>
          <li>Maandabonnement (welke features zitten erin?)</li>
          <li>Hardware (eigen iPad, of moet je hun hardware kopen?)</li>
          <li>Transactiekosten (meestal 1,5&ndash;2,5% per transactie)</li>
          <li>Setupkosten (installatie, training, technicus)</li>
          <li>Jaarlijkse kosten (updates, support)</li>
        </ul>
        <p>
          Maak een rekenvoorbeeldje met je eigen verwachte omzet. Dan zie je snel
          wat je echt betaalt.
        </p>

        <h2>2. Zit ik vast aan een contract?</h2>
        <p>
          Dit is kritiek als je net begint. Veel kassasystemen dwingen je in
          jaarcontracten met opzegtermijn. Als je na drie maanden merkt dat het
          niet werkt, betaal je nog negen maanden mee. Zorg dat je maandelijks
          kunt opzeggen. Geen uitzonderingen.
        </p>

        <h2>3. Hoe snel is mijn team ermee vertrouwd?</h2>
        <p>
          Een ingewikkeld systeem kost je tijd. Je personeel moet het in een uur
          kunnen bedienen, niet na twee dagen training. Check: is de interface
          intuïtief? Kun je het zelf online instellen? Hoeveel tijd kost
          opstarten en training?
        </p>
        <p>
          Een systeem waar je na 5 minuten uitleg mee kunt werken is beter dan
          één waar je een technicus moet betalen.
        </p>

        <h2>4. Wat heb ik nodig aan hardware?</h2>
        <p>
          Sommige systemen dwingen je hun hardware te kopen: dure beeldschermen,
          kassa&apos;s, terminals. Anderen werken op je eigen iPad. Als je al een
          iPad hebt, hoef je niet opnieuw te investeren. Dat scheelt honderden
          euro&apos;s.
        </p>
        <p>
          Vraag: kan ik mijn eigen hardware gebruiken, of dwing je me jouw
          hardware te kopen?
        </p>

        <h2>5. Hoe werkt de support?</h2>
        <p>
          Je kassasysteem valt tijdens het diner uit. Nu wat? Zorg dat je snel
          iemand kunt bereiken. Is er support buiten kantooruren? Hoe snel
          reageren zij op problemen? Check eerlijke reviews van andere
          gebruikers &mdash; die zeggen meer dan wat de verkoper zegt.
        </p>

        <h2>6. Groeit het systeem mee?</h2>
        <p>
          Je begint met één zaak. Misschien wil je straks uitbreiden naar twee
          locaties. Past je kassasysteem daar? Vraag: kan ik meerdere locaties
          beheren vanuit één dashboard? Kan ik eenvoudig rollen en rechten
          instellen? Kan ik later integraties toevoegen?
        </p>

        <h2>7. Wat zeggen andere ondernemers?</h2>
        <p>
          Lees echte reviews van bestaande gebruikers. Niet op de website van de
          verkoper, maar op onafhankelijke sites zoals Capterra, Trustpilot of
          Google Reviews. En vraag rechtstreeks aan collega&apos;s in je buurt
          wat zij gebruiken.
        </p>

        <h2>Wat biedt Spont?</h2>
        <p>
          Omdat je deze vragen stelt, geven we onze eigen antwoorden eerlijk:
        </p>
        <ul>
          <li>Maandelijks opzegbaar, geen verborgen kosten</li>
          <li>Hardware is je eigen iPad</li>
          <li>Setup duurt 15 minuten, je team kan er direct mee werken</li>
          <li>Tap to Pay werkt op je iPhone, geen aparte terminal nodig</li>
          <li>Support via AI-assistent en ticketsysteem</li>
          <li>Later eenvoudig uitbreiden naar meerdere locaties</li>
        </ul>
        <p>
          Geen garanties, geen marketing. Gewoon een systeem dat voor veel
          starters werkt.
        </p>
      </>
    ),
  },

  "hoe-werken-kaartbetalingen": {
    title: "Hoe werken kaartbetalingen eigenlijk?",
    metaDescription:
      "Van tikken op de terminal tot geld op je rekening — uitgelegd voor horecaondernemers. Transactiekosten, interchange en Tap to Pay.",
    date: "9 december 2025",
    dateISO: "2025-12-09",
    category: "Betalingen",
    content: (
      <>
        <p>
          Een gast tikt zijn kaart op je terminal. Drie seconden later staat er &ldquo;goedgekeurd&rdquo; op het
          scherm. Maar wat gebeurt er in die drie seconden? En waarom betaal je daar transactiekosten voor?
          Dit artikel legt het uit in gewone taal.
        </p>

        <h2>De reis van een kaartbetaling in vier stappen</h2>

        <h3>Stap 1: de gast betaalt</h3>
        <p>
          Je gast houdt zijn kaart of telefoon tegen de terminal (of je iPhone met Tap to Pay). De terminal
          leest de kaartgegevens en stuurt een verzoek naar de betaalverwerker.
        </p>

        <h3>Stap 2: autorisatie</h3>
        <p>
          De betaalverwerker stuurt het verzoek door naar de bank van je gast. Die bank checkt: is er genoeg
          saldo? Is de kaart geldig? Is er iets verdachts? Dit duurt meestal minder dan twee seconden.
        </p>

        <h3>Stap 3: verwerking</h3>
        <p>
          Na goedkeuring wordt de transactie geregistreerd. Het bedrag wordt gereserveerd op de rekening van
          je gast, maar staat nog niet op jouw rekening.
        </p>

        <h3>Stap 4: uitbetaling</h3>
        <p>
          Aan het einde van de dag worden alle goedgekeurde transacties in batch verwerkt. Het geld wordt
          overgemaakt naar jouw bankrekening. Dit heet &ldquo;settlement&rdquo; en duurt een tot drie werkdagen.
        </p>

        <h2>Wie verdient er aan je transactie?</h2>
        <p>Bij iedere kaartbetaling betaal je een percentage dat verdeeld wordt over drie partijen:</p>
        <ul>
          <li>
            <strong>Interchange fee</strong> — naar de bank van je gast. In Europa circa 0,2% voor
            betaalpassen en 0,3% voor creditcards.
          </li>
          <li>
            <strong>Scheme fee</strong> — naar het kaartnetwerk (Visa, Mastercard). Meestal 0,02&ndash;0,05%.
          </li>
          <li>
            <strong>Acquirer fee</strong> — naar jouw betaalverwerker. Dit is het deel met de meeste variatie:
            0,5&ndash;1,5%.
          </li>
        </ul>
        <p>
          In totaal betaal je tussen de 0,7% en 2,5% per transactie, afhankelijk van het type kaart en je
          betaalverwerker.
        </p>

        <h2>Waarom sommige kassasystemen duurder zijn dan andere</h2>
        <p>
          Bij veel kassasystemen heb je twee contracten: een met de kassaleverancier en een met een aparte
          betaalverwerker. Dit heeft nadelen:
        </p>
        <ul>
          <li>Dubbele contracten, twee facturen, twee klantenservices</li>
          <li>Hogere transactiekosten door extra marges</li>
          <li>Een apart pinapparaat dat storingsgevoeliger is</li>
        </ul>
        <p>
          Een ge&iuml;ntegreerde betaaloplossing &mdash; waarbij kassa en betaalverwerking in &eacute;&eacute;n
          product zitten &mdash; betekent &eacute;&eacute;n contract, &eacute;&eacute;n factuur en geen losse
          betaalterminal.
        </p>

        <h2>Tap to Pay: betalen zonder terminal</h2>
        <p>
          Tap to Pay op iPhone werkt via NFC, dezelfde technologie als in een betaalterminal. Voordelen: je
          medewerker rekent aan tafel af zonder terug te lopen naar de bar, geen extra apparaat om op te laden
          of te vervangen, en lagere kosten.
        </p>

        <h2>Drie praktische conclusies</h2>
        <ul>
          <li>
            <strong>Ken je transactiekosten.</strong> Op een maandomzet van 40.000 euro is het verschil tussen
            1,5% en 2% al 200 euro per maand.
          </li>
          <li>
            <strong>Overweeg een ge&iuml;ntegreerde oplossing.</strong> Minder contracten, minder hardware,
            minder gedoe.
          </li>
          <li>
            <strong>Bekijk Tap to Pay.</strong> Als je aan tafel wilt afrekenen, is dit de simpelste optie.
          </li>
        </ul>

        <h2>Hoe werkt dit bij Spont?</h2>
        <ul>
          <li>Geen apart pinapparaat of betaalcontract nodig</li>
          <li>Tap to Pay op iPhone standaard inbegrepen</li>
          <li>Een factuur voor alles: kassa en betalingen</li>
          <li>Transactiekosten direct inzichtelijk in je dashboard</li>
        </ul>
      </>
    ),
  },

  "kassasysteem-vergelijken": {
    title: "Kassasysteem vergelijken: waar let je op?",
    metaDescription:
      "Prijs is één ding. Maar wat met contracten, support en gebruiksgemak voor je personeel? Dit zijn de 7 punten die tellen bij het vergelijken.",
    date: "10 maart 2026",
    dateISO: "2026-03-10",
    category: "Ondernemen",
    content: (
      <>
        <p>
          Je hebt een shortlist van twee of drie kassasystemen. Nu moet je vergelijken. Maar hoe? Prijs is
          belangrijk, maar lang niet het enige. Dit artikel geeft je een helder kader.
        </p>

        <h2>Waarom vergelijken lastig is</h2>
        <p>
          Iedere aanbieder presenteert zijn product anders. De een toont een lage maandprijs maar rekent apart
          voor hardware en koppelingen. Zonder een vast vergelijkingskader vergelijk je appels met peren.
          Gebruik onderstaande zeven punten als checklist.
        </p>

        <h2>1. Totale kosten per maand</h2>
        <p>
          Niet het abonnement, maar het totaalplaatje. Tel op: abonnement, hardware (afgeschreven per maand),
          transactiekosten op je verwachte omzet, support en eventuele extra modules. Een systeem van 29 euro
          met dure hardware en hoge transactiekosten is duurder dan een systeem van 49 euro zonder bijkomende
          kosten.
        </p>

        <h2>2. Contractvoorwaarden</h2>
        <p>
          Zit je vast aan een jaarcontract? Is er een opzegtermijn? Voor starters en seizoensgebonden zaken
          is maandelijkse opzegbaarheid essentieel.
        </p>

        <h2>3. Hardware</h2>
        <p>
          Moet je hun hardware kopen, of werkt het op je eigen apparaten? Check ook: heb je een aparte
          betaalterminal nodig, of is betalen ge&iuml;ntegreerd? Met Tap to Pay op iPhone heb je geen losse
          terminal meer nodig.
        </p>

        <h2>4. Gebruiksgemak</h2>
        <p>
          Hoe snel kan je team ermee werken? Vraag om een demo of proefperiode. Laat een medewerker het
          systeem testen, niet jezelf &mdash; jij kent het product al van de presentatie.
        </p>

        <h2>5. Support</h2>
        <p>
          Hoe bereik je support? Wat zijn de reactietijden? Is er hulp buiten kantooruren? Check reviews van
          bestaande klanten over de support, niet alleen de beloftes op de website.
        </p>

        <h2>6. Schaalbaarheid</h2>
        <p>
          Als je wilt groeien naar twee of drie vestigingen, past je kassasysteem daar dan bij? Vraag: kan ik
          meerdere locaties beheren vanuit een dashboard? Is er een rol- en rechtensysteem?
        </p>

        <h2>7. Koppelingen</h2>
        <p>
          Welke andere software gebruik je? Check welke koppelingen standaard beschikbaar zijn en welke extra
          kosten. Een kassasysteem dat niet koppelt met je boekhoudpakket betekent handmatig gegevens
          overtypen.
        </p>

        <h2>Hoe scoort Spont op deze punten?</h2>
        <ul>
          <li>Totale kosten: scherp geprijsd, geen verborgen kosten, eigen betaalintegratie</li>
          <li>Contract: maandelijks opzegbaar, geen minimale looptijd</li>
          <li>Hardware: werkt op je eigen iPad en iPhone</li>
          <li>Gebruiksgemak: setup in 15 minuten, geen technicus nodig</li>
          <li>Support: via chat en ticketsysteem, onderdeel van je abonnement</li>
          <li>Schaalbaarheid: centraal dashboard voor meerdere locaties</li>
          <li>Koppelingen: boekhouding, bezorging en meer standaard inbegrepen</li>
        </ul>
      </>
    ),
  },

  "meerdere-horecalocaties-beheren": {
    title: "Meerdere horecalocaties beheren: zo houd je het overzicht",
    metaDescription:
      "Twee of drie locaties? Zo houd je grip op omzet, personeel en menukaarten met een centraal kassasysteem.",
    date: "15 februari 2026",
    dateISO: "2026-02-15",
    category: "Ondernemen",
    content: (
      <>
        <p>
          Je hebt een tweede of derde locatie geopend, of je bent dat aan het plannen. Met iedere locatie
          groeit de complexiteit. Hoe houd je grip op omzet, personeel en menukaarten zonder dat je dagelijks
          heen en weer rijdt?
        </p>

        <h2>Het probleem met losse systemen</h2>
        <p>Veel horecaondernemers beginnen met een kassasysteem voor een locatie. Bij locatie twee en drie ontstaan problemen:</p>
        <ul>
          <li>
            <strong>Geen centraal overzicht.</strong> Je moet per vestiging inloggen. Drie locaties betekent
            drie logins, drie rapportages, drie keer handmatig vergelijken.
          </li>
          <li>
            <strong>Menuwijzigingen kosten tijd.</strong> Dezelfde aanpassing drie keer doorvoeren. Vergeet
            je er een, dan staat er een ander menu.
          </li>
          <li>
            <strong>Geen vergelijkbare data.</strong> Als iedere locatie anders is ingericht, kun je de
            cijfers niet goed naast elkaar leggen.
          </li>
          <li>
            <strong>Personeelsbeheer wordt ingewikkeld.</strong> Medewerkers op meerdere locaties, verschillende
            rollen per vestiging, toegangsrechten die per locatie verschillen.
          </li>
        </ul>

        <h2>Wat je nodig hebt bij meerdere locaties</h2>

        <h3>Centraal dashboard</h3>
        <p>
          Een plek waar je in &eacute;&eacute;n oogopslag ziet hoe iedere locatie draait. Omzet per dag, per
          week, per locatie. Zonder dat je op drie plekken hoeft in te loggen.
        </p>

        <h3>Centraal menubeheer</h3>
        <p>
          Pas je menukaart een keer aan en rol het uit naar alle locaties. Of stel per locatie variaties in:
          misschien heeft je vestiging op het station een kleiner menu dan je hoofdzaak.
        </p>

        <h3>Rollen en rechten</h3>
        <p>
          Niet iedereen hoeft alles te zien. Je bedrijfsleider ziet de rapportages van zijn locatie. Je
          kassamedewerker ziet alleen het bestelmenu. Jij als eigenaar ziet alles.
        </p>

        <h3>Uniforme rapportages</h3>
        <p>
          Als je locaties vergelijkt, wil je appels met appels vergelijken. Welke locatie heeft de hoogste
          gemiddelde bonwaarde? Waar zijn de personeelskosten relatief het hoogst? Welke producten lopen goed
          in vestiging A maar niet in B?
        </p>

        <h2>De overstap: aandachtspunten</h2>
        <ul>
          <li>
            <strong>Datamigratie.</strong> Kun je bestaande producten, categorie&euml;n en prijzen importeren?
          </li>
          <li>
            <strong>Trainingstijd.</strong> Plan de overstap niet op je drukste weekend.
          </li>
          <li>
            <strong>Contracten opzeggen.</strong> Check de opzegtermijn van je huidige systemen.
          </li>
          <li>
            <strong>Testperiode.</strong> Begin met &eacute;&eacute;n locatie. Los problemen op voordat je de
            rest overzet.
          </li>
        </ul>

        <h2>Wat biedt Spont voor meerdere locaties?</h2>
        <ul>
          <li>Centraal dashboard: al je locaties in &eacute;&eacute;n overzicht</li>
          <li>Centraal menubeheer: aanpassen op &eacute;&eacute;n plek, uitrollen naar alle vestigingen</li>
          <li>Per locatie variaties mogelijk (ander menu, andere prijzen)</li>
          <li>Rollen en rechten: eigenaar, bedrijfsleider, kassamedewerker</li>
          <li>Uniforme rapportages over alle locaties</li>
          <li>Maandelijks opzegbaar, ook met meerdere vestigingen</li>
          <li>Tap to Pay en handhelds op iedere locatie, zonder extra terminals</li>
        </ul>
      </>
    ),
  },

  "nieuw-restaurant-welke-kassa": {
    title: "Nieuw restaurant openen: welke kassa kies je?",
    metaDescription:
      "Als je net begint, wil je geen gedoe. Dit zijn de vijf vragen die je moet stellen voordat je een kassasysteem kiest voor je nieuwe restaurant.",
    date: "25 februari 2026",
    dateISO: "2026-02-25",
    category: "Restaurant",
    content: (
      <>
        <p>
          Je opent een restaurant. Er komt van alles op je af: vergunningen, inrichting, personeel,
          leveranciers. Ergens op die lijst staat ook &ldquo;kassasysteem kiezen&rdquo;. Dit artikel helpt
          je daar snel doorheen.
        </p>

        <h2>Waarom je kassasysteem er meer toe doet dan je denkt</h2>
        <p>
          Je kassa is niet alleen een afrekenmachine. Het is het systeem waar iedere bestelling doorheen gaat,
          waar je omzet in bijhoudt, waar je personeel de hele avond mee werkt. Als je net begint, wil je
          twee dingen: snel starten en niet te veel betalen voor dingen die je nog niet nodig hebt.
        </p>

        <h2>Wat je nu nodig hebt (en wat nog niet)</h2>
        <p>Focus op wat je de eerste maanden echt nodig hebt:</p>
        <ul>
          <li>
            <strong>Wel nodig vanaf dag 1:</strong> bestellingen opnemen, afrekenen (pin en contant), bonnen
            printen of digitaal versturen, basisrapportages, en een simpele menukaart die je zelf kunt
            aanpassen.
          </li>
          <li>
            <strong>Kan later:</strong> voorraadbeheer, koppelingen met boekhouding, online bestellen,
            reserveringen, keukenschermen.
          </li>
        </ul>

        <h2>De vijf vragen voor een nieuw restaurant</h2>

        <h3>1. Hoe snel ben ik operationeel?</h3>
        <p>
          Je hebt een openingsdatum. Je kassa moet het doen. Kies een systeem dat je zelf kunt installeren
          en instellen, zonder technicus. Als je in een middag je menukaart kunt invoeren en een testbestelling
          kunt draaien, zit je goed.
        </p>

        <h3>2. Kan mijn team er direct mee werken?</h3>
        <p>
          Je personeel is nieuw, je zaak is nieuw, alles is nieuw. Een goed kassasysteem is intuïtief genoeg
          dat je team het na een korte uitleg snapt. Test dit door iemand zonder ervaring een bestelling te
          laten opnemen.
        </p>

        <h3>3. Wat betaal ik de eerste zes maanden?</h3>
        <p>
          Reken door wat je de eerste zes maanden kwijt bent, inclusief hardware, abonnement, transactiekosten
          en eventuele setupkosten. Vermijd grote investeringen vooraf.
        </p>

        <h3>4. Zit ik ergens aan vast?</h3>
        <p>
          Contract van twaalf maanden? Verplichte hardware? Dit zijn risico&apos;s als starter. Kies
          maandelijks opzegbaar, zodat je kunt schakelen als het niet bevalt.
        </p>

        <h3>5. Groeit het mee als mijn zaak groeit?</h3>
        <p>
          Je begint klein. Maar misschien wil je over een jaar een terras toevoegen of een tweede locatie.
          Check nu alvast of je kassasysteem dat aankan zonder opnieuw te beginnen.
        </p>

        <h2>Veelgemaakte fouten bij nieuwe restaurants</h2>
        <ul>
          <li>
            <strong>Te veel betalen voor features die je niet gebruikt.</strong> Begin simpel, breid later uit.
          </li>
          <li>
            <strong>Kiezen op basis van de demo, niet op basis van dagelijks gebruik.</strong> Vraag een
            proefperiode en test onder echte omstandigheden.
          </li>
          <li>
            <strong>Hardware kopen die je niet nodig hebt.</strong> Een dure touchscreen-kassa is niet per se
            beter dan een iPad met Tap to Pay.
          </li>
          <li>
            <strong>Contract tekenen zonder de kleine lettertjes te lezen.</strong> Check opzegtermijn,
            prijsverhogingen en kosten voor extra gebruikers.
          </li>
        </ul>

        <h2>Wat biedt Spont voor nieuwe restaurants?</h2>
        <ul>
          <li>Setup in 15 minuten, je doet het zelf</li>
          <li>Werkt op je eigen iPad en iPhone</li>
          <li>Tap to Pay ingebouwd, geen losse betaalterminal</li>
          <li>Maandelijks opzegbaar, geen jaarcontract</li>
          <li>Begin met de basis, voeg later toe wat je nodig hebt</li>
          <li>Scherp geprijsd, geen verborgen kosten</li>
        </ul>
      </>
    ),
  },

  "wat-kost-kassasysteem-restaurant": {
    title: "Wat kost een kassasysteem voor een restaurant?",
    metaDescription:
      "Abonnement, hardware, transactiekosten, support — alle kostenposten op een rij. Zo vergelijk je kassasystemen eerlijk.",
    date: "20 maart 2026",
    dateISO: "2026-03-20",
    category: "Ondernemen",
    content: (
      <>
        <p>
          Je zoekt een kassasysteem voor je restaurant. De eerste vraag is logisch: wat kost dat? Het eerlijke
          antwoord: het hangt ervan af. Maar dit artikel zet alle kostenposten op een rij.
        </p>

        <h2>De vier kostenposten die je moet kennen</h2>

        <h3>1. Het maandabonnement</h3>
        <p>
          Bij de meeste aanbieders ligt dit tussen de 29 en 99 euro per maand. Let op: goedkopere pakketten
          missen vaak functies die je later alsnog nodig hebt. Vraag altijd wat er precies in het abonnement
          zit.
        </p>

        <h3>2. Hardware</h3>
        <p>
          Sommige leveranciers dwingen je hun hardware te kopen: touchscreen-kassa&apos;s, kassalades,
          bonprinters en betaalterminals. Dat loopt snel op naar 1.000 tot 3.000 euro. Andere systemen werken
          op je eigen iPad of iPhone &mdash; bij Spont is een aparte betaalterminal niet nodig dankzij Tap to
          Pay.
        </p>

        <h3>3. Transactiekosten</h3>
        <p>
          Iedere keer dat een gast met pin of creditcard betaalt, betaal je een percentage. Meestal tussen de
          1,5% en 2,5% per transactie. Op een maandomzet van 30.000 euro is dat 450 tot 750 euro per maand
          &mdash; alleen aan transactiekosten. Dit is vaak de grootste kostenpost, maar wordt het minst
          besproken.
        </p>

        <h3>4. Setup en support</h3>
        <p>
          Sommige systemen rekenen eenmalig 200 tot 500 euro voor installatie en training. Vraag ook wat
          support kost. Zit dat in je abonnement, of betaal je per gesprek?
        </p>

        <h2>Rekenvoorbeeld: wat betaal je per maand?</h2>
        <p>Stel: je hebt een restaurant met een maandomzet van 40.000 euro.</p>
        <ul>
          <li>
            <strong>Traditioneel systeem:</strong> abonnement 69 euro + hardware afgeschreven 55 euro/mnd +
            transactiekosten 1,9% = 760 euro. Totaal: ~884 euro/mnd.
          </li>
          <li>
            <strong>Spont:</strong> abonnement, eigen hardware (geen extra kosten), lagere transactiekosten
            via eigen integratie. Totaal: aanzienlijk lager.
          </li>
        </ul>

        <h2>Verborgen kosten waar je op moet letten</h2>
        <ul>
          <li>
            <strong>Contractduur.</strong> Bij jaarcontracten betaal je de resterende maanden mee als je eerder
            wilt stoppen.
          </li>
          <li>
            <strong>Updates en upgrades.</strong> Soms wordt apart gerekend voor nieuwe versies of extra
            modules.
          </li>
          <li>
            <strong>Extra gebruikers.</strong> Check of je per gebruiker extra betaalt of dat het onbeperkt is.
          </li>
          <li>
            <strong>Koppelingen.</strong> Wil je boekhoudsoftware of reserveringssysteem koppelen? Bij sommige
            aanbieders kost dat extra per koppeling per maand.
          </li>
        </ul>

        <h2>Hoe vergelijk je eerlijk?</h2>
        <p>Vergelijk niet op abonnementsprijs alleen. Stel voor iedere aanbieder dezelfde vragen:</p>
        <ul>
          <li>Wat betaal ik per maand inclusief alles?</li>
          <li>Welke hardware heb ik nodig en wat kost die?</li>
          <li>Wat is het transactiepercentage?</li>
          <li>Zit ik vast aan een contract?</li>
          <li>Wat kost support?</li>
          <li>Welke koppelingen heb ik nodig en kosten die extra?</li>
        </ul>

        <h2>Wat biedt Spont?</h2>
        <ul>
          <li>Maandelijks opzegbaar, geen jaarcontract</li>
          <li>Werkt op je eigen iPad en iPhone, geen verplichte hardware</li>
          <li>Eigen betaalintegratie, geen losse betaalterminal nodig</li>
          <li>Tap to Pay op iPhone inbegrepen</li>
          <li>Support zit in je abonnement</li>
          <li>Koppelingen met boekhouding en bezorgplatforms inbegrepen</li>
        </ul>
      </>
    ),
  },

  "tap-to-pay-iphone": {
    title: "Tap to Pay op iPhone: bestellen en afrekenen aan tafel",
    metaDescription:
      "Je medewerker neemt de bestelling op en rekent direct af — zonder losse pin-terminal. Zo werkt Tap to Pay op iPhone voor horecaondernemers.",
    date: "22 november 2025",
    dateISO: "2025-11-22",
    category: "Betalingen",
    content: (
      <>
        <p>
          Stel je voor: een medewerker staat aan tafel, neemt de bestelling op via de app en houdt
          daarna de iPhone bij de gast. Die tikt zijn bankpas of telefoon erop. Klaar. Geen loopje
          terug naar de bar, geen losse betaalterminal, geen kabels.
        </p>
        <p>
          Dat is Tap to Pay op iPhone. En het verandert hoe horeca afrekenent.
        </p>

        <h2>Wat is Tap to Pay op iPhone?</h2>
        <p>
          Tap to Pay op iPhone is een functie van Apple waarmee je iPhone als betaalterminal
          werkt. Klanten betalen door hun bankpas, creditcard, Apple Pay of Google Pay op de
          achterkant van de iPhone te houden. De betaling wordt verwerkt via NFC — dezelfde
          technologie als in een gewone pin-terminal.
        </p>
        <p>
          Je hebt geen extra hardware nodig. Geen apart apparaatje, geen kabels, geen laadproblemen
          met een losse terminal. Alleen je iPhone en de juiste app.
        </p>

        <h2>Hoe werkt het in de praktijk?</h2>
        <p>
          Je medewerker heeft de Spont-app op de iPhone. Die app combineert bestellen en
          afrekenen. De flow ziet er zo uit:
        </p>
        <ul>
          <li>Medewerker opent de bestelling van tafel 4</li>
          <li>Tikt op &ldquo;afrekenen&rdquo;</li>
          <li>Kiest het betaalbedrag (heel of gesplitst)</li>
          <li>Houdt de iPhone bij de gast — die tikt met kaart of telefoon</li>
          <li>Betaling is binnen twee seconden bevestigd</li>
        </ul>
        <p>
          Geen loopje naar de bar. Geen wachten op de terminal. Geen uitleg aan de gast waar de
          pin-terminal staat.
        </p>

        <h2>Wat zijn de voordelen voor je zaak?</h2>

        <h3>Sneller afrekenen</h3>
        <p>
          Je medewerker hoeft niet meer terug naar de bar om de rekening te pakken. Op een drukke
          avond scheelt dat per tafel minstens een halve minuut — en over een hele avond loopt
          dat op.
        </p>

        <h3>Minder hardware</h3>
        <p>
          Een losse betaalterminal kost 300 tot 600 euro aanschaf, plus onderhoud en
          contractkosten. Met Tap to Pay op iPhone heb je dat allemaal niet nodig. Je medewerkers
          werken met het apparaat dat ze al hebben.
        </p>

        <h3>Minder storingen</h3>
        <p>
          Losse pin-terminals raken kwijt, gaan kapot, hebben een lege batterij of verbinden niet
          goed. iPhone is het primaire apparaat van je medewerker — die wordt altijd geladen en
          bijgehouden.
        </p>

        <h3>Gesplitst betalen zonder gedoe</h3>
        <p>
          Gasten willen de rekening splitsen? Geen probleem. Je kiest in de app wie wat betaalt,
          en elke gast tikt zijn eigen deel af. Zonder een aparte terminal rond te laten gaan.
        </p>

        <h2>Werkt het met alle betaalmethoden?</h2>
        <p>
          Tap to Pay op iPhone werkt met alle contactloze betaalmethoden: bankpas (Maestro en
          V PAY), Visa, Mastercard, American Express, Apple Pay en Google Pay. iDEAL via NFC
          is ook mogelijk afhankelijk van de betaalverwerker.
        </p>
        <p>
          Contant betalen blijft gewoon mogelijk via de kassa-app. Tap to Pay is een aanvulling,
          geen vervanging.
        </p>

        <h2>Is het veilig?</h2>
        <p>
          Tap to Pay op iPhone gebruikt dezelfde beveiligingsstandaarden als gewone
          betaalterminals. Kaartgegevens worden versleuteld en nooit opgeslagen op de iPhone.
          Apple heeft de technologie gecertificeerd bij de grote kaartnetwerken (Visa, Mastercard).
        </p>

        <h2>Wat heb je nodig om te starten?</h2>
        <ul>
          <li>
            <strong>iPhone 15 of nieuwer</strong> — of iPhone XS en later met de juiste iOS-versie (iOS 16.7+).
          </li>
          <li>
            <strong>Een betaalapp die Tap to Pay ondersteunt</strong> — Spont heeft dit ingebouwd.
          </li>
          <li>
            <strong>Een betaalverwerker die Tap to Pay heeft geactiveerd</strong> — bij Spont is dit standaard inbegrepen.
          </li>
        </ul>
        <p>
          Geen extra contract, geen aanvraagprocedure, geen wachttijd. Als je Spont gebruikt, zet
          je Tap to Pay aan via de app-instellingen.
        </p>

        <h2>Hoe werkt dit bij Spont?</h2>
        <ul>
          <li>Tap to Pay inbegrepen in je abonnement, geen extra kosten</li>
          <li>Werkt direct in de Spont-app — bestellen en afrekenen in één flow</li>
          <li>Geen losse betaalterminal nodig</li>
          <li>Gesplitst betalen ingebouwd</li>
          <li>Transacties direct zichtbaar in je dashboard</li>
        </ul>
      </>
    ),
  },

  "ai-support-revolutie": {
    title: "Hoe AI de support in de horeca verandert",
    metaDescription:
      "AI handelt standaardvragen af, tickets pakken de rest op. Zo blijft support snel en de prijs laag — zonder groot supportteam.",
    date: "12 maart 2026",
    dateISO: "2026-03-12",
    category: "Support",
    content: (
      <>
        <p>
          Je kassasysteem doet het niet. Het is vrijdagavond, halfacht. Je belt de supportlijn
          van je leverancier. Na tien minuten wachten krijg je iemand die je vraagt je apparaat
          opnieuw op te starten. Dat wist je al.
        </p>
        <p>
          Dit is hoe support eruitziet bij veel kassaleveranciers. En het is precies waarom AI
          hier iets fundamenteels aan het veranderen is.
        </p>

        <h2>Wat doet AI in support?</h2>
        <p>
          Een AI-supportassistent is geen chatbot met vaste antwoorden. Het is een systeem dat
          je vraag begrijpt, de meest waarschijnlijke oorzaak herkent en direct een oplossing
          geeft — of doorverwijst als het complex is.
        </p>
        <p>
          In de praktijk betekent dat: je typt &ldquo;mijn printer doet het niet&rdquo;, en de
          assistent vraagt: welk printermodel, welke foutmelding, is de verbinding wifi of
          Bluetooth? In plaats van jou te laten wachten tot een medewerker beschikbaar is,
          doorloopt de AI direct de meest voorkomende oorzaken.
        </p>

        <h2>Welke vragen kan AI oplossen?</h2>
        <p>
          Zo&apos;n 70 tot 80% van de supportvragen in de horeca is hetzelfde: printerprobleem,
          betaling die niet doorgaat, medewerker die geen inlog heeft, BTW die niet klopt,
          product dat niet op de bon staat. Dit zijn oplosbare patronen. AI herkent ze en geeft
          direct een antwoord — ook om 02:00 &apos;s nachts.
        </p>
        <p>
          Wat AI niet oplost: complexe technische problemen, hardware die kapot is, situaties
          die je specifieke locatieconfiguratie vereisen. Die gaan naar een ticket — en daarna
          naar een mens.
        </p>

        <h2>Het ticketsysteem: wat daarna gebeurt</h2>
        <p>
          Niet alles is op te lossen via een AI-assistent. Complexere vragen gaan naar een
          ticketsysteem. Het verschil met traditionele telefoonondersteuning:
        </p>
        <ul>
          <li>
            <strong>Prioriteit op urgentie.</strong> Een kassastoring op vrijdagavond krijgt hogere
            prioriteit dan een vraag over een rapport.
          </li>
          <li>
            <strong>Documentatie automatisch.</strong> De AI legt al bij je eerste vraag de context
            vast. De medewerker die je ticket oppakt, weet al wat je geprobeerd hebt.
          </li>
          <li>
            <strong>Geen herhaling.</strong> Je hoeft niet opnieuw uit te leggen wat er aan de hand
            is als je van AI naar mens overgaat.
          </li>
        </ul>

        <h2>Wat betekent dit voor de prijs?</h2>
        <p>
          Traditionele support is duur. Een supportteam van vijf mensen dat 24/7 beschikbaar is,
          kost een bedrijf al snel meer dan 300.000 euro per jaar. Die kosten worden doorberekend
          aan de klant — in een hoger abonnement, of in aparte supportcontracten.
        </p>
        <p>
          Een AI-gedreven model verwerkt de grote meerderheid van vragen automatisch. Menselijke
          medewerkers handelen alleen de complexe gevallen af. Dat is efficiënter en goedkoper —
          en die besparing kun je doorgeven aan je klanten.
        </p>

        <h2>Is dit beter dan een telefoontje?</h2>
        <p>
          Voor standaardvragen: ja. Je krijgt direct een antwoord zonder wachttijd. Voor complexe
          situaties: het hangt ervan af. Een goed ticketsysteem met duidelijke prioritering is
          minstens zo effectief als een telefoontje — en laat een papieren spoor achter dat
          handig is als het probleem terugkomt.
        </p>
        <p>
          Telefonische support is niet per se beter dan AI + tickets. Het is anders. En voor
          de meeste vragen is snelheid en beschikbaarheid belangrijker dan een menselijke stem.
        </p>

        <h2>Hoe werkt dit bij Spont?</h2>
        <ul>
          <li>AI-assistent beschikbaar 24/7 via de app en website</li>
          <li>Herkent de meest voorkomende kassaproblemen direct</li>
          <li>Complexe vragen gaan automatisch naar een ticket</li>
          <li>Tickets worden geprioriteerd op urgentie</li>
          <li>Support is inbegrepen in je abonnement, geen apart contract</li>
          <li>Wil je meer? Prioriteitstickets zijn beschikbaar op het Pro-plan</li>
        </ul>
      </>
    ),
  },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      type: "article",
      title: `${article.title} | Spont`,
      description: article.metaDescription,
      url: `https://www.spont.nl/blog/${slug}`,
      publishedTime: article.dateISO,
      modifiedTime: article.dateISO,
    },
    alternates: { canonical: `https://www.spont.nl/blog/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          datePublished: article.dateISO,
          dateModified: article.dateISO,
          author: {
            "@type": "Organization",
            name: "Spont",
            url: "https://www.spont.nl",
          },
          publisher: {
            "@type": "Organization",
            name: "Spont",
            url: "https://www.spont.nl",
            logo: "https://www.spont.nl/logo.svg",
          },
          mainEntityOfPage: `https://www.spont.nl/blog/${slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spont.nl" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.spont.nl/blog" },
            { "@type": "ListItem", position: 3, name: article.title, item: `https://www.spont.nl/blog/${slug}` },
          ],
        }}
      />

      {/* ─── SCROLL PROGRESS BAR ─── */}
      <ScrollProgress />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        {/* Achtergrond foto */}
        <img
          src={articleImages[slug] ?? "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/95 via-[#1A1714]/50 to-[#1A1714]/20" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-16">
          <HeroReveal delay={0}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Terug naar blog
            </Link>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-[#CC5533] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-white/60 text-xs">
                <Clock size={12} />
                {readTimes[slug] ?? "5 min"} leestijd
              </span>
              <span className="text-white/60 text-xs">
                <time dateTime={article.dateISO}>{article.date}</time>
              </span>
            </div>
          </HeroReveal>

          <AnimatedTitle
            text={article.title}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight"
          />
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="bg-white pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Decoratieve topbalk */}
          <div className="h-1 w-16 bg-[#CC5533] rounded-full mt-16 mb-12" />
          <FadeUp>
            <div className="article-body">
              {article.content}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title="Klaar om te starten?"
        subtitle="Starten duurt twee minuten. Geen verplichtingen."
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />
    </>
  );
}
