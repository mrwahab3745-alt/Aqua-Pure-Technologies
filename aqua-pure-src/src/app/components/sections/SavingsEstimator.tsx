"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import AccentBar from "../ui/AccentBar";

const fmt = (n: number) => `${n < 0 ? "-" : ""}Rs ${Math.abs(Math.round(n)).toLocaleString("en-US")}`;

function LiveNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const prev = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const from = prev.current;
    prev.current = value;
    if (reduce) {
      el.textContent = fmt(value);
      return;
    }
    const c = animate(from, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
    });
    return () => c.stop();
  }, [value, inView, reduce]);

  return <span ref={ref}>{fmt(0)}</span>;
}

const W = 400;
const H = 180;

export default function SavingsEstimator() {
  const reduce = useReducedMotion();
  const [litres, setLitres] = useState(2000);
  const [current, setCurrent] = useState(10);
  const [running, setRunning] = useState(1.5);
  const [invest, setInvest] = useState(0);

  const monthlyCur = litres * 30 * current;
  const monthlyRo = litres * 30 * running;
  const saving = monthlyCur - monthlyRo;
  const yearNet = saving * 12 - invest;
  const payback = invest > 0 && saving > 0 ? invest / saving : null;

  const cur12 = monthlyCur * 12;
  const ro12 = invest + monthlyRo * 12;
  const maxY = Math.max(cur12, ro12, 1);
  const y = (v: number) => H - 8 - (v / maxY) * (H - 24);
  const x = (m: number) => (m / 12) * W;

  const curPath = `M0 ${y(0)} L${W} ${y(cur12)}`;
  const roPath = `M0 ${y(invest)} L${W} ${y(ro12)}`;
  const area = `${0},${y(0)} ${W},${y(cur12)} ${W},${y(ro12)} 0,${y(invest)}`;

  const sliderStyle = (v: number, min: number, max: number) => ({
    ["--fill" as string]: `${((v - min) / (max - min)) * 100}%`,
  });

  return (
    <section id="savings" className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Savings estimator</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
            Stop paying for water you can make.
          </h2>
        </ScrollReveal>
        <AccentBar className="mt-4" />

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            {/* Inputs */}
            <div className="space-y-6 rounded-3xl border border-navy/10 bg-surface p-6 sm:p-8">
              <div>
                <label htmlFor="sv-litres" className="flex justify-between text-sm font-semibold text-navy">
                  <span>Daily water use</span>
                  <span className="tabular-nums text-primary">{litres.toLocaleString("en-US")} L</span>
                </label>
                <input id="sv-litres" type="range" min={100} max={20000} step={100} value={litres}
                  onChange={(e) => setLitres(Number(e.target.value))} className="range-water mt-3"
                  style={sliderStyle(litres, 100, 20000)} />
              </div>
              <div>
                <label htmlFor="sv-current" className="flex justify-between text-sm font-semibold text-navy">
                  <span>What you pay now (bottled / tanker)</span>
                  <span className="tabular-nums text-primary">Rs {current}/L</span>
                </label>
                <input id="sv-current" type="range" min={1} max={40} step={0.5} value={current}
                  onChange={(e) => setCurrent(Number(e.target.value))} className="range-water mt-3"
                  style={sliderStyle(current, 1, 40)} />
              </div>
              <div>
                <label htmlFor="sv-running" className="flex justify-between text-sm font-semibold text-navy">
                  <span>RO running cost (power, filters, service)</span>
                  <span className="tabular-nums text-primary">Rs {running.toFixed(1)}/L</span>
                </label>
                <input id="sv-running" type="range" min={0.2} max={10} step={0.1} value={running}
                  onChange={(e) => setRunning(Number(e.target.value))} className="range-water mt-3"
                  style={sliderStyle(running, 0.2, 10)} />
              </div>
              <div>
                <label htmlFor="sv-invest" className="text-sm font-semibold text-navy">
                  Plant investment, Rs <span className="font-normal text-navy/50">(optional, for payback)</span>
                </label>
                <input id="sv-invest" type="number" inputMode="numeric" min={0} step={10000} value={invest || ""}
                  placeholder="0"
                  onChange={(e) => setInvest(Math.min(Math.max(Number(e.target.value) || 0, 0), 1_000_000_000))}
                  className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-primary" />
              </div>
              <p className="text-xs leading-relaxed text-navy/50">
                Starting values are illustrative, not a quote. Costs depend on your water source,
                plant size and electricity tariff. Edit them to match your numbers.
              </p>
            </div>

            {/* Results */}
            <div className="rounded-3xl bg-navy p-6 text-white sm:p-8">
              {saving > 0 ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Estimated monthly saving</p>
                  <p className="mt-1 text-4xl font-extrabold tabular-nums sm:text-5xl">
                    <LiveNumber value={saving} />
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-white/50">First-year net saving</p>
                      <p className="mt-1 text-lg font-bold tabular-nums"><LiveNumber value={yearNet} /></p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-white/50">Payback</p>
                      <p className="mt-1 text-lg font-bold">
                        {payback === null ? "Add investment" : payback > 60 ? "5+ years" : `~${payback.toFixed(1)} months`}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="rounded-xl bg-amber-400/10 p-4 text-sm text-amber-200">
                  At these numbers the RO running cost is not lower than what you pay now. Adjust the inputs to compare.
                </p>
              )}

              <svg viewBox={`0 0 ${W} ${H}`} className="mt-6 w-full" role="img"
                aria-label="Cumulative 12-month cost: current water spend versus RO plant">
                {[0.25, 0.5, 0.75].map((g) => (
                  <line key={g} x1={0} x2={W} y1={H * g} y2={H * g} stroke="#fff" strokeOpacity={0.08} />
                ))}
                {saving > 0 && (
                  <motion.polygon points={area} fill="#007BFF" fillOpacity={0.18}
                    initial={reduce ? false : { opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.6 }} />
                )}
                <motion.path d={curPath} fill="none" stroke="#fbbf24" strokeWidth={3} strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} />
                <motion.path d={roPath} fill="none" stroke="#22d3ee" strokeWidth={3} strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.25 }} />
                {payback !== null && payback <= 12 && (
                  <g>
                    <circle cx={x(payback)} cy={y(payback * monthlyCur)} r={6} fill="#fff" stroke="#007BFF" strokeWidth={3} />
                    <text x={Math.min(x(payback), W - 70)} y={y(payback * monthlyCur) - 12} fontSize={11} fontWeight={700} fill="#fff">Payback</text>
                  </g>
                )}
              </svg>
              <div className="mt-2 flex justify-between text-[11px] text-white/45">
                <span>Month 0</span><span>Month 6</span><span>Month 12</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs">
                <span className="flex items-center gap-2 text-white/80"><i className="h-2 w-5 rounded-full bg-amber-400" /> Current spend: {fmt(cur12)}/yr</span>
                <span className="flex items-center gap-2 text-white/80"><i className="h-2 w-5 rounded-full bg-cyan-400" /> With RO: {fmt(ro12)}/yr</span>
              </div>

              <Link href="/contact?intent=quote"
                className="btn-shimmer mt-6 inline-flex min-h-12 items-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                Get a plan-specific quote
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
