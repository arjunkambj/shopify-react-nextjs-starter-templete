# Shopify + Next.js Commerce Starter

This is a simple, production-ready starter for building a fast Shopify storefront with Next.js. It includes a clean product browsing experience, a sticky cart with server actions, and a handful of flexible merchandising components to help you launch quickly and iterate confidently.

## What You Get

- Solid Shopify integration (Storefront API) with helpers for fetching products, collections, prices, and inventory.
- Conversion-minded UI: hero grid, carousel, sticky cart, and a small welcome toast you can tailor to your brand.
- Performance-friendly defaults: React Server Components, streaming, Suspense, and optimized images.
- Styling with Tailwind CSS 4, Headless UI, Iconify icons, and the Poppins webfont.

## Tech Stack

- Next.js 15 App Router + React 19.
- Shopify Storefront API (GraphQL) via `lib/shopify`.
- Tailwind CSS 4, Headless UI, Iconify, and Sonner.
- TypeScript and ESLint; Turbopack for local dev.

## Quick Start

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- bun (or use your preferred package manager)
- A Shopify store (a development store is fine)

### Install dependencies

```bash
bun install
```

### Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values described below.

### Start the dev server

```bash
bun dev
```

Open `http://localhost:3000` to view your storefront.

## Configure Shopify

1. In Shopify admin, create a custom app (Settings → Apps and sales channels → Develop apps → Create app) to get Storefront API credentials.
2. Enable the needed Storefront API scopes, then generate a Storefront API access token. Set this as `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
3. Set `SHOPIFY_STORE_DOMAIN` to your store domain (for example `your-store.myshopify.com`).
4. Generate a random secret string for `SHOPIFY_REVALIDATION_SECRET`. Use it to protect calls to `/api/revalidate?secret=...` when configuring webhooks.
5. Update `COMPANY_NAME` and `SITE_NAME` to match your brand.

## Environment Variables

| Key                               | Required | Description                                                             |
| --------------------------------- | -------- | ----------------------------------------------------------------------- |
| `SHOPIFY_STORE_DOMAIN`            | ✅       | Your store domain, e.g. `your-store.myshopify.com`.                     |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | ✅       | Storefront API token generated from your Shopify custom app.            |
| `SHOPIFY_REVALIDATION_SECRET`     | ✅       | Secret used to authenticate ISR/webhook revalidation requests.          |
| `COMPANY_NAME`                    | ➖       | Used in UI copy and footer. Defaults to `Your Company`.                 |
| `SITE_NAME`                       | ➖       | Site title used in metadata and headers. Defaults to `Your Storefront`. |

Keep `.env.local` out of version control.

## Scripts

- `bun dev` – Start the development server.
- `bun build` – Create a production build.
- `bun start` – Run the production build locally.
- `bun lint` – Lint the project.

## Project Structure

```text
src/app/              App Router routes (RSC-powered storefront, product, and account pages)
src/components/       Reusable UI (cart modal, carousel, grids, layout, icons)
src/lib/shopify/      Shopify Storefront API client and helpers
src/styles/           Global styles (e.g., globals.css)
fonts/                Optional font assets (Poppins loads via next/font)
public/               Static assets (og images, favicons, etc.)
```

Notable pieces in `src/components/`:

- `src/components/cart/` provides a sticky cart backed by Server Actions.
- `src/components/carousel.tsx` and `src/components/grid/three-items.tsx` are handy merchandising layouts.
- `src/components/welcome-toast.tsx` shows a small, customizable first-visit message.

### Path aliases

- `@/*` resolves to `src/*`. Examples:
  - `import ProductGrid from '@/components/layout/product-grid-items'`
  - `import { getProducts } from '@/lib/shopify'`

### Styles

- Global stylesheet lives at `src/styles/globals.css` and is imported from `src/app/layout.tsx` using a relative path:
  - `import '../styles/globals.css'`

## Deployment

You can deploy this app to any platform that supports Node.js and Next.js. A typical flow is:

1. Build the app: `bun build`
2. Run the server: `bun  start`
3. Configure environment variables on your hosting platform.

Make sure your webhook (if configured) calls `/api/revalidate?secret=YOUR_SECRET` to refresh cached pages after product changes.

## Optimization Tips

- Replace demo assets and copy with your own to reduce layout shifts.
- Use Shopify Metafields to curate collections or hero content.
- Configure Shopify Markets and currency settings for international stores.
- Add analytics and A/B testing of your choice for insights and iteration.

## Troubleshooting

- Cart not updating? Ensure your token has the required Storefront API scopes (including inventory reads).
- Revalidation errors? Confirm the secret and webhook URL match your `SHOPIFY_REVALIDATION_SECRET`.
- Styling surprises? If you upgrade plugins, keep an eye on Tailwind class names and CSS variable usage.

## Resources

- Shopify Storefront API reference: https://shopify.dev/docs/api/storefront
- Tailwind CSS v4 docs: https://tailwindcss.com/docs

Happy building!
