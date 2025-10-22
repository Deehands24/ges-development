# GES Development - Digital Real Estate Studio

A high-converting, premium homepage for **GES Development LLC** - a modern Digital Real Estate Studio that builds, buys, and operates cash-flowing web properties.

![Built with Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6)

## Features

- **Premium Glassmorphism Design** - Clean, modern UI with frosted glass effects and soft shadows
- **Fully Responsive** - Mobile-first design that works beautifully on all devices
- **Animated Metrics** - Eye-catching counter animations in the hero section
- **Interactive Components** - Hover effects, accordions, and smooth transitions
- **SEO Optimized** - Semantic HTML, meta tags, and structured data ready
- **Performance Focused** - Optimized for Lighthouse scores ≥ 95
- **Accessibility** - WCAG AA compliant with keyboard navigation and screen reader support

## Tech Stack

- **Framework:** [Next.js 15.5](https://nextjs.org/) with App Router
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting:** ESLint with Next.js config

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/ges-development.git
cd ges-development
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ges-development/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles and Tailwind imports
│   │   ├── layout.tsx             # Root layout with metadata
│   │   └── page.tsx               # Homepage composition
│   ├── components/
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── GlassCard.tsx          # Glassmorphism card component
│   │   ├── Section.tsx            # Section wrapper component
│   │   ├── Header.tsx             # Sticky header with navigation
│   │   ├── Hero.tsx               # Hero section with animated metrics
│   │   ├── ThreePillars.tsx       # What We Do section
│   │   ├── Portfolio.tsx          # Flagship Properties showcase
│   │   ├── Playbook.tsx           # 6-step process timeline
│   │   ├── LeadGen.tsx            # SMB lead-gen section
│   │   ├── Pricing.tsx            # Pricing tiers and models
│   │   ├── Testimonials.tsx       # Client testimonials
│   │   ├── Resources.tsx          # Guides and newsletter
│   │   ├── FAQ.tsx                # FAQ accordion
│   │   ├── CTABanner.tsx          # Final CTA section
│   │   └── Footer.tsx             # Footer with links
│   └── lib/
│       └── utils.ts               # Utility functions (cn)
├── public/                        # Static assets
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## Key Sections

### 1. Hero
- Compelling headline and value proposition
- Animated metrics showcasing portfolio performance
- Dual CTAs (Book Call + Portfolio)
- Trust logos/partner badges

### 2. Three Pillars
- Acquire & Develop
- Monetize & Operate
- Scale or Flip

### 3. Portfolio
- Live property cards with traffic sparklines
- Niche, monetization mix, and outcomes
- Case study links

### 4. Playbook
- 6-step process timeline
- Tools and duration for each phase
- Responsive desktop/mobile layouts

### 5. Lead-Gen for SMBs
- Deliverables checklist
- Live case study card (Ann Arbor Painting)
- Conversion-focused messaging

### 6. Pricing
- Three tiers: Starter, Growth, Portfolio
- Engagement models grid
- Transparent pricing disclaimer

### 7. Testimonials
- Client quotes with ratings
- Partner certifications
- Video testimonial placeholder

### 8. Resources
- Free guide library
- Newsletter signup with stats
- Privacy and frequency promises

### 9. FAQ
- 8 common questions
- Accordion UI for clean presentation

### 10. CTA Banner + Footer
- Final conversion push
- Full navigation and legal links

## Customization

### Colors

Edit accent colors in `tailwind.config.ts`:

```ts
colors: {
  accent: {
    DEFAULT: '#2563eb', // Change this
    hover: '#1d4ed8',   // And this
  },
}
```

### Content

All copy is inline in components. Search for strings to update:
- Company name: "GES Development"
- Metrics: See `src/components/Hero.tsx`
- Case studies: See `src/components/Portfolio.tsx`

### Fonts

The design uses system fonts by default. To add custom fonts, update `globals.css` and import via Next.js font optimization.

## Performance Checklist

- [x] Image optimization (Next.js Image component ready)
- [x] Font loading strategy (system fonts)
- [x] Reduced motion support
- [x] Semantic HTML
- [x] Code splitting (Next.js automatic)
- [ ] Add actual images (currently using placeholders)
- [ ] Implement form submission handlers
- [ ] Add analytics tracking (GA4)
- [ ] Set up call tracking integration

## SEO Checklist

- [x] Meta tags (title, description)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Semantic headings (H1-H6)
- [ ] Add structured data (Organization, FAQ)
- [ ] Create sitemap.xml
- [ ] Configure robots.txt
- [ ] Add internal linking strategy

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## License

© 2025 GES Development LLC. All rights reserved.

---

**Built with care by the GES Development team.**
