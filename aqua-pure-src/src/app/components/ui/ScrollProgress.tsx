"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thin gradient bar at the top that fills as the page is scrolled. */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-cyan-400 to-primary"
    />
  );
}
