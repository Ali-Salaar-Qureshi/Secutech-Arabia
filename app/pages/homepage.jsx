
import LandingSection from "../components/LandingSection";
import AboutUs from "@/app/components/About";
import OurLatestSoloutions from "@/app/components/OurLatestSoloutions";
import OurServices from "@/app/components/OurServices";
import OurProjects from "../components/OurProjects";
import OurProducts from "../components/OurProducts";
import NewsAndEvents from "../components/NewsAndEvents";
import Testimonials from "../components/ClientTestimonials";
import ClientCarousel from "../components/ClientCarousel";
import CallToAction from "../components/Cta";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <main className="flex flex-col justify-center mt-[32px] max-sm:justify-center max-w-screen overflow-x-hidden">
      <LandingSection />
      <AboutUs />
      <OurLatestSoloutions />
      <OurServices />
      <OurProjects />
      <OurProducts />
      <NewsAndEvents />
      <Testimonials />
      <ClientCarousel />
      <CallToAction />
      <Footer />
    </main>
  );
}
