"use client";
import React from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { FaAward } from "react-icons/fa";

const Certificates = () => {
  // list of certificates
  const certificates = [
    { name: "Certificate MC-Augomentum.pdf", url: "/images/Certificate MC-Augomentum.pdf" },
    { name: "Certificate RDPL.pdf", url: "/images/Certificate RDPL.pdf" },
    { name: "ISO 14001 DR PATHCARES.pdf", url: "/images/ISO 14001 DR PATHCARES.pdf" },
    { name: "ISO 45001 DR PATH CARE.pdf", url: "/images/ISO 45001 DR PATH CARE.pdf" },
    { name: "Lucknow Certificate.pdf", url: "/images/Lucknow Certificate.pdf" },
    { name: "Print _ Udyam Registration Certificate.pdf", url: "/images/Print _ Udyam Registration Certificate (1).pdf" },
  ];

  return (
    <div>
      <Nav />

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10"
        style={{ backgroundImage: `url('/images/banner-background.webp')` }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Title Section */}
          <div className="flex items-center justify-center mb-10 bg-white p-8 rounded-lg shadow-md">
            <FaAward size={130} className="text-yellow-500 mr-8" />
            <div>
              <h1 className="text-5xl font-bold">Our Certificates</h1>
              <p className="text-gray-700 mt-4 text-2xl">
                Celebrating our achievements and commitment to healthcare excellence.
              </p>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
            <h2 className="text-3xl font-bold mb-6">Our Lab Addresses</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p><strong>DrPathCares+Our Associate Labs AUGMENTUM DIAGNOSTICS</strong></p>
              <p><strong>Delhi Lab Address:</strong></p>
              <ul className="ml-4 list-disc">
                <li>2nd Floor, RZ-4, Dabri - Palam Rd, opp. Dada Dev Hospital, Dabri Village, Dabri, New Delhi, Delhi, 110045</li>
                <li>Dr PathCares Wellnesscare Laboratory, Plot no. B-295 HV Complex 1st Floor New Ashok Nagar, Delhi 110096</li>
              </ul>

              <p><strong>Dr PathCares+Our Associate Labs RDPL ROYAL DIAGNOSTICS PVT. LTD.</strong></p>
              <p><strong>Rajasthan Lab Address:</strong></p>
              <p>17-18-19 Ajmer Road, Near ICICI Bank, Purani Chungi, Vidhyut Nagar, Jaipur - 302021</p>

              <p><strong>Dr PathCares+Our Associate Labs Wellness Diagnostic Private Limited.</strong></p>
              <p><strong>Lucknow Lab Address:</strong></p>
              <p>E2, 25, Kanpur Rd, Sector H, LDA Colony, Lucknow, Uttar Pradesh 226012</p>
            </div>
          </div>

          {/* Certificates List Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Our Certificates</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <li key={index} className="text-center">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                      <p className="text-lg font-semibold">{cert.name}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
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

