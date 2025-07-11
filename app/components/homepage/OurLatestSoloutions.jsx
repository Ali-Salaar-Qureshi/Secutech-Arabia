import Card from "./Cards";

function OurLatestSoloutions() {
  return (
    <section className="max-sm:w-[100%] sm:mx-[60px] max-sm:px-[4%]  ">
      <div className="flex flex-col mt-30 items-center justify-center gap-[24px] mx-[100px] pb-10 max-sm:items-center">
        <h1 className="heading-3 text-[#092C4C] max-sm:w-60% text-center mx-[100px]">
          OUR LATEST SOLOUTIONS
        </h1>
        <p className="w-180 text-center normal-text-regular text-[#5C5C5C] max-sm:w-80">
          Explore how our technologies address today’s most pressing security
          challenges with innovation, compliance, and efficiency.
        </p>
        <div className="flex flex-row gap-4 max-sm:flex-col">
          <button className="py-[11px] px-[20px] rounded-[100px] bg-[#EEEEEE] normal-text-bold text-[#092C4C] max-sm:w-52 hover:bg-[#e5e5e5] transition duration-300">
            Security soloutions
          </button>
          <button className="py-[11px] px-[20px] rounded-[100px]  normal-text-bold text-[#5C5C5C] max-sm:w-52">
            Custom soloutions
          </button>
        </div>
        <div className="flex flex-row gap-10  max-sm:flex-col">
          <Card
            img="/images/Access control.png"
            alt="Access control images"
            heading="ACCESS CONTROL SYSTEMS"
            text="Scalable access control solutions that ensure secure, 
            flexible entry management soloutions across facilities. They offer 
            audit trails, remote access monitoring, and system integration to 
            enhance security and accountability."
          />
          <Card
            img="/images/Security camera.png"
            alt="Security camera image"
            heading="Video Surveillance Systems"
            text="Smart surveillance solutions that deter crime, 
            enhance monitoring, and support investigations through 
            AI-powered insights. Compliant with privacy laws, 
            these systems boost security while enabling efficient, 
            remote oversight."
          />
          <Card
            img="/images/Security barrier.png"
            alt="Security barrier image"
            heading="Security Barrier Systems"
            text="Robust physical security barriers are designed for intrusion prevention
                , crowd control, and access management. Customizable and regulation-compliant, 
                they integrate seamlessly into broader security frameworks."
          />
        </div>
        <button className="py-[16px] px-[32px] gap-10 mt-8 rounded-[100px] bg-[#0E5B96] text-white medium-text-bold hover:bg-[#0970bf] transition duration-300 max-sm:w-60 max-sm:my-3">
          Explore Full Solution Suite
        </button>
      </div>
    </section>
  );
}

export default OurLatestSoloutions;
