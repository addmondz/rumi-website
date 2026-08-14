# Rumi — Property Management & Community Security Landing Page

A modern, responsive landing page for a B2B SaaS property management and community security platform. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout with SEO/OG meta tags
    page.tsx         # Main page composing all sections
    globals.css      # Global styles + Tailwind imports
  components/
    AnimateOnScroll.tsx    # Reusable scroll-triggered animation wrapper
    Navbar.tsx            # Sticky navbar with dropdown + mobile drawer
    Hero.tsx              # Full-viewport hero with background image
    ProblemsSection.tsx   # Pain points grid (6 cards)
    ValuesSection.tsx     # Core values (3-column)
    ProductsSection.tsx   # Product suite / features grid (6 cards)
    AudienceSection.tsx   # Audience segments (alternating rows)
    SocialProof.tsx       # Stats counters + logo cloud
    Testimonials.tsx      # Testimonial cards (3-card grid)
    ContactSection.tsx    # Contact form + info sidebar
    Footer.tsx            # 4-column footer + newsletter
```

## Customization

All placeholder content is marked with `// TODO:` comments throughout the codebase. Key things to replace:

- **Logo**: Search for "Rumi" text logo in `Navbar.tsx` and `Footer.tsx`
- **Hero image**: Replace Unsplash URL in `Hero.tsx` with your own
- **Section images**: Replace Unsplash URLs in `AudienceSection.tsx`
- **Partner logos**: Replace text placeholders in `Hero.tsx`, `SocialProof.tsx`
- **Testimonials**: Replace placeholder quotes in `Testimonials.tsx`
- **Contact details**: Update email, phone, address in `ContactSection.tsx`
- **SEO metadata**: Update title, description, OG tags in `layout.tsx`
- **Company registration**: Update footer copyright in `Footer.tsx`
- **Social links**: Update social media URLs in `Footer.tsx`
- **Colors**: Adjust palette in `tailwind.config.ts` (navy + accent/teal)

## Contact Form

The contact form uses React Hook Form + Zod for client-side validation. On submit it currently logs to the console. To wire up a real backend:

1. Create an API route at `src/app/api/contact/route.ts`
2. Use a service like [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)
3. Update the `onSubmit` handler in `ContactSection.tsx`

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)

## Deploy

Deploy to [Vercel](https://vercel.com) with zero configuration:

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on push.
# rumi-website
