import ScrollReveal from "../ui/ScrollReveal";

const BRANDS = [
  { name: "Dow Filmtec" },
  { name: "Grundfos" },
  { name: "Hydranautics" },
  { name: "CSM" },
];

export default function TrustIndicators() {
  return (
    <section className="border-y border-navy/10 bg-surface px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-navy/50">
            Genuine components from manufacturers we&apos;re authorized to install
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center rounded-lg border border-navy/10 bg-white px-4 py-4 opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-105 hover:shadow-card-hover hover:border-primary/30"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-navy">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
