import Link from "next/link";

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
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Proof, not promises
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          Projects with the numbers to back them up.
        </h2>

        <div className="mt-10 grid gap-5">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-navy/10 bg-white sm:grid-cols-5"
            >
              {/* Left column — 60% */}
              <div className="sm:col-span-3 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy">{study.client}</h3>
                <p className="mt-2 text-sm text-navy/60">{study.problem}</p>
                <Link
                  href={`/projects/${study.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-cyan hover:underline"
                >
                  Read full case study →
                </Link>
              </div>

              {/* Right column — 40%, stacked metric badges */}
              <div className="flex flex-col gap-3 border-t border-navy/10 bg-surface p-6 sm:col-span-2 sm:border-l sm:border-t-0">
                <div className="rounded-xl border border-navy/10 bg-white px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                    Capacity
                  </p>
                  <p className="font-mono text-xl font-bold tracking-tight text-navy">
                    {study.headlineMetric}
                  </p>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white px-4 py-3">
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
      </div>
    </section>
  );
}
