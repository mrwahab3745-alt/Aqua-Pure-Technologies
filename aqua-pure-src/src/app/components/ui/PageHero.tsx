"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import HeroDroplet from "./HeroDroplet";

type Crumb = { label: string; href?: string };

// Static values (no randomness → no hydration mismatch). Transform/opacity only.
const BUBBLES = [
  { left: "5%", size: 12, delay: "0s", dur: "12s", bx: "18px" },
  { left: "17%", size: 22, delay: "3s", dur: "16s", bx: "-24px" },
  { left: "33%", size: 10, delay: "7s", dur: "11s", bx: "14px" },
  { left: "49%", size: 26, delay: "2s", dur: "17s", bx: "22px" },
  { left: "64%", size: 11, delay: "9s", dur: "12s", bx: "-14px" },
  { left: "78%", size: 20, delay: "5s", dur: "15s", bx: "-20px" },
  { left: "92%", size: 13, delay: "1s", dur: "13s", bx: "12px" },
];

/**
 * Shared opening for every inner page: dark water surface, breadcrumb,
 * word-by-word headline, a page-specific visual on the right, and a wave
 * that dissolves into the next section (`nextFill` = that section's fill class).
 */
export default function PageHero({
  crumbs,
  title,
  intro,
  actions,
  aside,
  children,
  nextFill = "fill-white",
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  nextFill?: string;
}) {
  const reduce = useReducedMotion();
  const words = title.split(" ");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-[#0a1226] px-6 pb-32 pt-12 md:pb-40 md:pt-16">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-white/40 bg-white/15 animate-bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.dur,
              ["--bx" as string]: b.bx,
            }}
          />
        ))}
      </div>
      {aside ?? <HeroDroplet />}

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href && !last ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? "page" : undefined} className={last ? "text-white/90" : ""}>
                      {c.label}
                    </span>
                  )}
                  {!last && (
                    <svg aria-hidden viewBox="0 0 8 12" className="h-3 w-2 text-white/30">
                      <path d="M1.5 1.5 6 6l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
              {" "}
            </span>
          ))}
        </h1>

        {intro && (
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {intro}
          </motion.p>
        )}
        {actions && (
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {actions}
          </motion.div>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>

      <WaveDivider fillClass={nextFill} />
    </section>
  );
}
