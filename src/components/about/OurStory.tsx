"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex container justify-center items-center flex-col gap-8 lg:flex-row lg:gap-44">
          <div className="flex-1 max-w-lg">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Our Story, Values, and Mission
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                We believe that shopping should be more than just transactions.
                It&apos;s about discovering products you love, enjoying a
                seamless experience, and feeling confident in every purchase.
                That&apos;s why we carefully curate our collection and partner
                with trusted brands.
              </p>
              <p>
                Today, we continue to innovate and improve, always keeping our
                customers at the heart of everything we do. Our team is
                dedicated to providing exceptional service and creating a
                shopping experience you&apos;ll love.
              </p>
            </div>
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl lg:h-full max-w-lg lg:flex-shrink-0">
            <Image
              src="/hero1.webp"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 350px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
