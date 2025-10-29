// components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">We’d love to hear from you. Let’s start a conversation!</p>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="5"></textarea>
        <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800">Send Message</button>
      </form>
    </section>
  );
}
