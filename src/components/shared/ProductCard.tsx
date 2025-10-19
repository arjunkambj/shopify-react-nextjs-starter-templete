import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import Price from "./Price";
import { QuickBuy } from "./QuickBuy";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const minVariantPrice = product.priceRange?.minVariantPrice;

  // Extract color options if available
  const colorOption = product.options.find(
    (opt) => opt.name.toLowerCase() === "color"
  );

  // Get unique colors from variants
  const uniqueColors = colorOption ? [...new Set(colorOption.values)] : [];
  const colors = uniqueColors.slice(0, 4);
  const extraColorCount = uniqueColors.length - colors.length;

  return (
    <div className="group relative">
      <Link
        href={`/product/${product.handle}`}
        className="block"
        prefetch={true}
      >
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted mb-3">
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}

          {product.tags.length > 0 && (
            <div className="absolute top-3 left-3">
              <span className="bg-background/95 text-foreground text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                {product.tags[0]}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-base line-clamp-1 transition-colors group-hover:text-primary">
            {product.title}
          </h3>

          {product.tags.length > 1 && (
            <p className="text-sm text-foreground/60 line-clamp-1">
              {product.tags[1]}
            </p>
          )}

          <div className="flex items-center justify-between">
            <Price
              amount={minVariantPrice?.amount || "0"}
              currencyCode={minVariantPrice?.currencyCode || "USD"}
              className="font-semibold text-base"
            />
          </div>

          {colors.length > 0 && (
            <div className="flex gap-1.5 pt-1">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="h-4 w-4 rounded-full border border-border"
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                  title={color}
                />
              ))}
              {extraColorCount > 0 && (
                <span className="text-xs text-foreground/60 self-center">
                  +{extraColorCount}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>

      <QuickBuy product={product} />
    </div>
  );
}
