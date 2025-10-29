// components/Services.jsx
import React from "react";
import { Briefcase, Users, Globe } from "lucide-react";

const services = [
  { icon: <Briefcase size={36} />, title: "Permanent Staffing", desc: "Reliable recruitment solutions for full-time roles." },
  { icon: <Users size={36} />, title: "Contract Staffing", desc: "Flexible workforce solutions to meet project needs." },
  { icon: <Globe size={36} />, title: "Executive Search", desc: "Find the leaders that shape your organization’s future." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-blue-700">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-blue-600 mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
