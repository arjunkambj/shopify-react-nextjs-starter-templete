import { CartProvider } from "@/components/cart/cart-context";
import { Navbar } from "@/components/layout/navbar";
import { WelcomeToast } from "@/components/welcome-toast";
import { getCart } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "../styles/globals.css";

const { SITE_NAME } = process.env;

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
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
      <body className={poppins.variable}>
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
