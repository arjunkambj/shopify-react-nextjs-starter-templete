"use client";

import { Icon } from "@iconify/react";

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-2.5 text-sm">
          <Icon icon="solar:tag-price-bold-duotone" width={18} />
          <p className="font-medium">
            Free shipping on orders over $50 • Limited time offer
          </p>
          <Icon icon="solar:tag-price-bold-duotone" width={18} />
        </div>
      </div>
    </div>
  );
}
