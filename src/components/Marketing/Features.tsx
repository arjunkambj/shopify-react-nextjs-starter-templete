"use client";

import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "solar:delivery-bold-duotone",
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Secure Payment",
    description: "100% secure transactions",
  },
  {
    icon: "solar:restart-bold-duotone",
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: "solar:chat-round-call-bold-duotone",
    title: "24/7 Support",
    description: "Dedicated customer support",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why Shop With Us
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We provide the best shopping experience with quality products and
            excellent service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              shadow="sm"
              isPressable
              className="border transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary"
            >
              <CardBody className="p-6 text-center gap-3">
                <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">
                  <Icon
                    icon={feature.icon}
                    width={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
