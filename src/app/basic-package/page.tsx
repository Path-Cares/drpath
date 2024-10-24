import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Basic Package"} totaltest={"Includes 80 Tests"} originalprice={"₹3500"} saleprice={"₹1150"} image={"images/test-banners.webp"}/>
        <BasicPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
