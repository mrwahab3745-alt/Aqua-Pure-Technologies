import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Security headers sent on every response.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

// CSP only in production (dev needs eval) and not on Vercel preview deployments
// (the preview toolbar injects its own scripts). 'unsafe-inline' is required because
// Next.js injects inline bootstrap scripts; the other directives still lock down
// where forms can post, what can frame the site, and base/object injection.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "form-action 'self' https://api.web3forms.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");
const useCsp = process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

const nextConfig: NextConfig = {
  // Pins the project root so Next/Turbopack ignores stray lockfiles in parent folders.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  poweredByHeader: false,
  async headers() {
    const headers = useCsp ? [...securityHeaders, { key: "Content-Security-Policy", value: csp }] : securityHeaders;
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
