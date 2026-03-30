"use client";

import { useState, useEffect } from "react";
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
    img: "https://images.unsplash.com/photo-1571266028778-c86a3edd7685?w=800&q=80",
  },
  {
    slug: "bowlingbanen",
    label: "Bowling & leisure",
    subtitle: "Van baan tot bar",
    img: "https://images.unsplash.com/photo-1541795795328-f073b763494e?w=800&q=80",
  },
];

export default function DoelgroepenRotator() {
  const [startIndex, setStartIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setStartIndex((i) => (i + 1) % segments.length);
        setVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const cards = [0, 1, 2].map((offset) => segments[(startIndex + offset) % segments.length]);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {cards.map((seg) => (
        <Link
          key={seg.slug}
          href={`/doelgroepen/${seg.slug}`}
          className="card-hover cursor-pointer group relative block rounded-2xl overflow-hidden min-h-56"
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
