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

export const metadata = {
  title: "Best Full Body Checkup in Noida at Home – Dr Pathcares ",
  description:
    "Get a Best full body checkup in Noida at home with Dr Pathcares. Enjoy hassle-free healthcare with our doorstep diagnostic services and accurate results.",
  alternates: {
    canonical: "https://drpathcares.com/",
  },
};

export default function Home() {
  return (
    <>
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
