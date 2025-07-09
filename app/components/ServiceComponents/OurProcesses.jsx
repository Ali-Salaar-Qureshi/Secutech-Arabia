function OurProcesses(props) {
  const cards = props.cards || [];

  return (
    <section className="bg-[url('/images/OurProcessesbg.png')] bg-cover bg-center h-[526px] max-sm:h-auto mt-20 w-full flex flex-col">
      <div className="flex flex-col items-center">
        <h3 className="heading-3 text-white mt-[60px]">{props.maintitle}</h3>
        <p className="text-[#EEEEEE] normal-text-regular pb-10 text-center mt-4 w-[461px] max-sm:w-auto max-sm:px-4">
          {props.maindescription}
        </p>
      </div>
      <div className="w-full flex flex-row max-sm:flex-col max-sm:items-center gap-5 justify-center max-sm:pb-10 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[207px] h-[208px] pt-[24px] pl-[16px] rounded-[8px] hover:scale-[105%] transition duration-300 max-sm:w-[280px] cursor-pointer"
            style={{
              backgroundImage: `url('${card.img}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "84px 46px",
              backgroundColor: "#EEEEEE"
            }}
          >
            <h3 className="w-[145px] text-[#092C4C] large-text-bold">{card.title}</h3>
            <p className="w-[170px] mt-[-15px] small-text-regular text-[#5C5C5C]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProcesses;
