import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export default function CTABanner({
  title,
  subtitle,
  primary = { label: "Start direct", href: "https://spont-live.eu.auth0.com/u/signup" },
  secondary = { label: "Bekijk de prijzen", href: "/prijzen" },
}: CTABannerProps) {
  return (
    <section className="bg-[#2D4B3F] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primary.href}
            className="bg-[#CC5533] hover:bg-[#A33818] text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
