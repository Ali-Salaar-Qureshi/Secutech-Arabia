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

export default function Homepage() {
  return (
    <main className="flex flex-col justify-center items-center mx-[100px] my-[32px] sm:mx-[60px] max-sm:mx-4 max-sm:my-6">
      <div className="relative w-full">
        {/* Background Image */}
        <img src="/images/landing-background.png" alt="" className="w-full" />

        {/* BUTTONS */}
        <div className="absolute bottom-[130px] sm:bottom-[160px] lg:bottom-[300px] lg:left-15 left-14 flex flex-row gap-3
                        sm:left-10
                        max-sm:bottom-[150px] max-sm:left-4 max-sm:gap-2">
          <button className="h-[52px] w-[203px] rounded-[100px] bg-[#BE1522] text-white medium-text-bold hover:bg-[#de3240] border-[#de3240] transition duration-400 
                            sm:h-[45px] sm:w-[170px] sm:text-sm
                            max-sm:h-[30px] max-sm:w-[120px] max-sm:text-sm">
            <span className="sm:large-text-bold max-sm:text-sm" >Explore Solutions</span>
          </button>
          <button className="h-[52px] w-[198px] border border-white rounded-[100px] medium-text-bold text-white hover:bg-[#BE1522] hover:border-none transition duration-400 
                            sm:h-[45px] sm:w-[170px] sm:text-sm
                            max-sm:h-[30px] max-sm:w-[120px] max-sm:text-sm">
            <span className="sm:arge-text-bold max-sm:text-sm">Request A Demo</span>
          </button>
        </div>

        {/* SLIDER + HEADING */}
        <div className="absolute bottom-[30px]  left-14 w-[80%] max-w-[600px] z-10
                        sm:left-10
                        max-sm:static max-sm:w-full max-sm:mt-2 max-sm:px-2">
          {/* Gradient — desktop right only */}
          <div className="absolute top-0 right-0 h-full w-[60px] z-20 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent max-sm:hidden" />

          {/* Heading */}
          <h1 className="large-text-bold text-[#092c4c] z-30 mb-2 leading-snug break-words
                         sm:text-lg sm:max-w-[90%]
                         max-sm:text-base max-sm:text-left max-sm:pl-2 max-sm:-mt-2 max-sm:w-55">
            Our Technology Partners
          </h1>

          {/* Marquee */}
          <Marquee
            speed={50}
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
                className="h-[58px] w-[144px] mx-4 rounded-xl object-cover 
                           sm:h-[48px] sm:w-[120px]
                           max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-2"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
}
