import { GridTileImage } from '@/components/shared/GridTile';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li {...props} className={clsx('aspect-square transition-all hover:-translate-y-1', props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Grid>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full group"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </Grid>
  );
}
