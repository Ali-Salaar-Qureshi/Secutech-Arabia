function CallToAction() {
  return (
    <section>
      <div className="bg-gradient-to-r from-[#7cbbe8] to-[#e47680] max-sm:justify-center h-auto flex flex-row gap-70 py-15 max-sm:flex-col max-sm:gap-3 max-sm:items-center max-sm:text-center">
        <div className="flex flex-col justify-center max-sm:mx-5 ml-10 gap-3">
          <h3 className="heading-4 text-[#092C4C] ">
            Let’s Secure the Future — Together
          </h3>
          <p className="large-text-regular text-[#134167]">
            Have a vision aligned with Saudi Vision 2030 & Beyond? <br /> Let’s
            bring it to life with next-gen tech.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3  max-sm:mb-6 max-sm:flex-col max-sm:gap-10">
          <button>
            <span className="text-white px-[32px] py-[13px] border-1 border-white rounded-full medium-text-bold hover:bg-[#1D8FDA] hover:border-[#1D8FDA] transition duration-300 ">
              Book a consultation
            </span>
          </button>
          <button>
            <span className="text-[#092C4C] px-[32px] py-[13px] bg-white rounded-full medium-text-bold hover:bg-[#1D8FDA] transition duration-300 ">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
