import Image from "next/image";
import H3GradientText from "@/components/pages/common/H3GradientText";
import Link from "next/link";

const ThirdSection = () => {
  return (
    <>
      <div
        className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20 bg-contain bg-no-repeat"
        // style={{ backgroundImage: "url('/images/third-sec-background.png')" }}
      >
        {/* Video Section */}
        <div className="w-full mb-10">
          <video
            className="w-full rounded-lg shadow-lg h-[60vh] bg-gray-100"
            controls
            poster="/images/video-poster.png"
            autoPlay
            muted
          >
            <source src="/images/packages-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text and Packages Section */}
        <div className="flex flex-col grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <div className="grid">
            <div className="flex flex-col justify-center items-center mb-5 lg:mb-0">
              <H3GradientText
                textalign="text-left"
                text="Most Booked Checkups"
              />
              <p className="mt-4">
                India’s fast AI-powered & temperature-controlled supply chain to
                collect and test your blood in the freshest state.
              </p>
            </div>
          </div>

          {/* Packages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* <Link href="/basic-package">
              <div
                className="rounded-lg p-4 bg-cover bg-center h-full"
                style={{ backgroundImage: "url('/images/checkup-green.png')" }}
              >
                <p className="font-semibold text-white text-lg">Basic PACKAGE</p>
                <div className="flex justify-between items-center">
                  <Image
                    src="/images/fullbody-checkup.png"
                    alt="Full Body Checkup"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/button-checkup.png"
                    alt="Button Checkup"
                    className="h-[45px] w-[45px]"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link> */}

            <Link href="/standard-package">
              <div
                className="rounded-lg p-4 bg-cover bg-center h-full"
                style={{ backgroundImage: "url('/images/checkup-green.png')" }}
              >
                <p className="font-semibold text-white text-lg">
                  STANDARD PACKAGE
                </p>
                <div className="flex justify-between items-center">
                  <Image
                    src="/images/fullbody-checkup.png"
                    alt="Full Body Checkup"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/button-checkup.png"
                    alt="Button Checkup"
                    className="h-[45px] w-[45px]"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link>

            <Link href="/classic-men-package">
              <div
                className="rounded-lg p-4 bg-cover bg-center h-full"
                style={{ backgroundImage: "url('/images/checkup-dark.png')" }}
              >
                <p className="font-semibold text-white text-lg">
                  CLASSIC MEN PACKAGE
                </p>
                <div className="flex justify-between items-center">
                  <Image
                    src="/images/sexual-health-checkup.png"
                    alt="Sexual Health Checkup"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/button-checkup.png"
                    alt="Button Checkup"
                    className="h-[45px] w-[45px]"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link>

            <Link href="/platinum-package">
              <div
                className="rounded-lg p-4 bg-cover bg-center h-full"
                style={{ backgroundImage: "url('/images/checkup-dark.png')" }}
              >
                <p className="font-semibold text-white text-lg">
                  Platinum Package
                </p>
                <div className="flex justify-between items-center">
                  <Image
                    src="/images/dermatology-checkup.png"
                    alt="Dermatology Checkup"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/button-checkup.png"
                    alt="Button Checkup"
                    className="h-[45px] w-[45px]"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link>

            <Link href="/classic-women-package">
              <div
                className="rounded-lg p-4 bg-cover bg-center h-full"
                style={{ backgroundImage: "url('/images/checkup-green.png')" }}
              >
                <p className="font-semibold text-white text-lg">
                  CLASSIC WOMEN PACKAGE
                </p>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/images/women-health-checkup.png"
                    alt="Women Health Checkup"
                    width={100}
                    height={100}
                  />
                  <Image
                    src="/images/button-checkup.png"
                    alt="Button Checkup"
                    className="h-[45px] w-[45px]"
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link>

            <div className="grid justify-start items-end">
              <Link href="/test">
                <button className="w-fit px-6 py-2 border-2 border-[#00B7AB] text-[#00B7AB] rounded-2xl font-semibold">
                  View all Packages
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
