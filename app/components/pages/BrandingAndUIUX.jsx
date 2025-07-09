import NavBar from "../shared/Navbar";
import BrandingAndUIUXLanding from "../servicespage1/BrandingAndUIUXLanding";
import ServiceDetail from "../ServiceComponents/ServiceDetail";
import OurProcesses from "../ServiceComponents/OurProcesses";
import HowWeHelp from "../ServiceComponents/HowWeHelp";
import QuoteForm from "../ServiceComponents/QuoteForm";
import Footer from "../shared/Footer";

function BrandingAndUIUX() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <NavBar />
      <BrandingAndUIUXLanding />
      <ServiceDetail
        mainheading="OUR ON-DEMAND BRANDING & UI/UX SERVICES"
        maindetail="We craft high-impact brand identities that inspire trust, reflect your values, and connect with your audience. From concept to implementation, we align design excellence with business strategy."
        cards={[
          {
            heading: "Brand Identity Design",
            detail:
              "Full-scale identity systems—from logos to brand visuals—that reflect your unique business values and goals.",
          },
          {
            heading: "Logo Design",
            detail:
              "Custom-designed, impactful logos that connect with local and international audiences.",
          },
          {
            heading: "Corporate Brand Guidelines",
            detail:
              "Consistent visual and messaging frameworks to ensure brand cohesion across all touchpoints.",
          },
          {
            heading: "Naming & Brand Strategy",
            detail:
              "Strategic naming and positioning tailored to build a recognizable and memorable market presence.",
          },
          {
            heading: "User Interface Design",
            detail:
              "Visually stunning, functional interfaces optimized for web and mobile applications.",
          },
          {
            heading: "UX Research & Prototyping",
            detail:
              "In-depth user behavior analysis to create seamless, intuitive journeys that convert.",
          },
          {
            heading: "Wireframing & Interaction Design",
            detail:
              "Structuring clean layouts and interactive elements to enhance usability and clarity.",
          },
          {
            heading: "Design Systems & Component Libraries",
            detail:
              "Scalable design frameworks that ensure consistency and accelerate product development.",
          },
        ]}
      />

      <OurProcesses
        maintitle="Our Process"
        maindescription="We follow a proven framework that blends creativity with strategy to bring your brand to life."
        cards={[
          {
            title: "Project Initiation",
            description:
              "Understanding your business goals, market, and vision to create a focused branding roadmap.",
            img: "/images/01.png",
          },
          {
            title: "Research & Ideation",
            description:
              "Studying your audience, industry trends, and competitors to develop a strategic, creative base.",
            img: "/images/02.png",
          },
          {
            title: "Concept Development",
            description:
              "Crafting visual and verbal identity options that align with your market positioning.",
            img: "/images/03.png",
          },
          {
            title: "Design Iteration",
            description:
              "Refining selected concepts through collaborative feedback rounds to perfection.",
            img: "/images/04.png",
          },
          {
            title: "Finalization & Delivery",
            description:
              "Providing complete brand assets, including guidelines and print-ready files.",
            img: "/images/05.png",
          },
          {
            title: "Ongoing Support",
            description:
              "Optional branding support and updates to keep your brand relevant and consistent.",
            img: "/images/06.png",
          },
        ]}
      />

      <HowWeHelp
  maintitle="HOW WE HELP YOU STAND OUT"
  maindescription="We blend purpose-driven design with regional insight to create brand identities that lead and last."
  cards={[
    {
      icon: "/images/icons/happy-icon.png",
      title: "Build Brand Trust Instantly",
      description: "We craft identities that reflect credibility and consistency, essential for winning the confidence of both new and established audiences.",
    },
    {
      icon: "/images/icons/thumbs-up-icon.png",
      title: "Make a Lasting Impression",
      description: "Our visual systems ensure your brand stands out with clarity and sophistication across all customer touchpoints.",
    },
    {
      icon: "/images/icons/increase-arrow-icon.png",
      title: "Modernize Without Losing Essence",
      description: "We update your visuals and voice to meet modern standards while preserving the values and heritage your brand was built on.",
    },
    {
      icon: "/images/icons/rocket-icon.png",
      title: "Drive Strategic Growth",
      description: "Our branding solutions position your business for long-term success, supporting your goals across digital, print, and physical experiences.",
    },
  ]}
/>

      <QuoteForm />
      <Footer />
    </main>
  );
}

export default BrandingAndUIUX;
