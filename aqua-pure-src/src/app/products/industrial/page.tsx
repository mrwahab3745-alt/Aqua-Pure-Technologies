import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import ScrollReveal from "../../components/ui/ScrollReveal";
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
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industrial" }]}
        title="High-Yield Industrial Desalination & RO Systems"
        intro="Engineered to your feed water analysis and process demand — from 5,000 GPD single-line plants to 20,000+ GPD multi-stage systems for textile, pharma, and process manufacturing."
      >
        <dl className="grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["Capacity range", "5K – 20K+ GPD"],
            ["Typical recovery", "98–99.2%"],
            ["Deployment", "4–6 weeks"],
          ].map(([label, value]) => (
            <div key={label} className="bg-navy/80 p-5 backdrop-blur">
              <dd className="text-2xl font-extrabold tabular-nums tracking-tight text-white">{value}</dd>
              <dt className="mt-1 text-sm text-white/60">{label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <DynamicSpecAndQuote />
    </main>
  );
}
