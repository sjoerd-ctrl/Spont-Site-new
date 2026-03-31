"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const segments = [
  {
    slug: "restaurants",
    label: "Restaurants",
    subtitle: "Vol terras, drukke bediening",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    slug: "coffee-bars",
    label: "Koffiezaken",
    subtitle: "Ochtenddrukte, loyaliteit, snelheid",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
  },
  {
    slug: "cafes",
    label: "Café & kroeg",
    subtitle: "Snel aan de toog",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
  },
  {
    slug: "quick-service",
    label: "Quick Service",
    subtitle: "Van bestelling tot afgifte",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    slug: "bakkerijen",
    label: "Bakkerijen",
    subtitle: "Toonbank, snel, overzichtelijk",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    slug: "discotheken",
    label: "Discotheek & club",
    subtitle: "Ook als het donker en druk is",
    img: "/images/disco-muziekgieterij.jpg",
  },
  {
    slug: "bowlingbanen",
    label: "Bowling & leisure",
    subtitle: "Van baan tot bar",
    img: "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=800&q=80",
  },
  {
    slug: "evenementen",
    label: "Evenementen & festivals",
    subtitle: "Plug-and-play, Tap to Pay, geen contract",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
  },
];

export default function DoelgroepenRotator() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let lastTime = 0;
    const speed = 0.28;

    const step = (time: number) => {
      if (!pausedRef.current && lastTime) {
        const delta = time - lastTime;
        el.scrollLeft += speed * (delta / 16);
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      lastTime = time;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []); // geen dependency op state — ref is altijd actueel

  const items = [...segments, ...segments];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      {items.map((seg, i) => (
        <div key={`${seg.slug}-${i}`} className="flex-shrink-0 w-64 md:w-72">
          <Link
            href={`/doelgroepen/${seg.slug}`}
            className="group relative block rounded-3xl overflow-hidden"
            style={{ height: "400px" }}
          >
            {/* Full-bleed foto */}
            <img
              src={seg.img}
              alt={seg.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Vaste gradient onderaan */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/90 via-[#1A1714]/25 to-transparent" />

            {/* Kleur-overlay bij hover — warm tint, zoals Mollie */}
            <div className="absolute inset-0 bg-[#CC5533]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Tekst onderaan */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="font-serif text-2xl font-semibold text-white leading-tight mb-2">
                {seg.label}
              </h3>
              <p className="text-sm text-white/70 leading-snug">
                {seg.subtitle}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
