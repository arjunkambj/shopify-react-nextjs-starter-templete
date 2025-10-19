"use client";

import Price from "@/components/shared/Price";
import Prose from "@/components/shared/Prose";
import { Product } from "@/lib/shopify/types";
import { AddToCart } from "./AddToCart";
import { VariantSelector } from "./VariantSelector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-border pb-6">
        <h1 className="mb-2 text-5xl font-medium text-foreground">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full text-xl px-2 py-1">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-base leading-tight text-muted-foreground"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
    </>
  );
}
