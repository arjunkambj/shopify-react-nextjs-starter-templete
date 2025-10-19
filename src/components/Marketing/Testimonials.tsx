"use client";

import { Card, CardBody, User } from "@heroui/react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=1",
    content:
      "Amazing quality and fast shipping! The products exceeded my expectations. I've been shopping here for months and never been disappointed.",
    rating: 5,
    verified: true,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    avatar: "https://i.pravatar.cc/150?img=13",
    content:
      "Great customer service and the return policy is hassle-free. The quality of products is consistently excellent.",
    rating: 5,
    verified: true,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Style Blogger",
    avatar: "https://i.pravatar.cc/150?img=5",
    content:
      "I love the curated collections and the attention to detail. Every purchase feels special and the packaging is beautiful.",
    rating: 5,
    verified: true,
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Park",
    role: "Tech Professional",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "Seamless shopping experience from start to finish. The website is intuitive and checkout is quick. Highly recommend!",
    rating: 5,
    verified: true,
    date: "1 week ago",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            Join thousands of satisfied customers who love shopping with us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-muted/80"
              shadow="none"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <CardBody className="gap-6 px-4 py-6 relative overflow-hidden">
                <Icon
                  icon="solar:quote-up-bold"
                  width={48}
                  className="absolute -top-2 -right-2 text-primary/10"
                />

                <div className="flex items-center gap-1 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon
                      key={i}
                      icon="solar:star-bold"
                      width={18}
                      className="text-warning-500"
                    />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed text-sm md:text-base relative z-10 flex-1">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="relative z-10 space-y-2">
                  <User
                    name={testimonial.name}
                    description={testimonial.role}
                    avatarProps={{
                      src: testimonial.avatar,
                      size: "md",
                      isBordered: true,
                      color: "primary",
                    }}
                    classNames={{
                      base: "justify-start",
                      name: "font-semibold text-sm",
                      description: "text-foreground/70 text-xs",
                    }}
                  />
                  <div className="flex items-center gap-1.5 pl-12 text-xs text-foreground/50">
                    <Icon icon="solar:clock-circle-line-duotone" width={14} />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
