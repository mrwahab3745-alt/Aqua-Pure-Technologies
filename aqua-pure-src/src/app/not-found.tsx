import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-24">
      <div className="max-w-lg text-center">
        <svg aria-hidden viewBox="0 0 48 48" className="mx-auto h-16 w-16 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 5s14 15 14 25a14 14 0 0 1-28 0C10 20 24 5 24 5Z" />
          <path d="M18 31c1 3 3.500 5 6 5" strokeOpacity=".6" />
        </svg>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">Error 404</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">This page ran dry.</h1>
        <p className="mt-3 text-base leading-relaxed text-navy/65">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center rounded-lg bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-primary">Home</Link>
          <Link href="/products/spare-parts" className="inline-flex min-h-12 items-center rounded-lg border border-navy/15 px-6 text-sm font-bold text-navy transition-colors hover:border-primary hover:text-primary">Spare parts</Link>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-lg border border-navy/15 px-6 text-sm font-bold text-navy transition-colors hover:border-primary hover:text-primary">Contact</Link>
        </div>
      </div>
    </main>
  );
}
