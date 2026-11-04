import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

const PATHS = [
  "", "/about", "/services", "/contact",
  "/products/domestic", "/products/commercial", "/products/industrial", "/products/spare-parts",
  "/service-areas/lahore", "/service-areas/karachi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
