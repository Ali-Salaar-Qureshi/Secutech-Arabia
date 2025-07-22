"use client";

import { useState } from "react";

export default function ContactFormEmail() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "solutions",
    selection: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
      selection: "", // Reset dropdown when switching
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({
          name: "",
          email: "",
          category: "solutions",
          selection: "",
          message: "",
        });
      } else {
        setStatus("Failed to send.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col max-sm:w-auto max-sm:px-8 max-sm:items-center">
      <h4 className="heading-4 text-[#092C4C] max-sm:text-center max-sm:w-[90%]">
        Ready to Discuss How We Can <br className="max-sm:hidden" /> Help Your
        Business Grow?
      </h4>
      <p className="large-text-regular text-[#5C5C5C] mt-4 max-sm:text-center">
        Reach out to us
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-4 max-w-xl w-full max-sm:w-[90%]"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block  small-text-bold text-[#092C4C]"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0F70B7] placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block small-text-bold text-[#092C4C]"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0F70B7] placeholder:text-gray-400"
          />
        </div>

        {/* Radios */}
        <div className="mb-1">
          <div className="flex gap-6">
            <label className="flex items-center gap-2 small-text-bold text-[#092C4C]">
              <input
                type="radio"
                name="category"
                value="solutions"
                checked={formData.category === "solutions"}
                onChange={() => handleRadioChange("solutions")}
                className="accent-[#0F70B7] w-[20px] h-[20px]"
              />
              Solutions
            </label>
            <label className="flex items-center gap-2 small-text-bold text-[#092C4C]">
              <input
                type="radio"
                name="category"
                value="services"
                checked={formData.category === "services"}
                onChange={() => handleRadioChange("services")}
                className="accent-[#0F70B7] w-[20px] h-[20px]"
              />
              Services
            </label>
          </div>
        </div>

        {/* Select dropdown */}
<div className="mb-4 relative w-full max-w-[550px]">
  <select
    id="selection"
    name="selection"
    value={formData.selection}
    onChange={handleChange}
    required
    className="appearance-none w-full outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0F70B7] rounded-md mt-2 bg-white px-3.5 py-2 text-base text-gray-900 pr-10"
  >
    <option value="">Select {formData.category}</option>
    {formData.category === "solutions" ? (
      <>
        <option value="Time attendance">Time attendance</option>
        <option value="Fire alarm">Fire alarm</option>
        <option value="Burglar alarm">Burglar alarm</option>
        <option value="Artificial intelligence">Artificial intelligence</option>
        <option value="Networking">Networking</option>
        <option value="Unified hotel works">Unified hotel works</option>
        <option value="Vehicle tracking system">Vehicle tracking system</option>
        <option value="Paid parking solution">Paid parking solution</option>
        <option value="Video conferencing">Video conferencing</option>
        <option value="Wi-Fi access points">Wi-Fi access points</option>
        <option value="P2P wireless link">P2P wireless link</option>
        <option value="EAS antishoplifting system">EAS antishoplifting system</option>
        <option value="Warehouse management system">Warehouse management system</option>
        <option value="Hotel locks">Hotel locks</option>
        <option value="UPS/power backup solution">UPS/power backup solution</option>
      </>
    ) : (
      <>
        <option value="Branding & UI/UX">Branding & UI/UX</option>
        <option value="Ecommerce Solutions">Ecommerce Solutions</option>
        <option value="Product Development">Product Development</option>
        <option value="Digital Marketing">Digital Marketing</option>
      </>
    )}
  </select>

  {/* Custom arrow icon */}
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
    <svg
      className="h-6 w-6 text-[#092C4C] mt-2.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>


        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block small-text-bold text-[#092C4C]"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0F70B7] placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "Sending..."}
          className="w-full max-w-[550px] flex items-center justify-center gap-2 rounded-md bg-[#0F70B7] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0b7fd2] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "Sending..." && (
            <span className="inline-block h-4 w-4 border-[2px] border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>

        {status === "Message sent!" && (
          <p className="mt-4 text-green-600 normal-text-small transition-opacity duration-300">
            {status}
          </p>
        )}
        {status && status !== "Message sent!" && status !== "Sending..." && (
          <p className="mt-4 text-red-600 text-sm">{status}</p>
        )}
      </form>
    </div>
  );
}
