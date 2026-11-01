import ScrollReveal from "../ui/ScrollReveal";
import Logo from "../ui/Logo";
import { SITE, mapsUrl } from "../../../lib/site";

const PRODUCT_LINKS = [
  { href: "/products/domestic", label: "Domestic RO Plants" },
  { href: "/products/commercial", label: "Commercial RO Plants" },
  { href: "/products/industrial", label: "Industrial RO Plants" },
  { href: "/products/spare-parts", label: "Spare Parts Catalog" },
  { href: "/services#amc", label: "AMC / Maintenance" },
];

// Only list cities with genuine, verifiable service capability.
const REGIONAL_HUBS = [
  { href: "/service-areas/lahore", label: "Lahore" },
  { href: "/service-areas/karachi", label: "Karachi" },
  { href: "/service-areas/islamabad", label: "Islamabad" },
];

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — micro-bio */}
        <div>
          <Logo tone="light" showTagline />
          <p className="mt-3 text-sm text-white/60">
            RO plant installation, maintenance, and genuine spare parts —
            domestic, commercial, and industrial water treatment across
            Pakistan.
          </p>
          <p className="mt-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/70">
            Certified OEM Components
          </p>
        </div>

        {/* Column 2 — Product navigation matrix */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Products
          </h3>
          <ul className="mt-4 space-y-2">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Regional hubs (local SEO anchors) */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Regional Hubs
          </h3>
          <ul className="mt-4 space-y-2">
            {REGIONAL_HUBS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">
                  RO Plant Services — {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Technical helpdesk / GBP-matched contact data */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
            Technical Helpdesk
          </h3>
          {/*
            Details come from src/lib/site.ts (official business card). They must
            match the Google Business Profile listing character-for-character
            (NAP consistency is a real local SEO ranking factor).
          */}
          <address className="mt-4 space-y-3 not-italic text-sm text-white/60">
            <p>
              {SITE.address.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-primary transition-colors hover:underline">
                View on Google Maps
              </a>
            </p>
            <p>
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="block py-1 transition-colors duration-200 hover:text-primary">
                  {p.display}
                </a>
              ))}
            </p>
            <a href={`mailto:${SITE.email}`} className="block break-all py-1 transition-colors duration-200 hover:text-primary">
              {SITE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Aqua Pure Technology. All rights reserved.
      </div>
    </footer>
  );
}
