import ScrollReveal from "../ui/ScrollReveal";
import { PRODUCTS, EQUIPMENT } from "../../../lib/content";
import { whatsappUrl } from "../../../lib/site";

const ICONS: Record<string, React.ReactNode> = {
  "domestic-ro": <path d="M12 3s6 6.500 6 11a6 6 0 0 1-12 0c0-4.500 6-11 6-11Z" />,
  softener: (<><rect x="7" y="3" width="10" height="18" rx="4" /><path d="M7 9h10" /></>),
  "commercial-ro": (<><rect x="3" y="8" width="18" height="8" rx="4" /><path d="M8 8v8M12 8v8M16 8v8" /></>),
  dm: (<><rect x="4" y="5" width="6" height="14" rx="3" /><rect x="14" y="5" width="6" height="14" rx="3" /><path d="M10 12h4" /></>),
  "domestic-softener": (<><rect x="8" y="3" width="8" height="14" rx="4" /><path d="M5 21h14" /></>),
  treatment: <path d="M3 20V9l6 3V9l6 3V5h6v15Z" />,
  uf: (<><path d="M4 4h16M4 20h16" /><path d="M7 4v16M11 4v16M15 4v16M19 4v16" /></>),
  bottling: <path d="M10 3h4M11 3v3l-2 3v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9l-2-3V3" />,
};

export default function ProductsGrid() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our products</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
            Water treatment plants for homes, business and industry.
          </h2>
        </ScrollReveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => {
            const href = p.href ?? whatsappUrl(`Hello, I would like details about the ${p.name}.`);
            const external = !p.href;
            return (
              <li key={p.id}>
                <ScrollReveal direction="up" delay={0.05 * (i % 4)} className="h-full">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface transition-colors duration-300 group-hover:bg-primary/15">
                      <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {ICONS[p.id]}
                      </svg>
                    </span>
                    <h3 className="mt-4 text-base font-bold text-navy">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.text}</p>
                    <span className="mt-4 text-sm font-semibold text-primary">
                      {external ? "Ask on WhatsApp" : "View details"}
                      <span aria-hidden className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </a>
                </ScrollReveal>
              </li>
            );
          })}
        </ul>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="mt-14">
            <h3 className="text-lg font-bold text-navy">Also available on request</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {EQUIPMENT.map((e) => (
                <li key={e} className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-xs font-medium text-navy/75 sm:text-sm">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
