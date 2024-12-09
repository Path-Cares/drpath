import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/hooks/cart/CartContext";
import "swiper/swiper-bundle.css";
import "../lib/fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Body Checkup | Blood Test | Pathology Lab - DrPathCaress",
  description:
    "DrPathCares is a one stop solution for all your health and pathology needs. We provide complete blood test and full body checkup packages for you.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-5ZVV8F74`}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
