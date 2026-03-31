"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface FeatureRowProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
  children: React.ReactNode; // visual slot — swap voor mockup/illustratie
}

export function FeatureRow({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  reverse = false,
  children,
}: FeatureRowProps) {
  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 py-16 md:py-20 border-b border-[#E8E0D6] last:border-0`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Tekstkolom */}
      <div className="flex-1 max-w-md">
        <p className="text-[#111827] font-semibold text-xs uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl font-sans font-semibold text-[#111827] leading-snug mb-4">
          {title}
        </h2>
        <p className="text-base text-[#6B7280] leading-relaxed mb-7">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-[#4353FF] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
        >
          {ctaLabel} <span>→</span>
        </Link>
      </div>

      {/* Visual kolom */}
      <motion.div
        className="flex-1 w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
