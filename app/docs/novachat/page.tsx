import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaChat Widget — Integratie Documentatie",
  description:
    "Volledige developer documentatie voor het embedden van de NovaChat widget op je website. Quick start, JWT, tracking en JavaScript API.",
  alternates: { canonical: "https://www.spont.nl/docs/novachat" },
};

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-[#F3F4F6] text-[#111827] text-sm px-1.5 py-0.5 rounded font-mono">
      {children}
    </code>
  );
}

function CodeBlock({ title, children }: { title?: string; children: string }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden bg-[#111827]">
      {title && (
        <div className="px-4 py-2 bg-[#1f2937] text-white/50 text-xs font-mono">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-[#e5e7eb] font-mono">{children}</code>
      </pre>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-[#EBE8E3]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#F9FAFB]">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 font-semibold text-[#111827] border-b border-[#EBE8E3]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#EBE8E3] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[#6B7280]">
                  <code className="text-xs bg-[#F3F4F6] px-1 py-0.5 rounded font-mono">
                    {cell}
                  </code>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NovaChatDocsPage() {
  return (
    <section className="bg-[#FFFFFF] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-4">
          Developer Docs
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-[#111827] font-semibold leading-tight mb-4">
          NovaChat Widget
        </h1>
        <p className="text-[#6B7280] text-lg mb-12">
          Volledige developer documentatie voor het embedden van de NovaChat
          widget op je website.
        </p>

        {/* Table of Contents */}
        <nav className="bg-[#F9FAFB] rounded-2xl p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5C5550]/60 mb-3">
            Inhoud
          </p>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            {[
              ["#quick-start", "Quick Start"],
              ["#installation", "Installatie Methoden"],
              ["#no-venue", "No-Venue Mode"],
              ["#session-upgrade", "Session Upgrade"],
              ["#tracking", "Pageview & Event Tracking"],
              ["#utm", "UTM & Referrer Capture"],
              ["#api", "JavaScript API"],
              ["#config", "Configuratie Referentie"],
              ["#troubleshooting", "Troubleshooting"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#CC5533] hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ─── QUICK START ─── */}
        <section id="quick-start" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            1. Quick Start — Simpelste Integratie
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Voeg het volgende snippet toe aan je HTML pagina, vlak voor{" "}
            <Code>{"</body>"}</Code>:
          </p>
          <CodeBlock title="HTML">{`<script>
  window.NovaChat = window.NovaChat || [];
  window.NovaChat.push(['config', {
    env: 'spont-production',
    lang: 'nl',
    tracking: { pageViews: true }
  }]);
</script>
<script src="https://novachat.spont.nl/widget.js?v=8" async></script>`}</CodeBlock>
          <p className="text-[#6B7280] leading-relaxed mb-2">
            Dat is alles! De widget zal:
          </p>
          <ul className="space-y-2 text-[#6B7280] text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              De chat-bubble direct tonen
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              De bezoeker om naam + e-mail vragen voor het chatten
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Automatisch pageviews tracken (indien ingeschakeld)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              UTM-parameters en referrer uit de URL vastleggen
            </li>
          </ul>
        </section>

        {/* ─── QUICK START JWT ─── */}
        <section className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            Quick Start — Met JWT
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Voor het koppelen van sessies aan specifieke organisaties of
            vestigingen:
          </p>
          <CodeBlock title="HTML">{`<script>
  window.NovaChat = window.NovaChat || [];
  window.NovaChat.push(['config', {
    jwt: '<YOUR_SERVER_GENERATED_JWT>',
    tracking: { pageViews: true }
  }]);
</script>
<script src="https://novachat.spont.nl/widget.js?v=8" async></script>`}</CodeBlock>
        </section>

        {/* ─── INSTALLATION ─── */}
        <section id="installation" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            2. Installatie Methoden
          </h2>

          <h3 className="text-lg font-semibold text-[#111827] mt-8 mb-3">
            JWT Mode (Aanbevolen)
          </h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Genereer een signed JWT op je backend met de organisatie- en
            (optioneel) vestiging-ID&apos;s. Dit voorkomt client-side manipulatie.
          </p>

          <CodeBlock title="Node.js">{`const jwt = require('jsonwebtoken');
const token = jwt.sign(
  {
    org_id: 'YOUR_ORGANISATION_ID',
    venue_id: 'YOUR_VENUE_ID',   // optioneel
    env: 'spont-production'
  },
  'YOUR_SECRET_KEY',
  { expiresIn: '10m' }
);`}</CodeBlock>

          <CodeBlock title="Python">{`import jwt
from datetime import datetime, timedelta

token = jwt.encode({
    'org_id': 'YOUR_ORGANISATION_ID',
    'venue_id': 'YOUR_VENUE_ID',  # optioneel
    'env': 'spont-production',
    'exp': datetime.utcnow() + timedelta(minutes=10)
}, 'YOUR_SECRET_KEY', algorithm='HS256')`}</CodeBlock>

          <CodeBlock title="PHP">{`use Firebase\\JWT\\JWT;

$token = JWT::encode([
    'org_id' => 'YOUR_ORGANISATION_ID',
    'venue_id' => 'YOUR_VENUE_ID', // optioneel
    'env' => 'spont-production',
    'exp' => time() + 600
], 'YOUR_SECRET_KEY', 'HS256');`}</CodeBlock>

          <h3 className="text-lg font-semibold text-[#111827] mt-8 mb-3">
            Legacy Mode (Deprecated)
          </h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Geef plain ID&apos;s rechtstreeks door. Minder veilig — overweeg migratie
            naar JWT.
          </p>
          <CodeBlock title="HTML">{`<script>
  window.NovaChat = window.NovaChat || [];
  window.NovaChat.push(['config', {
    organisationId: 'YOUR_ORGANISATION_ID',
    venueId: 'YOUR_VENUE_ID',
    environment: 'spont-production',
    lang: 'nl',
    tracking: { pageViews: true }
  }]);
</script>
<script src="https://novachat.spont.nl/widget.js?v=8" async></script>`}</CodeBlock>
        </section>

        {/* ─── NO-VENUE MODE ─── */}
        <section id="no-venue" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            3. No-Venue Mode
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Wanneer geen <Code>venue_id</Code> is opgegeven, schakelt de widget
            over naar <strong className="text-[#111827]">website visitor mode</strong>:
          </p>
          <ul className="space-y-2 text-[#6B7280] text-sm mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              De chat-bubble verschijnt direct — geen entity context fetch nodig
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Bezoeker ziet een naam + e-mail formulier voor het chatten
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Sessie wordt aangemaakt met <Code>source: &apos;website&apos;</Code>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Vestiging-specifieke tabs (Tickets, Todos) zijn verborgen
            </li>
          </ul>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Ideaal voor marketing/landingspagina&apos;s, pre-login ervaringen en
            algemene website support.
          </p>
        </section>

        {/* ─── SESSION UPGRADE ─── */}
        <section id="session-upgrade" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            4. Session Upgrade
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Wanneer een bezoeker in no-venue mode start en later inlogt (een{" "}
            <Code>venue_id</Code> wordt beschikbaar), kun je de sessie naadloos
            upgraden:
          </p>
          <CodeBlock title="JavaScript">{`// Na het inloggen, met een nieuw JWT met venue_id
NovaChat.push(['config', { jwt: newJwtWithVenueId }]);`}</CodeBlock>
          <p className="text-[#6B7280] leading-relaxed mb-2">Wat er gebeurt:</p>
          <ul className="space-y-2 text-[#6B7280] text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Widget detecteert dat het nieuwe JWT een <Code>venue_id</Code> bevat
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Roept de <Code>upgrade-session</Code> backend functie aan
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Sessie source verandert van <Code>website</Code> naar <Code>widget</Code>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Verborgen tabs (Tickets, Todos) worden beschikbaar
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#CC5533] mt-0.5">•</span>
              Originele acquisitiedata blijft behouden
            </li>
          </ul>
        </section>

        {/* ─── TRACKING ─── */}
        <section id="tracking" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            5. Pageview & Event Tracking
          </h2>
          <h3 className="text-lg font-semibold text-[#111827] mt-8 mb-3">
            Automatische Pageview Tracking
          </h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Activeer met <Code>tracking: {"{ pageViews: true }"}</Code> in je
            config. Elke paginanavigatie wordt vastgelegd met URL, titel,
            referrer en UTM-parameters.
          </p>
          <h3 className="text-lg font-semibold text-[#111827] mt-8 mb-3">
            Custom Event Tracking
          </h3>
          <CodeBlock title="JavaScript">{`// Track een custom event
NovaChat.push(['track', 'button_clicked', {
  buttonId: 'cta-hero',
  page: '/pricing'
}]);

// Of gebruik de directe API
NovaChat.track('form_submitted', { formName: 'contact' });`}</CodeBlock>
        </section>

        {/* ─── UTM ─── */}
        <section id="utm" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            6. UTM & Referrer Capture
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            De widget legt <strong className="text-[#111827]">automatisch</strong>{" "}
            UTM-parameters en de referrer vast bij het laden van de pagina. Geen
            extra configuratie nodig.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-2">
            Vastgelegde parameters:
          </p>
          <ul className="space-y-1 text-[#6B7280] text-sm mb-4">
            {["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "document.referrer"].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="text-[#CC5533] mt-0.5">•</span>
                <Code>{p}</Code>
              </li>
            ))}
          </ul>
          <CodeBlock title="Opgeslagen data (JSON)">{`{
  "entity_context": {
    "acquisition": {
      "referrer": "https://google.com/search?q=restaurant+pos",
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "spring-2026"
    }
  }
}`}</CodeBlock>
        </section>

        {/* ─── API ─── */}
        <section id="api" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            7. JavaScript API
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Na het laden van de widget biedt{" "}
            <Code>window.NovaChat</Code> de volgende methoden:
          </p>

          {[
            {
              method: "NovaChat.open(options?)",
              desc: "Opent de widget programmatisch.",
              code: `NovaChat.open();
NovaChat.open({ message: 'Help me' });
NovaChat.open({ message: 'Hi', focus: true });`,
            },
            {
              method: "NovaChat.close()",
              desc: "Sluit de widget.",
              code: `NovaChat.close();`,
            },
            {
              method: "NovaChat.send(options)",
              desc: "Stuurt direct een bericht (opent de widget indien nodig).",
              code: `NovaChat.send({ message: 'Ik heb hulp nodig met betalingen' });`,
            },
            {
              method: "NovaChat.reset()",
              desc: "Reset de widget: wist cached sessie, entity context, en herlaadt.",
              code: `NovaChat.reset();`,
            },
            {
              method: "NovaChat.startPayment()",
              desc: "Start de payment onboarding flow.",
              code: `NovaChat.startPayment();`,
            },
            {
              method: "NovaChat.track(eventName, metadata?)",
              desc: "Track een custom event.",
              code: `NovaChat.track('pricing_viewed', { plan: 'pro' });`,
            },
            {
              method: "NovaChat.push(command)",
              desc: "Queue-style API — werkt ook voordat het widget script is geladen.",
              code: `window.NovaChat = window.NovaChat || [];
NovaChat.push(['config', { jwt: '...' }]);
NovaChat.push(['track', 'page_loaded']);`,
            },
          ].map((item) => (
            <div key={item.method} className="mb-8">
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                <code className="font-mono text-[#CC5533]">{item.method}</code>
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">{item.desc}</p>
              <CodeBlock>{item.code}</CodeBlock>
            </div>
          ))}
        </section>

        {/* ─── CONFIG ─── */}
        <section id="config" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            8. Configuratie Referentie
          </h2>

          <Table
            headers={["Optie", "Type", "Default", "Beschrijving"]}
            rows={[
              ["env", "string", "—", "Environment, bijv. 'spont-production'"],
              ["jwt", "string", "—", "Signed JWT token"],
              ["organisationId", "string", "—", "Organisatie ID (legacy)"],
              ["venueId", "string", "—", "Vestiging ID (optioneel)"],
              ["lang", "'nl' | 'en'", "'nl'", "Widget taal"],
              ["tracking.pageViews", "boolean", "false", "Auto-track pageviews"],
            ]}
          />

          <h3 className="text-lg font-semibold text-[#111827] mt-8 mb-3">
            Environments
          </h3>
          <Table
            headers={["Environment", "Brand", "Gebruik"]}
            rows={[
              ["spont-staging", "Spont", "Development/testing"],
              ["spont-production", "Spont", "Live"],
            ]}
          />
        </section>

        {/* ─── TROUBLESHOOTING ─── */}
        <section id="troubleshooting" className="scroll-mt-24 mb-16">
          <h2 className="text-2xl font-semibold text-[#111827] mb-4">
            9. Troubleshooting
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Widget verschijnt niet
              </h3>
              <ul className="space-y-1 text-[#6B7280] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Check de browser console op errors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Verifieer dat het JWT geldig is en niet verlopen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Zorg dat de organisatie een geldige secret key heeft
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Taal niet correct
              </h3>
              <ul className="space-y-1 text-[#6B7280] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Stel <Code>lang</Code> in via de config
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Niet-NL landen gebruiken standaard Engels
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111827] mb-2">
                Sessie upgrade werkt niet
              </h3>
              <ul className="space-y-1 text-[#6B7280] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  Zorg dat het nieuwe JWT een <Code>venue_id</Code> claim bevat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#CC5533] mt-0.5">•</span>
                  De widget moet al een actieve sessie hebben om te upgraden
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
