import { TICKER } from "../../../lib/content";

// Slim announcement strip with a CSS-only marquee (transform animation, no JS).
// Pauses on hover; with "reduce motion" the global CSS rule stops the animation.
const LOOP = [...TICKER, ...TICKER, ...TICKER, ...TICKER];

export default function TickerBar() {
  return (
    <div className="overflow-hidden bg-primary text-white" role="region" aria-label="What we do">
      <div className="flex w-max animate-marquee items-center gap-12 py-2 hover:[animation-play-state:paused]">
        {LOOP.map((text, i) => (
          <span
            key={`${text}-${i}`}
            aria-hidden={i >= TICKER.length}
            className="flex items-center gap-3 whitespace-nowrap text-xs font-medium sm:text-sm"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-white/80" fill="currentColor">
              <path d="M12 2s7 7.500 7 12.500a7 7 0 0 1-14 0C5 9.500 12 2 12 2Z" />
            </svg>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
