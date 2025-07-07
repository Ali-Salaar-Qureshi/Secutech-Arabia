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
        <div className="flex flex-row items-center gap-3  max-sm:mb-6 max-sm:flex-col max-sm:gap-6">
          <button className="w-[193px] h-[52]  text-[#0E5B96] rounded-[100px] border-[#0E5B96] border-[1px] hover:bg-[#0E5B96] hover:text-white  transition duration-400">
          <span className="medium-text-bold ">Book a consultation</span>
        </button>
          <button className="w-[173px] h-[52]  text-white rounded-[100px] hover:text-white border-[#0E5B96] border-[1px] bg-[#0E5B96] hover:bg-[#eeeeee00]  transition duration-400">
          <span className="medium-text-bold ">Contact Us</span>
        </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
