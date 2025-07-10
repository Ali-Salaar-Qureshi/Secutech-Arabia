'use client';

import { useState } from 'react';

const servicesList = ["Branding", "Product Development", "UI/UX"];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    projectDetails: '',
    services: [],
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
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
        setFormData({ name: '', email: '', phone: '', location: '', company: '', projectDetails: '', services: [] });
      } else {
        setStatus('Failed to send.');
      }
    } catch (err) {
      setStatus('Error occurred.');
    }
  };

  const RequiredLabel = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-[#092C4C] mb-1">
      {children} <span className="text-orange-500">*</span>
    </label>
  );

  return (
    <div className="flex justify-center w-full px-4 mb-20">
  <div className="bg-[#F5F5F5] w-full max-w-[1225px] p-6 sm:p-10 rounded-[16px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

      
      {/* Left Title */}
      <div className="text-[#092C4C] heading-3 max-sm:text-center leading-tight">
        READY <br className="max-sm:hidden" /> TO GET <br className="max-sm:hidden" /> STARTED?
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-5 px-5 text-sm w-[600px] max-sm:mr-8 max-sm:w-[310px]">
        <h2 className="font-semibold large-text-bold text-[#092C4C]">Request / Get a Quote:</h2>

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

        {/* Services */}
        <div>
          <RequiredLabel htmlFor="services">Services</RequiredLabel>
          <div className="flex flex-wrap gap-2 p-3 rounded-md bg-white min-h-[44px]">
            {servicesList.map((service, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleServiceToggle(service)}
                className={`px-3 py-1 rounded-full  text-sm transition ${
                  formData.services.includes(service)
                    ? 'bg-[#0E5B96] text-white border-blue-600'
                    : 'bg-[#F0F0F0] text-[#1A1A1A] border-gray-300'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <RequiredLabel htmlFor="message">Message</RequiredLabel>
          <textarea
            name="projectDetails"
            id="projectDetails"
            placeholder="Enter your text"
            value={formData.projectDetails}
            onChange={handleChange}
            required
            className="w-full p-3 h-[128px] placeholder:text-[#5C5C5C] py-4 bg-white border-none rounded-[12px]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#0E5B96] text-white py-3 rounded-full font-semibold hover:bg-[#1c71b1] transition"
        >
          Send
        </button>

        {/* Status Message */}
        {status && <p className="text-xs text-gray-600 mt-1">{status}</p>}
      </form>
    </div>
    </div>
  );
}
