import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import AddressPage from "@/components/Address";
import Script from "next/script";

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
      name: "National Accreditation Board for Testing and Calibration",
      pdf: "/pdfs/National Accreditation Board for Testing and Calibration.pdf",
      thumbnail:
        "/images/National Accreditation Board for Testing and Calibration.png",
    },
    {
      name: "Certificate RDPL",
      pdf: "",
      thumbnail: "/images/Certificate RDPL1.jpeg",
    },
    {
      name: "ISO 14001 DR PATHCARES",
      pdf: "",
      thumbnail: "/images/ISO 14001 DR PATHCARES1.jpeg",
    },
    {
      name: "ISO 45001 DR PATH CARE",
      pdf: "",
      thumbnail: "/images/ISO 45001 DR PATH CARE1.jpeg",
    },
    {
      name: "Lucknow Certificate",
      pdf: "",
      thumbnail: "/images/Lucknow Certificate1.jpeg",
    },
    {
      name: "Udyam Registration Certificate",
      pdf: "",
      thumbnail: "/images/Print _ Udyam Registration Certificate1.jpeg",
    },
  ];

  return (
    <>
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

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Certificates</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <li key={index} className="text-center">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between h-[420px] bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <Image
                      src={cert.thumbnail}
                      alt={cert.name}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover mb-4 rounded-lg p-2"
                    />
                    <p className="text-lg font-semibold text-center line-clamp-2">
                      {cert.name}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <AddressPage />
      <Footer />
    </>
  );
};

export default Certificates;
