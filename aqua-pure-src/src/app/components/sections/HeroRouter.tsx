"use client";

import { useState } from "react";
import Link from "next/link";

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

  return (
    <section className="bg-navy px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
          Aqua Pure Technology
        </p>
        <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Water treatment built for how you actually use water.
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Tell us who you are, and we&apos;ll take you straight to what you need —
          no digging through a catalog.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card) => {
            if (card.id === "business") {
              return (
                <div
                  key={card.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors focus-within:border-cyan hover:border-cyan"
                >
                  <button
                    type="button"
                    onClick={() => setBusinessOpen((open) => !open)}
                    onMouseEnter={() => setBusinessOpen(true)}
                    aria-expanded={businessOpen}
                    className="min-h-12 text-left"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
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
                    className={`mt-5 grid gap-2 overflow-hidden transition-all duration-150 ${
                      businessOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="/products/commercial"
                      className="flex min-h-12 items-center rounded-lg bg-cyan/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-navy"
                    >
                      Commercial — offices, hospitals, hospitality
                    </Link>
                    <Link
                      href="/products/industrial"
                      className="flex min-h-12 items-center rounded-lg bg-cyan/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-navy"
                    >
                      Industrial — factories, textile, pharma
                    </Link>
                  </div>

                  {!businessOpen && (
                    <span className="mt-5 text-sm font-semibold text-cyan">
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
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
                    {card.eyebrow}
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/60">
                    {card.description}
                  </p>
                </div>
                <span className="mt-5 text-sm font-semibold text-cyan">
                  Get started →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
