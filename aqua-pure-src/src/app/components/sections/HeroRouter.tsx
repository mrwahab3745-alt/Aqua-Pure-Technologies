"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import WaveDivider from "../ui/WaveDivider";

// Static values (no Math.random → no hydration mismatch). Transform/opacity only.
const BUBBLES = [
  { left: "6%",  size: 10, delay: "0s",   dur: "13s", bx: "18px" },
  { left: "14%", size: 18, delay: "4s",   dur: "17s", bx: "-24px" },
  { left: "27%", size: 8,  delay: "7s",   dur: "12s", bx: "14px" },
  { left: "41%", size: 14, delay: "2s",   dur: "16s", bx: "-16px" },
  { left: "58%", size: 9,  delay: "9s",   dur: "14s", bx: "22px" },
  { left: "72%", size: 20, delay: "5s",   dur: "18s", bx: "-20px" },
  { left: "86%", size: 12, delay: "1s",   dur: "15s", bx: "16px" },
  { left: "94%", size: 8,  delay: "8s",   dur: "13s", bx: "-12px" },
];

type CardId = "domestic" | "business" | "parts";

const CARDS: {
  id: CardId;
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
}[] = [
  {
    id: "domestic",
    eyebrow: "For your home",
    title: "Home RO Systems",
    description:
      "Clean, safe drinking water for your household. Fast installation, transparent pricing.",
    href: "/products/domestic",
  },
  {
    id: "business",
    eyebrow: "For your business",
    title: "Business Solutions",
    description:
      "RO plants, AMC, and support for offices, hospitals, and factories nationwide.",
  },
  {
    id: "parts",
    eyebrow: "Need a part now",
    title: "Spare Parts",
    description:
      "Membranes, vessels, pumps, and valves. Check availability and get a quote today.",
    href: "/products/spare-parts",
  },
];

export default function HeroRouter() {
  const [businessOpen, setBusinessOpen] = useState(false);

  const toggleBusiness = useCallback(() => {
    setBusinessOpen((open) => !open);
  }, []);

  const openBusiness = useCallback(() => {
    setBusinessOpen(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy px-6 pb-28 pt-16 md:pb-36 md:pt-24">
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-float [animation-delay:-3s]"
      />
      {/* Rising bubbles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-white/30 bg-white/10 animate-bubble"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Aqua Pure Technology
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Water treatment built for{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              how you actually use water.
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Tell us who you are, and we&apos;ll take you straight to what you need —
            no digging through a catalog.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CARDS.map((card) => {
              if (card.id === "business") {
                return (
                  <div
                    key={card.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 focus-within:border-primary hover:border-primary hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
                  >
                    <button
                      type="button"
                      onClick={toggleBusiness}
                      onMouseEnter={openBusiness}
                      aria-expanded={businessOpen}
                      className="min-h-12 text-left"
                    >
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {card.eyebrow}
                      </span>
                      <h2 className="mt-2 text-xl font-bold text-white">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-sm text-white/60">
                        {card.description}
                      </p>
                    </button>

                    {/* Zero-latency split overlay — appears on click/hover, no page reload */}
                    <div
                      className={`mt-5 grid gap-2 overflow-hidden transition-all duration-300 ${
                        businessOpen
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <Link
                        href="/products/commercial"
                        className="flex min-h-12 items-center rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary hover:text-white"
                      >
                        Commercial — offices, hospitals, hospitality
                      </Link>
                      <Link
                        href="/products/industrial"
                        className="flex min-h-12 items-center rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary hover:text-white"
                      >
                        Industrial — factories, textile, pharma
                      </Link>
                    </div>

                    {!businessOpen && (
                      <span className="mt-5 text-sm font-semibold text-primary">
                        Choose your type →
                      </span>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={card.id}
                  href={card.href!}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {card.eyebrow}
                    </span>
                    <h2 className="mt-2 text-xl font-bold text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/60">
                      {card.description}
                    </p>
                  </div>
                  <span className="mt-5 text-sm font-semibold text-primary">
                    Get started →
                  </span>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
      <WaveDivider fillClass="fill-surface" />
    </section>
  );
}
