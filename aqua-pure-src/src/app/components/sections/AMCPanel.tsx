"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import AccentBar from "../ui/AccentBar";

const SLA_COMMITMENTS = [
  "24/7 emergency breakdown response",
  "Certified, factory-trained technicians",
  "Genuine OEM replacement parts only",
  "Response time guarantee per contract tier",
];

const COVERED_ITEMS = [
  "Membrane chemical washing & cleaning",
  "Regular TDS calibration & testing",
  "Pump health monitoring & servicing",
  "Filter & cartridge replacement scheduling",
  "Electrical panel inspection",
  "Priority parts availability",
];

export default function AMCPanel() {
  return (
    <section className="bg-navy px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Annual Maintenance Contract
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            Every plant is different. Your AMC should be too.
          </h2>
        </ScrollReveal>
        <AccentBar className="mt-4" />
        <ScrollReveal direction="up" delay={0.3}>
          <p className="mt-3 max-w-xl text-sm text-white/60">
            We don&apos;t sell fixed pricing tiers — capacity, water source, and
            usage vary too much for that. Tell us your plant, we&apos;ll quote
            the right coverage.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                SLA Commitments
              </h3>
              <ul className="mt-4 space-y-3">
                {SLA_COMMITMENTS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.08 * i }}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span aria-hidden className="mt-0.5 text-primary animate-pulse">●</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                What&apos;s Covered
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                {COVERED_ITEMS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.08 * i }}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <svg
                      aria-hidden
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <a
            href="/contact?intent=amc"
            className="btn-shimmer mt-10 inline-flex min-h-12 items-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Request Plant-Specific AMC Quote
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
