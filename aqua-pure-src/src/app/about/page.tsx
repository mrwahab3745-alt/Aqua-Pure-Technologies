import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";
import PageHero from "../components/ui/PageHero";
import { PlantLineVisual } from "../components/ui/PageVisual";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import CTABand from "../components/ui/CTABand";

export const metadata: Metadata = {
  title: "About Aqua Pure Technology",
  description:
    "Engineering-led RO plant design, installation, and maintenance across Pakistan — domestic, commercial, and industrial water treatment.",
};

// Confirm every figure before launch (see DATA-INJECTION-INVENTORY.md §4).
const STATS = [
  { value: 10, suffix: "+", label: "Years of operational support" },
  { value: 500, suffix: "+", label: "Plants configured" },
  { value: 24, suffix: "/7", label: "AMC emergency response" },
  { value: 3, suffix: "", label: "Provinces served" },
];

const icon = "h-6 w-6 text-primary";

const PILLARS = [
  {
    title: "Operational history",
    text: "Aqua Pure Technology has been delivering engineering-led RO water treatment systems across Pakistan for homes, offices, and industrial facilities that rely on dependable water quality every day.",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Certified component assurance",
    text: "We install genuine, manufacturer-authorized components — membranes, pumps, and dosing systems sourced directly from the OEMs we're authorized to represent, not unverified substitutes.",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "ISO & compliance",
    text: "We provide clear compliance documentation, water quality reports, and system handover details for industrial and commercial projects so teams can review performance with confidence.",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h5M10 17h5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="Engineering-led water treatment, not off-the-shelf boxes."
        intro="RO plant design, installation and maintenance for homes, offices and industry across Pakistan."
        aside={<PlantLineVisual />}
      />

      {/* Ledger of facts, lifted over the wave */}
      <section className="relative z-10 -mt-24 bg-white px-6 pt-0 md:-mt-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <dl className="grid grid-cols-2 divide-x divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl shadow-navy/10 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="p-6 sm:p-8">
                  <dd className="text-3xl font-extrabold tabular-nums tracking-tight text-navy sm:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2 text-sm text-navy/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <ScrollReveal direction="up">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                What you can count on.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-navy/60">
                Three commitments sit behind every plant we design, install and service.
              </p>
            </div>
          </ScrollReveal>

          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {PILLARS.map((p, i) => (
              <li key={p.title}>
                <ScrollReveal direction="up" delay={0.08 * i}>
                  <div className="group flex gap-5 py-8 transition-colors duration-300 hover:bg-surface/60 sm:gap-6 sm:px-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface transition-colors duration-300 group-hover:bg-primary/15">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                      <p className="mt-2 max-w-xl text-base leading-relaxed text-navy/65">{p.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
