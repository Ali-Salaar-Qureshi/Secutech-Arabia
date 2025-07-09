import NavBar from "../shared/Navbar";
import DigitalMarketingLanding from "../servicespages4/DigitalMarketingLanding";
import ServiceDetail from "../ServiceComponents/ServiceDetail";
import OurProcesses from "../ServiceComponents/OurProcesses";
import HowWeHelp from "../ServiceComponents/HowWeHelp";
import QuoteForm from "../ServiceComponents/QuoteForm";
import Footer from "../shared/Footer";

function DigitalMarketing() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <NavBar />
      <DigitalMarketingLanding />
      <ServiceDetail
        mainheading="Our On-Demand Branding & UI/UX Services"
        maindetail="We combine smart branding with user-first design to elevate your product's visual appeal and functional flow. Our tailored services include:"
        cards={[
          {
            heading: "Brand Identity Design",
            detail:
              "Craft visually consistent and memorable brand identities that resonate across all touchpoints.",
          },
          {
            heading: "UI/UX for Web & Mobile Apps",
            detail:
              "Design intuitive, user-centered interfaces that enhance engagement and usability across platforms.",
          },
          {
            heading: "UX Audits & Heuristic Evaluations",
            detail:
              "Identify usability issues and opportunities with expert-led evaluations to improve user flow and experience.",
          },
          {
            heading: "Design Systems & Component Libraries",
            detail:
              "Create scalable, reusable design components for consistent and efficient UI development.",
          },
          {
            heading: "Landing Page Design",
            detail:
              "Build high-converting landing pages tailored to your audience and campaign goals.",
          },
          {
            heading: "Product Prototyping",
            detail:
              "Visualize user journeys and functionality with interactive prototypes before development begins.",
          },
          {
            heading: "Mobile-First Design Optimization",
            detail:
              "Prioritize mobile experiences with responsive designs tailored for small screens and touch interactions.",
          },
          {
            heading: "Interaction & Motion Design",
            detail:
              "Add life to your interfaces with purposeful animations and micro-interactions that guide users seamlessly.",
          },
        ]}
      />
      <OurProcesses
        maintitle="Our Process"
        maindescription="We follow a proven methodology that ensures your brand and design needs are met with precision and creativity."
        cards={[
          {
            title: "Project Initiation",
            description:
              "Define goals, audience, timeline, and scope. We start with clarity and vision.",
            img: "/images/01.png",
          },
          {
            title: "Research & Ideation",
            description:
              "Deep-dive into user behavior to craft insights-driven concepts that match business goals.",
            img: "/images/02.png",
          },
          {
            title: "Wireframing & Prototyping",
            description:
              "Sketch, structure, simulate. We build wireframes and prototypes to test UX before coding.",
            img: "/images/03.png",
          },
          {
            title: "Usability Testing & Feedback",
            description:
              "Validate with real users. Iterate fast, improve faster.",
            img: "/images/04.png",
          },
          {
            title: "Design & Development Iteration",
            description:
              "Designers and developers co-create, ensuring pixel-perfect experiences with technical feasibility.",
            img: "/images/05.png",
          },
          {
            title: "Testing & Delivery",
            description:
              "Comprehensive QA across browsers and devices before delivering your final product—fully optimized and ready to go.",
            img: "/images/06.png",
          },
        ]}
      />

      <HowWeHelp
        maintitle="HOW WE HELP YOU Dominate Globally"
        maindescription="We empower you to compete in fast-growing digital markets through customer-centric, tech-forward commerce solutions."
        cards={[
          {
            icon: "/images/icons/convert-icon-pink.png",
            title: "Update your platform",
            description:
              "We modernize your UI for desktop and mobile, aligned with the latest design trends and user expectations.",
          },
          {
            icon: "/images/icons/journey-icon.png",
            title: "Simplify User Journeys",
            description:
              "Clean design and intuitive navigation—no confusion, no clutter.",
          },
          {
            icon: "/images/icons/increase-arrow-icon.png",
            title: "Get Higher Conversions",
            description:
              "Strategic UI/UX means smoother flows and happier users, leading to more sales and signups.",
          },
          {
            icon: "/images/icons/rocket-icon.png",
            title: "Start Today",
            description:
              "From startups to enterprises, we deliver on time and within budget.",
          },
        ]}
      />

      <QuoteForm />
      <Footer />
    </main>
  );
}

export default DigitalMarketing;
