import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import ScrollReveal from "../../components/ui/ScrollReveal";
import DynamicSpecAndQuote from "../../components/sections/DynamicSpecAndQuote";

export const metadata: Metadata = {
  title: "Industrial RO Plants — Factories, Workshops & Process Water",
  description:
    "Customized industrial RO plants for factories, workshops and manufacturing units, designed from your water analysis and daily water requirement.",
};

export default function IndustrialPage() {
  return (
    <main>
      {/* Engineering Hero */}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industrial" }]}
        title="Industrial RO systems built around your water."
        intro="Customized RO plants for factories, workshops and manufacturing units, for drinking water and process water, designed from your water analysis and daily requirement."
      >
        <dl className="grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {[
            ["Water sources", "Borewell, sea, factory & waste water"],
            ["Built for", "Factories, workshops, process water"],
            ["Support", "24/7 service available"],
          ].map(([label, value]) => (
            <div key={label} className="bg-navy/80 p-5 backdrop-blur">
              <dd className="text-lg font-extrabold tracking-tight text-white sm:text-xl">{value}</dd>
              <dt className="mt-1 text-sm text-white/60">{label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <DynamicSpecAndQuote />
    </main>
  );
}
