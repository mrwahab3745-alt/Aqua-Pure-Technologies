import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";
import PageHero from "../components/ui/PageHero";
import { PlantLineVisual } from "../components/ui/PageVisual";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import CTABand from "../components/ui/CTABand";
import { STATS, VALUES, COMMITMENTS } from "../../lib/content";

export const metadata: Metadata = {
  title: "About Aqua Pure Technology",
  description:
    "Engineering-led RO plant design, installation, and maintenance across Pakistan — domestic, commercial, and industrial water treatment.",
};

const icon = "h-6 w-6 text-primary";

const VALUE_ICONS = [
  // values
  <svg key="v" viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" />
  </svg>,
  // mission
  <svg key="m" viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
  </svg>,
  // vision
  <svg key="s" viewBox="0 0 24 24" className={icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2 12s3.500-7 10-7 10 7 10 7-3.500 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" />
  </svg>,
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
            <dl className="grid grid-cols-2 divide-x divide-y divide-navy/10 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-xl shadow-navy/10 lg:grid-cols-5 lg:divide-y-0">
              {STATS.map((s) => (
                <div key={s.label} className="p-5 sm:p-6">
                  <dd className="text-2xl font-extrabold tabular-nums tracking-tight text-navy sm:text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
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
                What we stand for.
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-navy/60">
                Safe, clean and affordable water for homes, institutions and industries across Pakistan.
              </p>
            </div>
          </ScrollReveal>

          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {VALUES.map((p, i) => (
              <li key={p.title}>
                <ScrollReveal direction="up" delay={0.08 * i}>
                  <div className="group flex gap-5 py-8 transition-colors duration-300 hover:bg-surface/60 sm:gap-6 sm:px-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface transition-colors duration-300 group-hover:bg-primary/15">
                      {VALUE_ICONS[i]}
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

      <section className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Our commitment</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy/65">
              We are committed to innovation, reliability and excellence in water treatment. Choosing
              Aqua Pure Technology means choosing health, efficiency and trusted water solutions for
              your home or business.
            </p>
          </ScrollReveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {COMMITMENTS.map((c, i) => (
              <li key={c.title}>
                <ScrollReveal direction="up" delay={0.08 * i} className="h-full">
                  <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                    <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">{c.text}</p>
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
