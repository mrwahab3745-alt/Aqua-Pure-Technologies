# Aqua Pure Technology — Data Injection Inventory
*Freeze status: LOCKED. No new routes generated until this list is hydrated.*

Every placeholder in the codebase, by category, with exact file path. Search each file for the marker shown to jump straight to it.

---

## 1. Web3Forms Access Key
**Marker:** `YOUR_ACCESS_KEY_HERE`
One real key, needed in 4 files:
- `app/contact/page.tsx`
- `app/products/commercial/page.tsx`
- `app/products/domestic/page.tsx`
- `app/products/industrial/page.tsx`

## 2. WhatsApp Number / Phone Number
**Marker:** `92XXXXXXXXXX`
Real number needed in 5 files (must be the same number everywhere):
- `app/components/layout/Footer.tsx`
- `app/components/layout/Navbar.tsx`
- `app/components/sections/FinalCTA.tsx`
- `app/contact/page.tsx`
- `app/products/spare-parts/page.tsx` (used inside `WHATSAPP_NUMBER` constant, feeds `buildWhatsAppUrl()`)

## 3. Business Address (NAP — must match Google Business Profile exactly)
**Marker:** `[Street Address]`
- `app/components/layout/Footer.tsx`
- `app/contact/page.tsx` (also needs the real Google Maps link — currently `href="#"`)

**Reminder:** character-for-character match with GBP listing is a real local SEO factor — see Master Project Document, Section 3.4.

## 4. Business Stats / Claims (must be real, verifiable numbers — not filled with guesses)
**Marker:** `CONFIRM VALUE`

| File | What's needed |
|---|---|
| `app/about/page.tsx` | 4 stat tiles: years operational, plants configured, AMC response time, provinces served |
| `app/about/page.tsx` | Founding year / real history detail (currently generic) |
| `app/about/page.tsx` | Actual ISO/compliance certifications held (or remove the block if none apply yet) |
| `app/contact/page.tsx` | Real working hours |
| `app/products/commercial/page.tsx` | 4 metrics: supply capacity, daily output GPD, power draw, install time |

## 5. OEM Brand Logos
**Marker:** `/brands/*.svg`
- `app/components/sections/TrustIndicators.tsx`
Needs real SVG logo files for Dow Filmtec, Grundfos, Hydranautics, CSM — placed at `public/brands/`. Confirm OEM authorization to display each logo before publishing.

## 6. Domain / Email
**Marker:** `aquapuretechnology.com`
- `app/layout.tsx` — `metadataBase` URL (production domain)
- `app/components/layout/Footer.tsx` — contact email

## 7. Spare Parts Catalog Content
**File:** `app/products/spare-parts/page.tsx` — the `PARTS_DATA` array
Currently 6 sample parts across 4 categories. This is the item explicitly waiting on keyword research (separate workstream, not a simple fill-in) — `modelName` and `specTags` should reflect actual high-search-volume terms once that research is done, not just be typed in ad hoc.

## 8. Regional/Service Area Links
**File:** `app/components/layout/Footer.tsx` — `REGIONAL_HUBS` array
Currently links to `/service-areas/lahore`, `/karachi`, `/islamabad` — these pages don't exist yet (correctly out of scope for this freeze). Only keep cities in this list where there's genuine service capability — see Master Project Document, Locked Decision #8.

---

## Not a placeholder, but worth confirming before hydration
- `app/products/commercial/page.tsx` and `app/products/industrial/page.tsx` plant/metric names (APT-5K/10K/20K, etc.) were invented as illustrative examples — confirm these match Aqua Pure's actual model naming, or provide the real ones.
- Case study data in `app/components/sections/CaseStudies.tsx` (`CASE_STUDIES` array) is entirely illustrative — needs real named clients with permission, per Master Project Document Locked Decision #10.

---

*Once hydrated, remove every `CONFIRM VALUE` comment as confirmation nothing was missed — a leftover marker in production is the signal something was skipped.*
