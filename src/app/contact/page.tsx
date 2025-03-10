import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactContent from "@/components/pages/contact/contact";
import AddressPage from "@/components/Address";
import Script from "next/script";

// Metadata for SEO (App Router way)
export const metadata = {
  title: "Dr. Path Cares Registered Labs | 24/7 Healthcare Services",
  description:
    "Dr. Path Cares Wellness Care Lab offers expert, reliable 24/7 lab tests, diagnostics, and health checkups with advanced technology and personalized care.",
  alternates: {
    canonical: "https://drpathcares.com/contact",
  },
  openGraph: {
    title: "Dr. Path Cares Registered Labs | 24/7 Healthcare Services",
    description:
      "Dr. Path Cares Wellness Care Lab offers expert, reliable 24/7 lab tests, diagnostics, and health checkups with advanced technology and personalized care.",
    url: "https://drpathcares.com/contact",
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
      {/* JSON-LD Structured Data */}
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.drpathcares.com/#organization",
            url: "https://www.drpathcares.com/",
            logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
            name: "Dr. Path Cares",
            sameAs: [
              "https://www.facebook.com/drpathcares1",
              "https://www.instagram.com/drpathcares",
              "https://www.linkedin.com/company/dr-path-cares/",
              "https://www.youtube.com/@dr.pathcares",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-8929062906",
                contactType: "customer support",
                email: "info@drpathcares.com",
              },
            ],
          }),
        }}
      />
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
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            url: "https://www.drpathcares.com/",
            logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
            name: "Dr. Path Cares",
            sameAs: [
              "https://www.facebook.com/drpathcares1",
              "https://www.instagram.com/drpathcares",
              "https://www.linkedin.com/company/dr-path-cares/",
              "https://www.youtube.com/@dr.pathcares",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8929062906",
              contactType: "Customer service",
              email: "Info@Drpathcares.com",
            },
          }),
        }}
      />

      {/* Page Content */}
      <Nav />
      <main>
        <ContactContent />
      </main>
      <AddressPage />
      <Footer />
    </>
  );
}

export default Page;
