"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#111827] rounded-2xl p-6 md:flex md:items-center md:gap-6 shadow-2xl">
        <p className="text-white/80 text-sm leading-relaxed flex-1 mb-4 md:mb-0">
          Wij gebruiken functionele en analytische cookies om de website te
          verbeteren. Geen tracking zonder jouw toestemming.{" "}
          <Link href="/privacy" className="text-[#f5e45d] hover:underline">
            Privacyverklaring
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
          >
            Weigeren
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#f5e45d] hover:bg-[#d4c430] text-[#1A1714] transition-colors"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
