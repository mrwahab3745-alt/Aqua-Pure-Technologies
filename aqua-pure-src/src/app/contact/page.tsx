import type { Metadata } from "next";
import ScrollReveal from "../components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Aqua Pure Technology",
  description:
    "Talk to our team about domestic, commercial, or industrial RO plant installation, maintenance, or spare parts.",
};

export default function ContactPage() {
  return (
    <main className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Left — technical helpdesk data */}
        <div>
          <ScrollReveal direction="left" delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
              Talk to the team, not a ticket queue.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.3}>
            <p className="mt-4 max-w-md text-sm text-navy/60">
              For urgent breakdowns, WhatsApp or call directly — for
              quotations, the form is fine too.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <div className="mt-10 space-y-4">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Technical Helpdesk
                </h2>
                <a
                  href="tel:+923245500653"
                  className="mt-2 inline-flex min-h-12 items-center text-lg font-bold text-navy transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  +92 324 5500653
                </a>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  WhatsApp
                </h2>
                <a
                  href="https://wa.me/923245500653"
                  className="mt-2 inline-flex min-h-12 items-center text-lg font-bold text-navy transition-all duration-200 hover:text-primary hover:translate-x-1"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Working Hours
                </h2>
                <p className="mt-2 text-sm text-navy/70">
                  Mon–Sat, 9:00 AM – 7:00 PM
                  <br />
                  AMC clients: 24/7 emergency response
                </p>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                  Find Us
                </h2>
                <address className="mt-2 not-italic text-sm text-navy/70">
                  [Street Address], [Area], [City], Pakistan
                </address>
                <a
                  href="#"
                  className="mt-2 inline-block text-sm font-semibold text-primary transition-all duration-200 hover:translate-x-1 hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right — message dispatch form */}
        <ScrollReveal direction="right" delay={0.3}>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-navy h-fit rounded-2xl border border-navy/10 p-6 sm:p-8"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="Website Contact Form — New Message" />

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
                <label htmlFor="contact" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Phone or Email
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                  placeholder="+92 or you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-all duration-200"
                  placeholder="Tell us what you need — installation, maintenance, spare parts, or a quotation."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
}
