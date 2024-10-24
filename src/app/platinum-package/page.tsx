import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlatinumPackage from "@/components/pages/test/PlatinumPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Platinum Package"} totaltest={"Includes 102 Tests"} originalprice={"₹7500"} saleprice={"₹3999"} image={"images/drpathcare-services.webp"}/>
        <PlatinumPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
