#!/bin/bash
# Aqua Pure Technology — Next.js App Router scaffold
# Creates empty files at the EXACT paths/names already used in the
# generated code (import statements depend on these matching precisely).
# Run from your project root (the folder that will contain package.json).

set -e

echo "Creating directory structure..."

mkdir -p src/app/components/layout
mkdir -p src/app/components/sections
mkdir -p src/app/components/ui
mkdir -p src/app/about
mkdir -p src/app/contact
mkdir -p src/app/services
mkdir -p src/app/products/domestic
mkdir -p src/app/products/commercial
mkdir -p src/app/products/industrial
mkdir -p src/app/products/spare-parts
mkdir -p src/lib/data
mkdir -p src/lib/seo
mkdir -p public/brands

echo "Creating files..."

# Root app files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css

# Layout components (Navbar/Footer)
touch src/app/components/layout/Navbar.tsx
touch src/app/components/layout/Footer.tsx

# Homepage section components — all 7 wired into page.tsx
touch src/app/components/sections/HeroRouter.tsx
touch src/app/components/sections/TrustIndicators.tsx
touch src/app/components/sections/ProductCategoriesHub.tsx
touch src/app/components/sections/CaseStudies.tsx
touch src/app/components/sections/AMCPanel.tsx
touch src/app/components/sections/IndustriesServed.tsx
touch src/app/components/sections/SegmentedFAQ.tsx
touch src/app/components/sections/FinalCTA.tsx

# Secondary pages
touch src/app/about/page.tsx
touch src/app/contact/page.tsx
touch src/app/services/page.tsx

# Product / audience routes
touch src/app/products/domestic/page.tsx
touch src/app/products/commercial/page.tsx
touch src/app/products/industrial/page.tsx
touch src/app/products/spare-parts/page.tsx

# Config
touch tailwind.config.ts

echo "Done. 20 files created across the locked 10-page structure."
