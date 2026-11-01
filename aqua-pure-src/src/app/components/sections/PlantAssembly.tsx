"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const STAGES = [
  { title: "Feed water", text: "Borewell, tanker or municipal water is stored and fed into the plant." },
  { title: "Pre-treatment", text: "Sediment and carbon filters protect the membranes from scale, chlorine and silt." },
  { title: "Pump + RO membrane", text: "A high-pressure pump pushes water through the membrane, which rejects dissolved salts." },
  { title: "Pure water", text: "Treated water goes to storage. The reject stream is sent to drain." },
];

function Reveal({ p, a, b, children }: { p: MotionValue<number>; a: number; b: number; children: React.ReactNode }) {
  const opacity = useTransform(p, [a, b], [0, 1]);
  const y = useTransform(p, [a, b], [28, 0]);
  return <motion.g style={{ opacity, y }}>{children}</motion.g>;
}

function Pipe({ p, a, b, d, done, reject = false }: { p: MotionValue<number>; a: number; b: number; d: string; done: boolean; reject?: boolean }) {
  const pathLength = useTransform(p, [a, b], [0, 1]);
  return (
    <>
      <motion.path d={d} fill="none" stroke={reject ? "#f87171" : "#007BFF"} strokeWidth={8} strokeLinecap="round" style={{ pathLength }} />
      <path
        d={d}
        fill="none"
        stroke={reject ? "#fee2e2" : "#ffffff"}
        strokeWidth={3}
        strokeLinecap="round"
        className={`flow-dash transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}

const label = { fontSize: 14, fontWeight: 700, fill: "#0f172a", textAnchor: "middle" as const };

export default function PlantAssembly() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const full = useMotionValue(1);
  const p = reduce ? full : scrollYProgress;

  const [stage, setStage] = useState(reduce ? 3 : 0);
  const [done, setDone] = useState(!!reduce);
  useMotionValueEvent(p, "change", (v) => {
    setStage(v < 0.22 ? 0 : v < 0.45 ? 1 : v < 0.72 ? 2 : 3);
    setDone(v > 0.9);
  });

  return (
    <section
      id="plant-assembly"
      ref={ref}
      className={`bg-surface px-6 ${reduce ? "py-16" : "h-[260vh]"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ${
          reduce ? "" : "sticky top-20 h-[calc(100svh-5rem)]"
        }`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {reduce ? "How a plant is built" : "Keep scrolling"}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Watch a plant come together.
          </h2>
          <ol className="mt-6 space-y-3">
            {STAGES.map((s, i) => (
              <li
                key={s.title}
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  i === stage
                    ? "border-primary bg-white shadow-card-hover"
                    : "border-navy/10 bg-white/50 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold ${
                      i <= stage ? "bg-primary text-white" : "bg-navy/10 text-navy/60"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold text-navy">{s.title}</h3>
                </div>
                <p className={`overflow-hidden text-sm text-navy/60 transition-all duration-300 ${i === stage ? "mt-2 max-h-24" : "max-h-0"}`}>
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <svg viewBox="0 0 800 280" role="img" aria-label="Diagram of an RO plant: feed tank, pre-filters, pump, RO membrane and product tank" className="w-full">
          {/* pipes first so equipment sits on top */}
          <Pipe p={p} a={0.2} b={0.27} d="M120 164 H190" done={done} />
          <Pipe p={p} a={0.42} b={0.49} d="M278 164 H319" done={done} />
          <Pipe p={p} a={0.7} b={0.76} d="M650 164 H690" done={done} />
          <Pipe p={p} a={0.78} b={0.86} d="M595 188 V236" done={done} reject />
          <Pipe p={p} a={0.62} b={0.68} d="M371 164 H420" done={done} />

          <Reveal p={p} a={0.02} b={0.2}>
            <rect x={20} y={95} width={100} height={130} rx={10} fill="#e0f2fe" stroke="#0f172a" strokeWidth={3} />
            <rect x={26} y={140} width={88} height={79} rx={6} fill="#a16207" opacity={0.55} />
            <text x={70} y={250} {...label}>Feed water</text>
          </Reveal>

          <Reveal p={p} a={0.24} b={0.42}>
            <rect x={190} y={102} width={38} height={125} rx={19} fill="#e2e8f0" stroke="#0f172a" strokeWidth={3} />
            <rect x={240} y={102} width={38} height={125} rx={19} fill="#e2e8f0" stroke="#0f172a" strokeWidth={3} />
            <rect x={196} y={160} width={26} height={60} rx={13} fill="#d97706" opacity={0.6} />
            <rect x={246} y={160} width={26} height={60} rx={13} fill="#334155" opacity={0.6} />
            <text x={234} y={250} {...label}>Pre-filters</text>
          </Reveal>

          <Reveal p={p} a={0.46} b={0.7}>
            <circle cx={345} cy={164} r={26} fill="#007BFF" stroke="#0f172a" strokeWidth={3} />
            <text x={345} y={170} fontSize={20} fontWeight={800} fill="#fff" textAnchor="middle">P</text>
            <text x={345} y={222} {...label}>HP pump</text>
            <rect x={420} y={140} width={230} height={48} rx={24} fill="#cbd5e1" stroke="#0f172a" strokeWidth={3} />
            {[470, 510, 550, 590].map((x) => (
              <line key={x} x1={x} y1={146} x2={x} y2={182} stroke="#0f172a" strokeOpacity={0.35} strokeWidth={2} />
            ))}
            <text x={535} y={124} {...label}>RO membrane</text>
          </Reveal>

          <Reveal p={p} a={0.74} b={0.9}>
            <rect x={690} y={95} width={100} height={130} rx={10} fill="#ecfeff" stroke="#0f172a" strokeWidth={3} />
            <rect x={696} y={130} width={88} height={89} rx={6} fill="#22d3ee" opacity={0.75} />
            <text x={740} y={250} {...label}>Pure water</text>
            <text x={595} y={262} {...label} fill="#b91c1c" style={{ fontSize: 12, fill: "#b91c1c" }}>Reject to drain</text>
          </Reveal>
        </svg>
      </div>
    </section>
  );
}
