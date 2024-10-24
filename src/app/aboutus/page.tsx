import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contents from "@/components/pages/About/AboutBanner";
import Cities from "@/components/pages/Cities";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <Contents />
        <Cities />
      </main>
      <Footer />
    </div>
  );
}

export default page;
