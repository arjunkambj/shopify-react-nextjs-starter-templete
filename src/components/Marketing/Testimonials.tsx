"use client";

import { Card, CardBody, User } from "@heroui/react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Amazing quality and fast shipping! The products exceeded my expectations. I&apos;ve been shopping here for months and never been disappointed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    avatar: "https://i.pravatar.cc/150?img=13",
    content: "Great customer service and the return policy is hassle-free. The quality of products is consistently excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Style Blogger",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "I love the curated collections and the attention to detail. Every purchase feels special and the packaging is beautiful.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Don&apos;t just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              shadow="sm"
              isPressable
              className="transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardBody className="gap-4 p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      icon="solar:star-bold"
                      width={20}
                      className="text-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <User
                  name={testimonial.name}
                  description={testimonial.role}
                  avatarProps={{
                    src: testimonial.avatar,
                    size: "md",
                    isBordered: true,
                  }}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
