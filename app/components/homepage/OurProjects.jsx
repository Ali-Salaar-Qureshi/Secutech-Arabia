"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
];

export default function OurProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to switch direction
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="py-10 overflow-x-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Nav Buttons + View All Projects */}
{/* Header Section: Title left, Buttons right */}
<div
  className={`w-full mb-6 ${
    isMobile ? "flex-col" : "flex"
  } flex justify-between items-center flex-wrap gap-4`}
>
  {/* Left: Heading + Paragraph */}
  <div className="flex flex-col max-w-[70%]">
    <h1 className="heading-3 text-[#092C4C]">OUR PROJECTS</h1>
    <p className="normal-text-regular text-[#5C5C5C]">
      Proven Transformations with Real Impact
    </p>
  </div>

  {/* Right: Buttons */}
  <div className="flex flex-wrap gap-3 items-center max-sm:hidden" id="custom-buttons">
    <button className="group flex py-[7px] pl-[15px] pr-[15px] rounded-[100px] border-[2px] border-[#0F70B7] hover:border-[#e41e2f11] hover:bg-[#0f71b7da] transition duration-300 hover:text-white items-center">
      <div className="flex flex-row text-center gap-2 items-center">
        <span className="text-[#0F70B7] text-medium-regular group-hover:text-white transition duration-300 font-medium">
          View All Projects
        </span>
        <div className="bg-[#0F70B7] rounded-full p-2">
          <img
            src="/images/icons/white-arrow.png"
            alt="White arrow"
            className="transform group-hover:rotate-45 transition-transform duration-300 ease-in-out w-3"
          />
        </div>
      </div>
    </button>

    <button className="prev p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
      <img src="/images/icons/chevron-left.png" alt="Prev icon" />
    </button>
    <button className="next p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
      <img src="/images/icons/chevron-right.png" alt="Next icon" />
    </button>
  </div>
</div>


        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          direction={isMobile ? "horizontal" : "horizontal"}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          
          spaceBetween={isMobile ? 12 : 20}
          slidesPerView={isMobile ? 1 : 1.5}
          style={{
            height: isMobile ? "250px" : "auto",
          }}
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="rounded-xl w-full h-auto object-cover"
                />
                {/* Bottom-right button */}
                <button className="absolute bottom-8 right-10 p-4 bg-white text-white text-sm rounded-full hover:bg-[#e0e0e0] transition max-sm:bottom-11 max-sm:p-2.5 max-sm:right-4">
                  <img src="/images/icons/black-arrow.png" alt="" className="text-black"/>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Indicators */}
        <div className="flex justify-center mt-4 max-sm:mt-2 gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-[3px] transition-all duration-150 ${
                i === activeIndex ? "w-6 bg-[#BE1522]" : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
