# Quick Start Guide

## Prerequisites
- Node.js 18+ (v24+ recommended)
- npm or pnpm
- Git

## Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/LoanGraphs/lo-templates.git
cd lo-templates
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the Site
- **Home page:** http://localhost:3000 (sales landing page)
- **Template preview (LO view):** http://localhost:3000/template-1/loan-officer
- **Template preview (Company view):** http://localhost:3000/template-1/company
- **Try switcher:** Click the template dropdown to switch between templates 1-6
- **Toggle view:** Click LO View/Company View buttons

## Project Structure

```
app/
  ├── page.tsx           # Sales landing page
  ├── layout.tsx         # Root layout with metadata
  ├── globals.css        # Global Tailwind styles
  └── [template-name]/[viewMode]/
      ├── layout.tsx     # Template preview layout with switcher & CTA banner
      └── page.tsx       # Template preview content

components/
  ├── TemplateSwitcher.tsx   # Template dropdown + view mode toggle
  └── CtaBanner.tsx          # CTA banner above templates

data/
  └── stock-data.json        # All stock data: LO, company, blog, templates

public/                       # (empty - ready for assets)
```

## Key Files

- **`package.json`** - Dependencies and scripts
- **`next.config.ts`** - Next.js configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`data/stock-data.json`** - Stock LO, company, blog, and template data
- **`README.md`** - Full project documentation
- **`PHASE1_COMPLETE.md`** - Phase 1 implementation details

## Available Scripts

```bash
npm run dev          # Start dev server on port 3000
npm run build        # Production build
npm start            # Start production server
npx next lint        # Run ESLint
```

## Editing Stock Data

All template previews use data from `data/stock-data.json`. To customize:

1. Open `data/stock-data.json`
2. Edit loan officer data, company info, blog posts, etc.
3. Changes automatically reflect in template previews (with hot reload)

### Key sections in stock-data.json:
- `loanOfficer` - Sarah Mitchell's profile
- `company` - Summit Lending Group profile
- `content.blogPosts` - Blog articles
- `content.calculators` - Mortgage calculator rates
- `templates` - List of available templates

## Adding New Templates

Each template is currently a placeholder that uses `[template-name]` route.

To add a new template:

1. Add entry to `templates` array in `data/stock-data.json`
2. The route `/[template-name]/[viewMode]` will automatically work
3. Customize the page content in `app/[template-name]/[viewMode]/page.tsx` (shared for now)

## Customizing Colors

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: '#1e40af',      // Change primary blue
      secondary: '#f97316',    // Change secondary orange
    },
  },
}
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Follow prompts to deploy. Set domain to `templates.loangraphs.com` in Vercel dashboard.

### Manual Push to GitHub
```bash
git add .
git commit -m "message"
git push origin main
```

Vercel auto-deploys on push to main.

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing
- Restart dev server (Ctrl+C, then `npm run dev`)
- Check for build errors in terminal
- Hard refresh browser (Cmd+Shift+R on Mac)

## Next Steps

See `PHASE1_COMPLETE.md` for what's been completed and what comes next (Phase 2 template porting).

## Support

- **Docs:** See README.md
- **PRD:** `~/Documents/GitHub/alex-operating-system/knowledge/areas/projects/lo-templates-prd.md`
- **GitHub Issues:** https://github.com/LoanGraphs/lo-templates/issues

---

**Ready to develop!** 🚀
