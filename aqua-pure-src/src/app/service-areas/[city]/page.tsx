import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/ui/PageHero";
import ScrollReveal from "../../components/ui/ScrollReveal";
import CTABand from "../../components/ui/CTABand";
import { ArrowRight } from "../../components/ui/Icons";
import { SITE, mapsUrlFor } from "../../../lib/site";

const CITIES: Record<string, string> = {
  lahore: "Lahore",
  karachi: "Karachi",
};

const OFFERINGS = [
  { href: "/products/domestic", title: "Domestic RO plants", text: "Point-of-use and whole-house systems for clean drinking water at home." },
  { href: "/products/commercial", title: "Commercial RO plants", text: "Offices, schools, clinics and hospitality, with AMC support." },
  { href: "/products/industrial", title: "Industrial RO plants", text: "Process water at scale, engineered to your feed water analysis." },
  { href: "/products/spare-parts", title: "Spare parts", text: "Membranes, vessels, pumps and dosing systems. Check stock and request a quote." },
  { href: "/services#amc", title: "AMC and maintenance", text: "Preventative and emergency maintenance under one contract." },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const name = CITIES[city];
  if (!name) return {};

  return {
    title: `RO Plant Services in ${name}`,
    description: `RO plant installation, maintenance, AMC and spare parts for homes, businesses and industry in ${name}. Talk to an Aqua Pure engineer.`,
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const name = CITIES[city];
  if (!name) notFound();
  const office = SITE.offices.find((o) => o.slug === city);

  return (
    <main>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: name },
        ]}
        title={`RO plant services in ${name}.`}
        intro={`Domestic, commercial and industrial RO plants, maintenance and spare parts for customers in ${name}.`}
      />

      <section className="bg-white px-6 pb-16 pt-4 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              What we can help with in {name}.
            </h2>
          </ScrollReveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((offering, index) => (
              <li key={offering.href}>
                <ScrollReveal
                  direction="up"
                  delay={0.06 * index}
                  className="h-full"
                >
                  <Link
                    href={offering.href}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-card-hover"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-navy">
                        {offering.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/60">
                        {offering.text}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {office && (
        <section className="bg-surface px-6 py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-navy">Our {name} office</h2>
              <address className="mt-2 not-italic text-sm leading-relaxed text-navy/70">
                {office.lines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
              <p className="mt-2 text-sm text-navy/70">
                {SITE.hours.days}, {SITE.hours.time} · {SITE.hours.note}
              </p>
            </div>
            <a
              href={mapsUrlFor(office.full)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-navy/15 px-6 text-sm font-bold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              View on Google Maps
            </a>
          </div>
        </section>
      )}

      <CTABand
        title={`Tell us about your site in ${name}.`}
        text="Share your water source, daily use and site type. An engineer replies with a plan and a quote."
      />
    </main>
  );
}
