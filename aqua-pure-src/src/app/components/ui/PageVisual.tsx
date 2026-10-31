/**
 * Page-specific line illustrations for the PageHero `aside` slot.
 * Pure SVG, decorative (aria-hidden), hidden below lg.
 */
const wrap =
  "pointer-events-none absolute right-[5%] top-1/2 hidden h-72 w-[26rem] -translate-y-1/2 lg:block xl:w-[30rem]";

/** About: a miniature plant line — tank, filters, membrane, tank — with flowing water. */
export function PlantLineVisual() {
  return (
    <div aria-hidden className={wrap}>
      <svg viewBox="0 0 480 280" className="h-full w-full animate-float" fill="none" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="90" width="64" height="100" rx="8" strokeOpacity=".8" />
        <rect x="16" y="130" width="52" height="54" rx="5" fill="#67e8f9" fillOpacity=".18" stroke="none" />
        <rect x="120" y="96" width="24" height="88" rx="12" strokeOpacity=".8" />
        <rect x="156" y="96" width="24" height="88" rx="12" strokeOpacity=".8" />
        <circle cx="228" cy="140" r="20" strokeOpacity=".8" />
        <path d="M222 148v-16l16 8-16 8Z" fill="#67e8f9" fillOpacity=".5" stroke="none" />
        <rect x="262" y="120" width="130" height="40" rx="20" strokeOpacity=".8" />
        <path d="M290 124v32M318 124v32M346 124v32M372 124v32" strokeOpacity=".35" />
        <rect x="418" y="90" width="56" height="100" rx="8" strokeOpacity=".8" />
        <rect x="424" y="120" width="44" height="64" rx="5" fill="#007BFF" fillOpacity=".5" stroke="none" />
        <path d="M74 140h46M180 140h28M248 140h14M392 140h26" strokeOpacity=".9" className="flow-dash" />
        <path d="M335 160v40" stroke="#fca5a5" strokeOpacity=".9" className="flow-dash" />
      </svg>
    </div>
  );
}

/** Services: a spiral-wound membrane cross-section that turns slowly. */
export function MembraneVisual() {
  return (
    <div aria-hidden className={wrap}>
      <div className="flex h-full w-full items-center justify-center">
        <svg viewBox="0 0 240 240" className="h-64 w-64 animate-float" fill="none">
          <circle cx="120" cy="120" r="108" stroke="#67e8f9" strokeOpacity=".5" strokeWidth="3" />
          <g className="animate-spin-slow" style={{ transformOrigin: "120px 120px" }}>
            <path
              d="M120 120m0 0c8 0 12 6 12 12s-6 14-14 14-18-8-18-18 10-22 24-22 28 14 28 30-16 34-36 34-42-22-42-46 26-50 56-50 58 30 58 62-34 66-72 66"
              stroke="#67e8f9"
              strokeWidth="5"
              strokeLinecap="round"
              strokeOpacity=".85"
            />
          </g>
          <circle cx="120" cy="120" r="9" fill="#007BFF" />
        </svg>
      </div>
    </div>
  );
}

/** Contact: ripple rings around a single droplet = "a signal in the water". */
export function RippleVisual() {
  return (
    <div aria-hidden className={wrap}>
      <div className="relative mx-auto h-72 w-72">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ripple"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
        <svg viewBox="0 0 120 150" className="absolute left-1/2 top-1/2 h-32 w-24 -translate-x-1/2 -translate-y-1/2">
          <path d="M60 6C60 6 12 62 12 96a48 48 0 0 0 96 0C108 62 60 6 60 6Z" fill="#007BFF" />
          <path d="M38 88c-2 18 6 32 20 38" stroke="#fff" strokeOpacity=".6" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}
