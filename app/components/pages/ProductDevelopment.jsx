import NavBar from "../shared/Navbar";
import ProductLanding from "../servicespage3/ProductLanding";
import ServiceDetail from "../ServiceComponents/ServiceDetail";
import OurProcesses from "../ServiceComponents/OurProcesses";
import HowWeHelp from "../ServiceComponents/HowWeHelp";
import QuoteForm from "../ServiceComponents/QuoteForm";
import Footer from "../shared/Footer";

function ProductDevelopment() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <NavBar />
      <ProductLanding />
      <ServiceDetail
        mainheading="Powering Innovation with Bespoke Digital Solutions"
        maindetail="We deliver software products that are purpose-built, scalable, and aligned with your business growth. From concept to deployment, our team ensures each solution is crafted to support your operations, strategy, and customers."
        cards={[
          {
            heading: "Custom Software Development",
            detail:
              "Designing end-to-end solutions that meet your exact business needs—nothing off-the-shelf, only fully customized builds.",
          },
          {
            heading: "Web & Mobile Application Development",
            detail:
              "Building intuitive, high-performance apps that deliver seamless user experiences on every device and platform.",
          },
          {
            heading: "SaaS Product Development",
            detail:
              "Launch cloud-ready platforms that support subscription models, multi-tenancy, and global scalability from day one.",
          },
          {
            heading: "System Integration Services",
            detail:
              "Unify your existing technologies with secure integrations that boost productivity and streamline operations.",
          },
          {
            heading: "Legacy System Modernization",
            detail:
              "Rebuild, refactor, or enhance your current systems using modern frameworks and cloud-native technologies, without business disruption..",
          },
          {
            heading: "Scalable Architecture & Microservices",
            detail:
              "Develop systems that grow with your business, using modular designs and future-ready frameworks.",
          },
          {
            heading: "DevOps & CI/CD Automation",
            detail:
              "Automate delivery pipelines and reduce release cycles while maintaining code quality and reliability.",
          },
          {
            heading: "Ongoing Maintenance & Support",
            detail:
              "Ensure peak performance with regular updates, issue resolution, and dedicated post-launch support.",
          },
        ]}
      />
      <OurProcesses
        maintitle="Our Process"
        maindescription="We follow a proven methodology that ensures your brand and design needs are met with precision and creativity."
        cards={[
          {
            title: "Discovery & Consultation",
            description:
              "We begin by understanding your goals, pain points, and business environment to define a development roadmap that works.",
            img: "/images/01.png",
          },
          {
            title: "Planning & Architecture",
            description:
              "Our experts design a technical blueprint that balances performance, scalability, and future-proofing.",
            img: "/images/02.png",
          },
          {
            title: "Agile Development",
            description:
              "Using agile methodologies, we deliver your software in iterations, offering you continuous progress, transparency, and flexibility.",
            img: "/images/03.png",
          },
          {
            title: "Quality Assurance",
            description:
              "Rigorous manual and automated testing ensures every feature works flawlessly across environments.",
            img: "/images/04.png",
          },
          {
            title: "Launch & Deployment",
            description:
              "We ensure smooth go-lives with CI/CD pipelines and secure deployment practices, locally or in the cloud.",
            img: "/images/05.png",
          },
          {
            title: "Support & Optimization",
            description:
              "Our journey doesn’t end at launch. We provide long-term maintenance and optimization to adapt to your business evolution.",
            img: "/images/06.png",
          },
        ]}
      />

      <HowWeHelp
        maintitle="HOW WE HELP YOU Dominate"
        maindescription="From system design to deployment, we deliver agile, secure, and scalable products tailored to your exact business workflows and tech requirements."
        cards={[
          {
            icon: "/images/icons/sales-icon.png",
            title: "Tailored for Business Impact",
            description:
              "We design software to solve real-world challenges, not just write code.",
          },
          {
            icon: "/images/icons/client-icon.png",
            title: "Client-Centric Collaboration",
            description:
              "We work as your technology partner, not just a vendor, keeping you involved at every step.",
          },
          {
            icon: "/images/icons/data-security-icon.png",
            title: "Data Security & Compliance",
            description:
              "Built-in privacy, encryption, and regulatory compliance to match regional requirements.",
          },
          {
            icon: "/images/icons/programming-icon.png",
            title: "Rapid Development",
            description:
              "With agile sprints and DevOps, we bring your product to life, fast and flawlessly.",
          },
        ]}
      />

      <QuoteForm />
      <Footer />
    </main>
  );
}

export default ProductDevelopment;
