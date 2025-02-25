import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contents from "@/components/pages/About/AboutBanner";
import Script from "next/script";

// Metadata for SEO (App Router way)
export const metadata = {
  title: "Trusted Preventive Healthcare & Diagnostics | DrPathCares",
  description:
    "Get accurate diagnostic tests, fast e-reports & expert consultations at home. DrPathCares ensures quality healthcare with affordable pricing & precision.",
  alternates: {
    canonical: "https://drpathcares.com/aboutus",
  },
  openGraph: {
    title: "Trusted Preventive Healthcare & Diagnostics | DrPathCares",
    description:
      "Get accurate diagnostic tests, fast e-reports & expert consultations at home. DrPathCares ensures quality healthcare with affordable pricing & precision.",
    url: "https://drpathcares.com/aboutus",
    siteName: "Dr. Path Cares",
    images: [
      {
        url: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
        width: 800,
        height: 600,
        alt: "Dr. Path Cares Logo",
      },
    ],
    type: "website",
  },
};

function Page() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZVV8F74');
          `,
        }}
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Nav />
      <main>
        <Contents />
        {/* <Cities /> */}
      </main>
      <Footer />
    </>
  );
}

export default Page;
