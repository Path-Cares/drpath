import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeverOnePackage from "@/components/pages/test/FeverOnePackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Fever Panel 1"} totaltest={"Includes 86 Tests"} originalprice={"₹3500"} saleprice={"₹1499"} image={"images/test-banners.webp"}/>
        <FeverOnePackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
