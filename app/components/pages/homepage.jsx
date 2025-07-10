import NavBar from "../shared/Navbar";
import LandingSection from "../homepage/LandingSection";
import AboutUs from "../homepage/aboutUs";
import OurLatestSoloutions from "../homepage/OurLatestSoloutions";
import OurServices from "../homepage/OurServices";
import GoofballModal from "../shared/GoofballModal";
import OurProjects from "../homepage/OurProjects";
import OurProducts from "../homepage/OurProducts";
import NewsAndEvents from "../homepage/NewsAndEvents";
import Testimonials from "../homepage/ClientTestimonials";
import ClientCarousel from "../homepage/ClientCarousel";
import CallToAction from "../shared/Cta";
import Footer from "../shared/Footer";

export default function Homepage() {
  return (
    <main className="flex flex-col justify-center  max-sm:justify-center max-w-screen overflow-x-hidden">
      <NavBar />
      <LandingSection />
      <AboutUs />
      <OurLatestSoloutions />
      <OurServices />
      <GoofballModal />
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
