import React from "react";
import {
  Laptop,
  Stethoscope,
  Briefcase,
  Building2,
  Cpu,
  Hammer,
  Plane,
  ShoppingBag,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Laptop size={36} />,
      title: "Information Technology",
      desc: "Top-tier IT professionals for software development, cloud, and AI-driven solutions.",
    },
    {
      icon: <Stethoscope size={36} />,
      title: "Healthcare",
      desc: "Connecting skilled healthcare experts with hospitals, clinics, and research centers.",
    },
    {
      icon: <Briefcase size={36} />,
      title: "Finance & Banking",
      desc: "Reliable staffing for accounting, fintech, and investment management sectors.",
    },
    {
      icon: <Building2 size={36} />,
      title: "Real Estate & Construction",
      desc: "Providing engineers, architects, and project managers for infrastructure projects.",
    },
    {
      icon: <Cpu size={36} />,
      title: "Manufacturing",
      desc: "Efficient workforce solutions for industrial, automotive, and production lines.",
    },
    {
      icon: <Hammer size={36} />,
      title: "Engineering",
      desc: "Specialized talent in civil, mechanical, and electrical engineering disciplines.",
    },
    {
      icon: <Plane size={36} />,
      title: "Aviation & Logistics",
      desc: "Supplying qualified staff for airlines, logistics, and supply chain management.",
    },
    {
      icon: <ShoppingBag size={36} />,
      title: "Retail & E-commerce",
      desc: "Building teams for digital retail, customer support, and sales operations.",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Industries We Serve</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          At <span className="font-semibold text-blue-700">VR Associates</span>, we proudly serve a wide range of industries — helping organizations find the right people to power their success.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-blue-600 mb-4 flex justify-center">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
