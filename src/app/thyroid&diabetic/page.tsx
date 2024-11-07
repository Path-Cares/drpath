import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import ThroidPackage from "@/components/pages/test/ThroidPackage";
import ThroidDiabeticPackage from "@/components/pages/test/ThroidDiabeticPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"DRP082 Healthy India (Thyroid & Diabetic)"} totaltest={"Includes 80 Tests"} originalprice={"₹1599"} saleprice={"₹999"} image={"/images/Thyroid&Diabetic.jpeg"}/>
        <ThroidDiabeticPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
