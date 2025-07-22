import NavBar from "../shared/Navbar";
import SolutionLanding from "../OurSolutions/SolutionLanding";
import Card from "../homepage/Cards";
import CallToAction from "../shared/Cta";
import Footer from "../shared/Footer";

function OurLatestSolutions() {
  return (
    <>
      <NavBar />
      <main>
        <SolutionLanding />
        <div className="flex flex-col gap-8 my-10 w-full items-center">
          <div className="flex flex-row gap-8">
            <Card
              img="/images/Solutions/sp1.png"
              alt="Time attendance image"
              heading="Time attendance"
              text="Streamline workforce management with 
              biometric attendance systems that offer 
              real-time tracking and automated reporting. 
              Improve operational efficiency and accountability 
              across your organisation."
            />
            <Card
              img="/images/Solutions/sp2.png"
              alt="Fire alarm image"
              heading="Fire alarm"
              text="Integrated fire detection and suppression systems 
              built for rapid response and regulatory compliance. Protect 
              lives and assets with intelligent, multi-layered fire safety 
              solutions."
            />
            <Card
              img="/images/Solutions/sp3.png"
              alt="Burglar alarm image"
              heading="burglar alarm"
              text="State-of-the-art intrusion detection systems offering 
              immediate alerts and response mechanisms. Deter break-ins and
               unauthorised entries with round-the-clock security coverage."
            />
          </div>
          <div className="flex flex-row gap-8">
            <Card
              img="/images/Solutions/sp4.png"
              alt="Artificial intelligence image"
              heading="artificial intelligence"
              text="AI-driven security and automation technologies that 
              enhance surveillance, analytics, and predictive maintenance. 
              Elevate decision-making and operational intelligence with 
              machine learning."
            />
            <Card
              img="/images/Solutions/sp5.png"
              alt="Networking image"
              heading="networking"
              text="High-performance, scalable networking infrastructure designed 
              for speed, security, and resilience. Support seamless connectivity 
              across branches, departments, and remote operations."
            />
            <Card
              img="/images/Solutions/sp6.png"
              alt="Hotel works image"
              heading="unified hotel works"
              text="Comprehensive preventive maintenance and support 
              contracts to ensure optimal system uptime. Benefit from 
              expert servicing, rapid response, and long-term reliability."
            />
          </div>
          <div className="flex flex-row gap-8">
            <Card
              img="/images/Solutions/sp7.png"
              alt="Vehicle tracking image"
              heading="vehicle tracking system"
              text="Real-time GPS tracking for fleet and asset monitoring, route 
              optimisation, and usage insights. Enhance operational transparency, 
              security, and fuel efficiency."
            />
            <Card
              img="/images/Solutions/sp8.png"
              alt="paid parking image"
              heading="paid parking solution"
              text="Automated parking management systems with ticketing, 
              payment, and access control integration. Streamline parking 
              operations while maximising revenue and user convenience."
            />
            <Card
              img="/images/Solutions/sp9.png"
              alt="Video confrencing image"
              heading="video conferencing"
              text="Upgrade your meetings with HD video conferencing systems 
              tailored for Saudi businesses. Our secure, high-performance 
              setups support remote work, hybrid teams, and boardroom integration 
              — with Arabic and English support."
            />
          </div>
          <div className="flex flex-row gap-8">
            <Card
              img="/images/Solutions/sp10.png"
              alt="WiFi access point image"
              heading="wi-fi access points"
              text="Deliver seamless wireless coverage across your workspace 
              with our enterprise-grade WiFi access points in Saudi Arabia. 
              Engineered for high traffic and maximum uptime, ideal for 
              hospitals, schools, and corporate environments."
            />
            <Card
              img="/images/Solutions/sp11.png"
              alt="P2P wireless image"
              heading="p2p wireless link"
              text="Robust point-to-point wireless connectivity offering high-speed, 
              long-distance communication. Eliminate the need for cabling while 
              ensuring secure data transmission."
            />
            <Card
              img="/images/Solutions/sp12.png"
              alt="Antishoplifting image"
              heading="eas antishoplifting system"
              text="Electronic Article Surveillance systems are designed 
              to minimise retail theft without impacting the customer experience. 
              Enhance inventory control with discreet, reliable protection."
            />
          </div>
          <div className="flex flex-row gap-8">
            <Card
              img="/images/Solutions/sp13.png"
              alt="Warehouse management image"
              heading="warehouse management system"
              text="Integrated software solution for real-time inventory tracking, 
              order fulfilment, and logistics control. Boost warehouse efficiency, 
              accuracy, and transparency."
            />
            <Card
              img="/images/Solutions/sp14.png"
              alt="Access control images"
              heading="hotel locks"
              text="Digital door locking systems offering secure, keyless entry tailored 
              for the hospitality sector. Enhance guest experience while maintaining full 
              access control and audit trails."
            />
            <Card
              img="/images/Solutions/sp15.png"
              alt="Ups/power backup image"
              heading="ups/power backup solution"
              text="Reliable uninterruptible power supply systems to protect 
              critical infrastructure during outages. Ensure business continuity 
              and safeguard sensitive equipment from power fluctuations."
            />
          </div>
        </div>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default OurLatestSolutions;
