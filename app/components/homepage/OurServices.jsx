import ServiceCard from "./ServiceCard";

function OurServices() {
  return (
    <div className="flex flex-col items-center w-full h-[800px] bg-[url('/images/our-services.jpg')] mt-10 max-sm:px-12 bg-cover max-sm:h-auto max-sm:pb-10">
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
            link="/BrandingAndUIUX"
            text={`Craft a memorable brand with cohesive visuals, messaging,
                        and identity systems. We help you stand out and connect
                         with your audience across all touchpoints.`}
          />
          <ServiceCard
            img1="/images/icons/shopping-basket-icon.png"
            alt="Basket icon"
            title="E-Commerce Solutions"
            link="/EcommerceSolutions"
            text={`Build secure, scalable online stores optimized for performance and conversions.
                 We offer full-stack development and integrations to grow your digital retail presence.`}
          />
        </div>

        <div className="flex flex-col gap-7">
          <ServiceCard
            img1="/images/icons/web-design-icon.png"
            alt="Web design icon"
            title="Custom Product Development"
            link="/ProductDevelopment"
            text={`From idea to launch, we turn concepts into reliable, 
                        high-performing digital products. 
                        Our agile development approach ensures 
                        your product evolves with your business.`}
          />
          <ServiceCard
            img1="/images/icons/megaphone-icon.png"
            alt="Megaphone icon"
            title="Digital Marketing"
            link="/DigitalMarketing"
            text={`Drive traffic, generate leads, and grow engagement with
                strategic digital marketing. We blend content, SEO, and paid 
                media to boost your online visibility and ROI.`}
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
