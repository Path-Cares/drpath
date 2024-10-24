import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StandardPackage from "@/components/pages/test/StandardPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Standard Package"} totaltest={"Includes 90 Tests"} originalprice={"₹4500"} saleprice={"₹1650"} image={"images/standardcheckup.webp"}/>
        <StandardPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
