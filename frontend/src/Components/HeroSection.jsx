// components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/OIP.pmL3kcidSRcLzjzGaf4WtQHaE8?rs=1&pid=ImgDetMain')",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative flex-1 text-center md:text-left space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fadeIn">
          Empowering Businesses <br />
          <span className="text-yellow-300">with Talent</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-blue-100 animate-fadeIn delay-200">
          At <span className="font-semibold text-white">VR Associates</span>, we connect top talent with leading companies, driving growth and innovation together.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4 animate-fadeIn delay-400">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-blue-700 transition-all"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="relative flex-1 mb-12 md:mb-0 md:ml-12">
        <img
          src="https://th.bing.com/th/id/OIP.tHg6movlTsd7TFPwdEG6DwAAAA?w=375&h=141&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt="Hero Illustration"
          className="w-full max-w-md mx-auto animate-fadeInUp"
        />
      </div>
    </section>
  );
}
