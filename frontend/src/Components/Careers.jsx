// components/Careers.jsx
import React from "react";

export default function Careers() {
  return (
    <section id="careers" className="py-20 bg-gradient-to-r from-indigo-50 via-blue-100 to-blue-50 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Join Our Team</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Explore opportunities to grow with VR Associates and make a difference in the world of staffing and recruitment.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800"
      >
        View Openings
      </a>
    </section>
  );
}
