"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface DoelgroepTileProps {
  label: string;
  headline: string;
  description: string;
  href: string;
  imageSrc: string;
  featured?: boolean; // grote linker tile
}

export function DoelgroepTile({
  label,
  headline,
  description,
  href,
  imageSrc,
  featured = false,
}: DoelgroepTileProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl bg-[#F0EDE8] flex flex-col ${
        featured ? "min-h-[480px] md:row-span-2" : "min-h-[220px]"
      }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={
        hovered
          ? {
              scale: 1.02,
              boxShadow:
                "0 0 0 1.5px #CC5533, 0 24px 48px rgba(26,23,20,0.16)",
            }
          : {
              scale: 1,
              boxShadow:
                "0 0 0 0px transparent, 0 2px 12px rgba(26,23,20,0.06)",
            }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* ── Achtergrondafbeelding: blur → scherp bij hover ── */}
      <motion.img
        src={imageSrc}
        alt={headline}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={
          hovered
            ? { opacity: 1, filter: "blur(0px)", scale: 1 }
            : { opacity: 0, filter: "blur(8px)", scale: 1.05 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* ── Donkere overlay verschijnt samen met de foto ── */}
      <motion.div
        className="absolute inset-0 bg-[#1A1714] pointer-events-none"
        animate={{ opacity: hovered ? 0.55 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* ── Content: schuift licht omhoog bij hover ── */}
      <motion.div
        className="relative z-10 p-7 flex flex-col h-full"
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="text-[#CC5533] text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>

        <motion.h3
          className="font-serif font-semibold leading-snug mb-3"
          style={{ fontSize: featured ? "1.5rem" : "1.1rem" }}
          animate={{ color: hovered ? "#ffffff" : "#1A1714" }}
          transition={{ duration: 0.3 }}
        >
          {headline}
        </motion.h3>

        <motion.p
          className="text-sm leading-relaxed flex-1"
          animate={{ color: hovered ? "rgba(255,255,255,0.78)" : "#5C5550" }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-[#CC5533] text-xs font-semibold uppercase tracking-wider hover:gap-2.5 transition-all duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          Meer info <span>→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
