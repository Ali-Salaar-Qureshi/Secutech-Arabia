"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const servicesList = [
  "Branding",
  "Product Development",
  "UI/UX",
  "Digital Marketing",
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: null,
    services: [],
    projectDetails: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (selectedDate) => {
    setFormData((prev) => ({
      ...prev,
      dateTime: selectedDate,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // Trim all string inputs and format the body for sending
  const buildRequestBody = (data) => ({
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    dateTime: data.dateTime ? data.dateTime.toISOString() : null,
    services: data.services,
    projectDetails: data.projectDetails.trim(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const body = buildRequestBody(formData);

      // Optional: basic client-side validation for dateTime
      if (!body.dateTime) {
        setStatus("Please select a date and time.");
        setIsSubmitting(false);
        return;
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          dateTime: null,
          services: [],
          projectDetails: "",
        });
      } else {
        setStatus("Failed to send.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const RequiredLabel = ({ htmlFor, children }) => (
    <label
      htmlFor={htmlFor}
      className="block text-xs sm:text-sm font-medium text-[#092C4C] mb-1"
    >
      {children} <span className="text-orange-500">*</span>
    </label>
  );

  return (
    <div className="w-full max-w-[550px] mx-auto bg-[#EEEEEE] p-4 sm:p-6 rounded-[12px]">
      <h2 className="mb-4 text-[#092C4C] large-text-bold">
        Request / Get a Quote:
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <RequiredLabel htmlFor="name">Full Name</RequiredLabel>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name and surname"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>

          <div>
            <RequiredLabel htmlFor="email">Email</RequiredLabel>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>

          <div>
            <RequiredLabel htmlFor="phone">Phone</RequiredLabel>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>

          <div>
            <RequiredLabel htmlFor="date">Select Date & Time</RequiredLabel>
            <DatePicker
              id="date"
              selected={formData.dateTime}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
              placeholderText="Choose desired date and time"
              className="w-[135%] max-sm:w-[145%] p-2 sm:p-3 text-sm bg-white rounded-[8px] border-none placeholder:text-[#5C5C5C]"
              required
            />
          </div>
        </div>

        <div>
          <RequiredLabel htmlFor="services">Services</RequiredLabel>
          <div
            id="services"
            role="group"
            aria-label="Select services"
            className="flex flex-wrap gap-2 p-2 sm:p-3 rounded-[8px] bg-white"
          >
            {servicesList.map((service, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`px-3 py-0.5 rounded-full text-xs font-normal sm:text-sm border transition ${
                  formData.services.includes(service)
                    ? "bg-[#0E5B96] text-white border-[#0E5B96]"
                    : "bg-[#F0F0F0] text-[#1A1A1A] border-gray-300"
                }`}
                aria-pressed={formData.services.includes(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div>
          <RequiredLabel htmlFor="projectDetails">Message</RequiredLabel>
          <textarea
            name="projectDetails"
            id="projectDetails"
            autoComplete="off"
            placeholder="Type your message here...."
            value={formData.projectDetails}
            onChange={handleChange}
            required
            className="w-full p-2 sm:p-3 h-[90px] sm:h-[110px] text-sm bg-white border-none rounded-[8px] placeholder:text-[#5C5C5C]"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full max-w-[550px] flex items-center justify-center gap-2 rounded-full bg-[#0E5B96] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#1c70b0] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting && (
            <span className="inline-block h-4 w-4 border-[2px] border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {isSubmitting ? "Sending..." : "Send Consultation"}
        </button>

        <p
          aria-live="polite"
          className={`mt-4 text-sm text-center ${
            status === "Message sent!" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      </form>
    </div>
  );
}
