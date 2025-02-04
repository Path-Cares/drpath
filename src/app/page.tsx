import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/pages/home/HomeBanner";
import Plans from "@/components/pages/home/Plans";
import ThirdSection from "@/components/pages/home/ThirdSection";
import SwiperDeals from "@/components/pages/home/SwiperDeals";
import ThreeOffers from "@/components/pages/home/ThreeOffers";
import FullVitalBody from "@/components/pages/home/FullVitalBody";
import WeAre from "@/components/pages/home/WeAre";
import ClientsReview from "@/components/pages/home/ClientsReview";
import CtaStrip from "@/components/pages/home/CtaStrip";
import BlogSection from "@/components/pages/blog/BlogSection";
import SubscribeNewsletter from "@/components/pages/SubscribeNewsletter";
import Head from "next/head";

export const metadata = {
  title: "Best Full Body Checkup in Noida at Home – Dr Pathcares",
  description:
    "Get the best full body checkup in Noida at home with Dr. PathCares. Enjoy hassle-free doorstep diagnostic services, accurate results, and comprehensive health monitoring.",
  alternates: {
    canonical: "https://drpathcares.com/",
  },
};

export default function Home() {
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

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZVV8F74"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Nav />
      <main>
        <HomeBanner />
        <Plans />
        <ThirdSection />
        <SwiperDeals />
        <ThreeOffers />
        <FullVitalBody />
        <WeAre />
        <ClientsReview />
        <CtaStrip />
        <BlogSection />
        <SubscribeNewsletter />
      </main>
      <Footer />
    </>
  );
}
