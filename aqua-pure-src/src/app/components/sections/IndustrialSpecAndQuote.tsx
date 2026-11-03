"use client";

import FormRedirect from "../ui/FormRedirect";
import ScrollReveal from "../ui/ScrollReveal";
import { FORM_ACCESS_KEY } from "../../../lib/site";

const DESIGN_STEPS = [
  { title: "Analyze your water", text: "We analyze the input water and check its TDS level before recommending anything." },
  { title: "Calculate your daily demand", text: "Your daily water requirement decides the size of the plant, so we work it out with you first." },
  { title: "Design a customized plant", text: "Customized RO plants for small factories and workshops, for drinking water and process water needs." },
  { title: "Install and commission", text: "Complete setup with proper flow rate, pressure balance and filtration efficiency, then commissioning." },
];

export default function IndustrialSpecAndQuote() {
  return (
    <>
      {/* How we design an industrial plant */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our process
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              How we design an industrial plant.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-3 max-w-2xl text-sm text-navy/60">
              Every plant is built to your water and your demand. Our systems can treat sea
              water, borewell water, contaminated factory water and waste water.
            </p>
          </ScrollReveal>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DESIGN_STEPS.map((step, i) => (
              <li key={step.title}>
                <ScrollReveal direction="up" delay={0.08 * i} className="h-full">
                  <div className="h-full rounded-2xl border border-navy/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-card-hover">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.text}</p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
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
              <input type="hidden" name="access_key" value={FORM_ACCESS_KEY} />
              {/* spam trap: bots tick it, humans never see it (Web3Forms drops these) */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <FormRedirect />
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

