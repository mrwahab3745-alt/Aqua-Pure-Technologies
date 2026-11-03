"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts up from 0 to `value` when scrolled into view.
 * Only use with REAL, verifiable numbers (see DATA-INJECTION-INVENTORY.md §4).
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.6,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v * 10 ** decimals) / 10 ** decimals),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion, decimals]);

  return (
    <span ref={ref}>
      {display.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
