import type { Metadata } from "next";

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
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Services
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
          Built to keep water flowing, not just get it started.
        </h1>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <a
              key={pillar.href}
              href={pillar.href}
              className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-7 transition-colors hover:border-cyan hover:bg-white"
            >
              <div>
                <h2 className="text-lg font-bold text-navy">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">
                  {pillar.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-semibold text-cyan">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
