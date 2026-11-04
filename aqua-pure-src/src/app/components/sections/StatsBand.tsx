import ScrollReveal from "../ui/ScrollReveal";
import AnimatedCounter from "../ui/AnimatedCounter";
import { STATS } from "../../../lib/content";

export default function StatsBand() {
  return (
    <section className="border-y border-navy/10 bg-surface px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-extrabold tabular-nums tracking-tight text-navy sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </dd>
                <dt className="mt-1 text-xs font-medium text-navy/60 sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
