"use client";

import dynamic from "next/dynamic";

const SegmentedFAQ = dynamic(
  () => import("./SegmentedFAQ"),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="h-4 w-32 rounded bg-navy/10" />
          <div className="mt-2 h-8 w-64 rounded bg-navy/10" />
          <div className="mt-8 space-y-4">
            <div className="h-12 rounded bg-navy/5" />
            <div className="h-12 rounded bg-navy/5" />
            <div className="h-12 rounded bg-navy/5" />
          </div>
        </div>
      </div>
    ),
  }
);

export default function DynamicSegmentedFAQ() {
  return <SegmentedFAQ />;
}

