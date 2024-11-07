import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import ThroidPackage from "@/components/pages/test/ThroidPackage";
import FitIndiaPackage from "@/components/pages/test/FitIndiaPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"DRP055 Fit India"} totaltest={"Includes 80 Tests"} originalprice={"₹999"} saleprice={"₹599"} image={"/images/Fitindia.jpeg"}/>
        <FitIndiaPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;
