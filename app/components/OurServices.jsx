import ServiceCard from "./ServiceCard";

function OurServices() {
  return (
    <div className="flex flex-col items-center w-full h-[1393px] bg-[url('/images/our-services.jpg')] mt-10 max-sm:px-12 bg-cover max-sm:h-auto max-sm:pb-10">
      <div className="flex flex-col items-center text-white mt-[60px] ">
        <h3 className="heading-3 mb-[22px]">OUR SERVICES</h3>
        <p className="normal-text-regular">
          Full-Spectrum Technology Services Tailored for Growth
        </p>
      </div>
      <div className="flex flex-row gap-7 max-sm:flex-col mt-10">
        <div className="flex flex-col gap-7">
          <ServiceCard
            img1="/images/icons/pen-icon.png"
            alt="Pen icon"
            title="Branding & UI/UX"
            text={`Craft a memorable brand with cohesive visuals, messaging,
                        and identity systems. We help you stand out and connect
                         with your audience across all touchpoints.`}
          />
          <ServiceCard
            img1="/images/icons/shopping-basket-icon.png"
            alt="Basket icon"
            title="E-Commerce Solutions"
            text={`Build secure, scalable online stores optimized for performance and conversions.
                 We offer full-stack development and integrations to grow your digital retail presence.`}
          />
        </div>

        <div className="flex flex-col gap-7">
          <ServiceCard
            img1="/images/icons/web-design-icon.png"
            alt="Web design icon"
            title="Custom Product Development"
            text={`From idea to launch, we turn concepts into reliable, 
                        high-performing digital products. 
                        Our agile development approach ensures 
                        your product evolves with your business.`}
          />
          <ServiceCard
            img1="/images/icons/megaphone-icon.png"
            alt="Megaphone icon"
            title="Digital Marketing"
            text={`Drive traffic, generate leads, and grow engagement with
                strategic digital marketing. We blend content, SEO, and paid 
                media to boost your online visibility and ROI.`}
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-35 mt-25 max-sm:flex-col max-sm:gap-10 max-sm:rounded-2xl max-sm:pt-4 max-sm:w-98 ">
        <div className="flex flex-col ">
            <h3 className="heading-3 text-white">OUR PRESENCE</h3>
            <p className="normal-text-regular text-[#EEEEEE] w-130 mt-4 max-sm:w-80">Full-Spectrum Technology Services Tailored for Growth Full-Spectrum Technology
               Services Tailored for Growth Full-Spectrum Technology Services Tailored for 
               GrowthFull-Spectrum Technology Services Tailored for GrowthFull-Spectrum 
               Technology Services Tailored for GrowthFull-Spectrum Technology Services 
               Tailored for GrowthFull-Spectrum Technology Services Tailored for.</p>
        </div>
        <div className="mx-6">
            <img src="/images/presence-map.png" alt="Presence map" className="max-sm:w-[90%]" />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
