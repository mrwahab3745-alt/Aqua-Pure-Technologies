import ScrollReveal from "../ui/ScrollReveal";

const INDUSTRIES = [
  {
    name: "Textile & Processing",
    painPoint: "Consistent process water quality to eliminate batch-to-batch dyeing variance.",
  },
  {
    name: "Pharmaceuticals",
    painPoint: "USP Purified Water compliance for manufacturing and QC processes.",
  },
  {
    name: "Commercial Hospitality",
    painPoint: "Reliable, high-volume supply for kitchens, laundry, and guest-facing service.",
  },
  {
    name: "Poultry & Agriculture",
    painPoint: "Micro-biological and TDS management for livestock and processing water.",
  },
];

export default function IndustriesServed() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Industries served
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
            Built around what your sector actually needs to solve.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-card-hover hover:border-primary/30"
              >
                <h3 className="text-base font-bold text-navy">{industry.name}</h3>
                <p className="mt-3 text-sm text-navy/60">{industry.painPoint}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
