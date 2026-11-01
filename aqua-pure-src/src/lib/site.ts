/**
 * Single source of truth for business details, taken from the official
 * business card. Change a value here and it updates everywhere (navbar, footer,
 * contact page, WhatsApp buttons, spare-parts links).
 *
 * Keep these identical to the Google Business Profile listing (NAP consistency).
 */
export const SITE = {
  name: "Aqua Pure Technology",
  tagline: "Water Treatment Solutions",
  phones: [
    { display: "0324-5500-653", tel: "+923245500653" },
    { display: "0316-2225-225", tel: "+923162225225" },
  ],
  // Number used for every WhatsApp button. Must be one of the phones above
  // and must be the one that is actually on WhatsApp.
  whatsapp: "923245500653",
  email: "aquapuretechnology.pk@gmail.com",
  website: "https://www.aquapuretechnology.com",
  address: {
    lines: ["S-86-R 89, Near Ichhara Shopping Center", "Feroz Pur Road, Lahore"],
    full: "S-86-R 89, Near Ichhara Shopping Center, Feroz Pur Road, Lahore, Pakistan",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`;
export const whatsappUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Web3Forms access keys are public by design (they only allow *sending to you*).
// Keep it in an env var so it is not hard-coded; set it in Vercel -> Settings -> Environment Variables.
export const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// Canonical site URL (used for metadata, sitemap, robots). Set NEXT_PUBLIC_SITE_URL once the real domain is live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aqua-pure-technologies.vercel.app").replace(/\/$/, "");
