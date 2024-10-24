import HomeForm from "@/components/pages/home/HomeForm";
import Image from "next/image";
const HomeBanner = () => {
  return (
    <section className="mb-12 lg:mb-28">
      {/* <img src="images/banner-background.webp" className="absolute -z-10 top-[12%] right-[0.5%]" alt="" /> */}
      <div
        className="lg:flex items-center justify-center py-20 gap-12 px-5 lg:px-20 xl:px-24 2xl:px-40 grid bg-no-repeat bg-center relative rounded-3xl -mt-8 -z-10"
        style={{ backgroundImage: "url('images/banner-background.webp')" }}
      >
        <div className="content lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-semibold">
            Welcome To <br />
            <span className="lg:text-[5rem] text-[#1F2259] font-bold">
              Dr. Path Cares
            </span>
          </h1>
          <h2 className="text-2xl font-semibold">
            “The Pathology Lab, Doctor Suggested”
          </h2>
        </div>
        <div className="image lg:w-1/2 flex justify-center">
          {/* <Image
            src="/images/banner-image.png"
            alt="alt"
            width={1000}
            height={600}
          /> */}
          <img src="images/banner-image.png" alt="" />
        </div>
      </div>
      <div className="relative pt-8  px-4 xs:px-10 sm:px-20 md:px-40 lg:px-12 2xl:px-40">
        {/* <img src="images/book-an-appointment.webp" className="absolute top-[-88px] right-0 -z-10" alt="" /> */}
        {/* <div className="rounded-2xl oerlium flex justify-center bg-center py-6 bg-no-repeat bg-[#e3f6fb] lg:bg-transparent bg-cover" style={{ backgroundImage: "url('images/book-an-appointment.webp')" }}> */}
        <div className="rounded-2xl oerlium flex justify-center  py-6 px-4 bg-[#daf4fb] glass-effect">
          <div className=" py-6 md:flex flex-col xl:flex-row gap-8">
            <div className="flex space-x-2">
              <h2 className="text-3xl 2xl:text-5xl font-bold pb-4 lg:pb-0">
                Book An Appointment
              </h2>
              <div className="bg-[#00B7AB] w-2 h-full hidden xl:block"></div>
            </div>
            <HomeForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
