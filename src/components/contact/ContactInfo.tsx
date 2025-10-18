"use client";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const contactDetails = [
  {
    icon: "solar:letter-bold-duotone",
    title: "Email",
    content: "support@acme.com",
    link: "mailto:support@acme.com",
  },
  {
    icon: "solar:phone-bold-duotone",
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "solar:map-point-bold-duotone",
    title: "Address",
    content: "123 Commerce St, Suite 100, New York, NY 10001",
    link: "#",
  },
];

const socialLinks = [
  {
    icon: "solar:facebook-linear",
    name: "Facebook",
    href: "#",
  },
  {
    icon: "solar:instagram-linear",
    name: "Instagram",
    href: "#",
  },
  {
    icon: "solar:twitter-linear",
    name: "Twitter",
    href: "#",
  },
  {
    icon: "solar:linkedin-linear",
    name: "LinkedIn",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">Get in Touch</h2>
        <p className="text-foreground/70">
          Have a question? We&apos;re here to help. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <Card key={index} shadow="sm" className="border">
            <CardBody className="flex-row items-start gap-4 p-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Icon icon={detail.icon} width={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-foreground">
                  {detail.title}
                </h3>
                <a
                  href={detail.link}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {detail.content}
                </a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="mb-4 font-semibold">Follow Us</h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background transition-all hover:bg-primary hover:border-primary hover:text-white"
            >
              <Icon icon={social.icon} width={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
