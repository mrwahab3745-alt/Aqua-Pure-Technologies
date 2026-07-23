import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home RO Water Filters — Safe, Great-Tasting Water for Your Family",
  description:
    "RO water systems for your home. Safe drinking water for your children, no more bad taste or smell, fast installation across Pakistan.",
};

const PROBLEMS_SOLVED = [
  {
    problem: "Cloudy, bad-smelling tap or borewell water",
    solution: "Multi-stage filtration removes sediment, chlorine smell, and cloudiness",
  },
  {
    problem: "Worrying about what's actually in your drinking water",
    solution: "RO membrane removes dissolved solids, bacteria, and heavy metals",
  },
  {
    problem: "Limescale building up on taps, kettles, and utensils",
    solution: "Softened output water — no more scale buildup over time",
  },
  {
    problem: "Bottled water costs adding up every month",
    solution: "Unlimited safe water at home, no more monthly bottle runs",
  },
];

const HOUSEHOLD_CHECKLIST = [
  "100% safe drinking water for children",
  "Removes limescale and water hardness",
  "No more bad taste or smell",
  "Fits under your existing kitchen counter",
  "Auto filter-change reminders included",
  "Installed and tested same day",
];

export default function DomesticPage() {
  return (
    <main>
      {/* Lifestyle Hero */}
      <section className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
            For your home
          </p>
          <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
            Water your family can drink without a second thought.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-navy/60 sm:text-lg">
            Clean, safe, great-tasting water for your kids, your kitchen, and
            your peace of mind — installed in a few hours.
          </p>
          <a
            href="#get-quote"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-8 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90"
          >
            Get My Home Installed
          </a>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">
            Sound familiar?
          </h2>

          <div className="mt-12 grid gap-4">
            {PROBLEMS_SOLVED.map((row) => (
              <div
                key={row.problem}
                className="grid gap-3 rounded-2xl border border-navy/10 sm:grid-cols-2"
              >
                <div className="flex items-center gap-3 p-6">
                  <span aria-hidden className="text-lg">😕</span>
                  <p className="text-sm text-navy/70">{row.problem}</p>
                </div>
                <div className="flex items-center gap-3 border-t border-navy/10 bg-surface p-6 sm:border-l sm:border-t-0">
                  <span aria-hidden className="text-lg">✅</span>
                  <p className="text-sm font-medium text-navy">{row.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Household Checklist */}
      <section className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">
            What every Aqua Pure home system includes
          </h2>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {HOUSEHOLD_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-medium text-navy"
              >
                <svg
                  aria-hidden
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Simplified Lead Form */}
      <section id="get-quote" className="bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get installed this week.
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Tell us your area and we&apos;ll confirm installation timing —
            most homes are set up within 2–3 hours, same or next day.
          </p>

          {/* Posts directly to Web3Forms — no client JS required. */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-8 grid gap-4 rounded-2xl bg-white/5 p-6 text-left sm:p-8"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="Domestic RO — New Installation Request" />

            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                placeholder="+92"
              />
            </div>

            <div>
              <label htmlFor="area" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Area / City
              </label>
              <input
                id="area"
                name="area"
                type="text"
                required
                className="mt-1 min-h-12 w-full rounded-lg border border-white/20 bg-transparent px-4 text-sm text-white placeholder:text-white/30 focus:border-cyan focus:outline-none"
                placeholder="e.g. DHA Phase 5, Lahore"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-6 text-sm font-bold text-navy shadow-sm transition-colors duration-200 hover:bg-cyan/90"
            >
              Get My Home Installed
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
