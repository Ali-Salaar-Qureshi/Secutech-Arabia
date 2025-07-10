
function ServiceCard(props){
    return(
        <div className=" group h-[264px] w-[608px] max-sm:w-[350px] max-sm:h-[300px] bg-white rounded-[16px] max-sm: hover:scale-101 transition duration-300">
            <div className="m-4 flex flex-row justify-between w-[570px] max-sm:w-[320px]">
                <img src={props.img1} alt={props.alt} className="h-8 cursor-pointer"/>
                <a href={props.link}>
                <button className=" bg-[#BE1522] hover:bg-[#006dd3] group-hover:bg-[#0E5B96] rounded-full cursor-pointer transition duration-300">
                    <img src="/images/icons/white-arrow.png" alt="Arrow icon" className="h-3 w-3 m-2.5 group-hover:rotate-45  transition-transform duration-300 ease-in-out"/>
                </button>
                </a>
            </div>
            <div className="flex flex-col">
                <h1 className="xl-text-bold mx-5">{props.title}</h1>
                <p className="mt-5 mx-5 medium-text-regular text-[#5C5C5C] max-w-[520px]">{props.text}</p>
            </div>
        </div>
    );
};

export default ServiceCard;