"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// Pages with a dark full-screen hero → show white logo when not scrolled
const DARK_HERO_PAGES = ["/", "/prijzen", "/over-ons", "/doelgroepen", "/contact"];

const navLinks = [
  { href: "/features", label: "Functies" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/doelgroepen", label: "Doelgroepen" },
  { href: "/over-ons", label: "Over ons" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasDarkHero =
    DARK_HERO_PAGES.includes(pathname) ||
    pathname.startsWith("/doelgroepen/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-[#FCF9F4]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={isLight ? "/logo-dark.svg" : "/logo-wit.svg"}
            alt="Spont"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isLight
                  ? "text-[#5C5550] hover:text-[#1A1714]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://spont-live.eu.auth0.com/u/login"
            className={`text-sm font-medium transition-colors ${
              isLight
                ? "text-[#5C5550] hover:text-[#1A1714]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Inloggen
          </a>
          <a
            href="https://admin.spont.nl"
            className="bg-[#CC5533] hover:bg-[#A33818] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Start direct
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${isLight ? "text-[#1A1714]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FCF9F4] border-t border-[#EBE8E3] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#1A1714]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-[#EBE8E3]" />
          <a
            href="https://admin.spont.nl"
            className="bg-[#CC5533] text-white text-sm font-semibold px-5 py-3 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Start direct
          </a>
        </div>
      )}
    </header>
  );
}
