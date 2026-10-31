import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ui/ScrollReveal";
import PageHero from "../components/ui/PageHero";
import { MembraneVisual } from "../components/ui/PageVisual";
import CTABand from "../components/ui/CTABand";

export const metadata: Metadata = {
  title: "Services — Engineering, Maintenance & AMC",
  description:
    "Custom RO plant engineering, chemical cleaning and membrane rejuvenation, and turnkey Annual Maintenance Contracts.",
};

const stroke = { fill: "none", stroke: "#67e8f9", strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Engineering() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden>
      <g stroke="#fff" strokeOpacity=".08">
        {[40, 80, 120, 160, 200, 240, 280].map((x) => <path key={x} d={`M${x} 10v200`} />)}
        {[40, 80, 120, 160, 190].map((y) => <path key={y} d={`M10 ${y}h300`} />)}
      </g>
      <g {...stroke}>
        <rect x="30" y="70" width="56" height="84" rx="8" />
        <path d="M86 112h40" className="flow-dash" />
        <circle cx="148" cy="112" r="20" />
        <path d="M168 112h28" className="flow-dash" />
        <rect x="196" y="96" width="94" height="32" rx="16" />
        <path d="M30 180h260M30 172v16M290 172v16" strokeOpacity=".6" />
      </g>
      <text x="160" y="205" textAnchor="middle" fontSize="11" fill="#67e8f9" fillOpacity=".8">sized to your feed water</text>
    </svg>
  );
}

function Cleaning() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden>
      <g {...stroke}>
        <rect x="60" y="86" width="200" height="48" rx="24" />
        <path d="M100 92v36M140 92v36M180 92v36M220 92v36" strokeOpacity=".35" />
      </g>
      {[[90, 60, 6], [150, 40, 9], [210, 62, 5], [250, 44, 7], [120, 160, 7], [190, 172, 5], [240, 156, 8]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#67e8f9" fillOpacity=".25" stroke="#67e8f9" strokeOpacity=".7" strokeWidth="1.5" className="animate-float" style={{ animationDelay: `${i * 0.6}s` }} />
      ))}
      <path d="M278 40l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#fff" fillOpacity=".85" />
    </svg>
  );
}

function Shield() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden>
      <g {...stroke}>
        <path d="M160 28 96 54v52c0 40 28 70 64 86 36-16 64-46 64-86V54l-64-26Z" />
        <path d="m134 108 18 18 36-38" strokeWidth="5" stroke="#fff" />
      </g>
      <g stroke="#67e8f9" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round">
        {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${40 + i * 48} 206v-10`} />)}
      </g>
    </svg>
  );
}

const SERVICES = [
  {
    id: "engineering",
    title: "Custom engineering and plant design",
    description:
      "Plant sizing, membrane staging, and pump specification built from your feed water analysis — not a generic template.",
    points: ["Sized from your feed water analysis", "Membrane staging planned to your demand", "Pump specified for the plant, not the catalogue"],
    cta: "Plan my plant",
    href: "/contact?intent=engineering",
    art: <Engineering />,
  },
  {
    id: "cleaning",
    title: "Chemical cleaning and membrane rejuvenation",
    description:
      "Scheduled or emergency membrane cleaning to restore rejection rate and recovery, extending plant life without early replacement.",
    points: ["Scheduled or emergency visits", "Restores rejection rate and recovery", "Extends membrane life before replacement"],
    cta: "Book a cleaning",
    href: "/contact?intent=cleaning",
    art: <Cleaning />,
  },
  {
    id: "amc",
    title: "Turnkey AMC engineering controls",
    description:
      "Preventative and emergency maintenance under one contract — response SLAs, genuine parts, and scheduled system health checks.",
    points: ["Response times written into the contract", "Genuine OEM parts only", "Scheduled system health checks"],
    cta: "Get an AMC quote",
    href: "/contact?intent=amc",
    art: <Shield />,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title="Built to keep water flowing, not just get it started."
        intro="Engineering before the plant exists, cleaning while it runs, and a contract that covers the rest."
        aside={<MembraneVisual />}
      />

      <section className="bg-white px-6 pb-8 pt-4 md:pb-16">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.id} direction="up">
              <article id={s.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={`relative aspect-[16/11] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-[#0a1226] p-6 shadow-xl shadow-navy/20 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />
                  {s.art}
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-navy/65">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-navy/80">
                        <svg aria-hidden viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.href}
                    className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-navy px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
                  >
                    {s.cta}
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="pt-8 md:pt-16">
        <CTABand />
      </div>
    </main>
  );
}
