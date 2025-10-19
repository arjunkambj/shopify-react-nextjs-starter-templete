"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex w-full min-h-[80vh] items-end justify-start overflow-hidden bg-red-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.webp"
          alt="SKYN background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 w-full">
        <div className="flex w-full max-w-5xl flex-col gap-8 px-4 py-16 text-left md:px-16 lg:px-24">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Discover Your
            <span className="block text-primary">Perfect Style</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl">
            Shop the latest trends with premium quality products. Free shipping
            on orders over $50.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
            <Button
              as={Link}
              href="/search"
              size="lg"
              color="primary"
              radius="lg"
              className="font-semibold"
              startContent={<Icon icon="solar:bag-4-bold-duotone" width={20} />}
            >
              Shop Now
            </Button>
            <Button
              as={Link}
              href="/about"
              size="lg"
              variant="flat"
              radius="lg"
              startContent={
                <Icon icon="solar:info-circle-bold-duotone" width={20} />
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
