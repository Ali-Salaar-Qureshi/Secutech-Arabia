
function ContactInfoCard(props){
    return(
         <div className={`flex flex-col gap-5 text-${props.text} items-center justify-center w-[397px] h-[160px] max-sm:w-[322px] max-sm:h-[286px] bg-[${props.bg}] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-102 transition duration-300`}>
      <img src={props.img} alt={props.alt} />
      <h3 className="normal-text-bold text-center w-75 text-[5C5C5C]">{props.detail}</h3>
    </div>
    );
};

export default ContactInfoCard