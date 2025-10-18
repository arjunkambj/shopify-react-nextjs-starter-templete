import { Icon } from "@iconify/react";

export default function OpenCart({
  quantity,
}: {
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <Icon
        icon="solar:cart-large-minimalistic-outline"
        width={20}
        aria-hidden="true"
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-primary text-primary-foreground text-[9px] font-medium">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
