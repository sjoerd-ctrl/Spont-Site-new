"use client";

/**
 * AnimatedTitle
 * Woord-voor-woord reveal animatie voor artikel-titels.
 * Elk woord valt op z'n plek bij page load.
 */

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export function AnimatedTitle({ text, className }: AnimatedTitleProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
