import { Icon } from "@iconify/react";
import type { Route } from "next";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "All Products", href: "/search" as Route },
      { label: "New Arrivals", href: "/search" as Route },
      { label: "Sale", href: "/search" as Route },
    ],
    company: [
      { label: "About Us", href: "/about" as Route },
      { label: "Contact", href: "/contact" as Route },
    ],
    support: [
      { label: "FAQ", href: "/" as Route },
      { label: "Shipping", href: "/" as Route },
      { label: "Returns", href: "/" as Route },
    ],
  };

  const socialLinks = [
    { icon: "solar:facebook-linear", href: "/" as Route, label: "Facebook" },
    { icon: "solar:instagram-linear", href: "/" as Route, label: "Instagram" },
    { icon: "solar:twitter-linear", href: "/" as Route, label: "Twitter" },
    { icon: "solar:youtube-linear", href: "/" as Route, label: "YouTube" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                <path
                  clipRule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <p className="text-xl font-bold">ACME</p>
            </div>
            <p className="mb-6 max-w-sm text-foreground/70">
              Your destination for premium quality products. Shop the latest trends with confidence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-all hover:bg-muted hover:border-primary"
                >
                  <Icon icon={social.icon} width={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-foreground/60">
              © {currentYear} ACME. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
