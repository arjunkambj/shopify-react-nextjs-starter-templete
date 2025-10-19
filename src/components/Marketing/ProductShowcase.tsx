import { ProductCard } from "@/components/shared/ProductCard";
import { getCollectionProducts, getProducts } from "@/lib/shopify";

export async function ProductShowcase() {
  const homepageItems = await getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  });

  const items = homepageItems;
  if (items.length < 4) {
    const latest = await getProducts({ sortKey: "CREATED_AT", reverse: true });
    const seen = new Set(items.map((p) => p.handle));
    for (const p of latest) {
      if (items.length >= 8) break;
      if (!seen.has(p.handle)) {
        items.push(p);
        seen.add(p.handle);
      }
    }
  }

  if (items.length === 0) return null;

  const displayItems = items.slice(0, 8);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trending this Season
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayItems.map((product, index) => (
            <ProductCard
              key={product.handle}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
