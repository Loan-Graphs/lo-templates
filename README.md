# LoanGraphs Templates Microservice

A professional website template showcase for loan officers and mortgage companies.

**Live:** https://templates.loangraphs.com

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS + Shadcn/ui
- **Hosting:** Vercel
- **Domain:** templates.loangraphs.com (Cloudflare DNS)

## Project Structure

```
├── app/                 # Next.js 16 App Router
│   ├── page.tsx        # Sales landing page
│   └── [template-name]/[viewMode]/
│       ├── layout.tsx  # Template preview layout with switcher
│       └── page.tsx    # Template preview content
├── components/          # React components
│   ├── TemplateSwitcher.tsx  # Template & view mode switcher
│   └── CtaBanner.tsx        # CTA banner
├── data/
│   └── stock-data.json # Stock LO, company, and template data
└── public/             # Static assets
```

## Features (Phase 1)

✅ Sales landing page with hero, features, and template gallery  
✅ Stock data JSON with fake LO profiles, company info, and blog posts  
✅ Template preview layout with banner CTA bar  
✅ Template switcher component (dropdown + view mode toggle)  
✅ Responsive design (mobile-first)  
✅ Loan Officer and Company view modes  

## Upcoming (Phase 2+)

- Port 8+ templates from `loan-officer-website` (Nuxt 3) and `nathanloanteam` (Next.js)
- Template thumbnails/screenshots for gallery
- SEO optimization (meta tags, sitemap, schema)
- GA4 + GTM tracking
- Billing integration with Stripe metering

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## URL Routes

```
/ → Sales landing page
/[template-name]/loan-officer → LO preview
/[template-name]/company → Company preview
```

Example:
- `/template-1/loan-officer` → Modern Dark template, LO view
- `/template-2/company` → Classic Pro template, Company view

## Stock Data

Located in `data/stock-data.json`. Each template preview uses:

- **Loan Officer:** Sarah Mitchell (NMLS #123456)
- **Company:** Summit Lending Group
- **Blog posts:** 3 sample articles
- **Testimonials:** 3 fake reviews

To customize, edit the JSON file directly.

## Development Notes

- Components use Tailwind CSS for styling
- All images use Next.js Image component for optimization
- Template preview routes use dynamic segments `[template-name]` and `[viewMode]`
- CTA buttons link to `https://loangraphs.com/signup`

## Deployment

Push to GitHub → Vercel auto-deploys on main branch

```bash
git push origin main
```

For custom domain, configure in Vercel dashboard:
- Domain: templates.loangraphs.com
- DNS: Cloudflare CNAME → vercel.com

## Owner

**Alex-CEO** / LoanGraphs  
Builder: **Jordan-DevJunior**

## License

MIT
