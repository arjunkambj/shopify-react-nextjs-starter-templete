import { GridTileImage } from '@/components/shared/GridTile';
import { getCollectionProducts, getProducts } from '@/lib/shopify';
import type { Product } from '@/lib/shopify/types';
import Link from 'next/link';

function ProductShowcaseItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage?.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ProductShowcase() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  // Fallback: if the collection has fewer than 3 items, fill with latest products
  const items = homepageItems;
  if (items.length < 3) {
    const latest = await getProducts({ sortKey: 'CREATED_AT', reverse: true });
    const seen = new Set(items.map((p) => p.handle));
    for (const p of latest) {
      if (items.length >= 3) break;
      if (!seen.has(p.handle)) {
        items.push(p);
        seen.add(p.handle);
      }
    }
  }

  if (items.length < 3) return null;

  const firstProduct = items[0]!;
  const secondProduct = items[1]!;
  const thirdProduct = items[2]!;

  return (
    <section className="mx-auto grid max-w-(--breakpoint-2xl) gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ProductShowcaseItem size="full" item={firstProduct} priority={true} />
      <ProductShowcaseItem size="half" item={secondProduct} priority={true} />
      <ProductShowcaseItem size="half" item={thirdProduct} />
    </section>
  );
}
