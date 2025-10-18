"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground">
              <Icon
                icon="solar:star-bold-duotone"
                width={16}
                className="text-primary"
              />
              <span>New Collection Available</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Discover Your
              <span className="block text-primary">Perfect Style</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Shop the latest trends with premium quality products. Free
              shipping on orders over $50.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                href="/search"
                size="lg"
                color="primary"
                radius="lg"
                className="font-semibold"
                startContent={
                  <Icon icon="solar:bag-4-bold-duotone" width={20} />
                }
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

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:user-check-bold-duotone"
                    width={24}
                    className="text-primary"
                  />
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:box-bold-duotone"
                    width={24}
                    className="text-primary"
                  />
                  <p className="text-2xl font-bold text-foreground">5K+</p>
                </div>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:star-bold-duotone"
                    width={24}
                    className="text-primary"
                  />
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-4">
            <Card className="bg-card border border-border">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon
                      icon="solar:delivery-bold-duotone"
                      width={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      Fast Delivery
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Free shipping on all orders over $50
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-card border border-border">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon
                      icon="solar:shield-check-bold-duotone"
                      width={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      Secure Payment
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      100% secure payment with SSL encryption
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-card border border-border">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Icon
                      icon="solar:restart-bold-duotone"
                      width={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      Easy Returns
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      30-day money-back guarantee
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
