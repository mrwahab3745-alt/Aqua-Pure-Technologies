"use client";

import { ReactNode } from "react";
import { motion, type TargetAndTransition } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const directionVariants: Record<Direction, TargetAndTransition> = {
  up: { opacity: 0, y: 60 },
  down: { opacity: 0, y: -60 },
  left: { opacity: 0, x: -60 },
  right: { opacity: 0, x: 60 },
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

