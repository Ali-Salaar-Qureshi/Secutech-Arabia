// components/TestimonialCard.jsx
import Image from "next/image";

export default function TestimonialCard({ text, name, role, logo }) {
  return (
    <div className="bg-[#f9f9f9] h-[332px] p-6 rounded-xl border border-gray-200 shadow-sm w-[582px] max-w-md max-sm:w-79 max-sm:h-100 max-sm:flex-col">
      {/* Quote icon */}
      <div className="flex justify-end">
        <img
          src="/images/2quotes.png"
          alt="Quote icon"
          className="mb-5 w-6 h-6 object-contain"
        />
      </div>

      {/* Testimonial text */}
      <p className="text-[#5C5C5C] text-sm leading-relaxed mb-6">
        {text}
      </p>

      {/* Author section */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[#092C4C] font-semibold text-base my-[15px]">{name}</h4>
          <p className="text-[#5C5C5C] text-sm my-[-15px]">{role}</p>
        </div>

        {logo && (
          <div className="relative w-[57px] h-[78px] my-[-25px]">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
