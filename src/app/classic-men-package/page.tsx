import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ClassicMenPackage from "@/components/pages/test/ClassicMenPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Classic Men Package"} totaltest={"Includes 95 Tests"} originalprice={"₹4500"} saleprice={"₹2250"} image={"images/whychooseus.webp"}/>
        <ClassicMenPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
