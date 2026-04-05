"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Doelgroep {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
}

export default function DoelgroepenSlider({ items }: { items: Doelgroep[] }) {
  return (
    <div className="relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#FFFFFF] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#FFFFFF] to-transparent" />

      {/* Slider wrapper — animates in as a whole */}
      <motion.div
        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-12"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {items.map((d, i) => (
          <motion.div
            key={d.slug}
            className="shrink-0 w-64 md:w-72"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Link
              href={`/doelgroepen/${d.slug}`}
              className="block rounded-3xl overflow-hidden relative h-96 group"
              style={{
                boxShadow: "0 2px 16px 0 rgba(26,23,20,0.08)",
              }}
            >
              <img
                src={d.img}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/20 to-transparent" />
              <div className="relative z-10 p-7 flex flex-col justify-end h-full">
                <h2 className="font-sans text-xl font-semibold text-white leading-tight">
                  {d.title}
                </h2>
                <p className="text-sm text-white/65 mt-1">{d.subtitle}</p>
                <span className="mt-4 text-xs font-semibold text-[#f5e45d] uppercase tracking-wider">
                  Meer info →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
