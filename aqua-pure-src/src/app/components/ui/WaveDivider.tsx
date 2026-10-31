// Pure-CSS animated wave (transform only → GPU friendly, no JS).
// `fillClass` should match the background colour of the NEXT section.
const PERIOD = 600;
const REPEATS = 4; // viewBox width = 2400 → translating -50% = 2 full periods (seamless loop)

function buildPath(amplitude: number, phaseFlip: boolean) {
  const mid = 40;
  let d = `M0,${mid}`;
  for (let i = 0; i < REPEATS; i++) {
    const x0 = i * PERIOD;
    const up = phaseFlip ? mid + amplitude : mid - amplitude;
    const down = phaseFlip ? mid - amplitude : mid + amplitude;
    d += ` C${x0 + 150},${up} ${x0 + 150},${down} ${x0 + 300},${mid}`;
    d += ` C${x0 + 450},${up} ${x0 + 450},${down} ${x0 + 600},${mid}`;
  }
  d += ` L${PERIOD * REPEATS},80 L0,80 Z`;
  return d;
}

export default function WaveDivider({
  fillClass = "fill-surface",
  className = "",
}: {
  fillClass?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-[-1px] h-10 overflow-hidden sm:h-16 ${className}`}
    >
      <svg
        viewBox={`0 0 ${PERIOD * REPEATS} 80`}
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-full w-[200%] animate-wave-slow opacity-40 ${fillClass}`}
      >
        <path d={buildPath(22, true)} />
      </svg>
      <svg
        viewBox={`0 0 ${PERIOD * REPEATS} 80`}
        preserveAspectRatio="none"
        className={`absolute bottom-0 h-full w-[200%] animate-wave-fast ${fillClass}`}
      >
        <path d={buildPath(16, false)} />
      </svg>
    </div>
  );
}
