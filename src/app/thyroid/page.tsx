import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import ThroidPackage from "@/components/pages/test/ThroidPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Thyroid"} totaltest={"Includes 80 Tests"} originalprice={"₹1499"} saleprice={"₹899"} image={"images/test-banners.webp"}/>
        <ThroidPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
