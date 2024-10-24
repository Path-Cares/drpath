import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeartPackage from "@/components/pages/test/HeartPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Heart Package"} totaltest={"Includes 86 Tests"} originalprice={"₹3500"} saleprice={"₹1499"} image={"images/standardcheckup.webp"}/>
        <HeartPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
