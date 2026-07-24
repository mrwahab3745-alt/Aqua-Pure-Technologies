import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";

type CaseStudy = {
  slug: string;
  client: string;
  problem: string;
  headlineMetric: string;
  performanceMetric: string;
};

// Replace with real client data (named, with permission) as it's collected —
// see Master Project Document, Locked Decision #10.
const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "poultry-tds-reduction",
    client: "Regional Poultry Processing Unit",
    problem:
      "High TDS in borewell source water was affecting product wash quality and equipment scaling.",
    headlineMetric: "20,000 GPD",
    performanceMetric: "99.2% Recovery Rate",
  },
  {
    slug: "textile-process-water",
    client: "Textile Dyeing Facility",
    problem:
      "Inconsistent process water quality was causing batch-to-batch dyeing variance.",
    headlineMetric: "50,000 GPD",
    performanceMetric: "98.5% Recovery Rate",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Proof, not promises
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Projects with the numbers to back them up.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 grid gap-5">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.slug}
                className="grid grid-cols-1 overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-300 hover:shadow-card-hover hover:border-primary/30 sm:grid-cols-5"
              >
                {/* Left column — 60% */}
                <div className="sm:col-span-3 p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-navy">{study.client}</h3>
                  <p className="mt-2 text-sm text-navy/60">{study.problem}</p>
                  <Link
                    href={`/projects/${study.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-primary transition-all duration-200 hover:translate-x-1 hover:underline"
                  >
                    Read full case study →
                  </Link>
                </div>

                {/* Right column — 40%, stacked metric badges */}
                <div className="flex flex-col gap-3 border-t border-navy/10 bg-surface p-6 sm:col-span-2 sm:border-l sm:border-t-0">
                  <div className="rounded-xl border border-navy/10 bg-white px-4 py-3 transition-all duration-200 hover:border-primary/30">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                      Capacity
                    </p>
                    <p className="font-mono text-xl font-bold tracking-tight text-navy">
                      {study.headlineMetric}
                    </p>
                  </div>
                  <div className="rounded-xl border border-navy/10 bg-white px-4 py-3 transition-all duration-200 hover:border-primary/30">
                    <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                      Performance
                    </p>
                    <p className="font-mono text-xl font-bold tracking-tight text-navy">
                      {study.performanceMetric}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
