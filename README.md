# Seattle Sparkle Cleaning – Local SEO Website

A Next.js 14 (App Router) local SEO website for a house cleaning business targeting **Seattle, Washington**. Built for **rank & rent** lead generation with a mobile-first, fast-loading design.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Server components where possible, reusable UI components

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/      # house-cleaning, deep-cleaning, move-out-cleaning, apartment-cleaning
│   ├── service-areas/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/               # Hero, CTA, FAQ, ServiceCard, ContactForm, Header, Footer, etc.
├── lib/
│   ├── constants.ts          # NAP, services, nav, site config
│   └── schema.ts             # LocalBusiness, FAQ, Service JSON-LD
└── types/
    └── index.ts
```

## SEO Features

- Unique title and meta description per page
- Single H1, logical H2/H3 structure
- Internal linking (services ↔ service areas ↔ contact)
- **LocalBusiness** and **FAQ** JSON-LD on homepage and service pages
- **Service** schema on individual service pages
- NAP (Name, Address, Phone) in footer and schema
- OpenGraph and Twitter meta tags
- `sitemap.xml` and `robots.txt` generated via App Router

## Lead Generation

- Reusable **ContactForm** (name, phone, email, service needed, message) with validation
- Form is ready to plug into your API or webhook (see `ContactForm.tsx` TODO)
- Sticky **Call Now** button on mobile

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## Configuration

- **Business details**: Edit `src/lib/constants.ts` (name, phone, email, address, service areas).
- **Site URL**: Set `NEXT_PUBLIC_SITE_URL` for production (used in sitemap, robots, schema).
- **OG image**: Add `public/og-image.jpg` (1200×630) for social sharing; default metadata references `/og-image.jpg`.
- **Map**: Replace the embed URL in `src/components/MapEmbed.tsx` with your Google Maps embed if needed.

## License

Private – for use with the Seattle Sparkle Cleaning project.
