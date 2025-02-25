import StatsSection from "@/app/StatsSection/page";
import HomeForm from "@/components/pages/home/HomeForm";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const HomeBanner = () => {
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
              name: "Dr. Path Cares",
              url: "https://www.drpathcares.com/",
              logo: "https://drpathcares.com/_next/image?url=%2Fimages%2Fmainlogo.png&w=256&q=75",
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
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["Hindi", "English"],
                },
              ],
              email: "Info@Drpathcares.com",
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
      <section className="mb-12 lg:mb-28">
        <div
          className="lg:flex items-center justify-center py-20 gap-12 px-5 lg:px-20 xl:px-24 2xl:px-40 grid bg-no-repeat bg-center relative rounded-3xl -mt-8 -z-10"
          style={{ backgroundImage: "url('/images/banner-background.webp')" }}
        >
          <div className="content lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-semibold">
              Welcome To <br />
              <h2 className="lg:text-[5rem] text-[#1F2259] font-bold">
                Dr. Path Cares
              </h2>
            </h2>
            <h1 className="text-2xl font-semibold mt-4">
              “Best Full Body Check up in Noida At Home”
            </h1>
            <p className="text-lg mt-4">
              DrPathCares offers a Best full body checkup in Noida at home with
              comprehensive tests tailored to meet your health needs. We bring
              trusted diagnostic services to your doorstep, ensuring you get
              accurate results without stepping out of your home. With our best
              full body health checkups, we make sure that every aspect of your
              health is thoroughly examined and you receive top-quality care at
              your convenience.
            </p>
          </div>
          <div className="image lg:w-1/2 flex justify-center">
            {/* Optimized banner image with next/image */}
            <Image
              src="/images/banner-image.png"
              alt="Dr. Path Cares Banner"
              width={1000}
              height={600}
              className="rounded-xl"
            />
          </div>
        </div>

        <div>
          <StatsSection />
        </div>
        <div className="relative pt-8 px-4 xs:px-10 sm:px-20 md:px-40 lg:px-12 2xl:px-40">
          {/* Background Image Optimized */}
          {/* <Image
          src="/images/book-an-appointment.webp"
          alt="Book an appointment"
          className="absolute top-[-88px] right-0 -z-10"
          width={500}
          height={500}
        /> */}
          <div className="rounded-2xl oerlium flex justify-center py-6 px-4 bg-[#daf4fb] glass-effect">
            <div className="py-6 md:flex flex-col xl:flex-row gap-8">
              <div className="flex space-x-2">
                <h2 className="text-3xl 2xl:text-5xl font-bold pb-4 lg:pb-0">
                  Book An Appointment
                </h2>
                <div className="bg-[#00B7AB] w-2 h-full hidden xl:block"></div>
              </div>
              <HomeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
