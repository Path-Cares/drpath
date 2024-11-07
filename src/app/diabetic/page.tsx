import BasicPackage from "@/components/pages/test/BasicPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import ThroidPackage from "@/components/pages/test/ThroidPackage";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DiabeticPackage from "@/components/pages/test/DiabeticPackage";

function page() {
  return (
    <div>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"DRP007 Healthy India (Diabetic)"} totaltest={"Includes 80 Tests"} originalprice={"₹1499"} saleprice={"₹899"} image={"/images/Diabetic.jpeg"}/>
        <DiabeticPackage />
      </main>
      <Footer />
    </div>
  );
}

export default page;