# Phase 0 - Scaffold Setup (COMPLETE)

> This was Phase 0 (scaffold setup). Phase 1 per PRD is the template foundation work
> (LOProfile schema, 11-section component library, GeoAwareCTA, UpsellGate, theme tokens).

**Status:** ✅ Complete
**Date:** 2026-02-21
**Builder:** Jordan-DevJunior

## Completed Tasks

### ✅ Repository & Setup
- [x] Created new repo: `LoanGraphs/lo-templates`
- [x] GitHub: https://github.com/LoanGraphs/lo-templates
- [x] Initial commit with full Phase 1 scaffold

### ✅ Tech Stack Configured
- [x] Next.js 16 with App Router
- [x] TypeScript enabled
- [x] Tailwind CSS configured
- [x] PostCSS + Autoprefixer
- [x] ESLint + Next.js rules
- [x] next.config.ts with image optimization

### ✅ Project Structure
```
lo-templates/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── page.tsx (sales landing page)
│   ├── globals.css (global styles)
│   └── [template-name]/[viewMode]/
│       ├── layout.tsx (template preview layout)
│       └── page.tsx (template preview content)
├── components/
│   ├── TemplateSwitcher.tsx (template switcher + view mode toggle)
│   └── CtaBanner.tsx (banner CTA bar)
├── data/
│   └── stock-data.json (LO, company, blog, calculator data)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
└── README.md
```

### ✅ Sales Landing Page (`/`)
**Features:**
- Hero section with headline, subheadline, dual CTAs
- Feature grid (6 features with icons)
- Template gallery grid (6 templates from stock data)
- Stats section (50+ LOs, 6 templates, 100K+ visitors, $0 cost)
- CTA section with signup prompt
- Footer with navigation and links

**Design:**
- Responsive (mobile-first)
- Gradient backgrounds
- Hover effects on cards
- Container-fluid layout system
- Color scheme: Primary blue (#1e40af), secondary orange (#f97316)

### ✅ Stock Data JSON
**File:** `data/stock-data.json`

**Contents:**
- **Loan Officer Profile:**
  - Name: Sarah Mitchell
  - NMLS #123456
  - Contact info (email, phone)
  - Bio, licensed states, loan types
  - 3 fake testimonials with ratings
  
- **Company Profile:**
  - Name: Summit Lending Group
  - Logo, contact info
  - About text
  - 3 team members with photos
  - 3 office locations
  
- **Content:**
  - 3 blog posts (title, excerpt, date, author, image)
  - Mortgage calculator rates (30Y, 15Y, ARM products)
  
- **Templates:**
  - 6 templates (Modern Dark, Classic Pro, Minimal Clean, Corporate Plus, Dynamic Blue, Elegant White)
  - Each with ID, name, description, thumbnail URL

### ✅ Template Preview Layout
**Route:** `/[template-name]/[viewMode]`

**Layout (`layout.tsx`):**
- CTA banner at top (gradient, "Love this template?" message, CTA button)
- Template switcher (fixed below banner)
- Content area with white background

**Switcher Component:**
- Dropdown with all 6 templates
- View mode toggle (LO vs Company)
- Current template highlighted
- "Get This Template" CTA button
- Persistent across navigation

**Preview Page (`page.tsx`):**
- 404 handling for invalid templates
- **Loan Officer View:**
  - Hero with LO photo, name, title, bio
  - Email/Call CTAs
  - NMLS, experience, licensed states cards
  - Client testimonials with 5-star ratings
  
- **Company View:**
  - Company hero section
  - Team members grid with photos and titles
  - Office locations with contact info
  
- **Shared:**
  - Blog section (3 posts with images, date, excerpt, read more link)
  - CTA section at bottom linking to signup

### ✅ Responsive Design
- Mobile-first Tailwind approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger-ready navigation structure
- Container-fluid with max-width on desktop
- All images use Next.js Image component

### ✅ Components
1. **TemplateSwitcher.tsx** (`'use client'`)
   - Dropdown template selection
   - View mode toggle (LO/Company)
   - Persistent switcher bar
   - Responsive layout

2. **CtaBanner.tsx**
   - Gradient background
   - CTA messaging
   - Signup button

## Implementation Notes

### Data Flow
- Stock data centralized in `data/stock-data.json`
- All template previews use same JSON data
- Easy to swap templates by updating route params
- Blog posts and calculator rates shared across all templates

### URL Structure
- `/` → Sales landing page
- `/template-1/loan-officer` → Template 1, LO view
- `/template-1/company` → Template 1, Company view
- `/template-2/loan-officer` → Template 2, LO view
- etc.

### Styling
- Tailwind CSS utility-first approach
- No component library yet (shadcn/ui prepared but not used)
- Custom container-fluid utility for consistent spacing
- Primary color: #1e40af (blue)
- Secondary color: #f97316 (orange)

## What's Next (Phase 2)

### Template Porting
1. Audit 8+ templates from `loan-officer-website` (Nuxt 3)
2. Audit 1 template from `nathanloanteam` (Next.js)
3. Port each template as Next.js component
4. Generate thumbnails for gallery

### For Each Template:
- [ ] LO view (individual loan officer branding)
- [ ] Company view (company branding)
- [ ] Responsive design
- [ ] Stock data integration
- [ ] Blog section
- [ ] Calculator section

### Polish & Launch
- [ ] SEO: meta tags, og images, sitemap.xml
- [ ] GA4 + GTM tracking
- [ ] Mobile QA
- [ ] Core Web Vitals check
- [ ] Domain setup: templates.loangraphs.com
- [ ] Deploy to Vercel

## Development Commands

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Start
npm start

# Lint
npx next lint
```

## Repository

**GitHub:** https://github.com/LoanGraphs/lo-templates  
**Commit:** 308ebc0 (Initial commit)  
**Branch:** main

## Files Created

17 files total:
- 3 config files (next.config.ts, tailwind.config.ts, tsconfig.json)
- 1 postcss config
- 2 app layouts
- 1 app page
- 1 globals.css
- 2 React components
- 1 stock data JSON
- 1 README
- 1 .env.example
- 1 .eslintrc.json
- 1 .gitignore

## Next Step for Jordan

Review Phase 1, then start Phase 2:
1. Clone the repo: `git clone https://github.com/LoanGraphs/lo-templates.git`
2. Install deps: `npm install`
3. Run dev: `npm run dev`
4. Verify landing page works: http://localhost:3000
5. Click through template previews
6. Test template switcher
7. Then proceed to audit and port templates

---

**Status:** Ready for Phase 2 - Template Porting  
**Estimate:** Week 2-3 for full template port  
**Owner:** Jordan-DevJunior  
