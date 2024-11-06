import Link from "next/link";
import TestView from "@/components/pages/common/TestView";
import Image from "next/image";
const Plans = () => {
  return (
    <>
      <div className="lg:flex px-5 lg:px-20 xl:px-24 2xl:px-72 grid gap-6 justify-center lg:justify-between pt-12">
        <div className="flex items-center gap-4">
          <Image
            src="/images/Guarantee.png"
            alt="alt"
            width={50}
            height={50}
            className="bg-[#C7FDF9] rounded-2xl"
          />
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Certified Lab
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/Heart-with-Pulse.png"
            alt="alt"
            width={50}
            height={50}
            className="bg-[#C7FDF9] rounded-2xl"
          />
          <p className="text-lg sm:text-xl  md:text-2xl font-semibold">
            100% Trusted
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/happy-cutomer.png"
            alt="alt"
            width={50}
            height={50}
            className="bg-[#C7FDF9] rounded-2xl"
          />

          <p className="text-lg sm:text-xl  md:text-2xl  font-semibold">
            Happy Customers
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/Healthy-Eating.png"
            alt="alt"
            width={50}
            height={50}
            className="bg-[#C7FDF9] rounded-2xl"
          />
          <p className="text-lg sm:text-xl  md:text-2xl font-semibold">
            Diet Consultation
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 lg:px-10 xl:px-14 2xl:px-62 py-20 gap-12 lg:mb-12">
        <TestView
          testname={"Basic Package"}
          totaltest={"80 parameters included"}
          originalprice={"₹3500"}
          saleprice={"₹1150"}
          estimatetime={"Report Within 24 Hours"}
          url={"/basic-package"}
        />

        <TestView
          testname={"Standard Package"}
          totaltest={"90 parameters included"}
          originalprice={"₹4500"}
          saleprice={"₹1650"}
          estimatetime={"Report Within 24 Hours"}
          url={"/standard-package"}
        />

        <TestView
          testname={"Classic Package"}
          // totaltest={"95+ Tests"}
          totaltest={"95+ parameters included"}
          originalprice={"₹5500"}
          saleprice={"₹2250"}
          estimatetime={"Report Within 24 Hours"}
          url={"/classic-package"}
        />

        <TestView
          testname={"Platinum Package"}
          totaltest={"102 parameters included"}
          originalprice={"₹7500"}
          saleprice={"₹3999"}
          estimatetime={"Report Within 24 Hours"}
          url={"/platinum-package"}
        />
      </div>
    </>
  );
};
export default Plans;
