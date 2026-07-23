# Aqua Pure Technology — src/app Directory Structure

```
src/
└── app/
    ├── layout.tsx
    ├── page.tsx                          # Homepage — 3-card router hero
    ├── globals.css
    │
    ├── components/
    │   ├── sections/
    │   │   ├── HeroRouter.tsx            # the 3-card hero with Business split
    │   │   ├── TrustIndicators.tsx
    │   │   ├── ProductCategories.tsx
    │   │   └── FAQAccordion.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       └── Card.tsx
    │
    ├── domestic/page.tsx
    │
    ├── business/
    │   ├── page.tsx
    │   ├── commercial/page.tsx
    │   └── industrial/page.tsx
    │
    ├── spare-parts/
    │   ├── page.tsx
    │   └── [slug]/page.tsx
    │
    ├── services/
    │   ├── page.tsx
    │   ├── installation/page.tsx
    │   ├── amc/page.tsx
    │   └── emergency-repair/page.tsx
    │
    ├── industries-served/page.tsx
    ├── projects/
    │   ├── page.tsx
    │   └── [slug]/page.tsx
    ├── gallery/page.tsx
    │
    ├── service-areas/
    │   ├── page.tsx
    │   └── [city]/page.tsx
    │
    ├── blog/
    │   ├── page.tsx
    │   └── [slug]/page.tsx
    │
    ├── faq/page.tsx
    ├── contact/page.tsx
    ├── sitemap.ts
    ├── robots.ts
    └── api/contact/route.ts

lib/
├── data/           (products.ts, services.ts, cities.ts, industries.ts)
└── seo/            (metadata helpers, schema generators)
```

## Design tokens in use (per Gemini — Creative Director, "Industrial Realism" system)
- `--color-navy: #0B2545` (primary)
- `--color-cyan: #00B4D8` (accent)
- `--color-surface: #F4F6F9` (neutral surface)
- Font: Plus Jakarta Sans (heavy weights for headlines)
