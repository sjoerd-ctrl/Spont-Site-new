import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";
import { CheckCircle, AlertCircle } from "lucide-react";

// ─── CONTENT DATA ─────────────────────────────────────────────────────────────

type Segment = {
  badge: string;
  headline: string;
  subheadline: string;
  heroImg: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaFooter?: string;
  painPoints: { title: string; body: string }[];
  solution: {
    title: string;
    subtitle: string;
    body: string;
    benefits: string[];
  };
  testimonials: {
    quote: string;
    name: string;
    location: string;
  }[];
  onboarding: { title: string; body: string }[];
};

const segments: Record<string, Segment> = {
  restaurants: {
    badge: "RESTAURANTS",
    headline: "Kassasysteem voor restaurants",
    subheadline:
      "Meer overzicht op de vloer, betere service aan tafel. In restaurants draait alles om timing, overzicht en gastbeleving. Spont is speciaal ingericht voor restaurants waar reserveringen, tafelindeling, keuken en afrekenen perfect moeten samenwerken.",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=80",
    ctaTitle: "Klaar voor meer overzicht en betere service?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw restaurant helpt om efficiënter te werken, fouten te verminderen en gasten beter te bedienen.",
    ctaFooter: "Geschikt voor: restaurants, bistro's, eetcafés, brasserieën",
    painPoints: [
      {
        title: "Timing is alles",
        body: "Gerechten moeten op het juiste moment naar de juiste tafel.",
      },
      {
        title: "Fouten tussen bediening en keuken",
        body: "Misverstanden leiden tot verkeerde bestellingen.",
      },
      {
        title: "Reserveringen bijhouden",
        body: "Los van het kassasysteem, geen overzicht.",
      },
      {
        title: "Tafelindeling onduidelijk",
        body: "Geen visueel overzicht van bezetting.",
      },
      {
        title: "Afrekenen is complex",
        body: "Splitsen per gast of per gerecht kost tijd.",
      },
    ],
    solution: {
      title: "Rust in de bediening, overzicht in de keuken",
      subtitle: "Minder handelingen voor de bediening en duidelijke bonnen of keukenschermen voor de keuken.",
      body: "Zo kan je team zich focussen op service in plaats van op de kassa.",
      benefits: [
        "Meer overzicht tijdens service",
        "Sneller opnemen en doorsturen van bestellingen",
        "Minder fouten tussen bediening en keuken",
        "Flexibel afrekenen per tafel of gast",
        "Inzicht in drukke momenten en bestsellers",
      ],
    },
    testimonials: [
      {
        quote:
          "Voorheen bekend als Tommy's & Zuurveen. Bij Bistro Veen wordt Spont gebruikt om service soepel te laten verlopen tijdens lunch en diner. Het team houdt overzicht op de vloer en kan flexibel afrekenen, wat zorgt voor rust en betere gastbeleving.",
        name: "Bistro Veen",
        location: "Den Haag",
      },
      {
        quote:
          "Bij Buitenlust ondersteunt Spont zowel het restaurant als het terras. Dankzij duidelijke tafelindeling en snelle bediening blijft het overzicht behouden, zelfs op drukke dagen en zonnige middagen.",
        name: "Café Restaurant Buitenlust",
        location: "Amerongen",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw restaurant",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw menukaart en tafels",
        body: "Menu, tafelindeling en medewerkers instellen.",
      },
      {
        title: "Installatie en korte training voor je team",
        body: "Iedereen is binnen no-time klaar om te starten.",
      },
      {
        title: "Klaar voor service",
        body: "Ga live en ervaar het verschil.",
      },
    ],
  },

  "coffee-bars": {
    badge: "KOFFIEZAKEN",
    headline: "Kassasysteem voor koffiezaken",
    subheadline:
      "Van ochtenddrukte tot rustige middag. Snelle afrekening, loyaliteitsprogramma en QR-menu — alles klopt, ook als het drie rijen dik staat bij de toog.",
    heroImg: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=2000&q=80",
    ctaTitle: "Klaar voor meer rust tijdens de ochtenddrukte?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw koffiezaak helpt om sneller te werken, loyaliteit op te bouwen en altijd overzicht te houden.",
    ctaFooter: "Geschikt voor: koffiezaken, specialty coffee, lunchcafés, theesalons",
    painPoints: [
      {
        title: "Ochtenddrukte loopt vast",
        body: "In de piekuren staat iedereen te wachten terwijl je bestellingen nog niet door hebt.",
      },
      {
        title: "Complexe koffiebestellingen",
        body: "Veel variaties (extra shot, plantaardig, geen suiker) zorgen voor fouten bij de barista.",
      },
      {
        title: "Geen loyaliteitssysteem",
        body: "Vaste klanten komen terug — maar je bouwt niks op en mist kansen om ze te belonen.",
      },
      {
        title: "Wisselend personeel",
        body: "Invalkrachten en parttime medewerkers moeten snel kunnen meedraaien.",
      },
      {
        title: "Geen inzicht in topproducten",
        body: "Je weet niet welke koffie of lunch het best verkoopt — inkoop is daardoor gokken.",
      },
    ],
    solution: {
      title: "Zo helpt Spont jouw koffiezaak",
      subtitle: "Snel afrekenen, loyaliteit opbouwen en altijd overzicht — ook tijdens de ochtenddrukte.",
      body: "Met Spont tik je bestellingen razendsnel in, bouw je loyaliteitspunten op per aankoop en zie je aan het einde van de dag precies wat er verkocht is.",
      benefits: [
        "Kortere wachttijden tijdens ochtenddrukte",
        "Minder fouten bij complexe bestellingen",
        "Loyaliteitsprogramma inbegrepen",
        "Nieuw personeel draait in één dienst mee",
        "Inzicht in bestsellers per dagdeel",
      ],
    },
    testimonials: [
      {
        quote:
          "Onze vaste klanten vinden het geweldig dat ze punten sparen. Het heeft echt effect op hoe vaak ze terugkomen.",
        name: "Koffiebar De Molen",
        location: "Groningen",
      },
      {
        quote:
          "In de ochtend hebben we geen tijd voor een trage kassa. Spont is zo snel dat we in dezelfde tijd meer klanten bedienen.",
        name: "Specialty Coffee Roos",
        location: "Amsterdam",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw koffiezaak",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw menu",
        body: "Koffievariaties, loyaliteitsprogramma en medewerkers instellen.",
      },
      {
        title: "Korte training — direct aan de slag",
        body: "Personeel leert het systeem in één ochtenddienst.",
      },
      {
        title: "Klaar voor de eerste ochtenddrukte",
        body: "Ga live en serveer zonder gedoe.",
      },
    ],
  },

  "quick-service": {
    badge: "QUICK SERVICE",
    headline: "Kassasysteem voor Quick Service",
    subheadline:
      "Snel bestellen, direct afrekenen en altijd doorwerken. In quick service draait alles om snelheid en eenvoud. Spont is speciaal ingericht voor afhaal, lunchzaken en snackbars waar doorloop, foutloos werken en korte wachttijden cruciaal zijn.",
    heroImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=2000&q=80",
    ctaTitle: "Klaar om sneller te werken?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw quick service zaak helpt om meer bestellingen te verwerken, minder fouten te maken en altijd overzicht te houden.",
    ctaFooter: "Geschikt voor: snackbars, lunchzaken, take-away, fast casual, broodjeszaken",
    painPoints: [
      {
        title: "Lange wachttijden aan de balie",
        body: "Klanten haken af wanneer de rij te lang wordt.",
      },
      {
        title: "Fouten bij drukte",
        body: "Verkeerde bestellingen kosten tijd en geld.",
      },
      {
        title: "Trage afhandeling",
        body: "Te veel handelingen per bestelling vertraagt alles.",
      },
      {
        title: "Wisselend personeel",
        body: "Nieuwe medewerkers moeten snel kunnen meedraaien.",
      },
      {
        title: "Geen inzicht in piekuren",
        body: "Moeilijk om personeel en voorraad te plannen.",
      },
    ],
    solution: {
      title: "Zo helpt Spont jouw quick service zaak",
      subtitle: "Spont combineert bestellen, betalen en inzicht in één systeem.",
      body: "Of het nu gaat om afhaal, to-go of snelle zitplekken: je team werkt overzichtelijk en efficiënt, zelfs bij hoge volumes.",
      benefits: [
        "Kortere wachttijden aan de balie",
        "Meer bestellingen per uur",
        "Minder fouten bij drukte",
        "Snelle onboarding van nieuw personeel",
        "Direct inzicht in bestverkopende items",
      ],
    },
    testimonials: [
      {
        quote:
          "Bij Petit Kaddour zorgt Spont voor snelle verwerking van bestellingen tijdens drukke lunchmomenten. Het team houdt overzicht aan de balie en kan snel schakelen zonder fouten.",
        name: "Petit Kaddour",
        location: "Rotterdam",
      },
      {
        quote:
          "Snackbar Rian gebruikt Spont voor snelle afhaal en piekmomenten in de avond. Dankzij Spont blijft de doorloop hoog en zijn bestellingen direct correct verwerkt.",
        name: "Snackbar Rian",
        location: "Klazienaveen",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw zaak",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw menu en workflow",
        body: "Producten, categorieën en medewerkers instellen.",
      },
      {
        title: "Installatie en korte training voor je team",
        body: "Iedereen is binnen no-time klaar om te starten.",
      },
      {
        title: "Klaar voor drukke lunch- en avondspitsen",
        body: "Ga live en ervaar het verschil.",
      },
    ],
  },

  bakkerijen: {
    badge: "BAKKERIJEN",
    headline: "Kassasysteem voor Bakkerijen",
    subheadline:
      "Rust, snelheid en overzicht tijdens elk piekmoment. In bakkerijen draait het om tempo, foutloos werken en een prettige gastbeleving. Spont is speciaal ingericht voor ochtenddrukte, complexe bestellingen en een hoge doorloop aan de balie.",
    heroImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=2000&q=80",
    ctaTitle: "Klaar voor meer rust en snelheid?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw bakkerij helpt om sneller te werken, minder fouten te maken en meer overzicht te houden — elke dag opnieuw.",
    ctaFooter: "Geschikt voor: bakkerijen, koffiezaken, lunchcafés, patisserieën",
    painPoints: [
      {
        title: "Lange wachttijden aan de balie",
        body: "Klanten haken af tijdens ochtenddrukte.",
      },
      {
        title: "Complexe bestellingen",
        body: "Veel variaties en aanpassingen zorgen voor fouten.",
      },
      {
        title: "Fouten bij drukte",
        body: "Verkeerde bestellingen kosten tijd en geld.",
      },
      {
        title: "Wisselend personeel",
        body: "Nieuwe medewerkers moeten snel kunnen meedraaien.",
      },
      {
        title: "Geen inzicht in verkoop",
        body: "Moeilijk om voorraad en inkoop te plannen.",
      },
    ],
    solution: {
      title: "Zo helpt Spont jouw bakkerij of café",
      subtitle: "Spont ondersteunt je team bij snelle balieverkoop én bij zitplekken.",
      body: "Minder handelingen aan de kassa, duidelijke bonnen voor de barista of keuken en altijd inzicht in wat er wordt verkocht.",
      benefits: [
        "Kortere wachttijden aan de balie",
        "Minder fouten bij complexe bestellingen",
        "Snelle onboarding van nieuw personeel",
        "Beter inzicht in bestverkopende producten",
        "Minder verspilling door slimmer inkopen",
      ],
    },
    testimonials: [
      {
        quote:
          "Multivlaai gebruikt Spont in meerdere vestigingen voor snelle verkoop van vlaaien, taarten en koffie. Dankzij Spont blijft de doorloop hoog en het overzicht behouden, zelfs tijdens piekmomenten.",
        name: "Multivlaai",
        location: "4 vestigingen — Zaandam, Purmerend, Hoofddorp & Haarlem",
      },
      {
        quote:
          "Bij Jack & Jackies ondersteunt Spont zowel de koffiemomenten als lunch- en borrelservice. Het team werkt sneller en houdt grip op bestellingen, betalingen en omzet per dagdeel.",
        name: "Jack & Jackies",
        location: "3 vestigingen — Leeuwarden, Breda & Tilburg",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw bakkerij of café",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw menukaart en werkwijze",
        body: "Producten, categorieën en medewerkers instellen.",
      },
      {
        title: "Installatie en korte training voor je team",
        body: "Iedereen is binnen no-time klaar om te starten.",
      },
      {
        title: "Klaar voor drukke ochtenden en middagen",
        body: "Ga live en ervaar het verschil.",
      },
    ],
  },

  discotheken: {
    badge: "BARS & CLUBS",
    headline: "Kassasysteem voor Bars & Clubs",
    subheadline:
      "Sneller serveren, meer omzet en controle op drukke avonden. In bars, clubs en poppodia draait alles om snelheid en overzicht. Spont is speciaal ingericht voor drukke avonden, hoge volumes en wisselend personeel.",
    heroImg: "/images/disco-deus-at-muziekgieterij.jpg",
    ctaTitle: "Klaar voor jouw drukste avonden?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw bar of club helpt om sneller te werken, meer omzet te draaien en controle te houden — ook tijdens piekuren.",
    ctaFooter: "Geschikt voor: cafés, cocktailbars, clubs, poppodia, muziekvenues",
    painPoints: [
      {
        title: "Lange rijen aan de bar",
        body: "Gasten wachten te lang en kopen uiteindelijk minder.",
      },
      {
        title: "Fouten bij drukte",
        body: "Verkeerde bestellingen en foutieve afrekeningen kosten geld.",
      },
      {
        title: "Tabs worden onoverzichtelijk",
        body: "Openstaande rekeningen stapelen zich op en zorgen voor chaos.",
      },
      {
        title: "Wisselend personeel",
        body: "Nieuwe medewerkers moeten snel kunnen meedraaien.",
      },
      {
        title: "Geen grip op piekmomenten",
        body: "Moeite met overzicht houden tijdens de drukste uren.",
      },
    ],
    solution: {
      title: "Gebouwd voor drukte en piekmomenten",
      subtitle:
        "Lange rijen aan de bar, meerdere rondes tegelijk en volle zalen vragen om een systeem dat meebeweegt.",
      body: "Met Spont neem je bestellingen op in enkele tikken, beheer je tabs eenvoudig en reken je direct af — zonder vertraging.",
      benefits: [
        "Kortere wachttijden aan de bar",
        "Meer bestellingen per uur",
        "Minder fouten bij drukte",
        "Snelle onboarding van nieuw personeel",
        "Meer grip op omzet tijdens evenementen",
      ],
    },
    testimonials: [
      {
        quote:
          "Spont wordt gebruikt tijdens drukbezochte concertavonden, waar snelheid en overzicht cruciaal zijn. Dankzij Spont kan het barteam doorwerken zonder vertraging, zelfs bij volle zalen.",
        name: "Poppodium de Bosuil",
        location: "Weert",
      },
      {
        quote:
          "Bij grote evenementen en wisselende bezetting biedt Spont de flexibiliteit die nodig is om snel op te schalen en inzicht te houden in verkoop en omzet per avond.",
        name: "Muziekgieterij",
        location: "Maastricht",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw bar of club",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw werkwijze",
        body: "Producten, categorieën en medewerkers instellen.",
      },
      {
        title: "Installatie en korte training voor je team",
        body: "Iedereen is binnen no-time klaar om te starten.",
      },
      {
        title: "Klaar voor drukke avonden",
        body: "Ga live en ervaar het verschil.",
      },
    ],
  },

  cafes: {
    badge: "CAFÉ & KROEG",
    headline: "Kassasysteem voor cafés en kroegen",
    subheadline:
      "Snel schenken, direct afrekenen en altijd overzicht — ook als het drie rijen dik staat aan de toog. Spont is gebouwd voor de snelheid en chaos van een drukke kroeg.",
    heroImg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2000&q=80",
    ctaTitle: "Klaar voor jouw drukste avonden?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw café helpt om sneller te werken, meer te verkopen en het overzicht te bewaren.",
    ctaFooter: "Geschikt voor: cafés, kroegen, eetcafés, proefkantines, bruine kroegen",
    painPoints: [
      {
        title: "Lange rijen aan de toog",
        body: "Gasten geven op en gaan ergens anders naartoe.",
      },
      {
        title: "Meerdere medewerkers, één kassa",
        body: "Iedereen werkt door elkaar — fouten en vertraging zijn het gevolg.",
      },
      {
        title: "Tabs die onoverzichtelijk worden",
        body: "Openstaande rekeningen stapelen op en kloppen aan het einde niet.",
      },
      {
        title: "Wisselend personeel",
        body: "Invalkrachten en seizoenswerkers moeten direct mee kunnen draaien.",
      },
      {
        title: "Geen inzicht in de avond",
        body: "Achteraf pas zien wat er goed liep — te laat om bij te sturen.",
      },
    ],
    solution: {
      title: "Zo helpt Spont jouw café",
      subtitle: "Meer rondes per uur, minder fouten, altijd overzicht.",
      body: "Met Spont tik je bestellingen razendsnel in, beheer je meerdere tabs tegelijk en rekent iedereen direct af. Geen papier, geen verwarring.",
      benefits: [
        "Kortere wachttijden aan de toog",
        "Meerdere medewerkers tegelijk op één account",
        "Tabs eenvoudig openen, samenvoegen en afsluiten",
        "Snelle onboarding van invalkrachten",
        "Direct inzicht in omzet per avond",
      ],
    },
    testimonials: [
      {
        quote:
          "Eindelijk een kassa waar mijn invalkrachten op vrijdagavond direct mee kunnen werken. Geen uitleg meer nodig — ze tikken gewoon in en klaar.",
        name: "Kroeg De Zwaan",
        location: "Utrecht",
      },
      {
        quote:
          "Op drukke avonden werken we met vier mensen tegelijk aan de bar. Spont houdt alles bij zonder dat we in elkaars weg zitten.",
        name: "Café De Brug",
        location: "Amsterdam",
      },
    ],
    onboarding: [
      {
        title: "Start direct voor jouw café",
        body: "We laten zien wat Spont voor jou kan betekenen.",
      },
      {
        title: "We richten Spont in op jouw drankkaart",
        body: "Producten, categorieën en medewerkers instellen.",
      },
      {
        title: "Korte training — je team kan direct mee",
        body: "Nieuwe medewerkers leren het in één dienst.",
      },
      {
        title: "Live op jouw drukste avond",
        body: "Ga live en ervaar hoe soepel het werkt.",
      },
    ],
  },

  bowlingbanen: {
    badge: "SPECIAAL VOOR BOWLINGBANEN & LEISURE",
    headline: "Eén pincode, vrij rondlopen, overal bestellen",
    subheadline:
      "Gasten krijgen bij aankomst een persoonlijke pincode. Daarmee bestellen ze bij de bowlingbaan, de bar, het restaurant en de lasergame-arena. Geen losse rekeningen, geen gedoe. Spont koppelt alles aan elkaar.",
    heroImg: "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=2000&q=80",
    ctaTitle: "Klaar om je leisurezaak te moderniseren?",
    ctaSubtitle: "Ontdek hoe Spont bowling, horeca en entertainment verbindt in een systeem.",
    painPoints: [
      {
        title: "Gescheiden systemen",
        body: "Bowlingbanen, horeca en lasergamen draaien op aparte kassa's. Dat betekent dubbel werk, fouten en geen totaaloverzicht.",
      },
      {
        title: "Gasten moeten steeds naar de bar",
        body: "Tijdens het bowlen of lasergamen moet je naar de bar om te bestellen. Dat kost tijd, gasten bestellen minder en je mist omzet.",
      },
      {
        title: "Afrekenen is een chaos",
        body: "Groepen hebben besteld bij de baan, bij de bar en bij het restaurant. Alles op aparte bonnen. Afrekenen duurt lang en er gaan dingen mis.",
      },
      {
        title: "Geen inzicht per zone",
        body: "Hoeveel omzet draait de bar versus de banen? Welke activiteit levert het meest op? Zonder centraal systeem weet je het niet.",
      },
      {
        title: "Handmatig bestellen kost personeel",
        body: "Medewerkers lopen heen en weer om bestellingen op te nemen. Dat is traag, foutgevoelig en kost je extra handen.",
      },
    ],
    solution: {
      title: "Eén pincode, alles gekoppeld",
      subtitle: "Gasten lopen vrij rond door je complex en bestellen overal met dezelfde code.",
      body: "Via de koppeling met Raxbooker worden reserveringen automatisch klantprofielen in Spont. Bij aankomst krijgt de gast een pincode. Daarmee bestelt hij via tablets bij de baan, via QR-codes in de lasergame-arena of bij het restaurant. Alles komt op dezelfde rekening. Aan het eind van de dag rekent de gast een keer af. Het personeel ziet op het keukenscherm (KDS) precies waar elke bestelling naartoe moet.",
      benefits: [
        "Persoonlijke pincode per gast of groep, geldig in het hele complex",
        "Bestellen via tablets bij de banen, QR-codes of NFC-tags",
        "Koppeling met Raxbooker: reservering wordt automatisch klantprofiel",
        "KDS stuurt bestellingen naar de juiste plek (bar, keuken, arena)",
        "Eén rekening voor alle activiteiten, snel afrekenen via Vivawallet",
        "Realtime voorraadbeheer: alleen beschikbare items zichtbaar",
        "Handhelds, QR-bestellen en selfservice kiosken",
      ],
    },
    testimonials: [
      {
        quote:
          "Voorheen werkten we met gescheiden systemen voor bowlen, horeca en lasergamen. Spont koppelt alles aan elkaar via Raxbooker. Onze gasten krijgen een pincode bij aankomst en bestellen overal zelf via tablets en QR-codes. Het personeel ziet op het keukenscherm waar elke bestelling naartoe moet. Geen gedoe meer, snellere service en meer omzet.",
        name: "Franky's Bowling",
        location: "Nieuwegein",
      },
    ],
    onboarding: [
      {
        title: "We bekijken samen jouw leisure-concept",
        body: "Welke activiteiten bied je aan? Waar zitten de verkooppunten? We brengen het in kaart.",
      },
      {
        title: "Koppeling met Raxbooker en je bestaande systemen",
        body: "Reserveringen worden automatisch klantprofielen met pincode in Spont.",
      },
      {
        title: "Tablets, QR-codes en NFC-tags op locatie",
        body: "We richten bestelpunten in bij de banen, in de arena en in het restaurant.",
      },
      {
        title: "Live in je hele complex",
        body: "Gasten lopen vrij rond, bestellen overal en rekenen een keer af. Klaar.",
      },
    ],
  },

  evenementen: {
    badge: "EVENEMENTEN & FESTIVALS",
    headline: "Kassasysteem voor evenementen en festivals",
    subheadline:
      "Plug-and-play, Tap to Pay op iPhone en maandelijks opzegbaar. Spont werkt waar jij werkt, van foodtruck tot festivalbar.",
    heroImg: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=2000&q=80",
    ctaTitle: "Klaar voor je volgende evenement?",
    ctaSubtitle:
      "Ontdek hoe Spont jouw evenement helpt om sneller af te rekenen, meer te verkopen en altijd overzicht te houden.",
    ctaFooter: "Geschikt voor: festivals, popupbars, foodtrucks, cateraars, sportevenementen",
    painPoints: [
      {
        title: "Geen tijd voor installatie",
        body: "Je hebt een paar uur om alles op te zetten. Een kassasysteem dat configuratie nodig heeft past daar niet in.",
      },
      {
        title: "Wifi is onbetrouwbaar",
        body: "Op locatie is de verbinding vaak slecht. Je kassa moet ook zonder internet doorwerken.",
      },
      {
        title: "Losse pinterminals zijn duur",
        body: "Voor een weekend een terminal huren kost al snel meer dan het kassasysteem zelf.",
      },
      {
        title: "Personeel kent het systeem niet",
        body: "Tijdelijk personeel moet direct kunnen meedraaien zonder training.",
      },
      {
        title: "Geen inzicht per bar of kraam",
        body: "Na het evenement weet je niet welke bar het meeste heeft verkocht.",
      },
    ],
    solution: {
      title: "Gebouwd voor tijdelijke setups en hoge volumes",
      subtitle:
        "Spont werkt direct uit de doos. Tap to Pay op iPhone, geen losse pinterminal, maandelijks opzegbaar.",
      body: "Of je nu een foodtruck runt, een festivalbar beheert of catering doet: Spont werkt op je eigen iPhone of iPad en is binnen minuten operationeel.",
      benefits: [
        "Plug-and-play: operationeel in minuten",
        "Tap to Pay op iPhone, geen losse terminal nodig",
        "Maandelijks opzegbaar, geen verplichting na het seizoen",
        "Werkt op eigen hardware (iPhone, iPad)",
        "Real-time omzet per bar, kraam of shift",
      ],
    },
    testimonials: [
      {
        quote:
          "Op ons festival draaien we met tien verkooppunten tegelijk. Spont is zo simpel dat we elk seizoen nieuw personeel inzetten zonder problemen.",
        name: "Festival organisator",
        location: "Nederland",
      },
    ],
    onboarding: [
      {
        title: "Download Spont op je iPhone of iPad",
        body: "Geen speciale hardware nodig. Werkt op je eigen apparaat.",
      },
      {
        title: "Menukaart aanmaken",
        body: "Producten en categorieën instellen duurt een paar minuten.",
      },
      {
        title: "Tap to Pay activeren",
        body: "Accepteer pinbetalingen direct op je iPhone. Geen terminal nodig.",
      },
      {
        title: "Live op je evenement",
        body: "Klaar. Verkoop, reken af en houd overzicht in real-time.",
      },
    ],
  },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────

const segmentMeta: Record<string, { title: string; description: string }> = {
  restaurants: {
    title: "Kassasysteem voor restaurants",
    description:
      "Spont voor restaurants: tafelbeheer, keukenprints, reserveringen en afrekenen in één systeem. Start direct.",
  },
  "coffee-bars": {
    title: "Kassasysteem voor koffiezaken",
    description:
      "Spont voor koffiezaken: snelle afrekening, loyaliteitsprogramma en QR-bestellen. Ideaal voor ochtenddrukte.",
  },
  cafes: {
    title: "Kassasysteem voor cafés en kroegen",
    description:
      "Spont voor cafés: snel tappen, tabs beheren en direct afrekenen. Gebouwd voor drukke avonden.",
  },
  "quick-service": {
    title: "Kassasysteem voor Quick Service",
    description:
      "Spont voor quick service: kiosks, snelle bestellingen en KDS. Minder wachttijd, meer omzet.",
  },
  bakkerijen: {
    title: "Kassasysteem voor bakkerijen",
    description:
      "Spont voor bakkerijen: snelle balieverkoop, productregistratie en inzicht in bestverkopende producten.",
  },
  discotheken: {
    title: "Kassasysteem voor bars en clubs",
    description:
      "Spont voor bars en clubs: sneller serveren bij drukte, tabs beheren en meerdere verkooppunten.",
  },
  bowlingbanen: {
    title: "Kassasysteem voor bowlingbanen en leisure",
    description:
      "Spont voor bowlingbanen: persoonlijke pincode per gast, bestellen via tablets en QR-codes, koppeling met Raxbooker en alles op een rekening.",
  },
  evenementen: {
    title: "Kassasysteem voor evenementen en festivals",
    description:
      "Spont voor evenementen: plug-and-play, Tap to Pay op iPhone en maandelijks opzegbaar. Operationeel in minuten.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>;
}): Promise<Metadata> {
  const { segment } = await params;
  const meta = segmentMeta[segment];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Spont`,
      description: meta.description,
      url: `https://www.spont.nl/doelgroepen/${segment}`,
    },
    alternates: { canonical: `https://www.spont.nl/doelgroepen/${segment}` },
  };
}

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(segments).map((segment) => ({ segment }));
}

