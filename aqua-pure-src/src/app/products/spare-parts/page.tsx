import type { Metadata } from "next";
import PageHero from "../../components/ui/PageHero";
import PartsCatalog from "../../components/sections/PartsCatalog";
import { getParts } from "../../../lib/parts";

// Re-read the parts sheet at most every 5 minutes (see lib/parts.ts).
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Genuine RO Spare Parts — Membranes, Pumps, Vessels & Dosing",
  description:
    "Genuine RO membranes, high-pressure pumps, pressure vessels, filter media and dosing systems. Check stock and request a quotation on WhatsApp.",
};

export default async function SparePartsPage() {
  const { parts } = await getParts();

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Spare parts" }]}
        title="Genuine RO components. Checked stock, fast quotation."
        intro="Membranes, vessels, pumps, valves and panels. Pick a category, search by model and ask for a quote."
      />
      <div className="bg-white px-6 pb-16 md:pb-24">
        <PartsCatalog parts={parts} />
      </div>
    </main>
  );
}
