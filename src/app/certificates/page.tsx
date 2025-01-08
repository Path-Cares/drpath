"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import { FaAward } from "react-icons/fa";
import Image from "next/image";
import AddressPage from "@/components/Address";

const Certificates = () => {
  const certificates = [
    { name: "Certificate MC-Augomentum", url: "/images/Certificate MC-Augomentum1.jpeg" },
    { name: "Certificate RDPL", url: "/images/Certificate RDPL1.jpeg" },
    { name: "ISO 14001 DR PATHCARES", url: "/images/ISO 14001 DR PATHCARES1.jpeg" },
    { name: "ISO 45001 DR PATH CARE", url: "/images/ISO 45001 DR PATH CARE1.jpeg" },
    { name: "Lucknow Certificate", url: "/images/Lucknow Certificate1.jpeg" },
    { name: "Udyam Registration Certificate", url: "/images/Print _ Udyam Registration Certificate1.jpeg" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
    <Head>
        <title>Full Body Checkup | DrPathCares</title>
        <meta
          name="description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs."
        />
        <link rel="canonical" href="https://drpathcares.com/allergy" />
        {/* Google Tag Manager */}
        <script
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
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Nav />

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url('/images/banner-background.webp')` }}
      >
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="flex items-center justify-center mb-10 bg-white p-3 md:p-8 rounded-lg shadow-md">
            <FaAward size={130} className="text-yellow-500 mr-8" />
            <div>
              <h1 className="text-4xl font-bold">Dr. PathCares+ Our Associate Partner Labs Certificate</h1>
              <p className="text-gray-700 mt-4 text-2xl">
                Celebrating our achievements and commitment to healthcare excellence.
              </p>
            </div>
          </div>

          {/* Certificates Lists*/}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Certificates</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <li key={index} className="text-center">
                  <div
                    onClick={() => openModal(cert.url)}
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

      {/* Zoomed Image */}
      {selectedImage && (
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
      )}
       <AddressPage/>
      <Footer />
    </>
  );
};

export default Certificates;



































// import { FaTrophy } from "react-icons/fa";

// const Awards = () => {
//   return (
//   <div>
//     <Nav/>

//     <div
//       className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-3"
//       style={{ backgroundImage: `url('/images/banner-background.webp')` }}
//     >
//       <div className="bg-opacity-80 rounded-lg max-w-8xl mx-auto h-[200px]">
//         <div className="flex items-center mb-10 bg-[#5F9EA0] p-6 rounded-lg">
//           <FaTrophy size={120} className="text-yellow-500 mr-6" />
//           <div>
//             <p className="text-4xl font-bold">Our Awards</p>
//             <p className="text-black mt-2 text-2xl">
//               This shows our hard work and dedication towards healthcare.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-4]">
//           {/* Award 1 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award1.png"
//               alt="Award 1"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Award 2 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award3.png"
//               alt="Award 2"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Award 3 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award4.png"
//               alt="Award 3"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Award 4 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award3.png"
//               alt="Award 4"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Award 5 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award1.png"
//               alt="Award 5"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Award 6 */}
//           <div className="border rounded-lg p-4 bg-white shadow-md">
//             <img
//               src="/images/award4.png"
//               alt="Award 6"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       </div>
//      </div>
    
//   );
// };

// export default Awards;

// import Nav from "@/components/Nav";
// import { FaTrophy } from "react-icons/fa";

// const Awards = () => {
//   return (
//     <div>
//       <Nav />

//       <div
//         className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10"
//         style={{ backgroundImage: `url('/images/banner-background.webp')` }}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-col items-center justify-center mb-10">
//             <FaTrophy size={100} className="text-yellow-500" />
//             <h1 className="text-5xl font-bold mt-4">Our Awards</h1>
//             <p className="text-gray-600 mt-2 text-lg text-center">
//               This shows our hard work and dedication towards healthcare.
//             </p>
//           </div>

//           <div className="grid grid-cols-3 gap-8">
//             {[1, 3, 4, 3, 4, 1].map((award) => (
//               <div
//                 key={award}
//                 className="border rounded-lg p-6 bg-white shadow-lg transition-transform transform hover:scale-105"
//               >
//                 <img
//                   src={`/images/award${award}.png`}
//                   alt={`Award ${award}`}
//                   className="w-full h-60 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Awards;