export default async function DoelgroepDetailPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment } = await params;
  const data = segments[segment];
  if (!data) notFound();

  const isBowling = segment === "bowlingbanen";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spont.nl" },
            { "@type": "ListItem", position: 2, name: "Doelgroepen", item: "https://www.spont.nl/doelgroepen" },
            { "@type": "ListItem", position: 3, name: data.badge, item: `https://www.spont.nl/doelgroepen/${segment}` },
          ],
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImg}
            alt={data.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1714]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
            {data.badge}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight mb-6 max-w-3xl">
            {data.headline}
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-10">
            {data.subheadline}
          </p>
          <a
            href="https://spont-live.eu.auth0.com/u/signup"
            className="inline-block bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Start direct
          </a>
        </div>
      </section>

      {/* ─── PIJNPUNTEN ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Herkenbaar?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714]">
              Waar loop jij tegenaan?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.painPoints.map((p) => (
              <div
                key={p.title}
                className="card-hover bg-[#F6F3EE] rounded-3xl p-7 flex gap-4"
              >
                <AlertCircle
                  size={20}
                  className="text-[#CC5533] shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-[#1A1714] mb-1 text-base">
                    {p.title}
                  </h3>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPLOSSING ─── */}
      <section className="bg-[#2D4B3F] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
              De oplossing
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-4">
              {data.solution.title}
            </h2>
            <p className="text-white/70 text-base mb-3 font-medium">
              {data.solution.subtitle}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              {data.solution.body}
            </p>
          </div>
          <div className="space-y-3">
            {data.solution.benefits.map((b) => (
              <div
                key={b}
                className="card-hover bg-white/10 rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <CheckCircle size={16} className="text-[#CC5533] shrink-0" />
                <span className="text-white/90 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-[#F6F3EE] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              {isBowling ? "Klantcase" : "Ervaringen"}
            </p>
            <h2 className="text-3xl font-serif font-semibold text-[#1A1714]">
              {isBowling
                ? "Wat onze klanten zeggen."
                : "Wat klanten zeggen over Spont."}
            </h2>
          </div>
          <div
            className={`grid gap-6 ${
              data.testimonials.length === 1
                ? "grid-cols-1 max-w-2xl mx-auto"
                : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {data.testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-white rounded-3xl p-8 shadow-sm">
                <p className="text-[#1A1714] text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#1A1714] text-sm">{t.name}</p>
                  <p className="text-[#5C5550] text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ONBOARDING ─── */}
      <section className="bg-[#FCF9F4] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
              Hoe starten?
            </p>
            <h2 className="text-3xl font-serif font-semibold text-[#1A1714]">
              In vier stappen operationeel.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.onboarding.map((step, i) => (
              <div key={step.title} className="card-hover bg-[#F6F3EE] rounded-3xl p-8 flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[#CC5533]/10 flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-[#CC5533] text-sm">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1714] mb-1">{step.title}</h3>
                  <p className="text-[#5C5550] text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTABanner
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        primary={{ label: "Start direct", href: "/contact" }}
        secondary={{ label: "Bekijk de prijzen", href: "/prijzen" }}
      />

      {/* Footer note */}
      {data.ctaFooter && (
        <div className="bg-[#2D4B3F] pb-6 text-center">
          <p className="text-white/40 text-xs">{data.ctaFooter}</p>
        </div>
      )}
    </>
  );
}
