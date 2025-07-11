"use client";

import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
  category: "solutions",
  service: "",
};

const serviceOptions = {
  solutions: ["Solution 1", "Solution 2", "Solution 3", "Solution 4", "Solution 5"],
  services: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"],
};

export default function ContactFormEmail() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setValues((prev) => ({
      ...prev,
      category: value,
      service: "", // reset dropdown on category change
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.message.trim()) newErrors.message = "Message is required";
    if (!values.service) newErrors.service = "Please select a service";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      setValues(initialValues);
      setResponse(data?.message || "Message sent!");
    } catch (err) {
      setResponse("Something went wrong. Try again later.");
    } finally {
      setIsLoading(false);
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
        className="mt-5 max-w-xl w-full max-sm:w-[90%]"
      >
        {/* Name */}
        <FormField
          name="name"
          label="Full Name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />

        {/* Email */}
        <FormField
          name="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />

        {/* Radio Buttons */}
        <div className="mb-[-5px]">
          <div className="flex gap-6">
            {["solutions", "services"].map((option) => (
              <label key={option} className="flex items-center gap-2 small-text-bold cursor-pointer text-[#092C4C]">
                <input
                  type="radio"
                  name="category"
                  value={option}
                  checked={values.category === option}
                  onChange={handleCategoryChange}
                  className="accent-[#0F70B7] h-[20px] w-[20px]"
                />
                {option[0].toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Dropdown */}
        <div className="mb-6">
          <label className="block small-text-bold text-[#092C4C] mb-2">
            Select {values.category}
          </label>
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            className={`w-full max-w-[550px] rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-1 ${
              errors.service ? "outline-red-500" : "outline-gray-300"
            } focus:outline-2 focus:outline-[#0F70B7]`}
          >
            <option value="">Select {values.category}</option>
            {serviceOptions[values.category].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 small-text-bold">{errors.service}</p>
          )}
        </div>

        {/* Message */}
        <FormField
          name="message"
          label="Message"
          type="textarea"
          value={values.message}
          error={errors.message}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full max-w-[550px] rounded-md bg-[#0F70B7] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0b7fd2] transition duration-300"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {/* Response Message */}
        {response && <p className="mt-4 text-sm text-gray-600">{response}</p>}
      </form>
    </div>
  );
}

function FormField({
  name,
  label,
  type = "text",
  value,
  error,
  onChange,
}) {
  const inputClass = `w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
    error ? "outline-red-500" : "outline-gray-300"
  } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0F70B7]`;

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block small-text-bold text-[#092C4C]">
        {label} *
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows="4"
          placeholder={`Write your ${label.toLowerCase()}...`}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
