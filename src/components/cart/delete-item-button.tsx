"use client";

import { removeItem } from "@/components/cart/actions";
import type { CartItem } from "@/lib/shopify/types";
import { Icon } from "@iconify/react";
import { useActionState } from "react";

export function DeleteItemButton({
  item,
  optimisticUpdate,
}: {
  item: CartItem;
  optimisticUpdate: (
    merchandiseId: string,
    action: "delete" | "plus" | "minus"
  ) => void;
}) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const removeItemAction = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, "delete");
        removeItemAction();
      }}
    >
      <button
        type="submit"
        aria-label="Remove cart item"
        className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-destructive hover:opacity-80 transition-opacity"
      >
        <Icon
          icon="solar:close-circle-bold"
          width={16}
          className="text-destructive-foreground"
          aria-hidden="true"
        />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
