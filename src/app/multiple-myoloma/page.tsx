import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FitIndiaPackage from "@/components/pages/test/FitIndiaPackage";
import Head from "next/head";
import Script from "next/script";

function Page() {
  const pricingData = [
    {
      title: "Multiple Myoloma",
      pdfSrc: "/images/Multiple-Myloma-new.pdf",
      price: "₹8000/-",
      discountPrice: "₹7000/-",
    },
    // {
    //   title: "Allergy Drugs Panel",
    //   pdfSrc: "/images/Drugs Pannel.pdf",
    //   price: "₹3000/-",
    //   discountPrice: "₹2500/-",
    // },
    // {
    //   title: "Allergy Panel Veg",
    //   pdfSrc: "/images/Veg Allergy plane only.pdf",
    //   price: "₹3500/-",
    //   discountPrice: "₹3000/-",
    // },
  ];

  return (
    <>
      <Head>
        <title>Best Full Body Checkup in Noida at Home – Dr Pathcares</title>
        <meta
          name="description"
          content="Get the best full body checkup in Noida at home with Dr. PathCares. Enjoy hassle-free doorstep diagnostic services, accurate results, and comprehensive health monitoring."
        />
        <link rel="canonical" href="https://www.drpathcares.com/" />

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
      </Head>

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
      <Nav />
      <main className="py-8">
        {/* Section to display PDFs */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          {/* <h2 className="text-3xl font-bold mb-6 text-center">PDF Documents</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                {/* PDF Title */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                {/* Embedded PDF */}
                <iframe
                  src={`${item.pdfSrc}#toolbar=0`}
                  title={`PDF Document ${index + 1}`}
                  className="w-full border rounded overflow-hidden"
                  style={{ height: "100px" }} // Adjust height to fit PDF content
                ></iframe>

                {/* View Full PDF Link */}
                <a
                  href={item.pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-blue-600 hover:underline"
                >
                  View Full PDF
                </a>

                {/* Pricing Details */}
                <div className="mt-4 text-gray-700 text-sm">
                  <p>
                    <strong>Pricing:</strong> {item.price}
                  </p>
                  <p>
                    <strong>Discount Price:</strong> {item.discountPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fit India Package Section */}
        <FitIndiaPackage />
      </main>
      <Footer />
    </>
  );
}

export default Page;
