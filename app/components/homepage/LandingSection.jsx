"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter';

const images = [
  "/images/landing-slider/Frame 1.png",
  "/images/landing-slider/Frame 2.png",
  "/images/landing-slider/Frame 3.png",
  "/images/landing-slider/Frame 4.png",
  "/images/landing-slider/Frame 5.png",
  "/images/landing-slider/Frame 6.png",
  "/images/landing-slider/Frame 7.png",
  "/images/landing-slider/Frame 8.png",
  "/images/landing-slider/Frame 9.png",
  "/images/landing-slider/Frame 10.png",
  "/images/landing-slider/Frame 11.png",
];

function LandingSection() {
  return (
    <div className="relative sm:mx-[10px] max-sm:px-[4%]">
      {/* Background Image */}
      <img
        src="/images/landing-background.png"
        alt="landing-background image"
        className="w-[100%] h-auto max-sm:px-[2%] max-sm:w-[100%] px-[100px] object-cover"
      />

      {/* OVERLAYED MAIN HEADING */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-[7vw] pt-[7vw] pb-0 z-10">
        <div className="absolute top-[200px] mb-8 mt-4">
          <h1 className="heading-1 text-white drop-shadow-lg">
            20 YEARS OF INNOVATION<br />
            IN SECURITY &<br />
            <span className="bg-gradient-to-r from-[#1CB5E0] to-[#BE1522] bg-clip-text text-transparent">
              <Typewriter
                words={['DIGITAL SOLUTIONS']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        {/* BUTTONS */}
        <div className="flex flex-row gap-4 mt-2">
          <a href="/oursoloutions">
            <button
              className="rounded-full bg-[#BE1522] text-white font-semibold hover:bg-[#de3240] transition duration-300 ease-in-out px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg max-sm:px-4 max-sm:py-2 max-sm:text-xs"
            >
              Browse Our Solutions
            </button>
          </a>
          <a href="/contact">
            <button
              className="rounded-full border-[1.8px] border-white text-white font-semibold hover:border-[#BE1522] hover:bg-[#BE1522] transition duration-300 ease-in-out px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg max-sm:px-4 max-sm:py-2 max-sm:text-xs"
            >
              Book Consultation
            </button>
          </a>
        </div>
      </div>

      {/* SLIDER + HEADING */}
      <div
        className="absolute bottom-[10px] left-14 w-[80%] max-w-[600px] z-10 sm:left-28 max-sm:static max-sm:w-full max-sm:mt-2 max-sm:px-2"
      >
        {/* Gradient — desktop right only */}
        <div className="absolute top-0 right-0 h-full w-[60px] z-20 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent max-sm:hidden" />
        <h1
          className="heading-5 text-[#092c4c] z-30 mb-2 leading-snug break-words sm:text-lg sm:max-w-[90%] max-sm:text-base max-sm:text-left max-sm:pl-2 max-sm:-mt-2 max-sm:w-55 py-1"
        >
          Our Technology Partners:
        </h1>
        <Marquee
          speed={60}
          pauseOnHover={false}
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={40}
          direction="right"
          className="z-10 max-sm:px-2"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`img-${index}`}
              className="h-[58px] w-[144px] mx-4 rounded-xl sm:h-[53px] sm:w-[125px] max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default LandingSection;
