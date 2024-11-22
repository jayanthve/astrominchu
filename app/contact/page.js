"use client";

import React, { useState } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white py-12 px-4">
      <div className="container mx-auto max-w-2xl bg-[#0F1729] rounded-xl shadow-2xl p-8 border border-[#1a2847]">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-white flex items-center justify-center">
            <MessageCircle className="mr-4 text-[#60A5FA]" size={40} />
            Contact Astrominchu
          </h1>
          <p className="text-gray-300">
            AstroMinchu is happy to assist with any questions, concerns, or inquiries you may have
            about us.
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="bg-[#042f2e] border border-[#0d9488] text-emerald-300 p-4 rounded-lg mb-6 flex items-center">
            <CheckCircle2 className="mr-3 text-emerald-500" />
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-[#2c1212] border border-[#991b1b] text-red-300 p-4 rounded-lg mb-6 flex items-center">
            <AlertTriangle className="mr-3 text-red-500" />
            Please fill in the form before submitting.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 text-[#60A5FA]" />
              <label className="text-gray-200">Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 
                ${
                  errors.name
                    ? "border-2 border-red-700 focus:ring-red-600"
                    : "border border-[#2a3c61] focus:ring-[#60A5FA]"
                } placeholder-gray-400`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-[#60A5FA]" />
              <label className="text-gray-200">Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 
                ${
                  errors.email
                    ? "border-2 border-red-700 focus:ring-red-600"
                    : "border border-[#2a3c61] focus:ring-[#60A5FA]"
                } placeholder-gray-400`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="flex items-center mb-2">
              <MessageCircle className="mr-2 text-[#60A5FA]" />
              <label className="text-gray-200">Message</label>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 h-32 resize-none
                ${
                  errors.message
                    ? "border-2 border-red-700 focus:ring-red-600"
                    : "border border-[#2a3c61] focus:ring-[#60A5FA]"
                } placeholder-gray-400`}
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white p-3 rounded-lg transition-colors flex items-center justify-center shadow-lg"
          >
            <Send className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
