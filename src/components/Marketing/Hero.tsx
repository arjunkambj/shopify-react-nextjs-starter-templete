"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex w-full min-h-[80vh] items-end justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.webp"
          alt="SKYN background"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[zoom-in_20s_ease-in-out_infinite_alternate]"
          priority
        />
      </div>
      <div className="relative z-10 w-full">
        <div className="flex w-full max-w-6xl flex-col gap-6 px-6 py-20 text-left md:gap-8 md:px-16 lg:px-24 lg:py-24">
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-6xl lg:text-7xl animate-[fade-in-up_0.6s_ease-out]">
            Discover Your
            <span className="block bg-primary bg-clip-text text-transparent">
              Perfect Style
            </span>
          </h1>

          <p className="text-lg text-white/90 drop-shadow-lg md:text-xl max-w-2xl animate-[fade-in-up_0.8s_ease-out]">
            Shop the latest trends with premium quality products. Free shipping
            on orders over $50.
          </p>

          <div className="flex flex-wrap gap-4 justify-start animate-[fade-in-up_1s_ease-out]">
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
              className="font-semibold"
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
