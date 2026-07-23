import type { Metadata } from "next";
import DynamicSpecAndQuote from "../../components/sections/DynamicSpecAndQuote";

export const metadata: Metadata = {
  title: "Industrial RO Plants — High-Yield Desalination & Process Water Systems",
  description:
    "Engineered industrial RO plants from 5,000 to 20,000+ GPD. Membrane staging, pump specification, and vessel configuration built to your feed water analysis.",
};

export default function IndustrialPage() {
  return (
    <main>
      {/* Engineering Hero */}
      <section className="bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Industrial Water Treatment
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            High-Yield Industrial Desalination &amp; RO Systems
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Engineered to your feed water analysis and process demand — from
            5,000 GPD single-line plants to 20,000+ GPD multi-stage systems
            for textile, pharma, and process manufacturing.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Capacity Range
              </dt>

              <dd className="mt-1 font-mono text-2xl font-bold text-white">
                5K – 20K+ GPD
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Typical Recovery
              </dt>

              <dd className="mt-1 font-mono text-2xl font-bold text-white">
                98–99.2%
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Deployment
              </dt>

              <dd className="mt-1 font-mono text-2xl font-bold text-white">
                4–6 Weeks
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <DynamicSpecAndQuote />
    </main>
  );
}
