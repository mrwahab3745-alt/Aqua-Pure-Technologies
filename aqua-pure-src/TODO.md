# Lighthouse Fixes - TODO

## ✅ Step 1: Create IndustrialSpecAndQuote client component (Bundle Optimization)
- Created `src/app/components/sections/IndustrialSpecAndQuote.tsx`
- Marked as `"use client"` — contains both spec table and quote form

## ✅ Step 2: Update industrial/page.tsx (Bundle Optimization + Contrast)
- Dynamically imported with `next/dynamic` `{ ssr: false }`
- Added skeleton loading placeholder with pulsing animation
- Form labels use `text-white/70` (contrast fix applied in the extracted component)
- `<dt>` tags already used `text-white/70` (no change needed)
- Table header `<th>` already used `text-navy/80` (no change needed)

## ✅ Step 3: Fix Footer touch targets
- Added `py-2 px-3 inline-block` to `tel:` and `mailto:` anchors
- Parent `address` now uses `space-y-4` for spacing

## ✅ Step 4: Fix Contact page touch targets
- Changed parent `space-y-6` → `space-y-4` for tighter touch target grouping
- `tel:` anchor already has `min-h-12` (48px) meeting 44px touch target guideline

