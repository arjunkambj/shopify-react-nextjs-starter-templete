'use client';

import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import { updateItemQuantity } from '@/components/cart/actions';
import type { CartItem } from '@/lib/shopify/types';
import { useActionState } from 'react';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <Button
      type="submit"
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
      variant="light"
      size="sm"
      radius="full"
      isIconOnly
      className={type === 'minus' ? 'ml-auto min-w-[36px] max-w-[36px]' : 'min-w-[36px] max-w-[36px]'}
    >
      {type === 'plus' ? (
        <Icon
          icon="solar:add-circle-linear"
          width={16}
          aria-hidden="true"
        />
      ) : (
        <Icon
          icon="solar:minus-circle-linear"
          width={16}
          aria-hidden="true"
        />
      )}
    </Button>
  );
}

export function EditItemQuantityButton({
  item,
  type,
  optimisticUpdate
}: {
  item: CartItem;
  type: 'plus' | 'minus';
  optimisticUpdate: (merchandiseId: string, action: 'delete' | 'plus' | 'minus') => void;
}) {
  const [message, formAction] = useActionState(updateItemQuantity, null);
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const updateItemQuantityAction = formAction.bind(null, payload);

  return (
    <form
      action={async () => {
        optimisticUpdate(payload.merchandiseId, type);
        updateItemQuantityAction();
      }}
    >
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
