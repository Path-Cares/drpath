import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeverTwoPackage from "@/components/pages/test/FeverTwoPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Fever Panel 2"} totaltest={"Includes 87 Tests"} originalprice={"₹3500"} saleprice={"₹1499"} image={"images/drpathcare-services.webp"}/>
        <FeverTwoPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
