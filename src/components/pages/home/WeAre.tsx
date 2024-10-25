import Image from "next/image";
import H3GradientText from "@/components/pages/common/H3GradientText";

const WeAre = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20">
      <div className="lg:flex grid gap-12 lg:gap-20">
        <div className="lg:w-[70%]">
          <H3GradientText
            textalign="text-left"
            text="We Are A Certified And Award Winning You Can Trust"
          />
          <p className="text-gray-900 text-md py-3">
            DrPathCares Has Created Tech Enabled Processes That Ensure That The
            Customer Entire Journey From Booking To Report Delivery Is Seamless
            And Simplified. Through Our Proprietary Technological Developments
            Like The Tamper Proof Sample Collection Kits (SmartPrik) To
            Pre-Barcoded Vials To Live Temperature Monitored Sample Transportation
            Boxes (CoolSure), We Make Sure That The Sample Collection And Testing
            Process Is Quick, Painless And Of High Quality.
          </p>
        </div>
        <div className="lg:w-[30%] flex justify-center">
          <Image 
            src="/images/certified-doctors.webp" 
            alt="Certified doctors" 
            width={300} // Adjust width as necessary
            height={300} // Adjust height as necessary
            className="object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default WeAre;
