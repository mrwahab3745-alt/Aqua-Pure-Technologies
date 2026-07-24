import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";

type Stat = {
  value: string;
  label: string;
};

export const metadata: Metadata = {
  title: "About Aqua Pure Technology",
  description:
    "Engineering-led RO plant design, installation, and maintenance across Pakistan — domestic, commercial, and industrial water treatment.",
};

const STATS: Stat[] = [
  { value: "10+ Years", label: "Operational Support" },
  { value: "500+", label: "Plants Configured" },
  { value: "24/7", label: "AMC Emergency Response" },
  { value: "3", label: "Provinces Served" },
];

// Keep the page resilient if a future content source omits values.
// The fallback keeps the layout stable and avoids rendering an empty state.
const FALLBACK_STATS: Stat[] = [
  { value: "10+ Years", label: "Operational Support" },
  { value: "500+", label: "Plants Configured" },
  { value: "24/7", label: "AMC Emergency Response" },
  { value: "3", label: "Provinces Served" },
];

const statsToRender = STATS.length > 0 ? STATS : FALLBACK_STATS;

export default function AboutPage() {
  return (
    <main className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            About Aqua Pure Technology
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Engineering-led water treatment, not off-the-shelf boxes.
          </h1>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left — history, assurance, compliance */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-navy">Operational History</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  Aqua Pure Technology has been delivering engineering-led RO
                  water treatment systems across Pakistan for homes, offices,
                  and industrial facilities that rely on dependable water
                  quality every day.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-navy">Certified Component Assurance</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  We install genuine, manufacturer-authorized components —
                  membranes, pumps, and dosing systems sourced directly from
                  the OEMs we&apos;re authorized to represent, not
                  unverified substitutes.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-navy">ISO &amp; Compliance</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  We provide clear compliance documentation, water quality
                  reports, and system handover details for industrial and
                  commercial projects so teams can review performance with
                  confidence.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — stat tiles */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="grid grid-cols-2 gap-5">
              {statsToRender.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-navy/10 bg-navy p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <p className="font-mono text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
