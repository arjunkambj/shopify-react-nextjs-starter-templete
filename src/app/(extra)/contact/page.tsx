import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us. We're here to help answer any questions you may have.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 mx-auto">
          <div className="order-2 max-w-lg mx-auto lg:order-1">
            <ContactInfo />
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl bg-content1 p-6 sm:p-8 lg:p-10 border border-divider">
              <h2 className="mb-8 text-2xl font-bold">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
