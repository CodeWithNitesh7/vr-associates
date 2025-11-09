import React, { useState } from "react";
import { submitContact } from "../api/contactApi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 📝 Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContact(formData);
      setStatus(response.message);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Something went wrong. Please try again later.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24  bg-linear-to-b from-white via-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-500 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Let’s start a conversation!
          </p>
        </div>

        {/* 🌟 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
        >
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 active:scale-[0.98] transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* 💬 Status Message */}
        {status && (
          <p
            className={`mt-6 text-center font-semibold text-base sm:text-lg ${
              status.includes("wrong") ? "text-red-500" : "text-green-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
