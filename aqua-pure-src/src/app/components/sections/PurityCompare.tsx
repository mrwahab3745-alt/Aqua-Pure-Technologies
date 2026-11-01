"use client";

import { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import AccentBar from "../ui/AccentBar";

/**
 * Drag from raw to purified water. Numbers are ILLUSTRATIVE examples (stated on
 * screen). Guideline markers use WHO drinking-water guideline values where one exists.
 */
const METRICS = [
  { label: "TDS", unit: "ppm", raw: 734, clean: 25, guide: 600, note: "WHO taste guide 600" },
  { label: "Hardness", unit: "mg/L", raw: 262, clean: 8, guide: undefined, note: "Scale-forming minerals" },
  { label: "Arsenic", unit: "µg/L", raw: 19, clean: 1, guide: 10, note: "WHO guideline 10" },
  { label: "Coliform", unit: "/100 ml", raw: 12, clean: 0, guide: undefined, note: "WHO guideline: none detectable" },
];

const DOTS = [
  [8, 22, 6], [22, 60, 9], [35, 30, 5], [48, 74, 8], [60, 18, 6], [72, 55, 10],
  [84, 35, 5], [15, 82, 7], [55, 46, 6], [90, 78, 8], [40, 12, 5], [68, 88, 6],
];

export default function PurityCompare() {
  const [pct, setPct] = useState(0);
  const t = pct / 100;

  return (
    <section id="water-quality" className="bg-navy px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Before / after
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            See the difference <span className="text-cyan-300">you can measure.</span>
          </h2>
        </ScrollReveal>
        <AccentBar className="mt-4" />

        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            {/* Water panel */}
            <div className="flex flex-col gap-5">
              <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 lg:h-full lg:min-h-64">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-700 to-stone-800" />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-cyan-200 via-cyan-400 to-primary"
                  style={{ opacity: t }}
                />
                <div aria-hidden className="absolute inset-0" style={{ opacity: 1 - t }}>
                  {DOTS.map(([l, tp, s], i) => (
                    <span
                      key={i}
                      className="absolute rounded-full bg-black/30"
                      style={{ left: `${l}%`, top: `${tp}%`, width: s, height: s }}
                    />
                  ))}
                </div>
                <div aria-hidden className="absolute inset-0" style={{ opacity: t }}>
                  {[12, 30, 52, 70, 88].map((l, i) => (
                    <span
                      key={l}
                      className="absolute bottom-0 rounded-full border border-white/70 bg-white/30 animate-bubble"
                      style={{
                        left: `${l}%`,
                        width: 8 + (i % 3) * 5,
                        height: 8 + (i % 3) * 5,
                        animationDelay: `${i * 1.3}s`,
                        animationDuration: `${7 + i}s`,
                        ["--bx" as string]: `${i % 2 ? 14 : -14}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                  {t < 0.5 ? "Raw water" : "Purified water"}
                </span>
              </div>

              <div>
                <label htmlFor="purity-range" className="mb-3 flex justify-between text-xs font-semibold uppercase tracking-widest text-white/60">
                  <span>Raw</span>
                  <span className="text-cyan-300">Drag to purify</span>
                  <span>Purified</span>
                </label>
                <input
                  id="purity-range"
                  type="range"
                  min={0}
                  max={100}
                  value={pct}
                  onChange={(e) => setPct(Number(e.target.value))}
                  className="range-water"
                  style={{ ["--fill" as string]: `${pct}%` }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-col justify-between gap-6">
              <ul className="space-y-5">
                {METRICS.map((m) => {
                  const v = m.raw + (m.clean - m.raw) * t;
                  const shown = Math.round(v);
                  const ok = m.guide !== undefined ? v <= m.guide : t > 0.9;
                  const ratio = Math.max(v / m.raw, 0.02);
                  return (
                    <li key={m.label}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="font-semibold text-white">{m.label}</span>
                        <span className={`font-bold tabular-nums ${ok ? "text-emerald-300" : "text-amber-300"}`}>
                          {shown} <span className="text-xs font-medium text-white/50">{m.unit}</span>
                        </span>
                      </div>
                      <div className="relative mt-2 h-2.5 rounded-full bg-white/10">
                        <div
                          className={`h-full origin-left rounded-full transition-[transform,background-color] duration-150 ${
                            ok ? "bg-emerald-400" : "bg-amber-400"
                          }`}
                          style={{ transform: `scaleX(${ratio})` }}
                        />
                        {m.guide !== undefined && m.guide < m.raw && (
                          <span
                            aria-hidden
                            className="absolute -top-1 h-4.5 w-0.5 bg-white/60"
                            style={{ left: `${(m.guide / m.raw) * 100}%` }}
                          />
                        )}
                      </div>
                      <p className="mt-1 text-[11px] text-white/45">{m.note}</p>
                    </li>
                  );
                })}
              </ul>
              <p className="text-xs leading-relaxed text-white/50">
                Illustrative example values, not a measurement of your water. Our free
                on-site test gives your actual readings.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
