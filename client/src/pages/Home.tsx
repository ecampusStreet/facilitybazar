import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/home/Banner";
import PopularServices from "@/components/home/PopularServices";
import FeaturedPlaces from "@/components/home/FeaturedPlaces";
import OurServices from "@/components/home/OurServices";
import VideoSection from "@/components/home/VideoSection";
import PricingTables from "@/components/home/PricingTables";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Banner />
        <PopularServices />
        <FeaturedPlaces />
        <OurServices />
        <VideoSection />
        {/* <PricingTables /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
