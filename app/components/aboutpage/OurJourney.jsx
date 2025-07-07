import Jcard from "./Jcard";

function OurJourney() {
  return (
    <section className="m-[80px] max-sm:m-[40px]">
      <div className="flex flex-col">
        <div className="flex flex-row max-sm:flex-col gap-20">
          <img src="/images/JourneyImage.png" alt="" className="h-auto w-auto"/>
          <div className="w-[639px] max-sm:w-auto">
            <h3 className="heading-4 text-[#092C4C]">
              Our Journey – 20+ Years of
              <br /> Excellence
            </h3>
            <p className="my-8  text-[#5C5C5C] large-text-regular">
              Founded with the ambition to redefine security in the region,
              SecuTech Arabia has grown into a trusted name across the Saudi
              market. With over two decades of industry leadership, SecuTech
              Arabia stands at the forefront of integrated security and
              technology systems in the Kingdom of Saudi Arabia. We specialize
              in end-to-end security solutions — from high-definition
              surveillance and biometric access control to next-generation
              AI-powered monitoring and wireless connectivity.
            </p>
            <p className=" text-[#5C5C5C] large-text-regular">
              Whether you operate a warehouse in Riyadh, a data center in
              Jeddah, or a government facility in Dammam, our systems are
              engineered to scale with you. At the core of our company is a deep
              commitment to innovation, reliability, and national
              transformation, playing an active role in realizing Saudi Vision
              2030 & Beyond.
            </p>
            <div className="flex flex-row gap-[24px] mt-16 max-sm:flex-col">
              <button className="bg-[#0E5B96] rounded-full px-[32px] py-[13px] hover:bg-[#116cb1] transition duration-300">
                <span className="medium-text-bold text-white">View Our Services</span>
              </button>
              <button className="border-[1px] text-[#0E5B96] border-[#0E5B96] rounded-full px-[40px] py-[13px] hover:bg-[#0E5B96] hover:text-white transition duration-300">
                <span className="medium-text-bold " >Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[24px] max-sm:flex-col items-center justify-center mt-25">
            <Jcard
            heading="2004"
            detail="Founded in"
            />
            <Jcard
            heading="150+"
            detail="Happy clients"
            />
            <Jcard
            heading="20+"
            detail="Years of experience"
            />
            <Jcard
            heading="25+"
            detail="Trained staff"
            />
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
