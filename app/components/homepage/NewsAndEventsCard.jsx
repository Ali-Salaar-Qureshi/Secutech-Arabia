

function NewsAndEventsCard(props) {
  return (
    <div className="flex flex-col h-[380px] gap-18 max-sm:w-full max-sm:mx-8">
      <img
        src={props.img || "/images/NewsAndEvents1.png"}
        alt={props.title || "News thumbnail"}
        className="w-[400px] h-auto rounded-[10px]"
      />
      <div>
      <h3 className="small-text-regular text-[#5C5C5C] mt-[-60px]">
        {props.ht1}
        <span className="mx-2">-</span>
        {props.ht2}
      </h3>
      <h1 className="large-text-bold text-[#092C4C] w-85">{props.title}</h1>
      </div>
      <div className="mt-[-65px]">
        <a
          href={props.slug ? `/newsandevents/${props.slug}` : "/newsandevents"}
          className="mt-[-16] flex flex-row items-center gap-1"
        >
          <h2 className="text-[#BE1522] small-text-regular">
            Full Article / Explore Insights
          </h2>
          <img
            src="images/icons/red-arrow.png"
            className="w-[11px] h-[11px] mt-[-19]"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default NewsAndEventsCard;