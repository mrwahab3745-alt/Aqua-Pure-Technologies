/**
 * Spare-parts data layer.
 *
 * Source of truth = a Google Sheet published as CSV (set PARTS_SHEET_CSV_URL).
 * If the variable is missing or the sheet can't be read, the built-in list below
 * is used, so the page never breaks. See PARTS-SHEET-GUIDE.md.
 */
export type Part = {
  id: string;
  brand: string;
  modelName: string;
  category: string;
  specTags: string[];
  inStock: boolean;
};

export const WHATSAPP_NUMBER = "923245500653";

export function buildWhatsAppUrl(modelName: string): string {
  const message = `Hi, I'd like to check stock and get a quotation for: ${modelName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CATEGORY_ORDER = [
  "RO Membranes",
  "High-Pressure Pumps",
  "Filter Media & Vessels",
  "Dosing Systems & Chemicals",
];

const FALLBACK: Part[] = [
  { id: "membrane-bw30-400", brand: "Dow Filmtec", modelName: "Filmtec BW30-400 Industrial Membrane", category: "RO Membranes", specTags: ["99.5% Rejection Rate", "400 sq. ft. Active Area"], inStock: true },
  { id: "membrane-esp-4040", brand: "Hydranautics", modelName: "ESPA2-4040 Commercial Membrane", category: "RO Membranes", specTags: ["99.3% Rejection Rate", "4040 Series"], inStock: true },
  { id: "pump-cr-series", brand: "Grundfos", modelName: "CR High-Pressure Booster Pump", category: "High-Pressure Pumps", specTags: ["Stainless Steel Impeller", "Up to 10 HP"], inStock: true },
  { id: "vessel-frp-8040", brand: "Aqua Pure", modelName: "FRP Pressure Vessel, 8040 Series", category: "Filter Media & Vessels", specTags: ["Rated 300 PSI", "Side-Port Configuration"], inStock: true },
  { id: "media-carbon-gac", brand: "Aqua Pure", modelName: "Granular Activated Carbon Media", category: "Filter Media & Vessels", specTags: ["Chlorine & Odor Removal", "Bulk / Bagged"], inStock: true },
  { id: "dosing-pump-metering", brand: "Aqua Pure", modelName: "Chemical Dosing Metering Pump", category: "Dosing Systems & Chemicals", specTags: ["Adjustable Flow Rate", "Anti-Scalant Compatible"], inStock: true },
];

/** Minimal RFC-4180 CSV parser (quotes, commas and newlines inside quotes). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let quoted = false;
  const pushRow = () => {
    row.push(cur);
    cur = "";
    if (row.some((c) => c.trim() !== "")) rows.push(row);
    row = [];
  };
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; } else quoted = false;
      } else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; pushRow(); }
    else cur += c;
  }
  pushRow();
  return rows;
}

const norm = (h: string) => h.toLowerCase().replace(/[^a-z]/g, "");
const ALIASES: Record<string, string[]> = {
  brand: ["brand", "make", "manufacturer"],
  model: ["model", "modelname", "name", "part", "partname", "product"],
  category: ["category", "type", "group"],
  specs: ["specs", "specifications", "spec", "tags", "spectags", "details"],
  stock: ["stock", "instock", "available", "availability"],
};

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function partsFromCsv(text: string): Part[] {
  const rows = parseCsv(text);
  if (rows.length < 2) return [];
  const head = rows[0].map(norm);
  const col = (key: string) => head.findIndex((h) => ALIASES[key].includes(h));
  const idx = { brand: col("brand"), model: col("model"), category: col("category"), specs: col("specs"), stock: col("stock") };
  if (idx.model < 0) return [];

  const seen = new Set<string>();
  const parts: Part[] = [];
  rows.slice(1).forEach((r, i) => {
    const get = (k: keyof typeof idx) => (idx[k] >= 0 ? (r[idx[k]] ?? "").trim() : "");
    const modelName = get("model");
    if (!modelName) return;
    let id = slug(`${get("brand")}-${modelName}`) || `part-${i}`;
    if (seen.has(id)) id = `${id}-${i}`;
    seen.add(id);
    const stock = get("stock").toLowerCase();
    parts.push({
      id,
      brand: get("brand") || "Aqua Pure",
      modelName,
      category: get("category") || "Other",
      specTags: get("specs").split(/[|;]/).map((t) => t.trim()).filter(Boolean),
      inStock: !["no", "n", "false", "0", "out", "out of stock"].includes(stock),
    });
  });
  return parts;
}

export async function getParts(): Promise<{ parts: Part[]; source: "sheet" | "fallback" }> {
  const url = process.env.PARTS_SHEET_CSV_URL;
  if (!url) return { parts: FALLBACK, source: "fallback" };
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
    const parts = partsFromCsv(await res.text());
    if (parts.length === 0) throw new Error("Sheet has no usable rows");
    return { parts, source: "sheet" };
  } catch (err) {
    console.error("[parts] falling back to built-in list:", err);
    return { parts: FALLBACK, source: "fallback" };
  }
}
