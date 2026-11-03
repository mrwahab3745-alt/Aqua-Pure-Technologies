/**
 * Single source of truth for business details, taken from the official business
 * card, the shop's existing website (aquapuretechnology.com) and its company
 * profile PDF. Change a value here and it updates everywhere (navbar, footer,
 * contact page, WhatsApp buttons, spare-parts links, structured data).
 *
 * Keep these identical to the Google Business Profile listing (NAP consistency).
 * The business has two offices: Lahore and Karachi.
 */
export const SITE = {
  name: "Aqua Pure Technology",
  tagline: "Water Treatment Solutions",
  phones: [
    { display: "0316-2225-225", tel: "+923162225225" },
    { display: "0324-5500-653", tel: "+923245500653" },
  ],
  // Number used for every WhatsApp button (the one on the official website).
  whatsapp: "923162225225",
  email: "aquapuretechnology.pk@gmail.com",
  website: "https://www.aquapuretechnology.com",
  hours: {
    days: "Monday – Saturday",
    time: "9:00 AM – 5:00 PM",
    note: "24/7 service available",
  },
  offices: [
    {
      city: "Lahore",
      slug: "lahore",
      lines: ["S-86-R 89, Near Ichhara Shopping Center", "Feroz Pur Road, Lahore"],
      full: "S-86-R 89, Near Ichhara Shopping Center, Feroz Pur Road, Lahore, Pakistan",
    },
    {
      city: "Karachi",
      slug: "karachi",
      lines: [
        "Office # 15/FL-6, Block-6, Near Dacca Sweets",
        "Main Rashid Minhas Road, Gulshan-e-Iqbal",
        "Karachi, Sindh-75300",
      ],
      full: "Office # 15/FL-6, Block-6, Near Dacca Sweets, Main Rashid Minhas Road, Gulshan-e-Iqbal, Karachi, Sindh-75300, Pakistan",
    },
  ],
} as const;

// Head office (Lahore). Kept for places that show a single address.
export const HEAD_OFFICE = SITE.offices[0];

export const mapsUrlFor = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
export const mapsUrl = mapsUrlFor(HEAD_OFFICE.full);
export const whatsappUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Web3Forms access keys are public by design (they only allow *sending to you*).
// Keep it in an env var so it is not hard-coded; set it in Vercel -> Settings -> Environment Variables.
export const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// Canonical site URL (used for metadata, sitemap, robots). Set NEXT_PUBLIC_SITE_URL once the real domain is live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aqua-pure-technologies.vercel.app").replace(/\/$/, "");
