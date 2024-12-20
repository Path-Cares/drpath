import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactContent from "@/components/pages/contact/contact";
import AddressPage from "@/components/Address";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <ContactContent />
      </main>
      <AddressPage/>
      <Footer />
    </div>
  );
}

export default page;
