import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SeniorCitizenPackage from "@/components/pages/test/SeniorCitizenPackage";
import BasicPackageBanner from "@/components/pages/Services/BasicPackageBanner";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <title>Full Body Checkup | DrPathCares</title>
        <meta
          name="description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs."
        />
        <link
          rel="canonical"
          href="https://drpathcares.com/senior-citizens-package"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "url": "https://www.drpathcares.com/",
              "logo": "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
              "name": "Dr. Path Cares",
              "sameAs": [
                "https://www.facebook.com/drpathcares1",
                "https://www.instagram.com/drpathcares",
                "https://www.linkedin.com/company/dr-path-cares/",
                "https://www.youtube.com/@dr.pathcares"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8929062906",
                "contactType": "Customer service",
                "email": "Info@Drpathcares.com"
              }
            }
          `}
        </script>
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
        <BasicPackageBanner
          testname={"Senior Citizens Package"}
          totaltest={"Includes 86 Tests"}
          originalprice={"₹6500"}
          saleprice={"₹2999"}
          image={"/images/Senior-Citizen-Package.jpeg"}
        />
        <SeniorCitizenPackage />
      </main>
      <Footer />
    </>
  );
}

export default Page;
