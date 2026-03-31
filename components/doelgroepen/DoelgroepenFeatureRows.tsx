"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Doelgroep {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
}

function FeatureRow({ item, reverse }: { item: Doelgroep; reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16 py-16 md:py-24 border-b border-[#E8E0D6] last:border-0`}
    >
      {/* Text column */}
      <motion.div
        className="flex-1 max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-[#CC5533] font-semibold text-sm uppercase tracking-widest mb-3">
          {item.subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1A1714] leading-tight mb-5">
          {item.title}
        </h2>
        <p className="text-[#5C5550] text-base md:text-lg leading-relaxed mb-8">
          {item.description}
        </p>
        <Link
          href={`/doelgroepen/${item.slug}`}
          className="inline-flex items-center gap-2 text-[#CC5533] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-200"
        >
          Meer info
          <span className="text-base">→</span>
        </Link>
      </motion.div>

      {/* Visual column */}
      <motion.div
        className="flex-1 w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/40 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function DoelgroepenFeatureRows({ items }: { items: Doelgroep[] }) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {items.map((item, i) => (
        <FeatureRow key={item.slug} item={item} reverse={i % 2 !== 0} />
      ))}
    </div>
  );
}
