import Head from "next/head";
import {
  FaHeartbeat,
  FaUserFriends,
  FaClinicMedical,
  FaStar,
} from "react-icons/fa";

const StatsSection = () => {
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
      <section className="flex justify-center py-12">
        <div className="bg-[#00B7AB] text-white w-full max-w-6xl rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center">
            <FaHeartbeat size={40} />
            <h3 className="text-3xl font-bold mt-2">100000</h3>
            <p className="text-gray-200 text-sm mt-1">Lab Test Done</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends size={40} />
            <h3 className="text-3xl font-bold mt-2">100000</h3>
            <p className="text-gray-200 text-sm mt-1">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClinicMedical size={40} />
            <h3 className="text-3xl font-bold mt-2">90000</h3>
            <p className="text-gray-200 text-sm mt-1">Diet Consultation</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar size={40} />
            <h3 className="text-3xl font-bold mt-2">4000</h3>
            <p className="text-gray-200 text-sm mt-1">
              Google Review & Rating 4.7
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;
