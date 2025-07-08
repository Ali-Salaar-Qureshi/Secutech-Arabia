"use client";

function ContactInfoCard({ bg, text, img, alt, detail }) {
  const isEmail = detail.includes("@");
  const isPhone = /^\+966\s?\d{4}\s?\d{5}$/.test(detail.trim());
  const isAddress = !isEmail && !isPhone;

  const cleanedPhone = detail.replace(/\s/g, "");
  const href = isEmail
    ? `mailto:${detail}`
    : isPhone
    ? `tel:${cleanedPhone}`
    : `https://www.google.com/maps/search/${encodeURIComponent(detail)}`;

  const handleClick = (e) => {
    if (isPhone && !navigator.userAgent.match(/Mobi/)) {
      // Prevent tel: on desktop and copy instead
      e.preventDefault();
      navigator.clipboard.writeText(detail);
      alert("Phone number copied to clipboard!");
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isAddress ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      <div
        className="flex flex-col gap-5 items-center justify-center w-[397px] h-[160px] max-sm:w-[322px] max-sm:h-[286px] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] cursor-pointer"
        style={{ backgroundColor: bg, color: text }}
      >
        <img src={img} className="w-[40px] h-[40px]" alt={alt} />
        <h3 className="normal-text-bold text-center w-75">{detail}</h3>
      </div>
    </a>
  );
}

export default ContactInfoCard;
