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
      icon: <Laptop size={40} />,
      title: "Information Technology",
      desc: "Top-tier IT professionals for software development, cloud, and AI-driven solutions.",
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Healthcare",
      desc: "Connecting skilled healthcare experts with hospitals, clinics, and research centers.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Finance & Banking",
      desc: "Reliable staffing for accounting, fintech, and investment management sectors.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Real Estate & Construction",
      desc: "Providing engineers, architects, and project managers for infrastructure projects.",
    },
    {
      icon: <Cpu size={40} />,
      title: "Manufacturing",
      desc: "Efficient workforce solutions for industrial, automotive, and production lines.",
    },
    {
      icon: <Hammer size={40} />,
      title: "Engineering",
      desc: "Specialized talent in civil, mechanical, and electrical engineering disciplines.",
    },
    {
      icon: <Plane size={40} />,
      title: "Aviation & Logistics",
      desc: "Supplying qualified staff for airlines, logistics, and supply chain management.",
    },
    {
      icon: <ShoppingBag size={40} />,
      title: "Retail & E-commerce",
      desc: "Building teams for digital retail, customer support, and sales operations.",
    },
  ];

  return (
    <section
      id="industries"
      className="py-16 sm:py-20 bg-linear-to-b from-white via-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* 🟦 Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-500 mb-4 sm:mb-6">
          Industries We Serve
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-base mb-10 sm:mb-12 px-2">
          At{" "}
          <span className="font-semibold text-sky-500">VR Associates</span>, we
          proudly serve a wide range of industries — helping organizations find
          the right people to power their success.
        </p>

        {/* 🟩 Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6 sm:gap-8 
            place-items-center
          "
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-2xl 
                shadow-md 
                p-6 sm:p-8 
                w-full h-full 
                max-w-sm 
                flex flex-col items-center 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition-all 
                duration-300
              "
            >
              <div className="text-cyan-600 mb-4">{industry.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
