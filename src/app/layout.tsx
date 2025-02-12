import Script from "next/script";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/hooks/cart/CartContext";
import "swiper/swiper-bundle.css";
import "../lib/fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";

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
  pageMetadata,
}: {
  children: React.ReactNode;
  pageMetadata?: { title?: string; description?: string };
}) {
  const title = pageMetadata?.title;
  const description = pageMetadata?.description;

  return (
    <html lang="en">
      <Head>
        {/* Dynamic Metadata */}
        <title key="dynamic-title">{title}</title>
        <meta
          key="dynamic-description"
          name="description"
          content={description}
        />
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drpathcares.com/" />
        <meta property="og:image" content="/images/mainlogo.png" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Dr.pathcares" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/mainlogo.png" />
      </Head>

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
