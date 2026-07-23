const SLA_COMMITMENTS = [
  "24/7 emergency breakdown response",
  "Certified, factory-trained technicians",
  "Genuine OEM replacement parts only",
  "Response time guarantee per contract tier",
];

const COVERED_ITEMS = [
  "Membrane chemical washing & cleaning",
  "Regular TDS calibration & testing",
  "Pump health monitoring & servicing",
  "Filter & cartridge replacement scheduling",
  "Electrical panel inspection",
  "Priority parts availability",
];

export default function AMCPanel() {
  return (
    <section className="bg-navy px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Annual Maintenance Contract
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
          Every plant is different. Your AMC should be too.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/60">
          We don&apos;t sell fixed pricing tiers — capacity, water source, and
          usage vary too much for that. Tell us your plant, we&apos;ll quote
          the right coverage.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan">
              SLA Commitments
            </h3>
            <ul className="mt-4 space-y-3">
              {SLA_COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span aria-hidden className="mt-0.5 text-cyan">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan">
              What&apos;s Covered
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-1">
              {COVERED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <svg
                    aria-hidden
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="/contact?intent=amc"
          className="mt-10 inline-flex min-h-12 items-center rounded-lg bg-cyan px-6 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90"
        >
          Request Plant-Specific AMC Quote
        </a>
      </div>
    </section>
  );
}
