"use client";

import Marquee from "react-fast-marquee";

const topLogos = [
  "/images/client-slider/client1.png",
  "/images/client-slider/client2.png",
  "/images/client-slider/client3.png",
  "/images/client-slider/client4.png",
  "/images/client-slider/client5.png",
  "/images/client-slider/client6.png",
  "/images/client-slider/client7.png",
  "/images/client-slider/client8.png",
  "/images/client-slider/client9.png",
  "/images/client-slider/client10.png",
];

const bottomLogos = [
  "/images/client-slider/client11.png",
  "/images/client-slider/client12.png",
  "/images/client-slider/client13.png",
  "/images/client-slider/client14.png",
  "/images/client-slider/client15.png",
  "/images/client-slider/client16.png",
  "/images/client-slider/client17.png",
  "/images/client-slider/client18.png",
];

export default function ClientCarousel() {
  return (
    <div className="bg-white py-8 text-center w-full overflow-hidden">
      <h1 className="heading-3 text-[#092C4C] my-8">OUR CLIENTS</h1>

      {/* Top Row */}
      <div className="overflow-hidden w-full">
        <Marquee
          direction="left"
          speed={70}
          gradient={true}
          pauseOnHover={false}
          pauseOnClick={true}
          className="gap-x-1"
        >
          {topLogos.map((src, index) => (
            <div
              key={`top-${index}`}
              className="h-[200px] w-[260px] flex items-center justify-center px-2 max-sm:w-[100px] max-sm:h-[160px]"
            >
              <img
                src={src}
                alt={`client-${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom Row */}
      <Marquee
  direction="right"
  speed={70}
  gradient={true}
  pauseOnHover={false}
  pauseOnClick={true}
  className="!flex !items-center"
>
  {[...bottomLogos, ...bottomLogos].map((src, index) => (
    <div
      key={`bottom-${index}`}
      className="h-[200px] w-[260px] flex items-center justify-center shrink-0 max-sm:w-[100px] max-sm:h-[160px]"
    >
      <img
        src={src}
        alt={`client-${index + 11}`}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
</Marquee>

    </div>
  );
}
