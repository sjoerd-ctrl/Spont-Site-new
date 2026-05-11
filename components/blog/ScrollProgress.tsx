"use client";

/**
 * ScrollProgress
 * Dunne oranje balk aan de bovenkant van het scherm die
 * bijhoudt hoe ver de lezer in het artikel is.
 */

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#f5e45d] z-[100]"
    />
  );
}
