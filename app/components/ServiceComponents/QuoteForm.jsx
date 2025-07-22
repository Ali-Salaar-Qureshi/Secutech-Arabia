"use client";

import { useState } from "react";

const servicesList = ["Branding", "Product Development", "UI/UX"];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    projectDetails: "",
    services: [],
    category: "solutions",
    selection: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
      selection: "", // reset selection on category change
    }));
  };

  const buildRequestBody = (data) => {
    const body = {};

    ["name", "email", "phone", "projectDetails"].forEach((key) => {
      if (data[key]?.trim()) body[key] = data[key].trim();
    });

    if (data.location?.trim()) body.location = data.location.trim();
    if (data.company?.trim()) body.company = data.company.trim();
    if (data.category) body.category = data.category;
    if (data.selection) body.selection = data.selection;

    if (Array.isArray(data.services) && data.services.length > 0) {
      body.services = data.services;
    }

    return body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const requestBody = buildRequestBody(formData);

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          company: "",
          projectDetails: "",
          services: [],
          category: "solutions",
          selection: "",
        });
      } else {
        setStatus("Failed to send.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred.");
    } finally {
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const RequiredLabel = ({ htmlFor, children }) => (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-[#092C4C] mb-1"
    >
      {children} <span className="text-orange-500">*</span>
    </label>
  );

  return (
    <div className="flex justify-center w-full px-4 mb-20">
      <div className="bg-[#F5F5F5] w-full max-w-[1225px] p-6 sm:p-10 rounded-[16px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Title */}
        <div className="text-[#092C4C] heading-3 max-sm:text-center leading-tight">
          READY <br className="max-sm:hidden" /> TO GET{" "}
          <br className="max-sm:hidden" /> STARTED?
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 px-5 text-sm w-[600px] max-sm:mr-8 max-sm:w-[310px]"
        >
          <h2 className="font-semibold large-text-bold text-[#092C4C]">
            Request / Get a Quote:
          </h2>

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <RequiredLabel htmlFor="name">Full Name</RequiredLabel>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 placeholder:text-[#5C5C5C] py-4 bg-white rounded-[12px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <RequiredLabel htmlFor="email">Email</RequiredLabel>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 placeholder:text-[#5C5C5C] py-4 bg-white rounded-[12px]"
              />
            </div>
          </div>

          {/* Phone & Location */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <RequiredLabel htmlFor="phone">Phone Number</RequiredLabel>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 placeholder:text-[#5C5C5C] py-4 bg-white rounded-[12px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <RequiredLabel htmlFor="location">Location</RequiredLabel>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-3 placeholder:text-[#5C5C5C] py-4 bg-white rounded-[12px]"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <RequiredLabel htmlFor="company">Company</RequiredLabel>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-3 placeholder:text-[#5C5C5C] py-4 bg-white rounded-[12px]"
            />
          </div>

          {/* Category + Selection */}
          <div className="space-y-2">
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

            <div className="relative">
              <select
                id="selection"
                name="selection"
                value={formData.selection}
                onChange={handleChange}
                required
                className="appearance-none w-full outline-1 outline-none focus:outline-2 focus:outline-[#0F70B7] rounded-md bg-white px-3.5 py-2 text-base text-gray-900 pr-10"
              >
                <option value="">Select {formData.category}</option>
                {formData.category === "solutions" ? (
                  <>
                    <option value="Time attendance">Time attendance</option>
                    <option value="Fire alarm">Fire alarm</option>
                    <option value="Burglar alarm">Burglar alarm</option>
                    <option value="Artificial intelligence">
                      Artificial intelligence
                    </option>
                    <option value="Networking">Networking</option>
                    <option value="Unified hotel works">
                      Unified hotel works
                    </option>
                    <option value="Vehicle tracking system">
                      Vehicle tracking system
                    </option>
                    <option value="Paid parking solution">
                      Paid parking solution
                    </option>
                    <option value="Video conferencing">
                      Video conferencing
                    </option>
                    <option value="Wi-Fi access points">
                      Wi-Fi access points
                    </option>
                    <option value="P2P wireless link">P2P wireless link</option>
                    <option value="EAS antishoplifting system">
                      EAS antishoplifting system
                    </option>
                    <option value="Warehouse management system">
                      Warehouse management system
                    </option>
                    <option value="Hotel locks">Hotel locks</option>
                    <option value="UPS/power backup solution">
                      UPS/power backup solution
                    </option>
                  </>
                ) : (
                  <>
                    <option value="Branding & UI/UX">Branding & UI/UX</option>
                    <option value="Ecommerce Solutions">
                      Ecommerce Solutions
                    </option>
                    <option value="Product Development">
                      Product Development
                    </option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </>
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  className="h-6 w-6 text-[#092C4C]"
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
          </div>

          {/* Project Details */}
          <div>
            <RequiredLabel htmlFor="projectDetails">Message</RequiredLabel>
            <textarea
              name="projectDetails"
              id="projectDetails"
              placeholder="Enter your message..."
              value={formData.projectDetails}
              onChange={handleChange}
              required
              className="w-full p-3 h-[128px] placeholder:text-[#5C5C5C] py-4 bg-white border-none rounded-[12px]"
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

          {/* Status Messages */}
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
    </div>
  );
}
