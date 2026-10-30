"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Word-by-word rise-in for the hero headline (plays on load). */
export default function AnimatedHeadline({
  plain,
  accent,
}: {
  plain: string;
  accent: string;
}) {
  const reduce = useReducedMotion();

  const word = (w: string, i: number, cls = "") => (
    <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className={`inline-block ${cls}`}
        initial={reduce ? false : { y: "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      >
        {w}
      </motion.span>
      {" "}
    </span>
  );

  const plainWords = plain.split(" ");
  const accentWords = accent.split(" ");

  return (
    <>
      {plainWords.map((w, i) => word(w, i))}
      {accentWords.map((w, i) =>
        word(
          w,
          plainWords.length + i,
          "bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent",
        ),
      )}
    </>
  );
}
