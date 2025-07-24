"use client";

import { useEffect, useState } from "react";
import { fetchBlogPosts } from "../../lib/contentful";
import NewsAndEventsCard from "./NewsAndEventsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function NewsAndEvents() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setBlogs(data.slice(0, 4)); // Show 4 most recent
      setLoading(false);
    });
  }, []);

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
        {loading ? (
          <div className="text-center text-gray-400 py-8">
            {loading ? "Loading..." : "No news or events found."}
          </div>
        ) : blogs.length === 0 ? (
          <div>No news or events found.</div>
        ) : (
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
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.id || index}>
                <NewsAndEventsCard
                  img={blog.thumbnail}
                  ht1={blog.category || "Blog"}
                  ht2={blog.date}
                  title={blog.title}
                  slug={blog.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default NewsAndEvents;
