# Shopify + Next.js Commerce Starter

A production-ready Shopify storefront built with the Next.js App Router. The project ships with a marketing-first homepage, dynamic product discovery, and an optimistic cart flow so you can launch quickly and keep iterating with confidence.

## Highlights

- Full-funnel storefront: announcement bar, sticky HeroUI navbar, hero section, featured collections, product showcase, testimonials, and FAQ modules.
- Product discovery built in: global search modal, `/all-products` listing, Shopify-driven collections, and policy pages that load directly from the Storefront API.
- Rich product detail screens: variant-aware gallery, structured data, related products, and an optimistic cart powered by server actions plus `useOptimistic`.
- Performance and polish: React Server Components with Suspense, streaming data fetches, custom Open Graph image generation, and Tailwind CSS 4 styling.

## Tech Stack

- Next.js 15 App Router + React 19 (RSC by default, Turbopack in dev).
- Shopify Storefront GraphQL API helpers in `src/lib/shopify`.
- Tailwind CSS 4 with container queries, HeroUI components, and Iconify icons.
- TypeScript, ESLint, and Bun scripts for local development.

## Storefront Experience

- **Homepage funnel** – Marketing components in `src/components/Marketing` draw users through collections, features, testimonials, and FAQs.
- **Product discovery** – Route group `src/app/(product)` covers `/all-products`, `/search`, and `/product/[handle]` with sorting and collection fallbacks.
- **Product detail** – `Product` renders a gallery, variant selector, schema.org JSON-LD, and `RelatedProducts` suggestions fetched from Shopify.
- **Support pages** – Route group `src/app/(extra)` delivers About, Contact (with live HeroUI form), and Shopify policy pages rendered via `getPage`.
- **Cart & checkout** – Sliding cart drawer, optimistic quantity updates, and server actions (`src/components/cart/actions.ts`) that mutate Shopify carts and revalidate cache tags.

## Shopify Integration

- `src/lib/shopify` centralizes fragments, queries, mutations, and typed helpers. `shopifyFetch` applies Storefront auth headers and reshapes responses.
- Cache tags (`TAGS`) and `revalidateTag` keep product, collection, and cart data fresh. Webhook hits POST `/api/revalidate` to trigger ISR.
- `validateEnvironmentVariables` surfaces missing credentials early, and `ensureStartsWith` normalizes domains.
- Collections named `hidden-*` seed the homepage showcase, with graceful fallbacks to the newest products.

## UI System & Styling

- HeroUI is wrapped by `HeroProvider` to supply consistent theming and Drawer/Nav components.
- Shared utilities (`src/components/shared`) provide reusable typography, price formatting, grid tiles, and Open Graph artwork.
- Tailwind CSS 4 powers responsive layouts; global styles live in `src/styles/globals.css` and are loaded by `src/app/layout.tsx`.
- Icons come exclusively from `@iconify/react` to keep visual language consistent.

## Getting Started

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- [Bun](https://bun.sh) (or your preferred package manager)
- Shopify development store with Storefront API access

### Install & Configure

1. Install dependencies:
   ```bash
   bun install
   ```
2. Copy environment defaults and fill in secrets:
   ```bash
   cp .env.example .env.local
   ```
3. Populate the values shown below, then start the app:
   ```bash
   bun dev
   ```
   Visit `http://localhost:3000`.

## Environment Variables

| Key                               | Required | Description                                                                 |
| --------------------------------- | -------- | --------------------------------------------------------------------------- |
| `SHOPIFY_STORE_DOMAIN`            | ✅       | Shopify store domain, e.g. `your-store.myshopify.com`.                      |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | ✅       | Storefront API token from your custom app.                                  |
| `SHOPIFY_REVALIDATION_SECRET`     | ✅       | Secret shared with Shopify webhooks hitting `/api/revalidate`.              |
| `COMPANY_NAME`                    | ➖       | Overrides footer/company copy (defaults to `Your Company`).                 |
| `SITE_NAME`                       | ➖       | Used for metadata titles and the header logo (defaults to `Your Storefront`). |
| `VERCEL_PROJECT_PRODUCTION_URL`   | ➖       | Optional base URL override for Open Graph images when deploying to Vercel.  |

The helper `validateEnvironmentVariables` throws on missing required keys. Never commit `.env.local`.

## Scripts

- `bun dev` – Start the development server with Turbopack.
- `bun build` – Build a production bundle (`.next/`).
- `bun start` – Serve the production build locally.
- `bun lint` – Run ESLint with the Next.js config.
- `bun check-types` – Type-check the project with `tsc --noEmit`.

## Project Structure

```text
src/
  app/
    layout.tsx          # Global providers, font, nav/footer, cart context
    page.tsx            # Marketing homepage (Hero, collections, showcase, etc.)
    (product)/
      all-products/page.tsx
      search/page.tsx
      product/[handle]/page.tsx
    (extra)/
      about/page.tsx
      contact/page.tsx
      [policies]/        # Dynamic pages resolved from Shopify CMS
        page.tsx
        layout.tsx
        opengraph-image.tsx
    api/revalidate/route.ts
  components/
    Marketing/          # Announcement bar, navbar, hero, sections
    Product/            # Gallery, description, related products
    cart/               # Drawer UI, server actions, optimistic hooks
    shared/             # Prose renderer, price formatter, grid tiles, logos
    HeroUIProvider.tsx  # Wraps HeroUI theme provider
  lib/
    shopify/            # GraphQL fragments, queries, mutations, types, helpers
    constants.ts
    utils.ts
  styles/
    globals.css         # Tailwind CSS 4 entry point
public/                 # Favicons, OG assets, etc.
```

## Deployment

### Vercel + Shopify Integration

1. Install the [Shopify ↔︎ Vercel integration](https://vercel.com/docs/integrations/ecommerce/shopify) and connect your project.
2. Set the environment variables (`SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`, `SHOPIFY_REVALIDATION_SECRET`) for Production and Preview.
3. Build settings: Framework preset **Next.js**, build command `next build`, Node.js 18 or 20.
4. Deploy and confirm product, collection, and cart flows.
5. Configure Shopify webhooks (product/collection updates) to call `https://<your-domain>/api/revalidate?secret=YOUR_SECRET`.

### Other Platforms

- `bun build` → upload the `.next` output.
- `bun start` to run the production server behind your platform’s process manager.
- Mirror the same environment variables and webhook secrets.

## Customization Notes

- Update marketing copy, announcement text, and contact details in `src/components/Marketing` and `src/components/contact`.
- Replace placeholder social links and policy URLs with real destinations.
- Add your own hero imagery in `public/` and ensure OG fonts exist if you customize `opengraph-image.tsx`.

## Troubleshooting

- **Cart not updating** – Ensure Storefront API scopes include `unauthenticated_write_checkouts` and `unauthenticated_write_customers`.
- **Revalidation failures** – Check the shared secret and confirm Shopify webhooks send POST requests to `/api/revalidate`.
- **Environment errors** – Startup crashes typically mean `validateEnvironmentVariables` detected missing credentials.
- **Styling regressions** – Tailwind CSS 4 uses content-aware builds; restart the dev server after editing class names heavily.

## Resources

- Shopify Storefront API: https://shopify.dev/docs/api/storefront
- HeroUI documentation: https://www.heroui.dev/docs/react
- Tailwind CSS v4: https://tailwindcss.com/docs

Happy building!
