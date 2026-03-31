"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let lastTime = 0;
    const speed = 0.5;

    const step = (time: number) => {
      if (!paused && lastTime) {
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
  }, [paused]);

  // Duplicate for seamless loop
  const items = [...segments, ...segments];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {items.map((seg, i) => (
        <motion.div
          key={`${seg.slug}-${i}`}
          className="flex-shrink-0 w-[85vw] md:w-[calc(33.333%-0.67rem)]"
          whileHover={{
            scale: 1.02,
            y: -4,
            boxShadow: "0 18px 45px rgba(0,0,0,0.10)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Link
            href={`/doelgroepen/${seg.slug}`}
            className="block bg-white rounded-3xl overflow-hidden p-3 text-decoration-none"
            style={{ textDecoration: "none" }}
          >
            {/* Image wrap — eigen border-radius + overflow hidden */}
            <div className="rounded-2xl overflow-hidden mb-4" style={{ height: "180px" }}>
              <img
                src={seg.img}
                alt={seg.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="px-2 pb-2">
              <h3 className="font-serif text-base font-semibold text-[#1A1714] leading-tight">
                {seg.label}
              </h3>
              <p className="text-xs text-[#5C5550] mt-1">{seg.subtitle}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-[#CC5533] uppercase tracking-wider">
                Meer info →
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
