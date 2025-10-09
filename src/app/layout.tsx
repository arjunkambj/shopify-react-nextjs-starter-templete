import { CartProvider } from "@/components/cart/cart-context";
import { HeroProvider } from "@/components/HeroUIProvider";
import { Navbar } from "@/components/layout/navbar";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import { getCart } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const { SITE_NAME } = process.env;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();

  return (
    <html lang="en">
      <body className={inter.className}>
        <HeroProvider>
          <CartProvider cartPromise={cart}>
            <AnnouncementBar />
            <Navbar />
            <main>{children}</main>
          </CartProvider>
        </HeroProvider>
      </body>
    </html>
  );
}
