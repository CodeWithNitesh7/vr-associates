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

      // 🕒 Clear status message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Something went wrong. Please try again later.");

      // 🕒 Clear error message too after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        We’d love to hear from you. Let’s start a conversation!
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>

      {/* 💬 Status Message */}
      {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
    </section>
  );
}
