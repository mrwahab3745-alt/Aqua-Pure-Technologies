const PRODUCT_LINKS = [
  { href: "/products/domestic", label: "Domestic RO Plants" },
  { href: "/products/commercial", label: "Commercial RO Plants" },
  { href: "/products/industrial", label: "Industrial RO Plants" },
  { href: "/products/spare-parts", label: "Spare Parts Catalog" },
  { href: "/services/amc", label: "AMC / Maintenance" },
];

// Only list cities with genuine, verifiable service capability — see
// Master Project Document, Locked Decision #8. Placeholder hrefs below
// assume /service-areas/[city] pages exist before these go live.
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
          <p className="text-lg font-extrabold tracking-tight">
            Aqua<span className="text-cyan">Pure</span>
          </p>
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
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Products
          </h3>
          <ul className="mt-4 space-y-2">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Regional hubs (local SEO anchors) */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Regional Hubs
          </h3>
          <ul className="mt-4 space-y-2">
            {REGIONAL_HUBS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 hover:text-white">
                  RO Plant Services — {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Technical helpdesk / GBP-matched contact data */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Technical Helpdesk
          </h3>
          {/*
            IMPORTANT: this address/phone must exactly match the Google
            Business Profile listing character-for-character (NAP
            consistency is a real local SEO ranking factor — see Master
            Project Document, Section 3.4). Replace placeholders below
            with the verified GBP details before launch.
          */}
          <address className="mt-4 not-italic text-sm text-white/60 space-y-4">
            [Street Address], [Area], [City], Pakistan
            <br />
            <a href="tel:+92XXXXXXXXXX" className="py-2 px-3 inline-block hover:text-white">
              +92 XXX XXXXXXX
            </a>
            <br />
            <a href="mailto:info@aquapuretechnology.com" className="py-2 px-3 inline-block hover:text-white">
              info@aquapuretechnology.com
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
