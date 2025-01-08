import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlatinumPackage from "@/components/pages/test/PlatinumPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import Head from "next/head";
import PcodPackage from "@/components/pages/test/PcodPackage";
import FeverPanel from "@/components/pages/test/FeverPanel";

function Page() {
  return (
    <>
     <Head>
        <title>Full Body Checkup | DrPathCares</title>
        <meta
          name="description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs."
        />
        <link rel="canonical" href="https://drpathcares.com/fever-panel" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5ZVV8F74');
            `,
          }}
        />
      </Head>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Nav />
      <main className="">
        <BasicPackageBanner testname={"Fever Panel"} totaltest={"Includes 32 Tests"} originalprice={"₹1999"} saleprice={"₹1499"} image={"/images/Fever Panel1.jpeg"}/>
        <FeverPanel/>
      </main>
      <Footer />
    </>
  );
}

export default Page;
