import Link from "next/link";

const CATEGORIES = [
  {
    href: "/products/domestic",
    eyebrow: "Home",
    title: "Domestic RO Plants",
    description: "Point-of-use and whole-house systems for clean drinking water at home.",
  },
  {
    href: "/products/commercial",
    eyebrow: "Business",
    title: "Commercial RO Plants",
    description: "Offices, hospitals, restaurants, and hospitality — reliable supply, AMC support.",
  },
  {
    href: "/products/industrial",
    eyebrow: "Industry",
    title: "Industrial RO Plants",
    description: "Textile, pharma, poultry, and process water at scale, engineered to spec.",
  },
  {
    href: "/products/spare-parts",
    eyebrow: "Parts",
    title: "Spare Parts Catalog",
    description: "Membranes, vessels, pumps, valves — check availability and get a quote.",
  },
];

export default function ProductCategoriesHub() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
          What we build
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          Every water problem, matched to the right system.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group flex flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-6 transition-colors hover:border-cyan hover:bg-white"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-navy/50">
                  {cat.eyebrow}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{cat.title}</h3>
                <p className="mt-2 text-sm text-navy/60">{cat.description}</p>
              </div>
              <span className="mt-5 text-sm font-semibold text-cyan group-hover:underline">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
