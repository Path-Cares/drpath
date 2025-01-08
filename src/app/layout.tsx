"use client";
import { usePathname } from "next/navigation";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const baseUrl = "https://drpathcares.com";
  const canonicalURL = `${baseUrl}${pathname}`;

  return (
    <html lang="en">
      <head>
        {/* Canonical Tag */}
        <link rel="canonical" href={canonicalURL} />

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

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Full Body Checkup | Blood Test | Pathology Lab - DrPathCares"
        />
        <meta
          property="og:description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests and full body checkup packages for all your pathology needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalURL} />
        <meta
          property="og:image"
          content={`${baseUrl}/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75`}
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Dr.pathcares" />
        <meta
          name="twitter:title"
          content="Full Body Checkup | Blood Test | Pathology Lab - DrPathCares"
        />
        <meta
          name="twitter:description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests and full body checkup packages for all your pathology needs."
        />
        <meta
          name="twitter:image"
          content={`${baseUrl}/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75`}
        />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="manifest" href="/site.webmanifest" />
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

        {/* Cart Provider Context */}
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
