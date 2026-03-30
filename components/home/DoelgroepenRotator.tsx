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
];

export default function DoelgroepenRotator() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let lastTime = 0;
    const speed = 0.5; // px per frame (~30px/s)

    const step = (time: number) => {
      if (!paused && lastTime) {
        const delta = time - lastTime;
        el.scrollLeft += speed * (delta / 16);

        // Loop: when we've scrolled past the first set, jump back
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
  }, [paused]);

  // Duplicate items for seamless loop
  const items = [...segments, ...segments];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {items.map((seg, i) => (
        <Link
          key={`${seg.slug}-${i}`}
          href={`/doelgroepen/${seg.slug}`}
          className="card-hover cursor-pointer group relative block rounded-2xl overflow-hidden min-h-56 flex-shrink-0 w-[85vw] md:w-[calc(33.333%-0.67rem)]"
        >
          <img
            src={seg.img}
            alt={seg.label}
            className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/80 via-[#1A1714]/20 to-transparent" />
          <div className="relative z-10 p-6 flex flex-col justify-end h-full min-h-56">
            <h3 className="font-serif text-xl font-semibold text-white">{seg.label}</h3>
            <p className="text-sm text-white/70 mt-1">{seg.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
