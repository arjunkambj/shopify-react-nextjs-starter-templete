'use client';

import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import { addItem } from '@/components/cart/actions';
import { useProduct } from '@/components/Product/sub/ProductContext';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { useActionState } from 'react';
import { useCart } from './cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const baseProps = {
    fullWidth: true,
    radius: 'full' as const,
    size: 'lg' as const,
    variant: 'solid' as const
  };
  const addIcon = <Icon icon="heroicons-outline:plus" width={20} aria-hidden="true" />;

  if (!availableForSale) {
    return (
      <Button
        {...baseProps}
        color="default"
        isDisabled
      >
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        {...baseProps}
        aria-label="Please select an option"
        color="primary"
        isDisabled
        startContent={addIcon}
      >
        Add To Cart
      </Button>
    );
  }

  return (
    <Button
      {...baseProps}
      aria-label="Add to cart"
      type="submit"
      color="primary"
      startContent={addIcon}
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
