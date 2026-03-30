import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/shared/CTABanner";
import JsonLd from "@/components/shared/JsonLd";

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

      {/* ─── HEADER ─── */}
      <section className="bg-[#FCF9F4] pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-[#CC5533] font-semibold hover:underline mb-6 inline-block"
          >
            &larr; Terug naar blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[#CC5533] uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-[#5C5550] text-xs">
              <time dateTime={article.dateISO}>{article.date}</time>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1A1714] font-semibold leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="bg-[#FCF9F4] pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-serif prose-headings:text-[#1A1714] prose-p:text-[#5C5550] prose-p:leading-relaxed prose-li:text-[#5C5550] prose-a:text-[#CC5533] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1714] prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-4 prose-li:my-1">
          {article.content}
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
