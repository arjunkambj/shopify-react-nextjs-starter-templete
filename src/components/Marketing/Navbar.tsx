"use client";

import CartModal from "@/components/cart/modal";
import SearchModal, { SearchSkeleton } from "./SearchModal";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryLinks: Array<{ label: string; href: Route; current?: boolean }> =
    [
      { label: "Home", href: "/" },
      { label: "Shop All", href: "/all-products" },
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
      className="w-full py-2 bg-background/95 backdrop-blur-md backdrop-saturate-150"
      classNames={{
        wrapper: "px-4 sm:px-9 md:px-12",
      }}
      maxWidth="full"
      position="sticky"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-10 sm:flex" justify="start">
        {primaryLinks.map(({ label, href }) => (
          <NavbarItem isActive={isActive(href)} key={label}>
            <Link
              aria-current={isActive(href) ? "page" : undefined}
              href={href}
              className={`transition-all duration-200 hover:text-primary font-medium text-base ${
                isActive(href) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarBrand className="justify-center sm:justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <AcmeLogo />
          <p className="font-bold text-inherit text-xl">ACME</p>
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

      <NavbarMenu className="pt-6">
        {primaryLinks.map(({ label, href }) => (
          <NavbarMenuItem key={label}>
            <Link
              href={href}
              className={`w-full text-lg font-medium py-2 ${
                isActive(href) ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
