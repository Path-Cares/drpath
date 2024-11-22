import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlatinumPackage from "@/components/pages/test/PlatinumPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import PcodPackage from "@/components/pages/test/PcodPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Pcod Profile"} totaltest={"Includes 32 Tests"} originalprice={"₹4200"} saleprice={"₹2800"} image={"/images/pcodprofile1.jpeg"}/>
        <PcodPackage/>
      </main>
      <Footer />
    </div>
  );
}

export default page;
