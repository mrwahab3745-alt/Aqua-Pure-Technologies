import Link from "next/link";

/** Closing band shared by inner pages. Real WhatsApp number from the contact page. */
export default function CTABand({
  title = "Tell us about your water.",
  text = "Share your source, daily use and site type. An engineer replies with a plan and a quote, not a script.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white px-6 pb-16 md:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#0a1226] px-8 py-14 sm:px-14">
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-cyan-300/20 animate-ripple" />
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-cyan-300/20 animate-ripple [animation-delay:2s]" />
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-white/70">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923245500653"
              className="btn-shimmer inline-flex min-h-12 items-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:bg-primary/10"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
