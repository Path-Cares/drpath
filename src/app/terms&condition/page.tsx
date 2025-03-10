import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import Script from "next/script";
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
        <link rel="canonical" href="https://www.drpathcares.com/" />

        {/* JSON-LD Structured Data */}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.drpathcares.com/#organization",
              url: "https://www.drpathcares.com/",
              logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
              name: "Dr. Path Cares",
              sameAs: [
                "https://www.facebook.com/drpathcares1",
                "https://www.instagram.com/drpathcares",
                "https://www.linkedin.com/company/dr-path-cares/",
                "https://www.youtube.com/@dr.pathcares",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8929062906",
                  contactType: "customer support",
                  email: "info@drpathcares.com",
                },
              ],
            }),
          }}
        />
      </Head>

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
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

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
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
      <Nav />
      <div className="px-28 pt-10 bg-white">
        {/* Section 1: Disclaimer for DrPathCares */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-black mb-4">
            1. To DrPathcares!
          </h1>
          <p className="text-lg pb-4">
            These Terms And Conditions Outline The Rules And Regulations For The
            Use Of DrPathcares&apos;s Website, Located At Drpathcares.
          </p>
          <p className="text-lg pb-4">
            By Accessing This Website We Assume You Accept These Terms And
            Conditions. Do Not Continue To Use DrPathcares If You Do Not Agree
            To Take All Of The Terms And Conditions Stated On This Page.
          </p>
          <p className="text-lg pb-4">
            The Following Terminology Applies To These Terms And Conditions,
            Privacy Statement And Disclaimer Notice And All Agreements:
            &quot;Client&quot;, &quot;You&quot; And &quot;Your&quot; Refers To
            You, The Person Log On This Website And Compliant To The
            Company&apos;s Terms And Conditions. &quot;The Company&quot;,
            &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; And
            &quot;Us&quot;, Refers To Our Company. &quot;Party&quot;,
            &quot;Parties&quot;, Or &quot;Us&quot;, Refers To Both The Client
            And Ourselves. All Terms Refer To The Offer, Acceptance And
            Consideration Of Payment Necessary To Undertake The Process Of Our
            Assistance To The Client In The Most Appropriate Manner For The
            Express Purpose Of Meeting The Client&apos;s Needs In Respect Of
            Provision Of The Company&apos;s Stated Services, In Accordance With
            And Subject To, Prevailing Law Of Netherlands. Any Use Of The Above
            Terminology Or Other Words In The Singular, Plural, Capitalization
            And/Or He/She Or They, Are Taken As Interchangeable And Therefore As
            Referring To Same.
          </p>
        </section>

        {/* Section 2: Disclaimers for DrPathCares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">2. Cookies</h2>
          <p className="text-lg mb-4">
            We Employ The Use Of Cookies. By Accessing DrPathcares, You Agreed
            To Use Cookies In Agreement With The DrPathcares&apos;s Privacy
            Policy.
          </p>
          <p className="text-lg">
            Most Interactive Websites Use Cookies To Let Us Retrieve The
            User&apos;s Details For Each Visit. Cookies Are Used By Our Website
            To Enable The Functionality Of Certain Areas To Make It Easier For
            People Visiting Our Website. Some Of Our Affiliate/Advertising
            Partners May Also Use Cookies.
          </p>
        </section>

        {/* Section 3: Disclaimers for DrPathCares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">3. License</h2>
          <p className="text-lg mb-4">
            Unless Otherwise Stated, DrPathcares And/Or Its Licensors Own The
            Intellectual Property Rights For All Material On DrPathcares. All
            Intellectual Property Rights Are Reserved. You May Access This From
            DrPathcares For Your Own Personal Use Subjected To Restrictions Set
            In These Terms And Conditions.
          </p>
          <p className="text-lg mb-4">You Must Not:</p>
          <p className="text-lg mb-4">Republish Material From DrPathcares.</p>
          <p className="text-lg mb-4">
            Sell, Rent Or Sub-License Material From DrPathcares.
          </p>
          <p className="text-lg mb-4">
            Reproduce, Duplicate Or Copy Material From DrPathcares.
          </p>
          <p className="text-lg mb-4">Redistribute Content From DrPathcares.</p>
          <p className="text-lg mb-4">
            Parts Of This Website Offer An Opportunity For Users To Post And
            Exchange Opinions And Information In Certain Areas Of The Website.
            DrPathcares Does Not Filter, Edit, Publish Or Review Comments Prior
            To Their Presence On The Website. Comments Do Not Reflect The Views
            And Opinions Of DrPathcares, Its Agents And/Or Affiliates. Comments
            Reflect The Views And Opinions Of The Person Who Post Their Views
            And Opinions. To The Extent Permitted By Applicable Laws,
            DrPathcares Shall Not Be Liable For The Comments Or For Any
            Liability, Damages Or Expenses Caused And/Or Suffered As A Result Of
            Any Use Of And/Or Posting Of And/Or Appearance Of The Comments On
            This Website.
          </p>
          <p className="text-lg mb-4">
            DrPathcares Reserves The Right To Monitor All Comments And To Remove
            Any Comments Which Can Be Considered Inappropriate, Offensive Or
            Causes Breach Of These Terms And Conditions.
          </p>
          <p className="text-lg mb-4 ">
            You Warrant And Represent That: <br />
            You Are Entitled To Post The Comments On Our Website And Have All
            Necessary Licenses And Consents To Do So; <br />
            The Comments Do Not Invade Any Intellectual Property Right,
            Including Without Limitation Copyright, Patent Or Trademark Of Any
            Third Party; <br />
            The Comments Do Not Contain Any Defamatory, Libelous, Offensive,
            Indecent Or Otherwise Unlawful Material Which Is An Invasion Of
            Privacy; <br />
            The Comments Will Not Be Used To Solicit Or Promote Business Or
            Custom Or Present Commercial Activities Or Unlawful Activity. <br />
            You Hereby Grant DrPathcares A Non-Exclusive License To Use,
            Reproduce, Edit And Authorize Others To Use, Reproduce And Edit Any
            Of Your Comments In Any And All Forms, Formats Or Media.
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
