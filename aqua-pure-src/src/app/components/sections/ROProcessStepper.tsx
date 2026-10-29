"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";

const STEPS = [
  {
    title: "Feed Water",
    text: "Raw borewell, tanker or municipal water enters the plant.",
  },
  {
    title: "Pre-Treatment",
    text: "Sediment and carbon filtration protect the membranes.",
  },
  {
    title: "RO Membrane",
    text: "High-pressure pumps push water through the membrane, rejecting dissolved salts and contaminants.",
  },
  {
    title: "Pure Water",
    text: "Treated water is delivered, with the reject stream drained away.",
  },
];

export default function ROProcessStepper() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
            From raw water to pure water, in four stages.
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          {/* Connector line (desktop) — draws itself on scroll */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-0.5 bg-navy/10 md:block"
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-primary to-cyan-400"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </div>

          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.25 * i }}
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white shadow-lg shadow-primary/30 ring-4 ring-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
