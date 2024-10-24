import Link from 'next/link';
import TestView from "@/components/pages/common/TestView";

const AllPakacge = () => {
  return (
    <section className="px-5 lg:px-20 xl:px-24 2xl:px-72 pb-20">
      <div className="grid sm:gid-cols-2 lg:grid-cols-3 gap-12">


      <TestView testname={"Basic Package"} totaltest={"80 parameters included"} originalprice={"₹3500"} saleprice={"₹1150"} estimatetime={"Report Within 6 Hours"} url={"/basic-package"} />
        
      <TestView testname={"Standard Package"} totaltest={"90 parameters included"} originalprice={"₹4500"} saleprice={"₹1650"} estimatetime={"Report Within 6 Hours"} url={"/standard-package"} />
        
      <TestView testname={"Classic Men Package"} totaltest={"95 parameters included"} originalprice={"₹4500"} saleprice={"₹2250"} estimatetime={"Report Within 6 Hours"} url={"/classic-men-package"} />
      
      <TestView testname={"CLASSIC WOMEN PACKAGE"} totaltest={"95 parameters included"} originalprice={"₹4500"} saleprice={"₹2250"} estimatetime={"Report Within 6 Hours"} url={"/classic-women-package"} />

      <TestView testname={"Platinum Package"} totaltest={"102 parameters included"} originalprice={"₹7500"} saleprice={"₹3999"} estimatetime={"Report Within 6 Hours"} url={"/platinum-package"} />

      <TestView testname={"SENIOR CITIZENS"} totaltest={"86 parameters included"} originalprice={"₹4500"} saleprice={"₹1650"} estimatetime={"Report Within 6 Hours"} url={"/senior-citizens-package"} />
     
      <TestView testname={"Fever Panel 1"} totaltest={"86 parameters included"} originalprice={"₹3500"} saleprice={"₹1499"} estimatetime={"Report Within 6 Hours"} url={"/fever-panel-one-package"} />
     
      <TestView testname={"Fever Panel 2"} totaltest={"87 parameters included"} originalprice={"₹3500"} saleprice={"₹1499"} estimatetime={"Report Within 6 Hours"} url={"/fever-panel-two-package"} />
     
      <TestView testname={"Heart Package"} totaltest={"87 parameters included"} originalprice={"₹3500"} saleprice={"₹1499"} estimatetime={"Report Within 6 Hours"} url={"/heart-package"} />

      </div>
    </section>
  );
};

export default AllPakacge;
