import Image from "next/image";
import H3GradientText from "@/components/pages/common/H3GradientText";

const WeAre = () => {
  return (
    <section className="px-6 mb-10 lg:px-20 xl:px-24 2xl:px-72 py-20 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg shadow-lg">
      <div className="lg:flex items-center gap-12 lg:gap-16">
        <div className="lg:w-[60%]">
          <H3GradientText
            textalign="text-left"
            text="We Are A Certified And Award-Winning Service You Can Trust"
          />
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            DrPathCares offers full body checkups near me, making the experience
            convenient, efficient, and trustworthy. We have created tech-enabled
            processes that ensure the customer journey from booking to report
            delivery is seamless and simplified. Through our proprietary
            technological developments, like the tamper-proof sample collection
            kits (SmartPrix), pre-barcoded vials, and live temperature-monitored
            sample transportation boxes (CoolSure), we make the sample
            collection and testing process quick, painless, and of high quality.
            Whether you're looking for a comprehensive health checkup near me or
            testing for a specific health concern, we ensure the best experience
            at competitive full body checkup prices.
          </p>
        </div>
        <div className="lg:w-[40%] flex justify-center mt-8 lg:mt-0">
          <Image
            src="/images/certified-doctors-new.png"
            alt="Certified doctors"
            width={450} // Increased width by 50%
            height={450} // Increased height by 50%
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WeAre;
