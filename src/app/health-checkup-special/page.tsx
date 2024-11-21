import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
// import Healthcheckupspecialpackage from "@/components/pages/test/healthcheckupspecialpackage";
// import ThroidPackage from "@/components/pages/test/ThroidPackage";
// import ThroidDiabeticPackage from "@/components/pages/test/ThroidDiabeticPackage";
// import Healthcheckupspecialpackage from "@/components/pages/test/healthcheckupspecialpackage";
import Healthcheckupspecialpackage from "@/components/pages/test/Healthcheckupspecialpackage";



function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Standard Care"} totaltest={"Includes 90+ Tests"} originalprice={"₹4500"} saleprice={"₹1650"} image={"/images/Thyroid&Diabetic.jpeg"}/>
        <Healthcheckupspecialpackage/>
      </main>
      <Footer />
    </div>
  );
}

export default page;
