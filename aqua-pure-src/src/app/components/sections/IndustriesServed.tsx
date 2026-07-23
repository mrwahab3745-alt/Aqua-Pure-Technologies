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
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Industries served
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
          Built around what your sector actually needs to solve.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-navy/10 bg-white p-6"
            >
              <h3 className="text-base font-bold text-navy">{industry.name}</h3>
              <p className="mt-3 text-sm text-navy/60">{industry.painPoint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
