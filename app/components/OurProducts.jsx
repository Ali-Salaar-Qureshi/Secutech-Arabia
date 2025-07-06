"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "/images/Frame 25.png",
  "/images/Frame 26.png",
  "/images/Frame 27.png",
  "/images/Frame 28.png",
];

export default function OurProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-10 w-full overflow-hidden mb-10">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-6 px-4 max-w-6xl mx-auto">
        <div className="max-sm:text-center max-w-[500px]">
          <h1 className="heading-3 text-[#092C4C] mb-2">OUR PRODUCTS</h1>
          <p className="normal-text-regular text-[#5C5C5C]">
            Explore our growing lineup of intelligent, next-gen products
            designed for advanced security and business efficiency.
          </p>
        </div>
        <button className="py-[10px] h-14 px-[32px] rounded-[100px] bg-[#0E5B96] text-white medium-text-bold hover:bg-[#0970bf] transition duration-300 max-sm:w-full">
          Browse Products
        </button>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto mt-8 px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".nextcard",
            prevEl: ".prevcard",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full">
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="rounded-xl w-full h-auto object-cover max-h-[400px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav Buttons — visible only on mobile (sm:hidden) */}
<div className="flex gap-3 items-center justify-end mt-6 px-2 max-sm:justify-center sm:hidden" id="custom-buttons">
  <button className="prevcard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
    <img src="/images/icons/chevron-left.png" alt="prev" />
  </button>
  <button className="nextcard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
    <img src="/images/icons/chevron-right.png" alt="next" />
  </button>
</div>

      </div>
    </section>
  );
}
