"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Small gradient bar that draws itself under section headings. */
export default function AccentBar({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={`block h-1 w-16 origin-left rounded-full bg-gradient-to-r from-primary to-cyan-400 ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    />
  );
}
