"use client";

import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import type { Product } from "@/lib/shopify/types";

export function QuickBuy({ product }: { product: Product }) {
  const handleQuickBuy = () => {
    // Navigate to product page for quick buy
    window.location.href = `/product/${product.handle}`;
  };

  return (
    <Button
      isIconOnly
      size="sm"
      radius="full"
      variant="solid"
      color="default"
      className="absolute right-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-background/90 backdrop-blur-sm shadow-lg z-10"
      onPress={handleQuickBuy}
      aria-label="Quick buy"
    >
      <Icon icon="solar:bag-4-bold-duotone" width={20} />
    </Button>
  );
}
