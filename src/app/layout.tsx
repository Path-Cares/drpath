import Script from "next/script";
import { Inter, Roboto } from "next/font/google";
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

export const metadata = {
  title: "DrPathCares - Your Trusted Pathology Lab",
  description:
    "DrPathCares provides comprehensive diagnostic services for all your health checkup needs.",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Full Body Checkup | Blood Test | Pathology Lab - DrPathCares",
    description:
      "Dr. Path Cares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs.",
    type: "website",
    url: "https://drpathcares.com/",
    images: [
      {
        url: "/images/mainlogo.png",
        width: 256,
        height: 256,
        alt: "DrPathCares Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@Dr.pathcares",
    title: "Full Body Checkup | Blood Test | Pathology Lab - DrPathCares",
    description:
      "Dr. Path Cares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs.",
    images: ["/images/mainlogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TXDJ1TF0E3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXDJ1TF0E3');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZVV8F74');
          `}
        </Script>
      </head>
      <body className={inter.className}>
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
