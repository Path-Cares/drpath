import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import Image from "next/image";

const socialActivity = () => {
  const galleryImages = [
    "/images/sa1.jpeg",
    "/images/sa2.jpeg",
    "/images/sa3.jpeg",
    "/images/sa4.jpeg",
    "/images/sa5.jpeg",
    "/images/sa6.jpeg",
    "/images/sa7.jpeg",
    "/images/sa8.jpeg",
    "/images/sa9.jpeg",
    "/images/sa10.jpeg",
    "/images/sa11.jpeg",
    "/images/sa12.jpeg",
    "/images/sa13.jpeg",
    "/images/sa14.jpeg",
    "/images/sa15.jpeg",
    "/images/sa16.jpeg",
    "/images/sa17.jpeg",
    "/images/sa18.jpeg",
    "/images/sa19.jpeg",
    "/images/sa20.jpeg",
    "/images/sa21.jpeg",
    "/images/sa22.jpeg",
    "/images/sa23.jpeg",
    "/images/sa24.jpeg",
    // '/images/sa25.jpeg',
    "/images/sa26.jpeg",
  ];

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
      <div
        className="bg-cover bg-center md:p-8 h-auto"
        style={{ backgroundImage: "url('/images/banner-background.webp')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-start p-8  md:p-16 justify-between">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 py-4">Social Activities</h1>
            <p className="mb-4 text-xl pb-4">
              Dr. Path Cares, a leading healthcare provider in India, is
              dedicated to promoting health awareness among the public. We
              consistently organize free camps offering blood tests and health
              fitness checks. We have successfully conducted numerous free
              health check-up camps across Delhi NCR. Our mission is to extend
              these services to over a lakh people in Delhi NCR and Meerut in
              the coming year.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              Organise Health camp in your area
            </h2>
            <form
              action="https://formspree.io/f/mzzbwroj"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phonenumber"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Your City"
                name="city"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="bg-[#00B7AB] text-white py-2 px-4 rounded w-full hover:bg-[#46716f] transition">
                Get a call back
              </button>
            </form>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="container mx-auto my-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default socialActivity;
