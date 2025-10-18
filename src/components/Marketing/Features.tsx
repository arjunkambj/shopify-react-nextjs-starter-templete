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
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Why Shop With Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We provide the best shopping experience with quality products and
            excellent service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:border-primary transition-colors"
            >
              <CardBody className="p-6 text-center">
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
