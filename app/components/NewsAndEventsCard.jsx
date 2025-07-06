

function NewsAndEventsCard(props){
    return(
        <div className="flex flex-col">
            <img src={props.img} alt="" className="w-[400px] h-auto rounded-[10px]" />
            <h3 className="small-text-regular text-[#5C5C5C] mt-6">{props.ht1}<span className="mx-2">-</span>{props.ht2}</h3>
            <h1 className="large-text-bold text-[#092C4C] w-85">{props.title}</h1>
            <div className=" ">
            <a href="" className="mt-[-16] flex flex-row items-center gap-1"><h2 className="text-[#BE1522] small-text-regular">Read More</h2><img src="images/icons/red-arrow.png" className="w-[11px] h-[11px] mt-[-19]" alt="" /></a>
            </div>
        </div>
    );
};

export default NewsAndEventsCard;