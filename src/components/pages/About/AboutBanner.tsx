import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

const Contents = () => {
  return (
    <>
      <Head>
        <title>
          Full Body Checkup| Blood Test | Pathology Lab - DrPathCares
        </title>
        <meta
          name="description"
          content="DrPathCares offers comprehensive health solutions with complete blood tests, full body checkup packages, and affordable options for all your pathology needs."
        />
        <link rel="canonical" href="https://drpathcares.com/aboutus" />
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
        {/* End Google Tag Manager */}
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
      {/* End Google Tag Manager (noscript) */}

      <section className="px-5 lg:px-20 xl:px-24 2xl:px-56 pt-14 lg:pt-18">
        {/* About Us Section */}
        <div className="mb-20">
          <h1 className="text-center text-4xl font-semibold mb-3">About Us</h1>
          <p className="mb-3">
            DrPathCares is one of the most trusted leading preventive healthcare
            companies and provides the highest quality diagnostic tests and
            health packages to you at the comfort of your home. At DrPathCares,
            quality is a way of functioning, guided by stringent quality control
            parameters.
          </p>
          <p className="mb-3">
            Coupled with technology-enabled systems, we ensure consistent
            reproducibility of results and reports. Our tele-consultation
            services from India's most prestigious medical colleges, along with
            clinical nutritionists and dieticians, make staying healthy
            convenient and hassle-free.
          </p>
        </div>

        <div className="md:flex">
          {/* Videos */}
          {[...Array(5)].map((_, index) => (
            <div className="w-full flex justify-center items-center mb-10" key={index}>
              <video
                className="rounded-lg shadow-lg h-[60vh] bg-gray-100"
                controls
                poster="/images/video-poster.png"
                autoPlay
                muted
              >
                <source
                  src={`/images/aboutus${index === 0 ? "" : index}.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div
          className="my-6 bg-center bg-no-repeat rounded-2xl"
          style={{ backgroundImage: "url('/images/banner-background.webp')" }}
        >
          <h2 className="text-center text-3xl mb-3 pt-8 font-medium">
            Why Choose DrPathCares
          </h2>
          <div className="lg:flex items-center justify-center">
            <div className="flex justify-center">
              <Image
                src="/images/whychooseus.webp"
                alt="Why Choose Us"
                width={400}
                height={400}
              />
            </div>
            <ul className="list-disc list-inside text-lg font-medium p-6">
              <li>Affordable & honest pricing with 100% accurate reports</li>
              <li>Expert team of phlebotomists with MD pathologists</li>
              <li>On-time, fast & accurate service with quality</li>
              <li>Easy-to-download e-reports at a click</li>
              <li>Fast & accurate test reports</li>
              <li>Free medical consultation</li>
              <li>Fully automated machines</li>
              <li>Professional staff</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contents;
