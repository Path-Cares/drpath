// import React, { useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import AddressPage from "@/components/Address";
import Script from "next/script";

// Metadata for SEO (App Router way)
export const metadata = {
  title: "Dr. Path Cares & Partner Labs | Healthcare Excellence",
  description:
    " Dr. Path Cares & associate partner labs celebrate their certified commitment to healthcare excellence, ensuring quality diagnostics & trusted medical services.",
  alternates: {
    canonical: "https://drpathcares.com/certificates",
  },
  openGraph: {
    title: "Dr. Path Cares & Partner Labs | Healthcare Excellence",
    description:
      " Dr. Path Cares & associate partner labs celebrate their certified commitment to healthcare excellence, ensuring quality diagnostics & trusted medical services.",
    url: "https://drpathcares.com/certificates",
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

const Certificates = () => {
  const certificates = [
    {
      name: "Certificate MC-Augomentum",
      url: "/images/Certificate MC-Augomentum1.jpeg",
    },
    { name: "Certificate RDPL", url: "/images/Certificate RDPL1.jpeg" },
    {
      name: "ISO 14001 DR PATHCARES",
      url: "/images/ISO 14001 DR PATHCARES1.jpeg",
    },
    {
      name: "ISO 45001 DR PATH CARE",
      url: "/images/ISO 45001 DR PATH CARE1.jpeg",
    },
    { name: "Lucknow Certificate", url: "/images/Lucknow Certificate1.jpeg" },
    {
      name: "Udyam Registration Certificate",
      url: "/images/Print _ Udyam Registration Certificate1.jpeg",
    },
  ];

  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const openModal = (url: string) => setSelectedImage(url);
  // const closeModal = () => setSelectedImage(null);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
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

      <Nav />

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url('/images/banner-background.webp')` }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center mb-10 bg-white p-3 md:p-8 rounded-lg shadow-md">
            <FaAward size={130} className="text-yellow-500 mr-8" />
            <div>
              <h1 className="text-4xl font-bold">
                Dr. PathCares+ Our Associate Partner Labs Certificate
              </h1>
              <p className="text-gray-700 mt-4 text-2xl">
                Celebrating our achievements and commitment to healthcare
                excellence.
              </p>
            </div>
          </div>

          {/* Certificates List */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Certificates</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <li key={index} className="text-center">
                  <div
                    // onClick={() => openModal(cert.url)}
                    className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <Image
                      src={cert.url}
                      alt={cert.name}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <p className="text-lg font-semibold">{cert.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Zoomed Image Modal */}
      {/* {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg relative max-w-sm w-full h-auto mx-4"
            style={{ maxHeight: "90%" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <div className="flex justify-center items-center h-full">
              <Image
                src={selectedImage}
                alt="Zoomed Certificate"
                width={800}
                height={600}
                className="object-contain max-h-[80vh] max-w-full"
              />
            </div>
          </div>
        </div>
      )} */}

      <AddressPage />
      <Footer />
    </>
  );
};

export default Certificates;
