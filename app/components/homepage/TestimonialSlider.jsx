"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TestimonialCard from "./ClientTestimonialCard";

const testimonials = [
  {
    text: "SecuTech Arabia ensured the requirement of safe &amp; secure Public Place for Jeddah Season’s Festival by implementing state of the art Video Surveillance Solution. Delivering such project within short period of time was a challenge which was accepted by SecuTech Arabia. Theyrightly delivered on time!",
    name: "Zein Beyhum",
    role: "CEO, Sidra Event Management",
    logo: "/images/C-logo1.png",
  },
  {
    text: "“SecuTech Arabia implemented their Security Solution based upon the standards set by Jeddah Seasons as well as the King Abdullah Sports City Complex. We proudly partnered with SecuTech Arabia delivering a Safe &amp; Secure Festival Project in Al Johara!",
    name: "Amin Yamani",
    role: "Director - IT, Jeddah Seasons",
    logo: "/images/C-logo2.png",
  },
  {
    text: "SecuTech Arabia played a key role in enhancing the safety and security of the IDB Corporate Headquarters by deploying a state-of-the-art integrated security solution at the entry gates. Despite a demanding timeline, SecuTech Arabia successfully delivered the project with precision, efficiency, and excellence.",
    name: "Hassan Adel",
    role: "Head of Security, Islamic Development Bank",
    logo: "/images/C-logo3.png",
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    // Force start at middle
    swiper.slideTo(1, 0);
    setActiveIndex(1);

    swiper.on("slideChange", () => {
      setActiveIndex(swiper.activeIndex);
    });

    const prevBtn = document.querySelector(".prevClientcard");
    const nextBtn = document.querySelector(".nextClientcard");

    const goPrev = () => {
      if (swiper.activeIndex > 0) swiper.slideTo(swiper.activeIndex - 1);
    };
    const goNext = () => {
      if (swiper.activeIndex < testimonials.length - 1)
        swiper.slideTo(swiper.activeIndex + 1);
    };

    prevBtn?.addEventListener("click", goPrev);
    nextBtn?.addEventListener("click", goNext);

    return () => {
      prevBtn?.removeEventListener("click", goPrev);
      nextBtn?.removeEventListener("click", goNext);
    };
  }, []);

  return (
    <div className="flex max-w-7xl mx-auto mt-12">
      <Swiper
        ref={swiperRef}
        spaceBetween={120}
        centeredSlides
        allowTouchMove={true}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 120,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 130,
          },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide
            key={i}
            className={`
    shrink-0 flex justify-center transition-all duration-500 ease-in-out
    ${i === activeIndex ? "opacity-100 scale-100" : "opacity-40 scale-95"}
  `}
          >
            <div className="w-full max-w-[592px] px-4">
              <TestimonialCard {...t} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
