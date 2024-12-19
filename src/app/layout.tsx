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
  title: "Full Body Checkup| Blood Test | Pathology Lab - DrPathCares",
  description:
    "DrPathCares offers comprehensive health solutions with complete blood tests and full body checkup packages for all your pathology needs.",
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Full Body Checkup | Blood Test | Pathology Lab - DrPathCares" />
        <meta property="og:description" content="DrPathCares offers comprehensive health solutions with complete blood tests and full body checkup packages for all your pathology needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.drpathcares.com/" />
        <meta property="og:image" content="https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Dr.pathcares" />
        <meta name="twitter:title" content="Full Body Checkup | Blood Test | Pathology Lab - DrPathCares" />
        <meta name="twitter:description" content="DrPathCares offers comprehensive health solutions with complete blood tests and full body checkup packages for all your pathology needs." />
        <meta name="twitter:image" content="https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75" />
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
