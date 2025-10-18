"use client";

import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Our Story
            </h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                Founded in 2020, ACME started with a simple idea: to create an
                online shopping experience that puts customers first. What began
                as a small startup has grown into a thriving e-commerce platform
                serving thousands of customers worldwide.
              </p>
              <p>
                We believe that shopping should be more than just transactions.
                It&apos;s about discovering products you love, enjoying a seamless
                experience, and feeling confident in every purchase. That&apos;s why
                we carefully curate our collection and partner with trusted
                brands.
              </p>
              <p>
                Today, we continue to innovate and improve, always keeping our
                customers at the heart of everything we do. Our team is
                dedicated to providing exceptional service and creating a
                shopping experience you&apos;ll love.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card shadow="sm" className="border">
              <CardBody className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon
                    icon="solar:star-bold-duotone"
                    width={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Quality First</h3>
                <p className="text-sm text-foreground/70">
                  We source only the best products from trusted suppliers and
                  brands.
                </p>
              </CardBody>
            </Card>

            <Card shadow="sm" className="border">
              <CardBody className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon
                    icon="solar:heart-bold-duotone"
                    width={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Customer Focused</h3>
                <p className="text-sm text-foreground/70">
                  Your satisfaction is our priority. We&apos;re here to help every
                  step of the way.
                </p>
              </CardBody>
            </Card>

            <Card shadow="sm" className="border">
              <CardBody className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon
                    icon="solar:shield-check-bold-duotone"
                    width={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Secure Shopping</h3>
                <p className="text-sm text-foreground/70">
                  Shop with confidence knowing your data and transactions are
                  protected.
                </p>
              </CardBody>
            </Card>

            <Card shadow="sm" className="border">
              <CardBody className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon
                    icon="solar:rocket-bold-duotone"
                    width={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Fast Delivery</h3>
                <p className="text-sm text-foreground/70">
                  Quick and reliable shipping to get your orders to you as fast
                  as possible.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
