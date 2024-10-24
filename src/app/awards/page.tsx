


// import Nav from "@/components/Nav";
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

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { FaMedal, FaAward, FaCrown, FaStar, FaGem, FaRibbon } from "react-icons/fa";

const Awards = () => {
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
              <h1 className="text-5xl font-bold">Our Awards</h1>
              <p className="text-gray-700 mt-4 text-2xl">
                Celebrating our achievements and commitment to healthcare excellence.
              </p>
            </div>
          </div>

          {/* Awards Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-12">
            {/* Award 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaMedal size={100} className="text-blue-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Best Service</h2>
              <p className="text-gray-600 mt-4">Award for providing outstanding service in healthcare.</p>
            </div>

            {/* Award 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaCrown size={100} className="text-purple-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Leadership Award</h2>
              <p className="text-gray-600 mt-4">Honoring exceptional leadership in the medical field.</p>
            </div>

            {/* Award 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaStar size={100} className="text-yellow-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Excellence in Care</h2>
              <p className="text-gray-600 mt-4">Recognizing top-quality care and patient dedication.</p>
            </div>

            {/* Award 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaGem size={100} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Innovator Award</h2>
              <p className="text-gray-600 mt-4">For innovative advancements in healthcare technology.</p>
            </div>

            {/* Award 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaRibbon size={100} className="text-pink-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Community Impact</h2>
              <p className="text-gray-600 mt-4">Award for significant contributions to community health.</p>
            </div>

            {/* Award 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaAward size={100} className="text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Lifetime Achievement</h2>
              <p className="text-gray-600 mt-4">Honoring a lifetime of commitment to healthcare excellence.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaGem size={100} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Innovator Award</h2>
              <p className="text-gray-600 mt-4">For innovative advancements in healthcare technology.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaMedal size={100} className="text-blue-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Best Service</h2>
              <p className="text-gray-600 mt-4">Award for providing outstanding service in healthcare.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <FaGem size={100} className="text-teal-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold">Innovator Award</h2>
              <p className="text-gray-600 mt-4">For innovative advancements in healthcare technology.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Awards;
