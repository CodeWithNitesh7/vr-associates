import React, { useEffect } from "react";
import {
  Briefcase,
  Users,
  Crown,
  Key,
  Megaphone,
  Search,
  Code,
  Cloud,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import axios from "axios";

const services = [
  {
    icon: <Briefcase size={40} />,
    title: "Permanent Staffing",
    desc: "Reliable recruitment solutions for full-time roles, ensuring long-term organizational fit and success.",
    route: "/permanents",
  },
  {
    icon: <Users size={40} />,
    title: "Contract Staffing",
    desc: "Flexible, on-demand workforce solutions to meet urgent project deadlines and fluctuating business needs.",
    route: "/contractsStaff",
  },

  {
    icon: <Megaphone size={40} />,
    title: "Digital Marketing Strategy",
    desc: "Comprehensive PPC, SMM, and content strategies to maximize brand visibility and ROI.",
    route: "/digital-marketing",
  },

  {
    icon: <Code size={40} />,
    title: "Web & App Development",
    desc: "Custom, scalable, and high-performance web/mobile applications built for growth.",
    route: "/web-and-app",
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Solutions & DevOps",
    desc: "Strategic migration, management, and optimization of AWS, Azure, and GCP infrastructures.",
    route: "/cloud",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "InfraStructure and IOT",
    desc: "Protecting digital assets and ensuring flawless performance through rigorous testing.",
    route: "/iot",
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-linear-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Glow Background */}
      <div className="absolute top-0 right-0 h-96 w-[24rem] bg-sky-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg font-semibold uppercase text-sky-600 tracking-wide mb-3">
            Our Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Integrated Solutions for{" "}
            <span className="text-sky-500">Your Success</span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
            Explore our end-to-end staffing, digital, and technology services
            designed to empower your business for the future.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-8 lg:gap-10 xl:gap-14
            place-items-center
          "
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="
                bg-white 
                rounded-3xl 
                p-6 sm:p-8 
                shadow-md 
                hover:shadow-2xl 
                border border-gray-100 
                flex flex-col items-center text-center 
                transition-all duration-300 
                hover:-translate-y-2
              "
            >
              <div className="p-4 mb-5 rounded-full bg-sky-100 text-sky-600 shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-sky-600">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base p-2  leading-relaxed">
                {s.desc}
              </p>
              <button onClick={() => navigate(s.route)} className="bg-sky-500 text-xl rounded-xl px-3 py-1 text-white ">Get More </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="#contact"
            className="
              inline-flex items-center justify-center 
              px-8 sm:px-10 py-3 sm:py-4 
              text-base sm:text-lg font-medium 
              rounded-xl text-white 
              bg-sky-500 hover:bg-sky-600 
              shadow-lg hover:shadow-xl 
              transition-all duration-300 
              hover:scale-105
            "
          >
            Ready to Transform Your Business? Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
