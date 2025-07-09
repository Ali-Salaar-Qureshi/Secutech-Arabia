import NavBar from "../shared/Navbar";
import EcommerceLanding from "../servicespage2/EcommerceLanding";
import ServiceDetail from "../ServiceComponents/ServiceDetail";
import OurProcesses from "../ServiceComponents/OurProcesses";
import HowWeHelp from "../ServiceComponents/HowWeHelp";
import QuoteForm from "../ServiceComponents/QuoteForm";
import Footer from "../shared/Footer";

function EcommerceSoloutions() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <NavBar />
      <EcommerceLanding />
      <ServiceDetail
        mainheading="SCALABLE E-COMMERCE SOLUTIONS FOR MODERN BRANDS"
        maindetail="We build powerful online stores that merge functionality, design, and market insight, empowering businesses to sell smarter, scale faster, and engage customers globally."
        cards={[
          {
            heading: "Platform Integration & Setup",
            detail:
              "From Shopify to WooCommerce and custom builds, we integrate the platform best suited to your goals and growth plans.",
          },
          {
            heading: "Mobile Commerce Optimization",
            detail:
              "Fully responsive and mobile-first experiences ensure your store performs flawlessly across all devices.",
          },
          {
            heading: "Secure Payment Gateways",
            detail:
              "We implement secure, localized, and global payment options to enhance trust and improve transaction success rates.",
          },
          {
            heading: "Inventory & Order Management",
            detail:
              "Automated systems to track inventory, manage orders, and streamline fulfillment with real-time insights.",
          },
          {
            heading: "Multi-Language & Multi-Currency Support",
            detail:
              "Localize your store with native languages and currency support, ideal for reaching diverse Gulf and global audiences.",
          },
          {
            heading: "Analytics & Conversion Optimization",
            detail:
              "Data-backed insights and performance tuning to increase ROI, customer retention, and sales.",
          },
          {
            heading: "Third-Party Integration & APIs",
            detail:
              "We connect your e-commerce store to CRMs, ERPs, logistics platforms, and other business systems.",
          },
          {
            heading: "Performance & Speed Optimization",
            detail:
              "We ensure fast load times and optimized performance, delivering a smooth shopping experience that keeps customers engaged.",
          },
        ]}
      />
      <OurProcesses
        maintitle="Our Process"
        maindescription="We turn your vision into a high-performance store with strategy, creativity, and precision."
        cards={[
          {
            title: "Discovery & Planning",
            description:
              "We analyze your goals, market, and competitors to create a data-driven e-commerce roadmap.",
            img: "/images/01.png",
          },
          {
            title: "Design & UX Mapping",
            description:
              "Visual layout and user flows are designed to delight customers and simplify the buying process.",
            img: "/images/02.png",
          },
          {
            title: "Development & Testing",
            description:
              "We build robust, scalable platforms and rigorously test across use cases before launch.",
            img: "/images/03.png",
          },
          {
            title: "Payment & Logistics Integration",
            description:
              "Seamless configuration of checkout, shipping, tax, and inventory systems for operational ease.",
            img: "/images/04.png",
          },
          {
            title: "Launch & Go-Live Support",
            description:
              "We deploy your store with real-time monitoring, QA, and go-live support.",
            img: "/images/05.png",
          },
          {
            title: "Optimization & Growth",
            description:
              "Continuous enhancements based on analytics, customer behavior, and business needs.",
            img: "/images/06.png",
          },
        ]}
      />

      <HowWeHelp
        maintitle="HOW WE HELP YOU Dominate Globally"
        maindescription="We empower you to compete in fast-growing digital markets through customer-centric, tech-forward commerce solutions."
        cards={[
          {
            icon: "/images/icons/shop-icon.png",
            title: "Tailored for Your Market",
            description:
              "We craft identities that reflect credibility and consistency, essential for winning the confidence of both new and established audiences.",
          },
          {
            icon: "/images/icons/convert-icon.png",
            title: "Built to Convert",
            description:
              "We combine intuitive design with data-driven flows to reduce drop-offs and boost conversions.",
          },
          {
            icon: "/images/icons/increase-arrow-icon.png",
            title: "Ready for Growth",
            description:
              "From day one, your store is built to support multi-channel selling, scalability, and future tech upgrades.",
          },
          {
            icon: "/images/icons/rocket-icon.png",
            title: "Integrated for Efficiency",
            description:
              "We sync your store with the tools you need—saving time, reducing errors, and boosting efficiency.",
          },
        ]}
      />

      <QuoteForm />
      <Footer />
    </main>
  );
}

export default EcommerceSoloutions;
