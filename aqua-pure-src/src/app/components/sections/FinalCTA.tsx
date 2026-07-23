export default function FinalCTA() {
  return (
    <section className="bg-navy px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Engineered for Zero Downtime. Talk Directly to Our Design Engineers.
        </h2>
        <p className="mt-4 text-sm text-white/60 sm:text-base">
          No sales scripts — just a straight conversation about your water,
          your capacity needs, and what it'll take to get it right.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/92XXXXXXXXXX"
            className="flex min-h-12 w-full items-center justify-center rounded-lg bg-cyan px-6 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90 sm:w-auto"
          >
            Initiate WhatsApp Consultation
          </a>
          <a
            href="tel:+92XXXXXXXXXX"
            className="flex min-h-12 w-full items-center justify-center rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:border-white sm:w-auto"
          >
            Call Technical Helpdesk
          </a>
        </div>
      </div>
    </section>
  );
}
