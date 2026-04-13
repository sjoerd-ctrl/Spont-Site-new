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
  primary = { label: "Start direct", href: "https://admin.spont.nl" },
  secondary = { label: "Bekijk de prijzen", href: "/prijzen" },
}: CTABannerProps) {
  return (
    <section className="bg-[#111827] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-sans text-white font-semibold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primary.href}
            className="bg-[#f5e45d] hover:bg-[#d4c430] text-[#1A1714] font-semibold px-8 py-4 rounded-full transition-colors text-base"
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
