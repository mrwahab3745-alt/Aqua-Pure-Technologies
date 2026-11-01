# Adding spare parts without touching code

The spare-parts page reads its list from a Google Sheet. Add or edit a row and the
site updates by itself within about 5 minutes.

## One-time setup
1. Google Sheets, then File, Import, upload `parts-sheet-template.csv` (replace the sheet).
2. File, Share, Publish to web. Choose the parts tab and "Comma-separated values (.csv)", then Publish. Copy the link.
3. Vercel, Project, Settings, Environment Variables: add `PARTS_SHEET_CSV_URL` = that link (Production and Preview). Redeploy once.

## Columns (first row must be these names)
| brand | model | category | specs | stock |
|---|---|---|---|---|
| Grundfos | CR 5-10 Booster Pump | High-Pressure Pumps | Stainless Steel \| Up to 10 HP | yes |

- `specs`: separate several tags with `|`.
- `stock`: `no` shows an "Out of stock" badge. Anything else means in stock.
- `category`: use the same spelling for the same group. New categories appear as new filter buttons automatically.
- A row without a `model` is ignored.

If the sheet is unreachable or empty the site falls back to the built-in list in `src/lib/parts.ts`, so the page never goes blank.
