/** Big glossy floating droplet with expanding ripple rings (CSS only). */
export default function HeroDroplet() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-10 top-24 h-52 w-52 opacity-30 sm:right-[3%] sm:h-60 sm:w-60 sm:opacity-40 lg:right-[6%] lg:top-[7%] lg:h-72 lg:w-72 lg:opacity-100 xl:h-80 xl:w-80"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ripple"
          style={{ animationDelay: `${i * 1.6}s` }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <svg viewBox="0 0 120 150" className="h-44 w-36 drop-shadow-[0_0_40px_rgba(0,180,255,0.55)] xl:h-52 xl:w-40">
          <defs>
            <linearGradient id="dropG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="55%" stopColor="#007BFF" />
              <stop offset="100%" stopColor="#0b3d91" />
            </linearGradient>
          </defs>
          <path
            d="M60 6 C60 6 12 62 12 96 a48 48 0 0 0 96 0 C108 62 60 6 60 6 Z"
            fill="url(#dropG)"
          />
          <path
            d="M38 88 C36 106 44 120 58 126"
            stroke="white"
            strokeOpacity="0.65"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="44" cy="70" rx="7" ry="12" fill="white" fillOpacity="0.35" transform="rotate(25 44 70)" />
        </svg>
      </div>
    </div>
  );
}
