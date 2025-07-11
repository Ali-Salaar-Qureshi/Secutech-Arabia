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
        Ready to Discuss How We Can <br className="max-sm:hidden" /> Help Your Business Grow?
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
          <label htmlFor="name" className="block  small-text-bold text-[#092C4C]">
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
          <label htmlFor="email" className="block small-text-bold text-[#092C4C]">
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
        <div className="mb-4">
          <select
            id="selection"
            name="selection"
            value={formData.selection}
            onChange={handleChange}
            required
            className="w-full max-w-[550px] outline-1 outline-gray-300 focus:outline-2 focus:outline-[#0F70B7] rounded-md mt-2 bg-white px-3.5 py-2 text-base text-gray-900"
          >
            <option value="">Select {formData.category}</option>
            {formData.category === "solutions" ? (
              <>
                <option value="Solution 1">Solution 1</option>
                <option value="Solution 2">Solution 2</option>
                <option value="Solution 3">Solution 3</option>
                <option value="Solution 4">Solution 4</option>
                <option value="Solution 5">Solution 5</option>
              </>
            ) : (
              <>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
                <option value="Service 3">Service 3</option>
                <option value="Service 4">Service 4</option>
                <option value="Service 5">Service 5</option>
              </>
            )}
          </select>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block small-text-bold text-[#092C4C]">
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
          className="w-full max-w-[550px] rounded-md bg-[#0F70B7] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0b7fd2] transition duration-300"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
}
