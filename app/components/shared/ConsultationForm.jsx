'use client';

import { useState } from 'react';

const servicesList = ['Branding', 'Product Development', 'UI/UX', 'Digital Marketing'];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    DateAndTime: '',
    services: [],
    projectDetails: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          dateandtime: '',
          services: [],
          projectDetails: '',
        });
      } else {
        setStatus('Failed to send.');
      }
    } catch (err) {
      setStatus('Error occurred.');
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
    <div className="w-full max-w-[550px] h-[600px] mx-auto bg-[#EEEEEE] p-4 sm:p-6 rounded-[12px]">
      <h2 className="mb-4 text-[#092C4C] large-text-bold">
        Request / Get a Quote:
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
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
            <RequiredLabel htmlFor="dateandtime">Date & Time</RequiredLabel>
            <input
              type="text"
              name="dateandtime"
              id="dateandtime"
              placeholder="Enter your desired date and time"
              autoComplete="organization"
              value={formData.dateandtime}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>
          <div>
            <RequiredLabel htmlFor="company">Company</RequiredLabel>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Enter your Orginizations name"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>
          <div>
            <RequiredLabel htmlFor="location">Location</RequiredLabel>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter your Location"
              autoComplete="organization"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 sm:p-3 text-sm bg-white rounded-[8px] placeholder:text-[#5C5C5C]"
            />
          </div>
        </div>

        <div>
          <RequiredLabel htmlFor="services">Services</RequiredLabel>
          <div className="flex flex-wrap gap-2 p-2 sm:p-3 rounded-[8px] bg-white">
            {servicesList.map((service, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleServiceToggle(service)}
                className={`px-3 py-0.5 rounded-full text-xs font-normal sm:text-sm border transition ${
                  formData.services.includes(service)
                    ? 'bg-[#0E5B96] text-white border-[#0E5B96]'
                    : 'bg-[#F0F0F0] text-[#1A1A1A] border-gray-300'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div>
          <RequiredLabel htmlFor="projectDetails">Project Details</RequiredLabel>
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
          className="w-full bg-[#0E5B96] text-white py-2 sm:py-3 rounded-full font-semibold hover:bg-[#1c70b0] transition text-sm sm:text-base"
        >
          Send Consultation
        </button>

        {status && (
          <p className="text-xs text-center text-green-600 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}
