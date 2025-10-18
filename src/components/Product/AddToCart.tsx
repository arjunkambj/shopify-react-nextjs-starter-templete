'use client';

import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import { addItem } from '@/components/cart/actions';
import { useProduct } from './ProductContext';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { useActionState } from 'react';
import { useCart } from '@/components/cart/cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  if (!availableForSale) {
    return (
      <Button
        isDisabled
        fullWidth
        size="lg"
        radius="lg"
        className="font-semibold"
      >
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-label="Please select an option"
        isDisabled
        fullWidth
        size="lg"
        radius="lg"
        className="font-semibold"
        startContent={<Icon icon="solar:cart-plus-bold-duotone" width={20} />}
      >
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      aria-label="Add to cart"
      type="submit"
      fullWidth
      size="lg"
      color="primary"
      radius="lg"
      className="font-semibold"
      startContent={<Icon icon="solar:cart-plus-bold-duotone" width={20} />}
    >
      Add To Cart
    </Button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        addItemAction();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
