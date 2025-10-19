"use client";

import { Icon } from "@iconify/react";
import { Marquee } from "@/components/ui/marquee";

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="w-full mx-auto">
        <Marquee repeat={6} className="py-2 text-sm font-medium [--duration:10s] [--gap:4rem]">
          <div className="flex items-center gap-2">
            <Icon icon="ph:truck-bold" className="h-4 w-4" />
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="ph:clock-bold" className="h-4 w-4" />
            <span>Limited time offer</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
