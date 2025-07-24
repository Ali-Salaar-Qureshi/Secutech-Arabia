"use client";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

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
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/landing-background.png"
        alt="landing-background"
        className="w-full h-auto object-cover sm:px-[100px] max-sm:px-[15px]"
      />

      {/* OVERLAYED MAIN HEADING */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-10 px-[7vw] pt-[7vw] max-sm:top-0">
        <div className="absolute top-[20%] max-sm:top-[12%] sm:top-[200px] ml-6 max-sm:ml-4">
          <h1 className="text-white font-bold drop-shadow-lg text-2xl sm:text-4xl md:text-5xl leading-tight">
            20 YEARS OF INNOVATION
            <br />
            IN SECURITY &<br />
            <span className="bg-gradient-to-r from-[#1CB5E0] to-[#BE1522] bg-clip-text text-transparent">
              <Typewriter
                words={["DIGITAL SOLUTIONS"]}
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
        <div className="absolute top-[50%]  max-sm:top-[38%] ml-6 max-sm:ml-4 flex flex-row sm:flex-row gap-4 mt-4">
          <a href="/oursoloutions">
            <button className="rounded-full bg-[#BE1522]  border border-[#BE1522] hover:border-[#de3240] text-white font-bold hover:bg-[#de3240] transition duration-300 px-6 py-3 text-sm sm:text-base md:text-lg max-sm:text-[10px] max-sm:px-3 max-sm:py-1.5">
              Browse Our Solutions
            </button>
          </a>
          <a href="/contact">
            <button className="rounded-full border border-white text-white font-bold hover:border-[#BE1522] hover:bg-[#BE1522] transition duration-300 px-6 py-3 text-sm sm:text-base md:text-lg max-sm:text-[10px] max-sm:px-3 max-sm:py-1.5">
              Book Consultation
            </button>
          </a>
        </div>
      </div>

      {/* SLIDER + HEADING */}
<div className="relative z-10 mt-6 sm:absolute sm:bottom-4 sm:left-28 left-4 right-4 sm:w-[80%] max-w-[600px]">
  {/* Gradient — desktop right only */}
  <div className="absolute top-0 right-0 h-full w-[60px] bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none max-sm:hidden" />
  
  <h2 className="text-[#092c4c] font-bold text-base sm:text-lg mb-2 leading-snug z-30">
    Our Technology Partners:
  </h2>

  <Marquee
    speed={60}
    pauseOnHover={false}
    gradient={true}
    gradientColor={[255, 255, 255]}
    gradientWidth={40}
    direction="right"
    className="z-10"
  >
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`img-${index}`}
        className="h-[40px] sm:h-[53px] w-auto mx-2 sm:mx-4 rounded-xl"
      />
    ))}
  </Marquee>
</div>


    </div>
  );
}

export default LandingSection;
