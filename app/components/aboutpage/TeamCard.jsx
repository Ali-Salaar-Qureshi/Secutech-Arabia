// components/TeamCard.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TeamCard({ wideImg, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={wideImg}
        alt={title}
        width={500}
        height={300}
        className="w-auto h-[361px] object-cover transition-all duration-600"
      />

      {/* ✅ TEXT WRAPPER */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pt-3  text-white">
        {/* Title (always visible) */}
        <div className="normal-text-bold">{title}</div>

        {/* ✅ DESCRIPTION (keep original animation) */}
        <motion.div
          initial={false}
          animate={isHovered ? "show" : "hide"}
          variants={{
            show: { opacity: 1, y: 0, height: "auto" },
            hide: { opacity: 0, y: 10, height: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden text-[#EEEEEE] small-text-regular"
        >
          <p>{description}</p>
        </motion.div>
      </div>
    </div>
  );
}
