"use client";

import ScrollReveal from "../ui/ScrollReveal";

const PLANT_MODELS = [
  {
    model: "APT-5K",
    gpd: "5,000 GPD",
    tdsLimit: "≤ 2,000 ppm",
    pumpHp: "3 HP",
    vessels: "2× FRP, 4040 series",
  },
  {
    model: "APT-10K",
    gpd: "10,000 GPD",
    tdsLimit: "≤ 3,500 ppm",
    pumpHp: "5 HP",
    vessels: "4× FRP, 4040 series",
  },
  {
    model: "APT-20K",
    gpd: "20,000 GPD",
    tdsLimit: "≤ 5,000 ppm",
    pumpHp: "10 HP",
    vessels: "6× SS, 8040 series",
  },
];

export default function IndustrialSpecAndQuote() {
  return (
    <>
      {/* Technical Specification Matrix */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Model comparison
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Three baseline configurations. Every plant is still built to spec.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-3 max-w-2xl text-sm text-navy/60">
              These are starting configurations, not fixed products — final
              specification is set after reviewing your feed water report.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-navy/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-navy/10 bg-surface">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
                      Model
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
                      GPD Capacity
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
                      Feed Water TDS Limit
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
                      Pump Horsepower
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-navy/80">
                      Vessel Configuration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PLANT_MODELS.map((plant, i) => (
                    <tr
                      key={plant.model}
                      className={`transition-all duration-200 hover:bg-primary/5 hover:scale-[1.01] ${i !== PLANT_MODELS.length - 1 ? "border-b border-navy/10" : ""}`}
                    >
                      <td className="px-6 py-4 font-mono text-sm font-bold text-navy">
                        {plant.model}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-navy/80">
                        {plant.gpd}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-navy/80">
                        {plant.tdsLimit}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-navy/80">
                        {plant.pumpHp}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-navy/80">
                        {plant.vessels}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B2B Engineering Lead Capture Form */}
      <section className="bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Get a plant-specific quote
              </p>
              <h2 className="mt-2 max-w-md text-3xl font-extrabold text-white sm:text-4xl">
                Send us your feed water data. We&apos;ll size the system.
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/70">
                Include your feed water TDS/analysis if available — this lets
                our engineers propose an accurate configuration on the first
                call instead of a generic estimate.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-2xl bg-white/5 p-6 sm:p-8"
            >
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="Industrial RO — New Quote Request" />

              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                    placeholder="Company / facility name"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                      placeholder="+92"
                    />
                  </div>
                  <div>
                    <label htmlFor="capacity" className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      Required Capacity
                    </label>
                    <input
                      id="capacity"
                      name="capacity"
                      type="text"
                      className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                      placeholder="e.g. 10,000 GPD"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Feed Water Details / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                    placeholder="Feed water TDS, source (borewell/municipal), intended use..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  Request Engineering Quote
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

