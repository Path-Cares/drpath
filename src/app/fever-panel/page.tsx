import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlatinumPackage from "@/components/pages/test/PlatinumPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import PcodPackage from "@/components/pages/test/PcodPackage";
import FeverPanel from "@/components/pages/test/FeverPanel";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Fever Panel"} totaltest={"Includes 32 Tests"} originalprice={"₹1999"} saleprice={"₹1499"} image={"/images/Fever Panel1.jpeg"}/>
        <FeverPanel/>
      </main>
      <Footer />
    </div>
  );
}

export default page;
