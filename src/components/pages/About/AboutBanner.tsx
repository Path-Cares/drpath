import Footer from "@/components/Footer";
import Image from "next/image";

const Contents = () => {
  return (
    <>
      <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pt-14 lg:pt-18">
        {/* About Us Section */}
        <div className="mb-20">
          <h1 className="text-center text-4xl font-semibold mb-3">About Us</h1>
          <p className="mb-3">
            DrPathCares is one of the most trusted leading preventive healthcare
            companies and provides the highest quality diagnostic tests and
            health packages to you at the comfort of your home. At DrPathCares,
            quality is a way of functioning, guided by stringent quality control
            parameters.
          </p>
          <p className="mb-3">
            Coupled with technology-enabled systems, we ensure consistent
            reproducibility of results and reports. Our tele-consultation
            services from India's most prestigious medical colleges, along with
            clinical nutritionists and dieticians, make staying healthy
            convenient and hassle-free.
          </p>
        </div>

        <div className="md:flex">
         
          {/* video1  */}
          <div className="w-full flex justify-center items-center mb-10">
            <video
              className=" rounded-lg shadow-lg h-[60vh] bg-gray-100"
              controls
              poster="/images/video-poster.png" // Ensure this image exists
              autoPlay
              muted
            >
              <source src="/images/aboutus.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           {/* video2  */}
          <div className="w-full flex justify-center items-center mb-10">
            <video
              className=" rounded-lg shadow-lg h-[60vh] bg-gray-100"
              controls
              poster="/images/video-poster.png" // Ensure this image exists
              autoPlay
              muted
            >
              <source src="/images/aboutus1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           {/* video3  */}
          <div className="w-full flex justify-center items-center mb-10">
            <video
              className=" rounded-lg shadow-lg h-[60vh] bg-gray-100"
              controls
              poster="/images/video-poster.png" // Ensure this image exists
              autoPlay
              muted
            >
              <source src="/images/aboutus2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           {/* video4  */}
          <div className="w-full flex justify-center items-center mb-10">
            <video
              className=" rounded-lg shadow-lg h-[60vh] bg-gray-100"
              controls
              poster="/images/video-poster.png" // Ensure this image exists
              autoPlay
              muted
            >
              <source src="/images/aboutus3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
           {/* video5  */}
          <div className="w-full flex justify-center items-center mb-10">
            <video
              className=" rounded-lg shadow-lg h-[60vh] bg-gray-100"
              controls
              poster="/images/video-poster.png" // Ensure this image exists
              autoPlay
              muted
            >
              <source src="/images/aboutus4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="my-6 bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: "url('/images/banner-background.webp')" }} // Ensure this image exists
        >
          <h2 className="text-center text-3xl mb-3 pt-8 font-medium">
            Why Choose DrPathCares
          </h2>
          <div className="lg:flex items-center justify-center">
            <div className="flex justify-center">
              <Image
                src="/images/whychooseus.webp" // Ensure this image exists
                alt="Why Choose Us"
                width={400}
                height={400}
              />
            </div>
            <ul className="list-disc list-inside text-lg font-medium p-6">
              <li>Affordable & honest pricing with 100% accurate reports</li>
              <li>Expert team of phlebotomists with MD pathologists</li>
              <li>On-time, fast & accurate service with quality</li>
              <li>Easy-to-download e-reports at a click</li>
              <li>Fast & accurate test reports</li>
              <li>Free medical consultation</li>
              <li>Fully automated machines</li>
              <li>Professional staff</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Footer Component */}
      {/* <Footer /> */}
    </>
  );
};

export default Contents;
