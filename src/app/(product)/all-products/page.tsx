import ProductGrid from "@/components/Collections/ProductGrid";
import { defaultSort, sorting } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "All Products",
  description: "Browse every product available in the shop.",
};

export default async function ProductsPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort } = (searchParams || {}) as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse });

  if (products.length === 0) {
    return (
      <p className="py-3 text-lg text-muted-foreground">
        No products available right now. Please check back soon.
      </p>
    );
  }

  return (
    <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ProductGrid products={products} />
    </div>
  );
}
