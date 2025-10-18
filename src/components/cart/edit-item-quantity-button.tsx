'use client';

import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { updateItemQuantity } from '@/components/cart/actions';
import type { CartItem } from '@/lib/shopify/types';
import { useActionState } from 'react';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <button
      type="submit"
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:bg-secondary hover:opacity-80',
        {
          'ml-auto': type === 'minus'
        }
      )}
    >
      {type === 'plus' ? (
        <Icon
          icon="solar:add-circle-linear"
          width={16}
          className="text-foreground"
          aria-hidden="true"
        />
      ) : (
        <Icon
          icon="solar:minus-circle-linear"
          width={16}
          className="text-foreground"
          aria-hidden="true"
        />
      )}
    </button>
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
