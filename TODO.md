# TODO - Website Spont - 2026-03-30

## Prioriteit: Hoog
- [ ] [app/blog/[slug]/page.tsx] - Nieuwe dynamische blogpagina aanmaken zodat individuele blogposts bereikbaar zijn (nu leiden alle blog-slugs naar 404)
- [ ] [app/doelgroepen/[segment]/page.tsx] - Nieuw segment "evenementen" toevoegen aan segments object met pijnpunten, oplossingen en testimonials voor festivals/catering
- [ ] [app/doelgroepen/page.tsx] - Nieuwe tegel "Evenementen & festivals" toevoegen aan doelgroepen array met slug "evenementen"
- [ ] [app/sitemap.ts] - Next.js sitemap genereren (wordt verwezen in robots.txt maar bestaat nog niet)
- [ ] [app/blog/[slug]/page.tsx] - Blog 1 content toevoegen: "Kassasysteem kiezen als starter: 7 vragen die je moet stellen" (zie Content sectie)
- [ ] [app/blog/[slug]/page.tsx] - Blog 2 content toevoegen: "Kassasysteem voor festivals en evenementen: waar let je op?" (zie Content sectie)

## Prioriteit: Midden
- [ ] [app/doelgroepen/[segment]/page.tsx] - Nieuw segment "ketens-en-franchises" toevoegen met focus op centraal beheer, multi-locatie dashboard, en case studies (Multivlaai, Jack & Jackies)
- [ ] [app/doelgroepen/page.tsx] - Nieuwe tegel "Ketens & franchises" toevoegen aan doelgroepen array
- [ ] [app/vergelijk/[slug]/page.tsx] - Nieuwe vergelijking "trivec-alternatief" toevoegen aan vergelijkingen object
- [ ] [app/vergelijk/[slug]/page.tsx] - Nieuwe vergelijking "orderbird-alternatief" toevoegen aan vergelijkingen object
- [ ] [app/blog/page.tsx] - Twee nieuwe blogartikelen toevoegen aan articles array: "kassasysteem-kiezen-starter" en "kassasysteem-festival-evenement"
- [ ] [app/contact/page.tsx] - Contactformulier action wijzigen van mailto:info@spont.nl naar echte form backend (bijv. Formspree of Resend API)

## Prioriteit: Laag
- [ ] [app/prijzen/page.tsx] - Product/Offer schema markup toevoegen voor prijsplannen (schema.org/Offer)
- [ ] [components/shared/JsonLd.tsx] - HowTo schema toevoegen aan homepage "Hoe werkt het" sectie
- [ ] [app/layout.tsx] - Organization schema uitbreiden met sameAs links (zodra social media profielen actief zijn)
- [ ] [app/features/page.tsx] - "Multi-locatie beheer" als aparte feature toevoegen aan solutions array

## Nieuwe bestanden aanmaken
- [ ] [app/blog/[slug]/page.tsx] - Dynamische blogpagina component met Article schema markup
- [ ] [app/sitemap.ts] - Next.js sitemap generator voor alle pagina's

## Content (kant-en-klare teksten)

### app/doelgroepen/[segment]/page.tsx - Segment "evenementen"

Voeg het volgende object toe aan het `segments` Record:

```typescript
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
```

### app/doelgroepen/page.tsx - Nieuwe tegel

Voeg toe aan het `doelgroepen` array:

```typescript
{
  slug: "evenementen",
  title: "Evenementen & festivals",
  subtitle: "Plug-and-play, Tap to Pay, geen contract",
  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
},
```

### app/blog/page.tsx - Nieuwe artikelen

Voeg toe aan het `articles` array:

```typescript
{
  slug: "kassasysteem-kiezen-starter",
  title: "Kassasysteem kiezen als starter: 7 vragen die je moet stellen",
  excerpt: "Je eerste kassasysteem kiezen? Deze 7 vragen helpen je de juiste keuze maken. Zonder jargon, met concrete tips.",
  date: "30 maart 2026",
  category: "Ondernemen",
},
{
  slug: "kassasysteem-festival-evenement",
  title: "Kassasysteem voor festivals en evenementen: waar let je op?",
  excerpt: "Tap to Pay, plug-and-play, geen contract. Dit zijn de eisen voor een goed evenementenkassasysteem.",
  date: "30 maart 2026",
  category: "Evenementen",
},
```

### app/sitemap.ts

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.spont.nl";
  const now = new Date().toISOString();

  const staticPages = [
    "",
    "/features",
    "/prijzen",
    "/contact",
    "/over-ons",
    "/blog",
    "/doelgroepen",
  ];

  const doelgroepen = [
    "restaurants",
    "coffee-bars",
    "cafes",
    "quick-service",
    "bakkerijen",
    "discotheken",
    "bowlingbanen",
    "evenementen",
  ];

  const vergelijk = [
    "lightspeed-alternatief",
    "untill-alternatief",
    "tebi-alternatief",
    "dish-alternatief",
    "trivec-alternatief",
    "orderbird-alternatief",
  ];

  const blogSlugs = [
    "wat-kost-kassasysteem-restaurant",
    "kassasysteem-vergelijken",
    "nieuw-restaurant-welke-kassa",
    "hoe-werken-kaartbetalingen",
    "tap-to-pay-iphone",
    "ai-support-revolutie",
    "kassasysteem-kiezen-starter",
    "kassasysteem-festival-evenement",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...doelgroepen.map((slug) => ({
      url: `${base}/doelgroepen/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...vergelijk.map((slug) => ({
      url: `${base}/vergelijk/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
```

### app/blog/[slug]/page.tsx

Maak een dynamische blogpagina component aan. Verplaats de blog content uit de blog-*.md bestanden in de repo root naar een `blogPosts` Record in dit bestand, vergelijkbaar met hoe doelgroepen/[segment]/page.tsx werkt. Voeg Article schema markup toe via de JsonLd component. Elke post bevat: title, date, category, focusKeyword, metaDescription, en content (als JSX).
