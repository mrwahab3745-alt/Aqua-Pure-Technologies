// Small stroke icons that inherit text colour (replace emojis / text glyphs).
type P = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const MenuIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CheckCircle = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.5 2.5 4.5-5" /></svg>
);
export const AlertIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><path d="M12 4 3 20h18L12 4Z" /><path d="M12 10v4M12 17.5v.01" /></svg>
);
export const SearchIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
);

/* Spare-part category icons */
export const MembraneIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><rect x="2.5" y="8" width="19" height="8" rx="4" /><path d="M8 9v6M12 9v6M16 9v6" /></svg>
);
export const PumpIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><rect x="5" y="3.5" width="8" height="4" rx="1" /><circle cx="9" cy="14" r="5" /><path d="M9 11.500v5M6.500 14h5M14 14h7M21 14v-4" /></svg>
);
export const VesselIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><rect x="7.500" y="2.500" width="9" height="19" rx="4.500" /><path d="M7.500 12c3-2 6 2 9 0" /></svg>
);
export const DosingIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M9.500 3h5M10.500 3v5l-3.500 6v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5l-3.500-6V3" /><path d="M8 15h8" /></svg>
);
export const BoxIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}><path d="M12 3 4 7.500v9L12 21l8-4.500v-9L12 3Z" /><path d="M4 7.500 12 12l8-4.500M12 12v9" /></svg>
);

export function categoryIcon(category: string, className?: string) {
  if (/membrane/i.test(category)) return <MembraneIcon className={className} />;
  if (/pump/i.test(category) && !/dos/i.test(category)) return <PumpIcon className={className} />;
  if (/dos|chem/i.test(category)) return <DosingIcon className={className} />;
  if (/vessel|media|filter/i.test(category)) return <VesselIcon className={className} />;
  return <BoxIcon className={className} />;
}
