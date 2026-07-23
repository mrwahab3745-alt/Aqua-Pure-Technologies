"use client";

import dynamic from "next/dynamic";

const IndustrialSpecAndQuote = dynamic(
  () => import("./IndustrialSpecAndQuote"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-8">
        {/* Skeleton for spec table */}
        <section className="bg-white px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="h-4 w-32 rounded bg-navy/10" />
            <div className="mt-2 h-8 w-2/3 rounded bg-navy/10" />
            <div className="mt-3 h-4 w-1/2 rounded bg-navy/10" />
            <div className="mt-10 h-64 rounded-2xl bg-navy/5" />
          </div>
        </section>
        {/* Skeleton for quote form */}
        <section className="bg-navy px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="h-4 w-48 rounded bg-white/20" />
            <div className="mt-2 h-8 w-1/2 rounded bg-white/20" />
            <div className="mt-4 h-16 w-1/3 rounded bg-white/20" />
          </div>
        </section>
      </div>
    ),
  }
);

export default function DynamicSpecAndQuote() {
  return <IndustrialSpecAndQuote />;
}

