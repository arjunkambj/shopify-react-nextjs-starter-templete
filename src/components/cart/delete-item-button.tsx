"use client";

import { removeItem } from "@/components/cart/actions";
import type { CartItem } from "@/lib/shopify/types";
import { Button } from "@heroui/react";
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
      <Button
        isIconOnly
        variant="light"
        className="p-0"
        size="sm"
        type="submit"
        aria-label="Remove cart item"
      >
        <Icon icon="solar:close-circle-bold" width={16} aria-hidden="true" />
      </Button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
