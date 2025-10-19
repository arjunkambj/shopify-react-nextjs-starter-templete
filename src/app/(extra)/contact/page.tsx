import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us. We're here to help answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <ContactInfo />
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg border bg-background p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
