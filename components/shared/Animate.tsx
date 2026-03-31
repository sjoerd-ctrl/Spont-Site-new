"use client";

/**
 * Animate.tsx
 * Herbruikbare animatie-wrappers gebaseerd op Framer Motion.
 *
 * Gebruik:
 *   <FadeUp>    — fade + slide omhoog bij scrollen
 *   <FadeIn>    — pure fade bij scrollen
 *   <Stagger>   — parent die kinderen gestaggerd laat verschijnen
 *   <StaggerItem> — kind van Stagger
 *   <HeroReveal> — hero mount-animatie (geen scroll nodig)
 */

import { motion, useReducedMotion, Variants } from "framer-motion";
import type { ReactNode } from "react";

// ─── Gedeelde viewport instellingen ───────────────────────────────────────
const VIEWPORT = { once: true, amount: 0.15 };

// ─── Variants ─────────────────────────────────────────────────────────────
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// ─── Props types ──────────────────────────────────────────────────────────
interface AnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// ─── FadeUp ───────────────────────────────────────────────────────────────
/**
 * Fade + slide omhoog zodra het element in de viewport komt.
 * Perfecte keuze voor losse secties, koppen, tekst.
 */
export function FadeUp({ children, className, delay = 0 }: AnimateProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
          : fadeUpVariants
      }
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeIn ───────────────────────────────────────────────────────────────
/**
 * Pure fade (geen beweging). Goed voor afbeeldingen en achtergronden.
 */
export function FadeIn({ children, className, delay = 0 }: AnimateProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={reduced ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeInVariants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger + StaggerItem ─────────────────────────────────────────────────
/**
 * Wrapper voor grids. Kinderen verschijnen één voor één.
 * Gebruik: <Stagger className="grid ..."><StaggerItem>...</StaggerItem></Stagger>
 */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
          : staggerItemVariants
      }
    >
      {children}
    </motion.div>
  );
}

// ─── HeroReveal ───────────────────────────────────────────────────────────
/**
 * Voor de hero: animeert bij page load (niet bij scroll).
 * Elke instantie krijgt een `delay` mee voor staggering.
 *
 * Gebruik:
 *   <HeroReveal delay={0}>   — label bovenin
 *   <HeroReveal delay={0.1}> — h1
 *   <HeroReveal delay={0.25}>— subtekst
 *   <HeroReveal delay={0.4}> — CTA knoppen
 */
export function HeroReveal({ children, className, delay = 0 }: AnimateProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
          : heroVariants
      }
    >
      {children}
    </motion.div>
  );
}
