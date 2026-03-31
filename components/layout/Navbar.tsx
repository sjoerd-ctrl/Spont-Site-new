"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// Pages with a dark full-screen hero → show white logo when not scrolled
const DARK_HERO_PAGES = ["/", "/prijzen", "/over-ons", "/doelgroepen"];

const navLinks = [
  { href: "/features", label: "Functies" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/doelgroepen", label: "Doelgroepen" },
  { href: "/over-ons", label: "Over ons" },
];

const loginOptions = [
  {
    name: "Spont POS",
    description: "De handheld en kassa van Spont",
    href: "https://cloud.spont.nl",
    bg: "from-[#00C9B1] to-[#00A693]",
  },
  {
    name: "Spont Beyond",
    description: "Eten en drinken",
    href: "https://admin.spont.nl",
    bg: "from-[#5B5FEF] to-[#3B3FC7]",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const loginRef = useRef<HTMLDivElement>(null);

  const hasDarkHero =
    DARK_HERO_PAGES.includes(pathname) ||
    pathname.startsWith("/doelgroepen/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
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
          {/* Inloggen dropdown */}
          <div ref={loginRef} className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isLight
                  ? "text-[#5C5550] hover:text-[#1A1714]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Inloggen
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${loginOpen ? "rotate-180" : ""}`}
              />
            </button>

            {loginOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-xl border border-[#EBE8E3] overflow-hidden">
                {loginOptions.map((opt) => (
                  <a
                    key={opt.href}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLoginOpen(false)}
                    className="flex items-center gap-4 px-4 py-3.5 hover:bg-[#FCF9F4] transition-colors"
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${opt.bg} flex items-center justify-center`}>
                      <div className="w-5 h-5 rounded-full bg-white/30 relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-white/60" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1714] leading-none mb-0.5">{opt.name}</p>
                      <p className="text-xs text-[#5C5550]">{opt.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

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
          <p className="text-xs font-semibold text-[#5C5550] uppercase tracking-widest">Inloggen</p>
          {loginOptions.map((opt) => (
            <a
              key={opt.href}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <div className={`shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br ${opt.bg} flex items-center justify-center`}>
                <div className="w-4 h-4 rounded-full bg-white/30 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-white/60" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1714] leading-none mb-0.5">{opt.name}</p>
                <p className="text-xs text-[#5C5550]">{opt.description}</p>
              </div>
            </a>
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
