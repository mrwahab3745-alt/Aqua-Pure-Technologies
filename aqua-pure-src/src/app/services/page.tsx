import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Engineering, Maintenance & AMC",
  description:
    "Custom RO plant engineering, chemical cleaning and membrane rejuvenation, and turnkey Annual Maintenance Contracts.",
};

const PILLARS = [
  {
    title: "Custom Engineering & Plant Design",
    description:
      "Plant sizing, membrane staging, and pump specification built from your feed water analysis — not a generic template.",
    href: "/services/installation",
  },
  {
    title: "Chemical Cleaning & Membrane Rejuvenation",
    description:
      "Scheduled or emergency membrane cleaning to restore rejection rate and recovery, extending plant life without early replacement.",
    href: "/services/emergency-repair",
  },
  {
    title: "Turnkey AMC Engineering Controls",
    description:
      "Preventative and emergency maintenance under one contract — response SLAs, genuine parts, and scheduled system health checks.",
    href: "/services/amc",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Services
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Built to keep water flowing, not just get it started.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <a
                key={pillar.href}
                href={pillar.href}
                className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-7 transition-all duration-300 hover:border-primary hover:bg-white hover:scale-105 hover:shadow-card-hover"
              >
                <div>
                  <h2 className="text-lg font-bold text-navy">{pillar.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy/60">
                    {pillar.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-primary">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
