import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClassicWomenPackage from "@/components/pages/test/ClassicWomenPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Classic Women Package"} totaltest={"Includes 95 Tests"} originalprice={"₹4500"} saleprice={"₹2250"} image={"images/standardcheckup.webp"}/>
        <ClassicWomenPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
