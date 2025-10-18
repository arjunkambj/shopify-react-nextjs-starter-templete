"use client";

import CartModal from "@/components/cart/modal";
import SearchModal, { SearchSkeleton } from "./SearchModal";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppNavbar() {
  const pathname = usePathname();
  const primaryLinks: Array<{ label: string; href: Route; current?: boolean }> =
    [
      { label: "Home", href: "/" },
      { label: "Shop All", href: "/search" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/about" },
    ];

  const isActive = (target: Route) => {
    if (!pathname) return false;
    if (target === "/") return pathname === "/";
    return pathname.startsWith(target);
  };

  return (
    <Navbar
      className="w-full border-b backdrop-blur-md bg-background/80 shadow-sm"
      classNames={{
        wrapper: "px-6 py-4",
      }}
      maxWidth="full"
      position="sticky"
      isBordered
    >
      <NavbarContent className="hidden gap-4 sm:flex" justify="start">
        {primaryLinks.map(({ label, href }) => (
          <NavbarItem isActive={isActive(href)} key={label}>
            <Link
              aria-current={isActive(href) ? "page" : undefined}
              href={href}
              className={`transition-all hover:text-primary font-medium ${
                isActive(href) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarBrand className="justify-center">
        <Link href="/" className="flex items-center gap-2">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-2" justify="end">
        <NavbarItem>
          <Suspense fallback={<SearchSkeleton />}>
            <SearchModal />
          </Suspense>
        </NavbarItem>
        <NavbarItem>
          <CartModal />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
