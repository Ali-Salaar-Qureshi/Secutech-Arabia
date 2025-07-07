"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import NewsAndEventsCard from "./NewsAndEventsCard";

const cardData = [
  {
    img: "/images/NewsAndEvents1.png",
    ht1: "Legacy System Modernization",
    ht2: "19 June 2025",
    title: "Top 6 Legacy System Modernization Trends in 2025",
  },
  {
    img: "/images/NewsAndEvents2.png",
    ht1: "Digital Transformation",
    ht2: "20 June 2025",
    title: "11 Most Mind-Blowing Examples of Digital Transformation",
  },
  {
    img: "/images/NewsAndEvents3.png",
    ht1: "Digital Transformation",
    ht2: "22 June 2025",
    title: "The Future of Digital Transformation: 7 Trends to Watch in 2025",
  },
  {
    img: "/images/NewsAndEvents4.png",
    ht1: "Artificial Intelligence",
    ht2: "",
    title: "How Artificial Intelligence (AI) delivers real ROI for your business?",
  },
];

function NewsAndEvents() {
  return (
    <section className="mt-10">
      {/* Header Row with buttons */}
      <div className="flex flex-row justify-center items-center gap-164 max-sm:flex-col max-sm:gap-6 ">
        <h1 className="heading-3 text-[#092C4C]">NEWS & EVENTS</h1>
        <div className="flex gap-3 items-center max-sm:justify-center" id="custom-buttons">
          <button className="prevNewscard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
            <img src="/images/icons/chevron-left.png" alt="prev" />
          </button>
          <button className="nextNewscard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
            <img src="/images/icons/chevron-right.png" alt="next" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto px-4 mt-6 max-sm:px-5">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".nextNewscard",
            prevEl: ".prevNewscard",
          }}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <NewsAndEventsCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewsAndEvents;
