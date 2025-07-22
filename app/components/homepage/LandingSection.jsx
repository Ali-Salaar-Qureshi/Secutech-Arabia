import Image from "next/image";
import Marquee from "react-fast-marquee";
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
    <>
      <div className="relative sm:mx-[10px] max-sm:px-[4%]">
        {/* Background Image */}
        <img
          src="/images/landing-background.png"
          alt="landing-background image"
          className="w-[100%] h-auto max-sm:px-[2%] max-sm:w-[100%] px-[100px] object-cover"
        />

        {/* BUTTONS */}
        <div
          className="absolute flex flex-row gap-4 left-14 bottom-[260px]
             sm:bottom-[200px] sm:left-10
             lg:bottom-[280px] lg:left-36
             max-sm:px-[5%]
             max-sm:bottom-[190px] max-sm:left-3 max-sm:gap-2"
        >
          {/* Explore Solutions */}
          <a href="/oursoloutions">
          <button
            className="rounded-full bg-[#BE1522] text-white font-semibold
               hover:bg-[#de3240] transition duration-300 ease-in-out
               px-6 py-3 text-sm
               sm:px-7 sm:py-3.5 sm:text-base
               md:px-8 md:py-4 md:text-lg
               max-sm:px-4 max-sm:py-2 max-sm:text-xs"
          >
            Browse Our Soloutions
          </button>
          </a>

          {/* Request a Demo */}
          <button
            className="rounded-full border-[1.8px] border-white text-white font-semibold hover:border-[#BE1522]
               hover:bg-[#BE1522] transition duration-300 ease-in-out
               px-6 py-3 text-sm
               sm:px-7 sm:py-3.5 sm:text-base
               md:px-8 md:py-4 md:text-lg
               max-sm:px-4 max-sm:py-2 max-sm:text-xs"
          >
            Book Consultation
          </button>
        </div>

        {/* SLIDER + HEADING */}
        <div
          className="absolute bottom-[10px]   left-14 w-[80%] max-w-[600px] z-10
                        sm:left-28
                        max-sm:static max-sm:w-full max-sm:mt-2 max-sm:px-2"
        >
          {/* Gradient — desktop right only */}
          <div className="absolute top-0 right-0 h-full w-[60px] z-20 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent max-sm:hidden" />

          {/* Heading */}
          <h1
            className="heading-5 text-[#092c4c] z-30 mb-2 leading-snug break-words
                         sm:text-lg sm:max-w-[90%]
                         max-sm:text-base max-sm:text-left max-sm:pl-2 max-sm:-mt-2 max-sm:w-55 py-1"
          >
            Our Technology Partners:
          </h1>

          {/* Marquee */}
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
                className="h-[58px] w-[144px] mx-4 rounded-xl 
                           sm:h-[53px] sm:w-[125px]
                           max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-2"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
