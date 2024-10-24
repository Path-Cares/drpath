import H3GradientText from "@/components/pages/common/H3GradientText";
import Link from 'next/link';
const ThirdSection = () => {
  return (
    <>
      <div
        className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20 bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('images/third-sec-background.png')" }}
      >
        <div className=" flex flex-col grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <div className="grid">
          <div className=" flex flex-col justify-center items-center mb-5 lg:mb-0">
            <H3GradientText textalign="text-left" text="Most Booked Checkups"  />
            <p className="mt-4">
              India’s fast AI powered & temperature-controlled supply chain to collect and test your blood in freshest state.
            </p>
            </div>
            {/* <div className="grid jusitfy-start items-end"><Link href="/test"><button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">View All Checkups</button></Link></div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Link href="/basic-package">
            <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
                <p className="font-semibold text-white text-lg">Basic PACKAGE</p>
                    <div className="flex justify-between items-center">
                        <img src="images/fullbody-checkup.png" alt="" />
                        <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
                    </div>
            </div>
            </Link>
            <Link href="/standard-package">
            <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
                <p className="font-semibold text-white text-lg">STANDARD PACKAGE</p>
                    <div className="flex justify-between items-center">
                        <img src="images/fullbody-checkup.png" alt="" />
                        <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
                    </div>
            </div>
            </Link>

            <Link href="/classic-men-package">
            <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-dark.png')" }}>
                <p className="font-semibold text-white text-lg">CLASSIC MEN PACKAGE</p>
                    <div className="flex justify-between items-center">
                        <img src="images/sexual-health-checkup.png" alt="" />
                        <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
                    </div>
            </div>
            </Link>

            <Link href="/platinum-package">
            <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-dark.png')" }}>
                <p className="font-semibold text-white text-lg">Platinum Package</p>
                    <div className="flex justify-between items-center">
                        <img src="images/dermatology-checkup.png" alt="" />
                        <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
                    </div>
            </div>
            </Link>

            <Link href="/classic-women-package">
            <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
                <p className="font-semibold text-white text-lg">CLASSIC WOMEN PACKAGE</p>
                    <div className="flex justify-between items-center mt-2">
                        <img src="images/women-health-checkup.png" alt="" />
                        <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
                    </div>
            </div>
            </Link>
            <div className="grid jusitfy-start items-end"><Link href="/test"><button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">View All Checkups</button></Link></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;




























// import H3GradientText from "@/components/pages/common/H3GradientText";
// import Link from 'next/link';
// const ThirdSection = () => {
//   return (
//     <>
//       <div
//         className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20 bg-contain bg-no-repeat"
//         style={{ backgroundImage: "url('images/third-sec-background.png')" }}
//       >
//         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
//           <div className="grid">
//           <div className="mb-5 lg:mb-0">
//             <H3GradientText textalign="text-left" text="Most Booked Checkups"  />
//             <p className="mt-4">
//               India’s fast AI powered & temperature-controlled supply chain to collect and test your blood in freshest state.
//             </p>
//             </div>
//             {/* <div className="grid jusitfy-start items-end"><Link href="/test"><button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">View All Checkups</button></Link></div> */}
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <Link href="/basic-package">
//             <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
//                 <p className="font-semibold text-white text-lg">Basic PACKAGE</p>
//                     <div className="flex justify-between items-center">
//                         <img src="images/fullbody-checkup.png" alt="" />
//                         <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
//                     </div>
//             </div>
//             </Link>
//             <Link href="/standard-package">
//             <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
//                 <p className="font-semibold text-white text-lg">STANDARD PACKAGE</p>
//                     <div className="flex justify-between items-center">
//                         <img src="images/fullbody-checkup.png" alt="" />
//                         <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
//                     </div>
//             </div>
//             </Link>

//             <Link href="/classic-men-package">
//             <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-dark.png')" }}>
//                 <p className="font-semibold text-white text-lg">CLASSIC MEN PACKAGE</p>
//                     <div className="flex justify-between items-center">
//                         <img src="images/sexual-health-checkup.png" alt="" />
//                         <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
//                     </div>
//             </div>
//             </Link>

//             <Link href="/platinum-package">
//             <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-dark.png')" }}>
//                 <p className="font-semibold text-white text-lg">Platinum Package</p>
//                     <div className="flex justify-between items-center">
//                         <img src="images/dermatology-checkup.png" alt="" />
//                         <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
//                     </div>
//             </div>
//             </Link>

//             <Link href="/classic-women-package">
//             <div className="rounded-lg p-4 bg-cover bg-center h-full" style={{ backgroundImage: "url('images/checkup-green.png')" }}>
//                 <p className="font-semibold text-white text-lg">CLASSIC WOMEN PACKAGE</p>
//                     <div className="flex justify-between items-center mt-2">
//                         <img src="images/women-health-checkup.png" alt="" />
//                         <img src="images/button-checkup.png" className="h-[45px] w-[45px]" height="45" alt="" />
//                     </div>
//             </div>
//             </Link>
//             <div className="grid jusitfy-start items-end"><Link href="/test"><button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">View All Checkups</button></Link></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ThirdSection;
