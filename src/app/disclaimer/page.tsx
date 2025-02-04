import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <>
      <Head>
        <title>Best Full Body Checkup in Noida at Home – Dr Pathcares</title>
        <meta
          name="description"
          content="Get the best full body checkup in Noida at home with Dr. PathCares. Enjoy hassle-free doorstep diagnostic services, accurate results, and comprehensive health monitoring."
        />
        <link rel="canonical" href="https://drpathcares.com/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              url: "https://www.drpathcares.com/",
              logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
              name: "Dr. Path Cares",
              sameAs: [
                "https://www.facebook.com/drpathcares1",
                "https://www.instagram.com/drpathcares",
                "https://www.linkedin.com/company/dr-path-cares/",
                "https://www.youtube.com/@dr.pathcares",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8929062906",
                contactType: "Customer service",
                email: "Info@Drpathcares.com",
              },
            }),
          }}
        />

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
      <div className="px-28 pt-10 bg-white">
        {/* Section 1: Disclaimer for DrPathCares */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-4">
            1. Disclaimer For DrPathCares
          </h1>
          <p className="text-lg">
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email at{" "}
            <a href="mailto:Drpathcares1@Gmail.Com" className="underline">
              Drpathcares1@Gmail.Com
            </a>
            .
          </p>
        </section>

        {/* Section 2: Disclaimers for DrPathCares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            2. Disclaimers For DrPathCares
          </h2>
          <p className="text-lg mb-4">
            All The Information On This Website - Drpathcares - Is Published In
            Good Faith And For General Information Purpose Only. DrPathCares
            Does Not Make Any Warranties About The Completeness, Reliability And
            Accuracy Of This Information. Any Action You Take Upon The
            Information You Find On This Website (DrPathCares), Is Strictly At
            Your Own Risk. DrPathCares Will Not Be Liable For Any Losses And/Or
            Damages In Connection With The Use Of Our Website.
          </p>
          <p className="text-lg">
            From Our Website, You Can Visit Other Websites By Following
            Hyperlinks To Such External Sites. While We Strive To Provide Only
            Quality Links To Useful And Ethical Websites, We Have No Control
            Over The Content And Nature Of These Sites. These Links To Other
            Websites Do Not Imply A Recommendation For All The Content Found On
            These Sites. Site Owners And Content May Change Without Notice And
            May Occur Before We Have The Opportunity To Remove A Link Which May
            Have Gone &apos;Bad&apos;.
          </p>
          <p className="text-lg mb-4">
            Please Be Also Aware That When You Leave Our Website, Other Sites
            May Have Different Privacy Policies And Terms Which Are Beyond Our
            Control. Please Be Sure To Check The Privacy Policies Of These Sites
            As Well As Their &quot;Terms Of Service&quot; Before Engaging In Any
            Business Or Uploading Any Information.
          </p>
        </section>

        {/* Section 3: Consent */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">3. Consent</h2>
          <p className="text-lg mb-4">
            By Using Our Website, You Hereby Consent To Our Disclaimer And Agree
            To Its Terms.
          </p>
          {/* <div className="flex space-x-4">
            <button className="bg-[#00B7AB] text-white px-6 py-2 hover:bg-red-700">Accept</button>
            <button className="bg-[#00B7AB] text-white px-6 py-2 hover:bg-gray-800">Close</button>
          </div> */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
