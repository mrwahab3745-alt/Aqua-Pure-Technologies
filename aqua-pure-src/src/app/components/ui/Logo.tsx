import { useId } from "react";

/**
 * Aqua Pure Technology logo, redrawn as light-weight vector from the official
 * business card (droplet, wave, orbit ring, molecules + wordmark).
 * To use the printer's original file instead, replace the body of <Logo> with an
 * <Image src="/logo.svg" ... /> and keep the same props.
 */
export function LogoMark({ className = "h-11 w-auto" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 94 100" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id={`${id}d`} x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0" stopColor="#a9cdee" />
          <stop offset=".5" stopColor="#4f7fc0" />
          <stop offset="1" stopColor="#313b78" />
        </linearGradient>
        <linearGradient id={`${id}r`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8fb6c4" />
          <stop offset=".6" stopColor="#c9d2d8" />
          <stop offset="1" stopColor="#7e8fa8" />
        </linearGradient>
      </defs>
      {/* orbit ring, back half */}
      <ellipse cx="40" cy="72" rx="38" ry="10" transform="rotate(-16 40 72)" stroke={`url(#${id}r)`} strokeWidth="3.5" opacity=".55" />
      {/* droplet */}
      <path d="M40 4C40 4 10 38 10 60a30 30 0 0 0 60 0C70 38 40 4 40 4Z" fill={`url(#${id}d)`} />
      {/* wave inside the droplet */}
      <path d="M12 64C24 55 35 70 47 63C58 57 66 60 70 63C69 70 66 76 60 80C52 74 43 82 33 77C24 73 16 75 13 70Z" fill="#fff" opacity=".4" />
      <path d="M26 30c-5 9-8 17-8 25" stroke="#fff" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" />
      {/* orbit ring, front half */}
      <path d="M2 72A38 10 0 0 0 78 72" transform="rotate(-16 40 72)" stroke={`url(#${id}r)`} strokeWidth="3.5" strokeLinecap="round" />
      {/* molecules */}
      <g stroke="#9aa6bd" strokeWidth="1.5">
        <path d="M56 22 80 30M80 30 74 54M74 54 86 68" />
      </g>
      <circle cx="56" cy="22" r="4" fill="#8ea4cf" />
      <circle cx="80" cy="30" r="8" fill="#cfd5dd" />
      <circle cx="74" cy="54" r="7" fill="#4c63a8" />
      <circle cx="86" cy="68" r="3.5" fill="#9aa6bd" />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  showTagline = false,
  className = "",
}: {
  /** "dark" = for light backgrounds, "light" = for the navy footer / dark areas */
  tone?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="sr-only">Aqua Pure Technology</span>
      <LogoMark className="h-11 w-auto shrink-0" />
      <span aria-hidden className="flex flex-col leading-none">
        <span className="text-[1.6rem] font-semibold tracking-tight">
          <span className={dark ? "text-[#3a3f6e]" : "text-white"}>Aqua</span>{" "}
          <span className={dark ? "text-[#4f8aa6]" : "text-cyan-300"}>Pure</span>
        </span>
        <span className={`mt-1.5 flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.3em] ${dark ? "text-[#5b6070]" : "text-white/70"}`}>
          <i className="h-px w-3 bg-current opacity-50" />
          Technology
          <i className="h-px w-3 bg-current opacity-50" />
        </span>
        {showTagline && (
          <span className={`mt-1.5 text-[0.52rem] font-medium uppercase tracking-[0.18em] ${dark ? "text-[#5b6070]/80" : "text-white/55"}`}>
            Water Treatment Solutions
          </span>
        )}
      </span>
    </span>
  );
}
