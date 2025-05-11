"use client";
import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { League_Gothic, Inter } from "next/font/google";

// Apply the fonts to the page or component
const leagueGothic = League_Gothic({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [googleSheetData, setGoogleSheetData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  useEffect(() => {
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { firstName, lastName, email, phone } = formData;

    setIsFormValid(
      nameRegex.test(firstName.trim()) &&
        nameRegex.test(lastName.trim()) &&
        emailRegex.test(email.trim()) &&
        phoneRegex.test(phone.trim())
    );
  }, [formData]);

  // Automatically clear the status message after 3 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ message: "Form submitted successfully!", type: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comment: "",
        });
      } else {
        setStatus({
          message: "Failed to submit form. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        message: "An error occurred. Please try again.",
        type: "error",
      });
    }
  };

  // Fetch submitted data
  useEffect(() => {
    const fetchGoogleSheetData = async () => {
      try {
        const response = await fetch("/api/getGoogleSheetData");
        const data = await response.json();
        setGoogleSheetData(data);
      } catch (error) {
        console.error("Error fetching sheet data:", error);
      }
    };

    fetchGoogleSheetData();
    const interval = setInterval(fetchGoogleSheetData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`mt-24 ${inter.className}`}>
      <div className="max-w-3xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <Send className="h-10 w-10 text-[#FF5A00]" />
          </div>
          <p className="text-sm uppercase tracking-wide text-[#FF5A00] mb-2">
            Get In Touch
          </p>
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] mb-4 ${leagueGothic.className} uppercase`}>
            Leave Us Your Info
          </h1>
          <p className="text-orange-600 max-w-xl mx-auto">
            And we will find you
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            name="comment"
            placeholder="Comment"
            rows="5"
            value={formData.comment}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`uppercase tracking-wide font-semibold py-3 px-6 w-full transition-colors duration-300 ${
              isFormValid
                ? "bg-orange-500 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}>
            Send Your Message
          </button>
        </form>

        {/* Status Message */}
        {status.message && (
          <div
            className={`mt-6 text-center py-3 px-4 rounded transition-all font-semibold ${
              status.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}>
            {status.message}
          </div>
        )}
      </div>
      <div className="w-full bg-white py-16">
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl text-[#FF5A00] ${leagueGothic.className}  mb-10 text-center uppercase`}>
          Or Find Us Here
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-none md:rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-[500px]">
            <iframe
              title="Green Vista Resort & Restro Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.1582767651736!2d88.75609771488963!3d26.84283376940614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4de02d536ff6f%3A0x144f3f4b0ea2a2f7!2sGreen%20Vista%20Resort%20%26%20Restro%20Cloudway!5e0!3m2!1sen!2sin!4v1715493814446!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"></iframe>
          </div>
          <div className="bg-orange-600 text-white p-8 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-widest text-orange-400 mb-2">
              Perfect
            </span>
            <h3 className="text-3xl font-serif mb-4">Location</h3>
            <p className="mb-2">Green Vista Resort & Restro</p>
            <p className="mb-2">Cloudway Murti</p>
            <p className="mb-4">Murti, Jalpaiguri, West Bengal, India</p>
            <p className="mb-4">info@greenvistaresort.com</p>
            <p className="mb-6">+91 12345 67890</p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Green+Vista+Resort+%26+Restro+Cloudway"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold px-6 py-3 rounded transition-colors">
              — Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
