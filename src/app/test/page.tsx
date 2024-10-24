import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesBanner from "@/components/pages/Services/ServicesBanner";
import Plans from "@/components/pages/home/Plans";
import SwiperDeals from "@/components/pages/home/SwiperDeals";
import AllPakacge from "@/components/pages/Services/AllPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <ServicesBanner />
        <Plans />
        <SwiperDeals />
        <AllPakacge />
      </main>
      <Footer />
    </div>
  );
}

export default page;
