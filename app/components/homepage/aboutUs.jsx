function AboutUs() {
  return (
    <div className="flex flex-row gap-30 max-xl:flex-col mt-25 justify-between max-sm:text-center sm:mx-[100px] max-sm:px-[4%]">
      <img src="/images/About-Us-Image.png" alt="about us background" className="w-[539px] max-sm:px-[2%] max-sm:w-[100%]" />
      <div className="flex flex-col justify-center max-sm:items-center">
        <h1 className="heading-3 text-[#092C4C] mb-7 max-sm:px-5">About Us</h1>
        <p className="max-w-[130p] text-[#5C5C5C]  normal-text-bold max-sm:px-[2%] max-sm:w-[85%]">
          <span className="font-black ">With 20 years of excellence</span>,
          SecuTech Arabia is a premier technology company committed to
          empowering organizations through innovative digital solutions. We
          specialize in strategy-driven transformation backed by secure,
          scalable technologies. Our multidisciplinary team delivers end-to-end
          services that help clients modernize operations, improve experiences,
          and ensure sustainable growth.
          <br />
          <br />
          Aligned with Saudi Vision 2030 & Beyond, we are proud to contribute to
          the Kingdom’s ambitious journey toward a smarter, more connected
          future.
        </p>
        <a href="/about">
        <button className="w-[203px] h-[52]  text-[#0E5B96] rounded-[100px] border-[#0E5B96] border-[1px] hover:bg-[#0E5B96] hover:text-white  transition duration-400">
          <span className="medium-text-bold ">Our Journey & Vision</span>
        </button>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
