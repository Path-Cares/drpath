import Image from "next/image";

const ServiceBanner = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-72 my-20">
      <div className="lg:flex justify-between items-center gap-8 backdrop-blur-lg bg-white bg-center bg-no-repeat bg-cover rounded-2xl" style={{ backgroundImage: "url('images/banner-background.webp')" }}>
        <div className="p-8">
          <h1 className="text-3xl mb-4">Wide Range of Testing Services
           We offer a variety of tests that will suit the needs and requirements of our patients.
.</h1>
          <h2 className="">
                 

                 Our tests will provide you with accurate results quickly so that you can better manage your health.
           </h2>
          <a href="/contact"><button className="bg-[#07C7B5] text-white px-3 py-2 rounded-2xl mt-5 mb-5 hover:bg-[#00B7AB]">Book An Appointment</button></a>
        </div>
        <div className="pt-4 pr-4">
        <Image src="/images/drpathcare-services.webp" width={600} height={100} className="h-80 rounded-xl" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;