"use client";
import ContactInfoCard from "./ContactInfoCard";
import { useState } from "react";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = {
  values: initValues,
  errors: {},
  isLoading: false,
  response: "",
};

function ContactForm() {
  const [state, setState] = useState(initState);
  const { values, errors, isLoading, response } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      errors: { ...prev.errors, [name]: "" },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setState((prev) => ({ ...prev, errors: newErrors }));
      return;
    }

    try {
      setState((prev) => ({ ...prev, isLoading: true }));

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      setState((prev) => ({
        ...initState,
        response: data?.message || "Message sent!",
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        response: "Something went wrong. Try again later.",
      }));
    }
  };

  return (
    <section className="flex flex-col px-4 max-sm:items-center justify-around gap-50 max-sm:gap-10 sm:px-12 lg:px-[100px] my-[100px]">
        <div className="flex flex-row gap-80 max-sm:flex-col max-sm:gap-10">
      <div className="flex flex-col max-sm:w-full max-sm:px-5">
        <h4 className="heading-4 text-[#092C4C] max-sm:text-center">
          Ready to Discuss How We Can <br className="max-sm:hidden" /> Help Your Business Grow?
        </h4>
        <p className="large-text-regular text-[#5C5C5C] mt-4 max-sm:text-center">
          Reach out to us
        </p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-xl w-full ] max-sm:w-full">
          {["name", "email", "message"].map((field) => (
            <div className="mb-6" key={field}>
              <label
                htmlFor={field}
                className="block small-text-bold text-[#092C4C]"
              >
                {field === "message"
                  ? "Message *"
                  : `${field[0].toUpperCase() + field.slice(1)} *`}
              </label>
              {field === "message" ? (
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message..."
                  className={`w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
                    errors.message ? "outline-red-500" : "outline-gray-300"
                  } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0F70B7]`}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={values[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field}`}
                  className={`w-full max-w-[550px] rounded-md mt-2 placeholder:text-[14px] bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 ${
                    errors[field] ? "outline-red-500" : "outline-gray-300"
                  } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0F70B7]`}
                />
              )}
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full max-w-[550px] rounded-md bg-[#0F70B7] px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0b7fd2] transition duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {response && (
            <p className="mt-4 text-sm text-green-600">{response}</p>
          )}
        </form>
      </div>
      <div className="w-[385px] max-sm:h-[385] h-[725px] bg-[#4C5B6B] max-sm:bg-[#eeeeee00]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2206.2250918084683!2d39.22449348680213!3d21.569775103304142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM0JzEzLjMiTiAzOcKwMTMnMzAuNCJF!5e0!3m2!1sen!2s!4v1751961250721!5m2!1sen!2s"
          width="519"
          height="623"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl mx-[-160px] my-10 max-sm:my-5 max-sm:m-0 max-sm:w-100 max-sm:h-100"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <div className="flex flex-row max-sm:flex-col mt-10 gap-10">
        <ContactInfoCard
            bg="#0F70B7"
            text="white"
            img="/images/icons/lg-email-icon.png"
            alt="E-mail Icon"
            detail="info@secutecharabia.com"
            />
            <ContactInfoCard
            bg="white"
            text="#5C5C5C"
            img="/images/icons/lg-phone-icon.png"
            alt="E-mail Icon"
            detail="9200 22503"
            />
            <ContactInfoCard
            bg="white"
            text="#5C5C5C"
            img="/images/icons/lg-location-icon.png"
            alt="E-mail Icon"
            detail={`Sahal Bin Rafae Al Khazragi Street Villa NO. 90 | P.O Box 71288 | Jeddah, KSA `}
            />
      </div>
    </section>
  );
}

export default ContactForm;
