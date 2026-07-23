import type { Metadata } from "next";

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
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Talk to the team, not a ticket queue.
          </h1>
          <p className="mt-4 max-w-md text-sm text-navy/60">
            For urgent breakdowns, WhatsApp or call directly — for
            quotations, the form is fine too.
          </p>

          <div className="mt-10 space-y-4">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                Technical Helpdesk
              </h2>
              {/*
                IMPORTANT: this must match the Google Business Profile
                listing character-for-character — NAP consistency is a
                real local SEO ranking factor. Same requirement noted in
                Footer.tsx; keep both in sync.
              */}
              <a
                href="tel:+923245500653"
                className="mt-2 inline-flex min-h-12 items-center text-lg font-bold text-navy hover:text-cyan"
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
                className="mt-2 inline-flex min-h-12 items-center text-lg font-bold text-navy hover:text-cyan"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                Working Hours
              </h2>
              <p className="mt-2 text-sm text-navy/70">
                Mon–Sat, 9:00 AM – 7:00 PM {/* CONFIRM VALUE: real hours */}
                <br />
                AMC clients: 24/7 emergency response
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-navy/40">
                Find Us
              </h2>
              <address className="mt-2 not-italic text-sm text-navy/70">
                [Street Address], [Area], [City], Pakistan {/* CONFIRM VALUE: must match GBP exactly */}
              </address>
              <a
                href="#" // CONFIRM VALUE: paste the verified Google Business Profile Maps link here
                className="mt-2 inline-block text-sm font-semibold text-cyan hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Right — message dispatch form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-[#0F172A] h-fit rounded-2xl border border-navy/10 bg-surface p-6 sm:p-8"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="Website Contact Form — New Message" />

          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-navy/15 bg-white px-4 text-sm text-navy placeholder:text-navy/30 focus:border-cyan focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact" className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                Phone or Email
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-navy/15 bg-white px-4 text-sm text-navy placeholder:text-navy/30 focus:border-cyan focus:outline-none"
                placeholder="+92 or you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-cyan focus:outline-none"
                placeholder="Tell us what you need — installation, maintenance, spare parts, or a quotation."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-6 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
