import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";
import PageHero from "../components/ui/PageHero";
import { RippleVisual } from "../components/ui/PageVisual";

export const metadata: Metadata = {
  title: "Contact Aqua Pure Technology",
  description:
    "Talk to our team about domestic, commercial, or industrial RO plant installation, maintenance, or spare parts.",
};

const ic = "h-5 w-5 text-primary";
const svgProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

const field =
  "mt-2 min-h-12 w-full rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus:border-primary focus:bg-white/10 focus:outline-none";
const label = "text-sm font-semibold text-white/80";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Talk to the team, not a ticket queue."
        intro="For urgent breakdowns, WhatsApp or call directly. For quotations, the form is fine too."
        aside={<RippleVisual />}
      />

      <section className="bg-white px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <ScrollReveal direction="up">
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+923245500653"
                  className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <svg {...svgProps} className={ic}><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
                  </span>
                  <span>
                    <span className="block text-sm text-navy/55">Technical helpdesk</span>
                    <span className="block text-lg font-bold text-navy transition-colors group-hover:text-primary">+92 324 5500653</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923245500653"
                  className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                    <svg {...svgProps} className={ic}><path d="M4 20l1.300-4A8 8 0 1 1 8 18.700L4 20Z" /><path d="M9 9.500c0 3 2.500 5.500 5.500 5.500l1-1.500-2-1-.8.800a4 4 0 0 1-1.800-1.800l.8-.8-1-2L9 9.500Z" /></svg>
                  </span>
                  <span>
                    <span className="block text-sm text-navy/55">WhatsApp</span>
                    <span className="block text-lg font-bold text-navy transition-colors group-hover:text-primary">Chat with an engineer</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-navy/10 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
                  <svg {...svgProps} className={ic}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </span>
                <span>
                  <span className="block text-sm text-navy/55">Working hours</span>
                  <span className="mt-1 block text-sm leading-relaxed text-navy/80">
                    Mon–Sat, 9:00 AM – 7:00 PM
                    <br />
                    AMC clients: 24/7 emergency response
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4 rounded-2xl border border-navy/10 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface">
                  <svg {...svgProps} className={ic}><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.500" /></svg>
                </span>
                <span>
                  <span className="block text-sm text-navy/55">Find us</span>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-navy/80">
                    [Street Address], [Area], [City], Pakistan
                  </address>
                  <a href="#" className="mt-2 inline-block text-sm font-semibold text-primary hover:underline">
                    View on Google Maps
                  </a>
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="relative h-fit overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#0a1226] p-6 shadow-xl shadow-navy/20 sm:p-10"
            >
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="Website Contact Form — New Message" />

              <h2 className="relative text-2xl font-extrabold tracking-tight text-white">Send us a message</h2>
              <div className="relative mt-6 grid gap-5">
                <div>
                  <label htmlFor="name" className={label}>Full name</label>
                  <input id="name" name="name" type="text" required className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact" className={label}>Phone or email</label>
                  <input id="contact" name="contact" type="text" required className={field} placeholder="+92 or you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={`${field} py-3`}
                    placeholder="Tell us what you need — installation, maintenance, spare parts, or a quotation."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-shimmer mt-1 inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
                >
                  Send message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
