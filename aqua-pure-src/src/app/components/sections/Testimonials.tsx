import ScrollReveal from "../ui/ScrollReveal";
import { TESTIMONIALS } from "../../../lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="m10 1.500 2.600 5.400 5.900.8-4.300 4.100 1 5.800L10 14.800 4.800 17.600l1-5.800L1.500 7.700l5.900-.8L10 1.500Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">What our customers say</h2>
        </ScrollReveal>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <li key={t.name}>
              <ScrollReveal direction="up" delay={0.05 * (i % 3)} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-card-hover">
                  <div>
                    <Stars />
                    <blockquote className="mt-4 text-sm leading-relaxed text-navy/75">&ldquo;{t.text}&rdquo;</blockquote>
                  </div>
                  <figcaption className="mt-5 text-sm font-bold text-navy">{t.name}</figcaption>
                </figure>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
