"use client";

import { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
} from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const OFFSET = 32;

const directionVariants: Record<Direction, TargetAndTransition> = {
  up: { opacity: 0, y: OFFSET },
  down: { opacity: 0, y: -OFFSET },
  left: { opacity: 0, x: -OFFSET },
  right: { opacity: 0, x: OFFSET },
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  // Respect the user's OS "reduce motion" setting: render content as-is.
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
