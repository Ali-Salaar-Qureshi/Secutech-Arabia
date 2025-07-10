function HowWeHelp(props) {
  const cards = props.cards || [];

  return (
    <section className="mt-20 w-full flex flex-col items-center mb-20">
      <div className="flex flex-col items-center w-[651px] text-center">
        <h3 className="heading-3 text-[#092C4C] max-sm:w-[320px] mt-[60px]">
          {props.maintitle || "HOW WE HELP YOU STAND OUT"}
        </h3>
        <p className="text-[#5C5C5C] normal-text-regular w-[480px] pb-10 text-center mt-8 max-sm:w-[400px] max-sm:px-4">
          {props.maindescription ||
            "We blend purpose-driven design with regional insight to create brand identities that lead and last."}
        </p>
      </div>

      <div className="flex flex-row gap-4 max-sm:flex-col  items-center">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col hover:scale-[102%] hover:cursor-pointer transition duration-300 w-[292px] h-[201px]">
            <div className="flex flex-col">
              <img
                src={card.icon}
                className="w-[56px] h-[56px] mb-4"
                alt=""
              />
              <h3 className="large-text-bold text-[#092C4C]">
                {card.title}
              </h3>
              <p className="text-[#5C5C5C] small-text-regular mt-[-15px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default HowWeHelp;
