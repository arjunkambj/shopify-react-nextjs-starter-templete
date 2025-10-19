import { ProductCard } from '@/components/shared/ProductCard';
import { Product } from '@/lib/shopify/types';
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
    <li {...props} className={clsx('transition-all', props.className)}>
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
          <ProductCard product={product} />
        </Grid.Item>
      ))}
    </Grid>
  );
}
