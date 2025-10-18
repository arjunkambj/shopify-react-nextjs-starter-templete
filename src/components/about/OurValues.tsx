"use client";

import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const values = [
  {
    icon: "solar:shield-user-bold-duotone",
    title: "Integrity",
    description:
      "We operate with honesty and transparency in everything we do. Building trust with our customers is our foundation.",
  },
  {
    icon: "solar:lightbulb-bolt-bold-duotone",
    title: "Innovation",
    description:
      "We constantly seek new ways to improve the shopping experience and stay ahead of industry trends.",
  },
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Community",
    description:
      "We believe in giving back and supporting the communities we serve, both locally and globally.",
  },
  {
    icon: "solar:leaf-bold-duotone",
    title: "Sustainability",
    description:
      "We're committed to environmental responsibility and working with eco-conscious brands and suppliers.",
  },
  {
    icon: "solar:chart-2-bold-duotone",
    title: "Excellence",
    description:
      "We strive for excellence in product quality, customer service, and overall shopping experience.",
  },
  {
    icon: "solar:dialog-2-bold-duotone",
    title: "Communication",
    description:
      "We listen to our customers and value feedback to continuously improve and grow together.",
  },
];

export default function OurValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Values
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            These core principles guide our decisions and shape how we serve our
            customers every day.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              shadow="sm"
              isPressable
              className="border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardBody className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon icon={value.icon} width={32} className="text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
