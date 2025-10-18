import { CartProvider } from "@/components/cart/cart-context";
import { HeroProvider } from "@/components/HeroUIProvider";
import AnnouncementBar from "@/components/Marketing/AnnouncementBar";
import AppNavbar from "@/components/Marketing/Navbar";
import { getCart } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const { SITE_NAME } = process.env;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
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
      <body className={`${poppins.className} ${poppins.variable}`}>
        <HeroProvider>
          <CartProvider cartPromise={cart}>
            <AnnouncementBar />
            <AppNavbar />
            <main>{children}</main>
          </CartProvider>
        </HeroProvider>
      </body>
    </html>
  );
}
