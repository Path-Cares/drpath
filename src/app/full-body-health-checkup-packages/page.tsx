import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// Metadata for SEO
export const metadata = {
  title: "Complete Full Body Health Checkup Packages | Dr. Path Cares",
  description:
    "Dr. Path Cares offers comprehensive and affordable Full Body Health Checkup Packages with essential tests and expert guidance for long-term well-being.",
  alternates: {
    canonical: "https://drpathcares.com/full-body-health-checkup-packages",
  },
  openGraph: {
    title: "Complete Full Body Health Checkup Packages | Dr. Path Cares",
    description:
      "Dr. Path Cares offers comprehensive and affordable Full Body Health Checkup Packages with essential tests and expert guidance for long-term well-being.",
    url: "https://drpathcares.com/full-body-health-checkup-packages",
    siteName: "Dr. Path Cares",
    images: [
      {
        url: "https://drpathcares.com/images/mainlogo.png",
        width: 800,
        height: 600,
        alt: "Dr. Path Cares Logo",
      },
    ],
    type: "website",
  },
};

const HealthCheckup = () => {
  const packages = [
    {
      img: "/images/Fitindia.jpeg",
      title: "DRP055 Fit India",
      price: 599,
      originalPrice: "₹999",
      link: "/fit-india",
    },
    {
      img: "/images/Thyroid.jpeg",
      title: "DRP077 Healthy India (Thyroid)",
      price: 899,
      originalPrice: "₹1499",
      link: "/thyroid",
    },
    {
      img: "/images/Diabetic.jpeg",
      title: "DRP077 Healthy India (Diabetic)",
      price: 899,
      originalPrice: "₹1499",
      link: "/diabetic",
    },
    {
      img: "/images/Thyroid&Diabetic.jpeg",
      title: "DRP082 Healthy India (Thyroid & Diabetic)",
      price: 999,
      originalPrice: "₹1599",
      link: "/thyroid&diabetic",
    },
    {
      img: "/images/Fever Panel1.jpeg",
      title: "Fever Panel",
      price: 1499,
      originalPrice: "₹1999",
      link: "/fever-panel",
    },
    {
      img: "/images/Standard-Package.jpeg",
      title: "Standard Package",
      price: 1650,
      originalPrice: "₹4500",
      link: "/standard-package",
    },
    {
      img: "/images/Health-Checkup-Special-Combo-Package.jpeg",
      title: "Health Checkup Special Combo Package",
      price: 2999,
      originalPrice: "₹4999",
      link: "/health-checkup-special",
    },
    {
      img: "/images/Senior-Citizen-Package.jpeg",
      title: "Senior Citizen Package",
      price: 2999,
      originalPrice: "₹6500",
      link: "/senior-citizens-package",
    },
    {
      img: "/images/Classic-Package-Men.jpeg",
      title: "Classic Package Men",
      price: 2250,
      originalPrice: "₹4999",
      link: "/classic-men-package",
    },
    {
      img: "/images/Classic-Package-Women.jpeg",
      title: "Classic Package Women",
      price: 2250,
      originalPrice: "₹4500",
      link: "/classic-women-package",
    },
    {
      img: "/images/Platinum-Package.jpeg",
      title: "Platinum Package",
      price: 3999,
      originalPrice: "₹7500",
      link: "/platinum-package",
    },
    {
      img: "/images/pcodprofile1.jpeg",
      title: "Pcod Profile",
      price: 2800,
      originalPrice: "₹4200",
      link: "/pcod-profile",
    },
    {
      img: "/images/hepititisPanel1.jpeg",
      title: "Hepatitis Panel",
      price: 4499,
      originalPrice: "₹4999",
      link: "#",
    },
    { img: "/images/allergy.jpeg", title: "Allergy Package", link: "/allergy" },
    {
      img: "/images/hepititisPanel1.jpeg",
      title: "Multiple Myeloma",
      price: 7000,
      originalPrice: "₹8000",
      link: "/multiple-myeloma",
    },
  ];

  const sortedPackages = packages.sort((a, b) => {
    if (a.title === "Multiple Myeloma") return 1;
    if (b.title === "Multiple Myeloma") return -1;
    if (a.title === "Allergy Package") return 1;
    if (b.title === "Allergy Package") return -1;
    const priceA = a.price || Infinity;
    const priceB = b.price || Infinity;
    return priceA - priceB;
  });

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

      <div className="flex flex-col items-center">
        <div
          className="w-full h-64 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/banner-background.webp')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-[#002D62]">
              Full Body Health Checkup Packages
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-6 text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Dr. Path Cares Comprehensive Health Checkup Packages
          </h2>
          <p className="text-gray-600">
            Our Full Body Health Checkup Packages are designed to provide a
            complete assessment of your health. These health screening packages
            include essential blood test packages, imaging tests, and other
            preventive health checkups to detect early warning signs of
            potential health issues. With Dr. Path Cares wellness packages, you
            get accurate reports and expert guidance for effective treatments,
            ensuring long-term well-being. Book your Complete Health Checkup
            Package today and take the first step towards a healthier life!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
          {sortedPackages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col items-center h-full p-4"
            >
              <div className="relative h-48 w-full flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                {item.originalPrice && (
                  <p className="text-gray-500 line-through">
                    {item.originalPrice}
                  </p>
                )}
                {item.price && (
                  <p className="text-green-500 text-lg font-bold">
                    ₹{item.price}
                  </p>
                )}
              </div>
              <Link href={item.link} className="w-full">
                <button className="w-full bg-[#002D62] text-white py-2 px-4 rounded hover:bg-[#001a42] transition-all duration-200">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HealthCheckup;
