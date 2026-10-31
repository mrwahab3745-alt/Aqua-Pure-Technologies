"use client";

import { useMemo, useState } from "react";
import { CATEGORY_ORDER, buildWhatsAppUrl, WHATSAPP_NUMBER, type Part } from "../../../lib/parts";
import { SearchIcon, categoryIcon } from "../ui/Icons";

const PAGE = 12;
const ALL = "All components";

export default function PartsCatalog({ parts }: { parts: Part[] }) {
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    parts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    const names = [...counts.keys()].sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a);
      const ib = CATEGORY_ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
    });
    return [{ name: ALL, count: parts.length }, ...names.map((n) => ({ name: n, count: counts.get(n)! }))];
  }, [parts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return parts.filter(
      (p) =>
        (category === ALL || p.category === category) &&
        (!q || `${p.brand} ${p.modelName} ${p.category} ${p.specTags.join(" ")}`.toLowerCase().includes(q)),
    );
  }, [parts, category, query]);

  const visible = filtered.slice(0, shown);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="sticky top-20 z-40 -mx-6 border-b border-navy/10 bg-white/95 px-6 py-4 backdrop-blur-md">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => { setCategory(c.name); setShown(PAGE); }}
                aria-pressed={category === c.name}
                className={`flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors duration-200 ${
                  category === c.name ? "bg-navy text-white shadow-md" : "bg-surface text-navy/65 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {c.name}
                <span className={`text-xs tabular-nums ${category === c.name ? "text-white/60" : "text-navy/40"}`}>{c.count}</span>
              </button>
            ))}
          </div>
          <label className="relative block lg:w-72">
            <span className="sr-only">Search parts</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShown(PAGE); }}
              placeholder="Search model or brand"
              className="min-h-11 w-full rounded-lg border border-navy/15 bg-white pl-10 pr-4 text-sm text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-primary"
            />
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-navy/55" aria-live="polite">
        Showing {visible.length} of {filtered.length} {filtered.length === 1 ? "part" : "parts"}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((part) => (
          <article
            key={part.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
          >
            <div className="flex items-center gap-3 border-b border-navy/10 bg-surface px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {categoryIcon(part.category, "h-6 w-6")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-navy">{part.brand}</p>
                <p className="truncate text-xs text-navy/55">{part.category}</p>
              </div>
              {!part.inStock && (
                <span className="ml-auto shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">Out of stock</span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-base font-bold leading-snug text-navy">{part.modelName}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {part.specTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-navy/70">{tag}</span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <a
                  href={buildWhatsAppUrl(part.modelName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-4 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  {part.inStock ? "Check stock & request quotation" : "Ask when it's back in stock"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-navy/20 p-8 text-center">
          <p className="text-base font-semibold text-navy">
            {query ? `No parts match "${query}".` : "No parts listed in this category yet."}
          </p>
          <p className="mt-2 text-sm text-navy/60">We can source most RO components on request. Send us the model and we will confirm.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(query ? `Hi, do you have: ${query}?` : "Hi, I need a spare part.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center rounded-lg bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-primary"
          >
            Ask on WhatsApp
          </a>
        </div>
      )}

      {filtered.length > shown && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE)}
            className="inline-flex min-h-12 items-center rounded-lg border border-navy/20 px-8 text-sm font-bold text-navy transition-colors hover:border-primary hover:text-primary"
          >
            Show {Math.min(PAGE, filtered.length - shown)} more
          </button>
        </div>
      )}
    </div>
  );
}
