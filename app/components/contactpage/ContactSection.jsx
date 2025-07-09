import ContactInfoCard from "./ContactInfoCard";
import ContactFormEmail from "./ContactFormEmail";

function ContactSection() {
  return (
    <section className="flex flex-col px-4 max-sm:items-center justify-around gap-20 max-sm:gap-10 sm:px-12 lg:px-[100px] my-[100px]">
      <div className="flex flex-row gap-80 max-sm:flex-col max-sm:justify-center max-sm:gap-10">
        <ContactFormEmail />
        <div className="w-[385px] max-sm:h-[385] max-sm:mx-10 h-[725px] bg-[#4C5B6B] max-sm:mb-10 max-sm:bg-[#eeeeee00]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3710.40129362073!2d39.225207654907834!3d21.570253539382854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM0JzEzLjMiTiAzOcKwMTMnMzAuNCJF!5e0!3m2!1sen!2s!4v1752040573287!5m2!1sen!2s"
            width="519"
            height="623"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl mx-[-160px] my-10 max-sm:my-5 max-sm:m-0 max-sm:w-100 max-sm:h-100"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-row max-sm:flex-col gap-10">
        <ContactInfoCard
          bg="#0F70B7"
          text="white"
          img="/images/icons/lg-email-icon.png"
          alt="E-mail Icon"
          detail="info@secutecharabia.com"
        />
        <ContactInfoCard
          bg="white"
          text="#5C5C5C"
          img="/images/icons/lg-phone-icon.png"
          alt="Phone icon"
          detail="+966 9200 22503"
        />
        <ContactInfoCard
          bg="white"
          text="#5C5C5C"
          img="/images/icons/lg-location-icon.png"
          alt="Location icon"
          detail={`Sahal Bin Rafae Al Khazragi Street Villa NO. 90 | P.O Box 71288 | Jeddah, KSA `}
        />
      </div>
    </section>
  );
}

export default ContactSection;
