import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import PlausibleAnalytics from "@/components/shared/PlausibleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Spont — Kassasysteem voor de horeca",
    template: "%s | Spont",
  },
  description:
    "Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig voor het personeel, snel in support, eerlijk in prijs. Start direct.",
  keywords:
    "kassasysteem horeca, kassa restaurant, pos systeem café, horeca software",
  metadataBase: new URL("https://www.spont.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Spont",
    title: "Spont — Kassasysteem voor de horeca",
    description:
      "Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig voor het personeel, snel in support, eerlijk in prijs.",
    url: "https://www.spont.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spont — Kassasysteem voor de horeca",
    description:
      "Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig, eerlijk, snel.",
  },
  alternates: {
    canonical: "https://www.spont.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spont",
              url: "https://www.spont.nl",
              logo: "https://www.spont.nl/logo.svg",
              description:
                "Spont is het kassasysteem dat meedenkt met de horeca. Eenvoudig voor het personeel, snel in support, eerlijk in prijs.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@spont.nl",
                contactType: "customer service",
                availableLanguage: "Dutch",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-beige">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Suspense fallback={null}>
          <PlausibleAnalytics />
        </Suspense>
        <SpeedInsights />
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16835723122"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16835723122');
        `}</Script>
        {/* NovaChat Widget */}
        <Script id="novachat-config" strategy="afterInteractive">{`
          window.NovaChat = window.NovaChat || [];
          window.NovaChat.push(['config', {
            env: 'spont-staging',
            lang: 'nl',
            tracking: { pageViews: true }
          }]);
        `}</Script>
        <Script
          src="https://novachat.spont.nl/widget.js?v=8"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
