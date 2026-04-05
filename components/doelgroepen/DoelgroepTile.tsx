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
  featured?: boolean;
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
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col ${
        featured ? "min-h-[480px] md:row-span-2" : "min-h-[300px]"
      }`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={
        hovered
          ? {
              borderColor: "rgba(204,85,51,0.5)",
              backgroundColor: "rgba(255,255,255,0.08)",
            }
          : {
              borderColor: "rgba(255,255,255,0.10)",
              backgroundColor: "rgba(255,255,255,0.05)",
            }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Achtergrondafbeelding: blur → scherp bij hover */}
      <motion.img
        src={imageSrc}
        alt={headline}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={
          hovered
            ? { opacity: 0.55, filter: "blur(0px)",  scale: 1 }
            : { opacity: 0,    filter: "blur(6px)", scale: 1.04 }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
      />

      {/* Subtiele gradient altijd aanwezig voor diepte */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent pointer-events-none" />

      {/* Hele tile klikbaar */}
      <Link href={href} className="absolute inset-0 z-20" aria-label={headline} />

      {/* Content: schuift licht omhoog bij hover */}
      <motion.div
        className="relative z-10 p-7 flex flex-col h-full"
        style={{ minHeight: featured ? "480px" : "300px" }}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <p className="text-[#f5e45d] text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>

        <h3
          className="font-sans font-semibold text-white leading-snug mb-3"
          style={{ fontSize: featured ? "1.5rem" : "1.15rem" }}
        >
          {headline}
        </h3>

        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        <motion.span
          className="mt-5 inline-flex items-center gap-1.5 text-[#f5e45d] text-xs font-semibold uppercase tracking-wider"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
        >
          Meer info →
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
