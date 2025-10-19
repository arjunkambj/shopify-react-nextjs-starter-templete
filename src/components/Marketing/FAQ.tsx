"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    id: "1",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all items. Products must be unused and in their original packaging. Simply contact our customer service team to initiate a return.",
  },
  {
    id: "2",
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. We also offer express shipping options that deliver within 2-3 business days. Free shipping is available on orders over $50.",
  },
  {
    id: "3",
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship to most countries worldwide. International shipping times vary by location but typically take 10-14 business days. Customs fees may apply depending on your country.",
  },
  {
    id: "4",
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
  },
  {
    id: "5",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted.",
  },
  {
    id: "6",
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or through our contact page. We typically respond within 24 hours during business days.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Find answers to common questions
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion selectionMode="multiple">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                aria-label={faq.question}
                title={faq.question}
                indicator={
                  <Icon icon="solar:alt-arrow-down-linear" width={20} />
                }
                classNames={{
                  title: "font-medium",
                }}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
