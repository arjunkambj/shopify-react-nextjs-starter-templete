"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/SKYN.webp"
          alt="SKYN background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-left space-y-8 max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Discover Your
            <span className="block text-primary">Perfect Style</span>
          </h1>

          <p className="text-lg text-white/90 md:text-xl max-w-2xl">
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
              variant="bordered"
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
