import type { Metadata } from "next";
import ScrollReveal from "../../components/ui/ScrollReveal";

// NOTE: Core Metrics Grid below uses placeholder values pending
// confirmation from Wahab — see Master Project Document, Open Items.
// Search "CONFIRM VALUE" to find every placeholder before this page ships.

export const metadata: Metadata = {
  title: "Commercial RO Plants — Offices, Schools, Clinics & Hospitality",
  description:
    "Reliable RO water systems for offices, schools, malls, and clinics. Scaled to your headcount, low running cost, AMC support included.",
};

const CORE_METRICS = [
  { label: "Supply Capacity", value: "200–1,000 people" },
  { label: "Daily Output", value: "1,000–5,000 GPD" },
  { label: "Power Draw", value: "Low — standard 3-phase" },
  { label: "Install Time", value: "1–2 Days" },
];

const TRUST_ITEMS = [
  {
    title: "Compliance Documentation",
    description: "Water quality test reports provided for internal compliance and audit records.",
  },
  {
    title: "Workplace AMC Coverage",
    description: "Scheduled maintenance visits with priority response — no disruption to daily operations.",
  },
  {
    title: "Genuine OEM Components",
    description: "Membranes and pumps from manufacturers we're authorized to install and service.",
  },
  {
    title: "Single Point of Contact",
    description: "One account manager for installation, service requests, and AMC renewals.",
  },
];

export default function CommercialPage() {
  return (
    <main>
      {/* Operational Hero */}
      <section className="bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Commercial Water Systems
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Reliable water supply for offices, schools, and clinics — without the operational headache.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Scaled to your headcount, backed by an AMC that keeps things
              running so your team never has to think about it.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <a
              href="#get-quote"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-8 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Request a Site Assessment
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Metrics Grid */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Built for your scale
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Sized to your headcount, not oversold.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {CORE_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-navy/10 bg-surface p-6 transition-all duration-300 hover:scale-105 hover:shadow-card-hover hover:border-primary/30">
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-mono text-xl font-bold text-navy">{metric.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust / Compliance Grid */}
      <section className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why facility managers choose us
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Compliance and continuity, handled.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-card-hover hover:border-primary/30">
                  <h3 className="text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-navy/60">{item.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Form */}
      <section id="get-quote" className="bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Request a quote
              </p>
              <h2 className="mt-2 max-w-md text-3xl font-extrabold text-white sm:text-4xl">
                Tell us your facility size. We&apos;ll size the system.
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/60">
                We&apos;ll follow up to schedule a short site assessment before
                quoting — this keeps the number accurate, not a guess.
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
              <input type="hidden" name="subject" value="Commercial RO — New Quote Request" />

              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/50">
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
                  <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                    placeholder="Office / school / clinic name"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-white/50">
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
                    <label htmlFor="headcount" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      Approx. Headcount
                    </label>
                    <input
                      id="headcount"
                      name="headcount"
                      type="text"
                      className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                      placeholder="e.g. 300 people"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  Request a Site Assessment
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
