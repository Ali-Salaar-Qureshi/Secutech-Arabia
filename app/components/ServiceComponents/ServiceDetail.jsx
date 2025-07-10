function ServiceDetail(props) {
  const cards = props.cards || [];

  return (
    <div className="flex flex-col items-center mt-30 mb-25">
      <div className="max-sm:px-5 flex flex-col items-center">
        <h1 className="heading-4 w-[500px] max-sm:w-auto text-center text-[#092C4C]">
          {props.mainheading}
        </h1>
        <p className="max-w-[555px] text-center normal-text-regular mt-5 text-[#5C5C5C]">
          {props.maindetail}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mt-5 max-sm:mx-20">
        {Array.from({ length: Math.ceil(cards.length / 4) }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row max-sm:w-[750px] max-sm:items-center max-sm:flex-col max-sm:gap-5 gap-5"
          >
            {cards
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((card, index) => (
                <div
                  key={index}
                  className="min-w-[292px] max-w-[50%] hover:cursor-pointer min-h-[169px]  bg-[#EEEEEE] rounded-[8px] hover:scale-[105%] transition duration-300"
                >
                  <div className="flex flex-col pt-[24px] pl-[16px]">
                    <h3 className="large-text-bold w-[221px] max-sm:w-[200px] text-[#092C4C]">
                      {card.heading}
                    </h3>
                    <p className="w-[263px] max-sm:w-[240px] text-[#5C5C5C] small-text-regular mt-[-15px]">
                      {card.detail}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;
