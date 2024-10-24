import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SeniorCitizenPackage from "@/components/pages/test/SeniorCitizenPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Senior Citizens Package"} totaltest={"Includes 86 Tests"} originalprice={"₹6500"} saleprice={"₹2999"} image={"images/whychooseus.webp"}/>
        <SeniorCitizenPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
