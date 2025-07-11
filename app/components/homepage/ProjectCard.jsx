// components/cards/ProjectCard.jsx
'use client';

export default function ProjectCard({ image }) {
  return (
    <div className="relative w-full h-full">
      <img
        src={image}
        alt="Project"
        className="rounded-xl w-full h-auto object-cover"
      />
      <button className="absolute bottom-8 right-10 p-4 bg-white text-white text-sm rounded-full hover:bg-[#e0e0e0] transition max-sm:bottom-11 max-sm:p-2.5 max-sm:right-4">
        <img
          src="/images/icons/black-arrow.png"
          alt="Arrow"
          className="text-black"
        />
      </button>
    </div>
  );
}
