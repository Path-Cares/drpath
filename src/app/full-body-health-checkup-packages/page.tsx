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
      price: 799,
      originalPrice: "₹1199",
      link: "/fit-india",
    },
    {
      img: "/images/Thyroid.jpeg",
      title: "DRP077 Healthy India (Thyroid)",
      price: 1099,
      originalPrice: "₹1699",
      link: "/thyroid",
    },
    {
      img: "/images/Diabetic.jpeg",
      title: "DRP077 Healthy India (Diabetic)",
      price: 1099,
      originalPrice: "₹1699",
      link: "/diabetic",
    },
    {
      img: "/images/Thyroid&Diabetic.jpeg",
      title: "DRP082 Healthy India (Thyroid & Diabetic)",
      price: 1099,
      originalPrice: "₹1799",
      link: "/thyroid&diabetic",
    },
    {
      img: "/images/Fever Panel1.jpeg",
      title: "Fever Panel",
      price: 1699,
      originalPrice: "₹2199",
      link: "/fever-panel",
    },
    {
      img: "/images/Standard-Package.jpeg",
      title: "Standard Package",
      price: 1850,
      originalPrice: "₹4700",
      link: "/standard-package",
    },
    {
      img: "/images/Health-Checkup-Special-Combo-Package.jpeg",
      title: "Health Checkup Special Combo Package",
      price: 3199,
      originalPrice: "₹5199",
      link: "/health-checkup-special",
    },
    {
      img: "/images/Senior-Citizen-Package.jpeg",
      title: "Senior Citizen Package",
      price: 3199,
      originalPrice: "₹6700",
      link: "/senior-citizens-package",
    },
    {
      img: "/images/Classic-Package-Men.jpeg",
      title: "Classic Package Men",
      price: 2450,
      originalPrice: "₹5199",
      link: "/classic-men-package",
    },
    {
      img: "/images/Classic-Package-Women.jpeg",
      title: "Classic Package Women",
      price: 2450,
      originalPrice: "₹4700",
      link: "/classic-women-package",
    },
    {
      img: "/images/Platinum-Package.jpeg",
      title: "Platinum Package",
      price: 4199,
      originalPrice: "₹7700",
      link: "/platinum-package",
    },
    {
      img: "/images/pcodprofile1.jpeg",
      title: "Pcod Profile",
      price: 3000,
      originalPrice: "₹4400",
      link: "/pcod-profile",
    },
    {
      img: "/images/hepititisPanel1.jpeg",
      title: "Hepatitis Panel",
      price: 4699,
      originalPrice: "₹5199",
      link: "#",
    },
    {
      img: "/images/allergy.jpeg",
      title: "Allergy Package",
      price: 2200,
      originalPrice: "₹2600",
      link: "/allergy",
    },
    {
      img: "/images/hepititisPanel1.jpeg",
      title: "Multiple Myeloma",
      price: 7200,
      originalPrice: "₹8200",
      link: "/multiple-myeloma",
    },
  ];

  const sortedPackages = packages.sort((a, b) => {
    if (a.title === "Multiple Myeloma") return 1;
    if (b.title === "Multiple Myeloma") return -1;
    if (a.title === "Allergy Package") return 1;
    if (b.title === "Allergy Package") return -1;
    return a.price - b.price;
  });

  return (
    <>
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
            complete assessment of your health with accurate reports and expert
            guidance.
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
                  className="object-contain"
                />
              </div>

              <div className="text-center mt-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-500 line-through">
                  {item.originalPrice}
                </p>
                <p className="text-green-600 text-lg font-bold">
                  ₹{item.price}
                </p>
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
