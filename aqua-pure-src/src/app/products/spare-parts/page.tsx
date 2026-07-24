"use client";

import { useState, useCallback } from "react";

// Keep this dataset structure swappable — once Wahab's keyword research
// surfaces high-volume search terms, map them directly onto `modelName` and
// `specTags` for each part without touching the layout below.
// See Master Project Document, Open Items — "Keyword research execution."

type Category =
  | "All Components"
  | "RO Membranes"
  | "High-Pressure Pumps"
  | "Filter Media & Vessels"
  | "Dosing Systems & Chemicals";

type Part = {
  id: string;
  brand: string;
  modelName: string;
  category: Exclude<Category, "All Components">;
  specTags: string[];
  // Optional override — if omitted, buildWhatsAppUrl() generates it from
  // modelName at render time so the message text can never drift out of
  // sync with a renamed/re-keyworded model.
  whatsappQueryUrl?: string;
};

const WHATSAPP_NUMBER = "92XXXXXXXXXX"; // same number as Navbar/FinalCTA — replace once, keep in sync

function buildWhatsAppUrl(modelName: string): string {
  const message = `Hi, I'd like to check stock and get a quotation for: ${modelName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const CATEGORIES: Category[] = [
  "All Components",
  "RO Membranes",
  "High-Pressure Pumps",
  "Filter Media & Vessels",
  "Dosing Systems & Chemicals",
];

const PARTS_DATA: Part[] = [
  {
    id: "membrane-bw30-400",
    brand: "Dow Filmtec",
    modelName: "Filmtec BW30-400 Industrial Membrane",
    category: "RO Membranes",
    specTags: ["99.5% Rejection Rate", "400 sq. ft. Active Area"],
  },
  {
    id: "membrane-esp-4040",
    brand: "Hydranautics",
    modelName: "ESPA2-4040 Commercial Membrane",
    category: "RO Membranes",
    specTags: ["99.3% Rejection Rate", "4040 Series"],
  },
  {
    id: "pump-cr-series",
    brand: "Grundfos",
    modelName: "CR High-Pressure Booster Pump",
    category: "High-Pressure Pumps",
    specTags: ["Stainless Steel Impeller", "Up to 10 HP"],
  },
  {
    id: "vessel-frp-8040",
    brand: "Aqua Pure",
    modelName: "FRP Pressure Vessel, 8040 Series",
    category: "Filter Media & Vessels",
    specTags: ["Rated 300 PSI", "Side-Port Configuration"],
  },
  {
    id: "media-carbon-gac",
    brand: "Aqua Pure",
    modelName: "Granular Activated Carbon Media",
    category: "Filter Media & Vessels",
    specTags: ["Chlorine & Odor Removal", "Bulk / Bagged"],
  },
  {
    id: "dosing-pump-metering",
    brand: "Aqua Pure",
    modelName: "Chemical Dosing Metering Pump",
    category: "Dosing Systems & Chemicals",
    specTags: ["Adjustable Flow Rate", "Anti-Scalant Compatible"],
  },
];

export default function SparePartsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Components");

  const filteredParts =
    activeCategory === "All Components"
      ? PARTS_DATA
      : PARTS_DATA.filter((part) => part.category === activeCategory);

  const handleCategoryClick = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  return (
    <main className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          Spare Parts Catalog
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
          Genuine RO components. Checked stock, fast quotation.
        </h1>

        {/* Sticky filter bar */}
        <div className="sticky top-[73px] z-40 -mx-6 mt-8 border-b border-navy/10 bg-white/95 px-6 py-4 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  aria-pressed={activeCategory === category}
                  className={`min-h-12 rounded-lg px-4 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? "bg-navy text-white"
                      : "bg-surface text-navy/60 hover:bg-navy/10"
                  }`}
                >
                  {category}
                </button>
            ))}
          </div>
        </div>

        {/* Product data cards grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-navy/10"
            >
              {/* Brand badge strip */}
              <div className="flex items-center justify-center border-b border-navy/10 bg-surface px-4 py-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                  {part.brand}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-sm font-bold text-navy">{part.modelName}</h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {part.specTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-navy/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={part.whatsappQueryUrl ?? buildWhatsAppUrl(part.modelName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-4 text-center text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90"
                >
                  Check Stock &amp; Request Quotation
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredParts.length === 0 && (
          <p className="mt-10 text-center text-sm text-navy/50">
            No parts listed in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
