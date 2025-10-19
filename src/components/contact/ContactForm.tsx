"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 w-full">
      <Input
        name="name"
        label="Name"
        placeholder="Enter your name"
        isRequired
        labelPlacement="outside"
        startContent={<Icon icon="solar:user-linear" width={20} />}
        classNames={{
          input: "text-foreground",
          inputWrapper: "border-border hover:border-primary",
        }}
      />

      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        isRequired
        labelPlacement="outside"
        startContent={<Icon icon="solar:letter-linear" width={20} />}
        classNames={{
          input: "text-foreground",
          inputWrapper: "border-border hover:border-primary",
        }}
      />

      <Input
        name="subject"
        label="Subject"
        placeholder="What is this about?"
        isRequired
        labelPlacement="outside"
        startContent={<Icon icon="solar:file-text-linear" width={20} />}
        classNames={{
          input: "text-foreground",
          inputWrapper: "border-border hover:border-primary",
        }}
      />

      <Textarea
        name="message"
        label="Message"
        placeholder="Write your message here..."
        isRequired
        labelPlacement="outside"
        minRows={6}
        classNames={{
          input: "text-foreground",
        }}
      />

      <Button
        type="submit"
        color="primary"
        size="lg"
        radius="lg"
        className="w-full font-semibold"
        isLoading={isSubmitting}
        startContent={
          !isSubmitting && <Icon icon="solar:letter-bold-duotone" width={20} />
        }
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
