import Link from "next/link";

const links = {
  Product: [
    { href: "/features", label: "Functies" },
    { href: "/spont-pay", label: "Spont Pay" },
    { href: "/prijzen", label: "Prijzen" },
  ],
  Doelgroepen: [
    { href: "/doelgroepen/restaurants", label: "Restaurants" },
    { href: "/doelgroepen/coffee-bars", label: "Koffiezaken" },
    { href: "/doelgroepen/quick-service", label: "Quick Service" },
    { href: "/doelgroepen/bakkerijen", label: "Bakkerijen" },
    { href: "/doelgroepen/discotheken", label: "Discotheken" },
  ],
  Bedrijf: [
    { href: "/over-ons", label: "Over ons" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Juridisch: [
    { href: "/privacy", label: "Privacybeleid" },
    { href: "/voorwaarden", label: "Algemene voorwaarden" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2D4B3F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo-wit.svg" alt="Spont" className="h-7 w-auto mb-4" />
            <p className="text-sm text-white/60 leading-relaxed">
              Het kassasysteem dat meedenkt met de horeca.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                {title}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Spont. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-white/40">
            Gemaakt met liefde voor de horeca 🍽️
          </p>
        </div>
      </div>
    </footer>
  );
}
