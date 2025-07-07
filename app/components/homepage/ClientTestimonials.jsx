
import TestimonialSlider from "./TestimonialSlider";
export default function Testimonials() {
  return (
    <section className="mt-20 max-sm:text-center max-sm:mx-5">
      <div className="flex flex-row justify-center items-center gap-100 max-sm:flex-col max-sm:gap-6 ">
        <h1 className="heading-3 text-[#092C4C]">Client’s testimonials</h1>
        <div
          className="flex gap-3 items-center max-sm:justify-center"
          id="custom-buttons"
        >
          <button className="prevClientcard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
            <img src="/images/icons/chevron-left.png" alt="prev" />
          </button>
          <button className="nextClientcard p-2.5 border border-[#092C4C80] rounded-full hover:bg-[#5c5c5c26] transition">
            <img src="/images/icons/chevron-right.png" alt="next" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TestimonialSlider />
      </div>
    </section>
  );
}
