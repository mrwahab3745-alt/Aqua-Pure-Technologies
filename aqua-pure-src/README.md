# Aqua Pure Technology — Website Source

This zip is pre-organized into the correct Next.js folder structure.
Every file is already in its final location — nothing needs to be
renamed or moved.

## Setup

1. Create a new Next.js project (or use an existing one) with the
   App Router and `src/` directory enabled:
   ```
   npx create-next-app@latest aqua-pure --typescript --tailwind --app --src-dir
   ```
2. When prompted during setup, you can skip adding example code —
   this zip replaces the default `src/app/` contents.
3. Copy the contents of this zip's `src/` folder into your project's
   `src/` folder (overwrite when asked).
4. Copy `tailwind.config.ts` into your project root (overwrite the
   default one — it contains the Navy/Cyan/Surface design tokens).
5. Run:
   ```
   npm install
   npm run dev
   ```

## Before this goes live

See `DATA-INJECTION-INVENTORY.md` in this same folder — it lists every
placeholder (WhatsApp number, address, Web3Forms key, stats, etc.) and
exactly which file each one is in. Search each file for `CONFIRM VALUE`
or `YOUR_ACCESS_KEY_HERE`/`92XXXXXXXXXX` to find them fast.

## Folder map

```
src/
└── app/
    ├── layout.tsx              ← Root layout (fonts, metadata, Navbar/Footer)
    ├── page.tsx                 ← Homepage
    ├── globals.css
    ├── components/
    │   ├── layout/               (Navbar, Footer)
    │   └── sections/              (all 8 homepage/page section blocks)
    ├── about/page.tsx
    ├── contact/page.tsx
    ├── services/page.tsx
    └── products/
        ├── domestic/page.tsx
        ├── commercial/page.tsx
        ├── industrial/page.tsx
        └── spare-parts/page.tsx

tailwind.config.ts               ← project root, not inside src/
```

Empty folders (`blog/`, `gallery/`, `faq/`, `services/amc/`, etc.) are
scaffolded for future routes per the project roadmap but intentionally
have no content yet — the project is in a development freeze pending
data hydration (see Master Project Document).
