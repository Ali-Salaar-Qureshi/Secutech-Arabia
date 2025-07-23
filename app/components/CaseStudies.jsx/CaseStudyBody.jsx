function CaseStudyBody() {
  return (
    <section className="mt-20 flex flex-col items-center max-sm:px-10">
      <div className="flex flex-row max-sm:flex-col min-sm:w-[1240px] gap-20 my-10">
        <div className="relative w-[500px] h-[500px] max-sm:w-auto max-sm:h-auto">
          <img
            src="/images/case1.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <a href="/docs/pdf1.pdf">
            <div className="flex flex-row gap-0.5 absolute bottom-[10px] left-30 max-sm:left-20 transform -translate-x-1/2">
              <p className="medium-text-regular text-[#BE1522] hover:text-[#d5434f] transition duration-300">
                View Case Study
              </p>
              <img
                src="/images/icons/red-arrow.png"
                className="w-4 h-4 mt-2 ml-1"
                alt=""
              />
            </div>
          </a>
        </div>

        <div className="flex flex-col w-[639px] max-sm:w-auto">
          <h4 className="heading-4 text-[#092C4C] mb-10">
            Video Surveillance Case Study-Historic Jeddah
          </h4>
          <p className="large-text-regular text-[#5C5C5C]">
            SecuTech Arabia successfully implemented an IP-based video
            surveillance solution for Historic Jeddah, a UNESCO Heritage Site,
            in July 2019. This project, part of the "Jeddah Season" festival,
            addressed the challenge of securing the site while preserving its
            antique structures. The solution involved a fiber optic-based
            infrastructure across four zones, supporting over 100 IP cameras
            with FHD 5 MP resolution, all remotely monitored by government
            authorities.
            <br />
            <br />
            The Voltro (UK) solution delivered high image quality for real-time
            threat identification, leveraging advanced compression and
            intelligent tools for optimised management and reduced resource
            utilisation. SecuTech Arabia, established in 2004, is a prominent
            security solution integrator in Saudi Arabia, known for delivering
            complex projects efficiently.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse max-sm:flex-col min-sm:w-[1240px] gap-20 my-10">
      <div className="relative w-[500px] h-[500px] max-sm:w-auto max-sm:h-auto">
          <img
            src="/images/case2.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <a href="/docs/pdf2.pdf">
            <div className="flex flex-row gap-0.5 absolute bottom-[10px] left-30 max-sm:left-20 transform -translate-x-1/2 ">
              <p className="medium-text-regular text-[#BE1522] hover:text-[#d5434f] transition duration-300">
                View Case Study
              </p>
              <img
                src="/images/icons/red-arrow.png"
                className="w-4 h-4 mt-2 ml-1"
                alt=""
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col w-[639px] max-sm:w-auto">
          <h4 className="heading-4 text-[#092C4C] mb-10">
            Video Surveillance Case Study Al Johra
          </h4>
          <p className="large-text-regular text-[#5C5C5C]">
            SecuTech Arabia, a prominent security solution integrator in Saudi
            Arabia, successfully implemented an IP-based video surveillance
            solution for the Al Johara Festival site at King Abdullah Sport City
            Complex (KASC), part of the Jeddah Seasons Project. The challenge
            involved meeting stringent quality standards set by both the client
            and KASC's world-class infrastructure
            <br />
            <br />
            SecuTech Arabia's solution included a wireless-based IP camera
            network divided into four zones, utilising 8 Air Fibre Links
            connected to a control room with full hardware redundancy.
            Approximately 80 Voltro (UK) IP cameras were installed, providing
            FHD 5 MP resolution. The Voltro IP camera solution, operating over a
            wireless network, offered high image quality and reliability, with
            state-of-the-art compression and intelligent tools that optimised
            maintenance and reduced management resources.
          </p>
        </div>
      </div>
      <div className="flex min-sm:w-[1240px] max-sm:flex-col gap-20 my-10">
        <div className="relative w-[500px] h-[500px] max-sm:w-auto max-sm:h-auto">
          <img
            src="/images/case3.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <a href="/docs/pdf3.pdf">
            <div className="flex flex-row gap-0.5 absolute bottom-[10px] left-30 max-sm:left-20 transform -translate-x-1/2">
              <p className="medium-text-regular text-[#BE1522] hover:text-[#d5434f] transition duration-300">
                View Case Study
              </p>
              <img
                src="/images/icons/red-arrow.png"
                className="w-4 h-4 mt-2 ml-1"
                alt=""
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col w-[639px] max-sm:w-auto">
          <h4 className="heading-4 text-[#092C4C] mb-10">
            Integrated Security Solution Deployed for Islamic Development Bank
          </h4>
          <p className="large-text-regular text-[#5C5C5C]">
            SecuTech Arabia implemented an integrated security solution for the
            Islamic Development Bank (IsDB) in Jeddah in 2021. The IsDB, a
            global leader in Islamic Finance, formed in 1975, focuses on
            sustainable and ethical financing for development projects across
            its 57 member nations, aligning with UN Sustainable Development
            Goals
            <br />
            <br />
            The security solution utilized products from global brands: a
            Turkish company for industrial-grade physical security like road
            blockers, an American company for cutting-edge technologies such as
            metal detectors and walk-through gates, a Malaysian technology
            leader for physical security software and hardware including T&A
            systems and luggage scanners, and Voltro (UK) for IP cameras and
            surveillance solutions. The implemented solutions included
            combinations of Road Blockers with UVSS cameras, Road Blockers with
            ANPR cameras, and Luggage Scanners with Walk Through Gates.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyBody;
