import ScrollReveal from "../ui/ScrollReveal";

const BRANDS = [
  { name: "Dow Filmtec" },
  { name: "Grundfos" },
  { name: "Hydranautics" },
  { name: "CSM" },
];

// Duplicated so the -50% translate loops seamlessly.
const LOOP = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function TrustIndicators() {
  return (
    <section className="border-y border-navy/10 bg-surface px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-navy/50">
            Genuine components from manufacturers we&apos;re authorized to install
          </p>
        </ScrollReveal>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
            {LOOP.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                aria-hidden={i >= BRANDS.length}
                className="flex min-w-48 items-center justify-center rounded-lg border border-navy/10 bg-white px-6 py-4 opacity-60 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:opacity-100 hover:shadow-card-hover"
              >
                <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-navy">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
