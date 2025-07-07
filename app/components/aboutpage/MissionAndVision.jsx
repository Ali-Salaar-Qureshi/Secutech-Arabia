function MissionAndVision() {
  return (
    <section className="flex flex-row bg-[#F1F8FE] mt-20 max-sm:flex-col">
      <div>
        <img src="/images/About-M&V.png" alt="" />
      </div>
      <div className="flex flex-col px-25 max-sm:px-10 pt-15">
        <h1 className="heading-3">OUR MISSION</h1>
        <p className="large-text-regular text-[#5C5C5C] mt-8">
          To empower Saudi institutions, government entities, and enterprises
          <br />
          with intelligent, scalable, and locally-adapted security systems that
          <br />
          ensure safety, efficiency, and future-readiness.
        </p>
        <div className="flex items-center justify-between my-20">
          <div className="w-1.5 h-1.5 bg-[#5C5C5C] rounded-full mx-[-10px]"></div>

          <div className="flex-1 h-[1px] bg-[#5C5C5C] mx-2"></div>

          <div className="w-1.5 h-1.5 bg-[#5C5C5C] rounded-full mx-[-10px]"></div>
        </div>
        <h1 className="heading-3">Our vision</h1>
        <p className="large-text-regular text-[#5C5C5C] mt-8">
          To lead the Saudi security technology sector through smart,
          <br />
          connected, and AI-driven systems, delivering meaningful impact for
          <br />
          safer cities, smarter industries, and secure digital infrastructure.
        </p>
      </div>
    </section>
  );
}

export default MissionAndVision;
