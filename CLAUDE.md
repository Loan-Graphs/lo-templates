# LO Templates Showcase — The Gallery

## What This Repo Is

The **marketing showcase site** at `templates.loangraphs.com`. Loan officers browse template previews here, see live demos with stock data, and sign up to get their own website. This is the storefront — not the deployable product.

## Ecosystem — How All Repos Relate

```
lo-templates (THIS REPO)              lo-react-template (DEPLOYABLE)
────────────────────────              ────────────────────────────────
templates.loangraphs.com              {slug}.loangraphs.com
Marketing gallery / storefront        The actual live LO website
Stock data previews                   Multi-tenant via subdomain
"Get This Template" → signup          Pulls real LO data from API

nathanloanteam                        loan-officer-website
────────────────                      ────────────────────
REFERENCE ONLY — do not modify        REFERENCE ONLY — do not modify
Original Nathan site. Source of       Nuxt 3 / Vue multi-tenant LO sites.
truth for structural contract         Reference for dynamic value patterns
                                      and LoanGraphs API integration

loangraphs4
────────────
REFERENCE ONLY — do not modify
Main LoanGraphs platform. Reference
for API endpoints and dynamic values.
```

**Rule:** Template code is built and tested in `lo-react-template` first (the real thing), then preview versions are synced here. Never the other direction.

**PRD:** `~/alex-operating-system/knowledge/projects/prd-lo-websites-v2.md` — single source of truth for all decisions.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **UI:** Radix UI (select, dialog), class-variance-authority, clsx, tailwind-merge
- **Hosting:** Vercel (auto-deploy on push to main)
- **Domain:** templates.loangraphs.com (Cloudflare DNS → Vercel)

## Project Structure

```
app/
├── page.tsx                           # Sales landing page (/)
├── layout.tsx                         # Root layout
├── globals.css
└── [template-name]/[viewMode]/
    ├── layout.tsx                     # Template preview layout (CTA banner + switcher)
    └── page.tsx                       # Template content renderer

components/
├── TemplateSwitcher.tsx               # Dropdown template selector + view mode toggle
├── CtaBanner.tsx                      # "Love this template?" gradient CTA bar
└── templates/
    ├── types.ts                       # LOProfile + TemplateProps interfaces
    ├── registry.ts                    # Template registry (exports all templates)
    └── template-{1-9}/
        ├── index.tsx                  # Exports LOView, CompanyView, templateMeta
        ├── LOView.tsx                 # Loan officer view
        └── CompanyView.tsx            # Company view

data/
└── stock-data.json                    # Sample LO, company, blog, calculator data

public/
└── thumbnails/                        # SVG placeholder thumbnails
```

## URL Routes

```
/                                → Sales landing page (hero, features, gallery, stats)
/[template-name]/loan-officer    → Template preview — LO view
/[template-name]/company         → Template preview — Company view

Examples:
/template-1/loan-officer         → Modern Dark, LO view
/template-8/company              → Nathan Pro, Company view
```

## Template System

- Templates are self-contained in `components/templates/template-{N}/`
- Each has `LOView.tsx` (individual LO) and `CompanyView.tsx` (company/team)
- All receive same `TemplateProps` interface (LO profile, company, blog posts)
- Registry in `registry.ts` exports all templates for dynamic rendering
- Stock data in `data/stock-data.json` feeds all previews (Sarah Mitchell / Summit Lending Group)

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint check
```

## Phase Numbering Note

This repo contains `PHASE1_COMPLETE.md` and `PHASE1_SUMMARY.md` from a prior scaffold session. Those are outdated — the PRD (`prd-lo-websites-v2.md`) is the single source of truth for phase numbering. The scaffold those files describe is "Phase 0" in PRD terms.
