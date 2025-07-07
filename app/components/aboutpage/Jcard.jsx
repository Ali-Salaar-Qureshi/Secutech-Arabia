function Jcard(props) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-[292px] h-[186px] max-sm:w-[392px] max-sm:h-[286px] bg-white rounded shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-102 transition duration-300">
      <h3 className="heading-3 text-[#092C4C] pt-6">{props.heading}</h3>
      <p className="large-text-regular text-[5C5C5C]">{props.detail}</p>
    </div>
  );
}

export default Jcard;
