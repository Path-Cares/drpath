import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FitIndiaPackage from "@/components/pages/test/FitIndiaPackage";

function Page() {
  const pricingData = [
    {
      title: "Comprehensive Allergy Panel",
      pdfSrc: "/images/Allergy Pannel.pdf",
      price: "₹7000/-",
      discountPrice: "₹6000/-",
    },
    {
      title: "Allergy Drugs Panel",
      pdfSrc: "/images/Drugs Pannel.pdf",
      price: "₹3000/-",
      discountPrice: "₹2500/-",
    },
    {
      title: "Allergy Panel Veg",
      pdfSrc: "/images/Veg Allergy plane only.pdf",
      price: "₹3500/-",
      discountPrice: "₹3000/-",
    },
    
  ];

  return (
    <div>
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
    </div>
  );
}

export default Page;
