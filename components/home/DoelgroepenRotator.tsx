"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [hovered, setHovered] = useState(false);

  // Smooth ease-in-out scroll animation
  const smoothScroll = useCallback((distance: number, duration = 800) => {
    const el = scrollRef.current;
    if (!el) return;

    const start = el.scrollLeft;
    const startTime = performance.now();

    // Soft ease — slow start, gentle glide, soft landing
    const easeInOut = (t: number) => {
      if (t < 0.3) return 2.5 * t * t * t; // slow ramp up
      if (t < 0.7) return 0.0675 + (t - 0.3) * 2.169; // smooth glide
      const r = 1 - t;
      return 1 - 2.5 * r * r * r; // soft deceleration
    };

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + distance * easeInOut(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const getCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 300;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return 300;
    return card.offsetWidth + 20;
  }, []);

  // Auto-scroll: one card at a time, then pause
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (pausedRef.current) return;

      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      smoothScroll(getCardWidth(), 1200);
    }, 4500); // pause 4.5s between each card

    return () => clearInterval(interval);
  }, [smoothScroll, getCardWidth]);

  const scrollByCard = useCallback((direction: number) => {
    smoothScroll(getCardWidth() * direction, 600);
  }, [smoothScroll, getCardWidth]);

  const items = [...segments, ...segments];

  return (
    <div
      className="relative group/rotator"
      onMouseEnter={() => {
        pausedRef.current = true;
        setHovered(true);
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
        setHovered(false);
      }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((seg, i) => (
          <div key={`${seg.slug}-${i}`} data-card className="flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[25vw]">
            <Link
              href={`/doelgroepen/${seg.slug}`}
              className="group relative block rounded-2xl overflow-hidden"
              style={{ height: "480px" }}
            >
              <img
                src={seg.img}
                alt={seg.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[#4353FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  {seg.label}
                </h3>
                <p className="text-base text-white/70 leading-snug">
                  {seg.subtitle}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Arrow controls — visible on hover */}
      <button
        onClick={() => scrollByCard(-1)}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-opacity duration-200 hover:bg-white ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Vorige"
      >
        <ChevronLeft size={22} className="text-[#111827]" />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-opacity duration-200 hover:bg-white ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Volgende"
      >
        <ChevronRight size={22} className="text-[#111827]" />
      </button>
    </div>
  );
}
