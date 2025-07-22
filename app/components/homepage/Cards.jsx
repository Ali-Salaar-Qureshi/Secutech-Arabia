function Card(props) {
  return (
    <div className="flex flex-col items-center justify-around w-[397px] h-[545px] bg-[#0C2945] rounded-[8px] max-sm:w-[360px]">
      <img src={props.img} alt={props.alt} className="w-[395px] h-[241px] px-4 py-4" />
      <h1 className="heading-5 text-center text-white mt-4 w-[319px]">
        {props.heading}
      </h1>
      <p className="normal-text-regular text-center text-white w-[326px] mt-4 max-sm:px-2">
        {props.text}
      </p>

      <button className="group mb-4 flex py-[13px] pl-[24px] pr-[20px] rounded-[100px] border-[2px] border-[#e41e2ffd] hover:border-[#e41e2f11] hover:bg-[#e41e2fc2] transition duration-300 hover:text-white items-start">
        <div className="flex flex-row text-center">
          <span className="text-[#E41E2D] text-medium-regular group-hover:text-white transition duration-300 font-medium">
            Explore Use Case
          </span>
          <img
            src="/images/icons/arrow-icon.png"
            alt="Arrow icon"
            className="px-2 transform group-hover:rotate-45 transition-transform duration-300 ease-in-out"
          />
        </div>
      </button>
    </div>
  );
}

export default Card;
